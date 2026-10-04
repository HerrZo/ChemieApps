// Qualitative Analyse – Zustandsverwaltung & Baum-Berechnungen
(function () {
  const STORAGE_KEY = "qa_analyse_state_v1";

  // Cache für erreichbare Ionen je Knoten
  const reachabilityCache = {};

  /**
   * Berechnet alle Ionen, die von einem gegebenen Knoten aus noch erreicht werden können.
   */
  function getReachableIons(mode, nodeId) {
    const cacheKey = `${mode}:${nodeId}`;
    if (reachabilityCache[cacheKey]) return reachabilityCache[cacheKey];

    const tree = window.APP_DATA && window.APP_DATA.schluessel && window.APP_DATA.schluessel[mode];
    if (!tree || !tree.knoten[nodeId]) return [];

    const ions = new Set();
    const visited = new Set();

    function collect(currId) {
      if (visited.has(currId)) return;
      visited.add(currId);
      const n = tree.knoten[currId];
      if (!n) return;

      if (n.typ === "ergebnis" && n.ion) {
        ions.add(n.ion);
      } else if (n.typ === "frage" && Array.isArray(n.optionen)) {
        for (const opt of n.optionen) {
          if (opt.next) collect(opt.next);
        }
      }
    }

    collect(nodeId);
    const result = Array.from(ions);
    reachabilityCache[cacheKey] = result;
    return result;
  }

  function getInitialState(mode = "kationen") {
    const startNode = window.APP_DATA && window.APP_DATA.schluessel && window.APP_DATA.schluessel[mode]
      ? window.APP_DATA.schluessel[mode].start
      : null;

    const today = new Date().toISOString().split("T")[0];

    return {
      mode: mode,
      currentNodeId: startNode,
      history: [], // Array von { nodeId, optionIndex, chosenText, subtext }
      protokollMeta: {
        bearbeiter: "",
        datum: today,
        probenNummer: "",
        notizen: ""
      }
    };
  }

  class StateManager {
    constructor() {
      this.state = this.loadState();
      this.listeners = [];
    }

    subscribe(fn) {
      this.listeners.push(fn);
    }

    notify() {
      for (const fn of this.listeners) {
        fn(this.state);
      }
    }

    loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && parsed.mode && parsed.currentNodeId) {
            return parsed;
          }
        }
      } catch (e) {
        console.warn("Konnte gespeicherten Zustand nicht laden:", e);
      }
      return getInitialState("kationen");
    }

    saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      } catch (e) {
        console.warn("Konnte Zustand nicht in localStorage speichern:", e);
      }
      this.notify();
    }

    setMode(mode) {
      if (this.state.mode === mode) return;
      this.state = getInitialState(mode);
      this.saveState();
    }

    getCurrentNode() {
      const tree = window.APP_DATA.schluessel[this.state.mode];
      return tree ? tree.knoten[this.state.currentNodeId] : null;
    }

    chooseOption(optionIndex) {
      const node = this.getCurrentNode();
      if (!node || node.typ !== "frage" || !node.optionen[optionIndex]) return;

      const opt = node.optionen[optionIndex];
      this.state.history.push({
        nodeId: node.id,
        optionIndex: optionIndex,
        chosenText: opt.text,
        subtext: opt.subtext || ""
      });

      this.state.currentNodeId = opt.next;
      this.saveState();
    }

    stepBack() {
      if (this.state.history.length === 0) return;
      const prev = this.state.history.pop();
      this.state.currentNodeId = prev.nodeId;
      this.saveState();
    }

    jumpToStep(historyIndex) {
      if (historyIndex < 0 || historyIndex >= this.state.history.length) return;
      const target = this.state.history[historyIndex];
      this.state.history = this.state.history.slice(0, historyIndex);
      this.state.currentNodeId = target.nodeId;
      this.saveState();
    }

    resetCurrentTree() {
      this.state = getInitialState(this.state.mode);
      this.saveState();
    }

    updateProtokollMeta(key, value) {
      if (!this.state.protokollMeta) this.state.protokollMeta = {};
      this.state.protokollMeta[key] = value;
      this.saveState();
    }

    getReachableIonsForCurrent() {
      return getReachableIons(this.state.mode, this.state.currentNodeId);
    }

    getReachableIonsForNode(nodeId) {
      return getReachableIons(this.state.mode, nodeId);
    }
  }

  window.AppState = new StateManager();
  window.getReachableIons = getReachableIons;
})();
