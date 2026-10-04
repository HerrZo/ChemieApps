// Qualitative Analyse – Anwendungslogik & UI-Rendering
(function () {
  const { APP_DATA, AppState, formatFormula } = window;

  // DOM-Elemente
  const elMain = document.getElementById("main-content");
  const elSidebar = document.getElementById("tree-sidebar");
  const elSidebarBody = document.getElementById("sidebar-body");
  const elSidebarToggle = document.getElementById("sidebar-toggle-btn");
  const elSidebarOpen = document.getElementById("sidebar-open-btn");
  const elTreeExpandAll = document.getElementById("tree-expand-all");
  const elTreeCollapseAll = document.getElementById("tree-collapse-all");
  const elLightbox = document.getElementById("lightbox-modal");
  const elLightboxImg = document.getElementById("lightbox-img");
  const elLightboxCaption = document.getElementById("lightbox-caption");
  const elLightboxClose = document.getElementById("lightbox-close");
  const elMobileBar = document.getElementById("mobile-progress-bar");
  const elMobileSummary = document.getElementById("mobile-step-summary");
  const elMobileTreeBtn = document.getElementById("mobile-tree-toggle");

  // Routing-Zustand
  let currentRoute = "#/";
  let catalogSearch = "";
  let catalogFilter = "all";
  let activeDetailModalId = null;

  // Sidebar-Status
  let sidebarCollapsed = false;
  let treeBranchesCollapsed = {}; // nodeId -> boolean

  // --- Initialisierung ---
  function init() {
    window.addEventListener("hashchange", handleHashChange);
    AppState.subscribe(() => {
      render();
    });

    // Sidebar Toggles
    if (elSidebarToggle) {
      elSidebarToggle.addEventListener("click", () => {
        sidebarCollapsed = !sidebarCollapsed;
        elSidebar.classList.toggle("collapsed", sidebarCollapsed);
        elSidebarOpen.classList.toggle("visible", sidebarCollapsed);
      });
    }
    if (elSidebarOpen) {
      elSidebarOpen.addEventListener("click", () => {
        sidebarCollapsed = false;
        elSidebar.classList.remove("collapsed");
        elSidebarOpen.classList.remove("visible");
      });
    }
    if (elMobileTreeBtn) {
      elMobileTreeBtn.addEventListener("click", () => {
        elSidebar.classList.toggle("mobile-open");
      });
    }

    // Baum alles auf/zuklappen
    if (elTreeExpandAll) {
      elTreeExpandAll.addEventListener("click", () => {
        treeBranchesCollapsed = {};
        renderSidebarTree();
      });
    }
    if (elTreeCollapseAll) {
      elTreeCollapseAll.addEventListener("click", () => {
        const tree = APP_DATA.schluessel[AppState.state.mode];
        if (tree) {
          for (const k of Object.keys(tree.knoten)) {
            treeBranchesCollapsed[k] = true;
          }
        }
        renderSidebarTree();
      });
    }

    // Lightbox Schließen
    if (elLightboxClose) {
      elLightboxClose.addEventListener("click", closeLightbox);
    }
    if (elLightbox) {
      elLightbox.addEventListener("click", (e) => {
        if (e.target === elLightbox) closeLightbox();
      });
    }

    // Tastatur-Navigation
    window.addEventListener("keydown", handleKeyDown);

    handleHashChange();
  }

  function handleHashChange() {
    currentRoute = window.location.hash || "#/";
    updateNavTabs();

    if (currentRoute === "#/kationen") {
      if (AppState.state.mode !== "kationen") AppState.setMode("kationen");
    } else if (currentRoute === "#/anionen") {
      if (AppState.state.mode !== "anionen") AppState.setMode("anionen");
    }

    // Mobil-Sidebar bei Routenwechsel schließen
    if (elSidebar) elSidebar.classList.remove("mobile-open");

    render();
  }

  function updateNavTabs() {
    document.querySelectorAll(".nav-tab").forEach(tab => {
      const href = tab.getAttribute("href");
      const isMatch = href === currentRoute || 
        (href === "#/katalog" && currentRoute.startsWith("#/katalog"));
      tab.classList.toggle("active", isMatch);
    });
  }

  // Tastaturbedienung
  function handleKeyDown(e) {
    if (e.key === "Escape") {
      if (elLightbox && elLightbox.classList.contains("active")) {
        closeLightbox();
        return;
      }
      if (activeDetailModalId) {
        closeDetailModal();
        return;
      }
    }

    // Nur im aktiven Schlüssel-Modus
    if (currentRoute === "#/kationen" || currentRoute === "#/anionen") {
      const node = AppState.getCurrentNode();
      if (node && node.typ === "frage") {
        const num = parseInt(e.key, 10);
        if (!isNaN(num) && num >= 1 && num <= node.optionen.length) {
          AppState.chooseOption(num - 1);
          return;
        }
        if (e.key === "ArrowLeft" && AppState.state.history.length > 0) {
          AppState.stepBack();
          return;
        }
      }
    }
  }

  // Lightbox
  window.openLightbox = function (src, caption) {
    if (!elLightbox || !elLightboxImg) return;
    elLightboxImg.src = "assets/img/" + src;
    elLightboxCaption.innerHTML = caption || "";
    elLightbox.classList.add("active");
  };

  function closeLightbox() {
    if (elLightbox) elLightbox.classList.remove("active");
  }

  // --- Haupt-Render-Methode ---
  function render() {
    if (currentRoute === "#/" || currentRoute === "") {
      if (elSidebar) elSidebar.style.display = "none";
      if (elSidebarOpen) elSidebarOpen.style.display = "none";
      if (elMobileBar) elMobileBar.style.display = "none";
      renderHome();
    } else if (currentRoute === "#/kationen" || currentRoute === "#/anionen") {
      if (elSidebar) elSidebar.style.display = "flex";
      if (elMobileBar) elMobileBar.style.display = "flex";
      renderStepView();
      renderSidebarTree();
    } else if (currentRoute.startsWith("#/katalog")) {
      if (elSidebar) elSidebar.style.display = "none";
      if (elSidebarOpen) elSidebarOpen.style.display = "none";
      if (elMobileBar) elMobileBar.style.display = "none";
      renderCatalog();
    } else if (currentRoute === "#/protokoll") {
      if (elSidebar) elSidebar.style.display = "none";
      if (elSidebarOpen) elSidebarOpen.style.display = "none";
      if (elMobileBar) elMobileBar.style.display = "none";
      renderProtocol();
    }
  }

  // --- Startseite ---
  function renderHome() {
    elMain.innerHTML = `
      <div class="content-container">
        <div class="hero-card">
          <div class="hero-tag">Qualitative Anorganische Analyse</div>
          <h1 class="hero-title">Bestimmungsschlüssel für Ionen</h1>
          <p class="hero-lead">
            Identifizieren Sie unbekannte Kationen und Anionen systematisch, Schritt für Schritt, anhand verifizierter Vorproben, Fällungsreaktionen und dokumentierter Originalfotografien.
          </p>
          <div class="info-banner">
            <strong>Analytischer Rahmen:</strong> Dieser Schlüssel ist für reine Einzelsalze (ein Kation und ein Anion) konzipiert. Die Entscheidungswege basieren auf 48 verifizierten Nachweisen des Labor-Kompendiums.
          </div>

          <div class="mode-selector-grid">
            <a href="#/kationen" class="mode-card">
              <span class="mode-card-badge">Kationen (15)</span>
              <h2 class="mode-card-title">Kationen-Analyse</h2>
              <p class="mode-card-desc">
                Systematischer Trennungs- und Ausschlussgang von der Ammonium-Vorprobe über Flammenfärbung und Phosphorsalzperle bis zu spezifischen Fällungsreaktionen.
              </p>
              <div class="mode-card-meta">
                Starten mit NH₄⁺-Vorprobe →
              </div>
            </a>

            <a href="#/anionen" class="mode-card">
              <span class="mode-card-badge">Anionen (10)</span>
              <h2 class="mode-card-title">Anionen-Analyse</h2>
              <p class="mode-card-desc">
                Vorproben mit Salzsäure (CO₂-Aufschäumen, H₂S-Bildung), Gruppenfällung mit Silbernitrat sowie Ring-, Ätz- und Bleitiegelprobe.
              </p>
              <div class="mode-card-meta">
                Starten mit Säure-Vorprobe →
              </div>
            </a>
          </div>

          <div style="display: flex; gap: 1rem; align-items: center; border-top: 1px solid var(--rule); padding-top: 1.5rem;">
            <a href="#/katalog" class="action-btn">
              📚 Nachweis-Katalog durchsuchen (${Object.keys(APP_DATA.nachweise).length} Reaktionen)
            </a>
            ${AppState.state.history.length > 0 ? `
              <a href="#/${AppState.state.mode}" class="action-btn primary">
                Fortsetzen (${AppState.state.mode === "kationen" ? "Kationen" : "Anionen"}, Schritt ${AppState.state.history.length + 1}) →
              </a>
            ` : ""}
          </div>
        </div>
      </div>
    `;
  }

  // --- Schritt-Ansicht (Bestimmungsschlüssel) ---
  function renderStepView() {
    const node = AppState.getCurrentNode();
    if (!node) {
      elMain.innerHTML = `<div class="content-container"><p>Knoten nicht gefunden.</p></div>`;
      return;
    }

    // Mobil-Leiste aktualisieren
    if (elMobileSummary) {
      const modeName = AppState.state.mode === "kationen" ? "Kation" : "Anion";
      const stepNum = AppState.state.history.length + 1;
      elMobileSummary.innerHTML = `<strong>${modeName} · Schritt ${stepNum}</strong>: ${node.titel}`;
    }

    if (node.typ === "ergebnis") {
      renderResultView(node);
      return;
    }

    if (node.typ === "unbekannt") {
      renderUnknownView(node);
      return;
    }

    // Normale Frage
    const nachweis = node.nachweis ? APP_DATA.nachweise[node.nachweis] : null;
    const possibleIons = AppState.getReachableIonsForCurrent();
    const stepNumber = AppState.state.history.length + 1;

    // Fotogalerie sammeln
    let photosHtml = "";
    const allPhotos = [];
    if (node.spezialBild) {
      allPhotos.push(node.spezialBild);
    }
    if (nachweis && Array.isArray(nachweis.bilder)) {
      allPhotos.push(...nachweis.bilder);
    }

    if (allPhotos.length > 0) {
      photosHtml = `
        <div class="gallery-container">
          ${allPhotos.map((p, idx) => `
            <div class="photo-card">
              <div class="photo-img-wrap" onclick="openLightbox('${p.src}', '${p.label || ""}')" title="Klicken zum Vergrößern">
                <img src="assets/img/${p.src}" alt="${p.label || "Reaktionsfoto"}" class="photo-img" loading="lazy">
                <span class="photo-badge">🔍 Vergrößern</span>
              </div>
              <div class="photo-caption">${p.label || "Reaktionsbefund"}</div>
            </div>
          `).join("")}
        </div>
      `;
    }

    // Mögliche Ionen Chips
    const possibleChipsHtml = possibleIons.map(id => {
      const ion = APP_DATA.ionen[id];
      return `<span class="ion-chip">${formatFormula(ion ? ion.formel : id)}<span class="ion-chip-name">${ion ? ion.name : ""}</span></span>`;
    }).join("");

    // Durchführung
    let procedureHtml = "";
    if (nachweis && nachweis.durchfuehrung) {
      procedureHtml = `
        <div class="procedure-box">
          <span class="section-label">Durchführung im Labor</span>
          <ol class="procedure-list">
            ${nachweis.durchfuehrung.map(step => `<li>${step}</li>`).join("")}
          </ol>
        </div>
      `;
    }

    // Sicherheitswarnung
    let safetyHtml = "";
    if (nachweis && nachweis.sicherheit) {
      safetyHtml = `
        <div class="safety-alert">
          <span class="safety-alert-icon">⚠️</span>
          <div><strong>Sicherheitshinweis:</strong> ${nachweis.sicherheit}</div>
        </div>
      `;
    }

    // Vertiefung / Details
    let detailsHtml = "";
    if (nachweis) {
      const eqHtml = (nachweis.gleichung && nachweis.gleichung.length > 0)
        ? nachweis.gleichung.map(g => `<div class="equation-block">${formatFormula(g)}</div>`).join("")
        : `<em>Keine Reaktionsgleichung hinterlegt.</em>`;

      const stoerHtml = (nachweis.stoerungen && nachweis.stoerungen.length > 0)
        ? nachweis.stoerungen.map(s => `<li>${s}</li>`).join("")
        : `<em>Keine spezifischen Störungen dokumentiert.</em>`;

      detailsHtml = `
        <details class="details-accordion">
          <summary class="accordion-summary">
            <span>🔬 Wissenschaftliche Vertiefung (Reaktionsgleichung & Störungen)</span>
            <span>▾</span>
          </summary>
          <div class="accordion-content">
            <h4 style="font-size: 0.85rem; font-weight: 600; margin-bottom: 0.4rem;">Reaktionsgleichung:</h4>
            ${eqHtml}
            <h4 style="font-size: 0.85rem; font-weight: 600; margin: 0.75rem 0 0.35rem;">Mögliche Störreaktionen:</h4>
            <ul style="padding-left: 1.25rem;">${stoerHtml}</ul>
            <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--ink-muted);">
              Nachweis-Referenz: <strong>${nachweis.id}</strong> · ${nachweis.titel}
            </div>
          </div>
        </details>
      `;
    }

    elMain.innerHTML = `
      <div class="content-container">
        <div class="step-card">
          <div class="step-meta-bar">
            <span class="step-badge">Schritt ${stepNumber} · ${AppState.state.mode === "kationen" ? "Kationen-Analyse" : "Anionen-Analyse"}</span>
            <span class="step-history-count">${AppState.state.history.length} Entscheidungen getroffen</span>
          </div>

          <h1 class="step-title">${node.titel}</h1>
          <div class="step-subtitle">${node.untertitel || ""}</div>

          <div class="possible-ions-section">
            <span class="possible-ions-label">Noch möglich (${possibleIons.length}):</span>
            ${possibleChipsHtml}
          </div>

          ${procedureHtml}
          ${safetyHtml}
          ${photosHtml}

          <div class="question-box">
            <h2 class="question-heading">${node.frage}</h2>
            <div class="options-list">
              ${node.optionen.map((opt, idx) => `
                <button class="option-btn" onclick="AppState.chooseOption(${idx})">
                  <span class="option-radio"></span>
                  <div class="option-content">
                    <div class="option-text">${opt.text}</div>
                    ${opt.subtext ? `<div class="option-subtext">${opt.subtext}</div>` : ""}
                  </div>
                  <span class="option-key">${idx + 1}</span>
                </button>
              `).join("")}
            </div>
          </div>

          ${detailsHtml}

          <div class="step-actions-bar">
            ${AppState.state.history.length > 0 ? `
              <button class="action-btn" onclick="AppState.stepBack()">
                ← Vorheriger Schritt (Taste ←)
              </button>
            ` : `<span></span>`}

            <button class="action-btn" onclick="if(confirm('Möchten Sie den aktuellen Analyseweg wirklich zurücksetzen?')) AppState.resetCurrentTree();">
              ↺ Neu beginnen
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // --- Ergebnis-Ansicht ---
  function renderResultView(node) {
    const ion = APP_DATA.ionen[node.ion] || { name: node.ion, formel: node.ion };
    const history = AppState.state.history;
    const confirmations = Array.isArray(node.bestaetigung)
      ? node.bestaetigung.map(id => APP_DATA.nachweise[id]).filter(Boolean)
      : [];

    elMain.innerHTML = `
      <div class="content-container">
        <div class="result-card">
          <span class="result-header-tag">✓ Analyse erfolgreich abgeschlossen</span>
          <div class="result-ion-display">${formatFormula(ion.formel)}</div>
          <div class="result-ion-name">${ion.name} (${ion.art === "kation" ? "Kation" : "Anion"}, Gruppe ${ion.gruppe})</div>
          
          <p class="result-summary-text">
            ${node.fazit || "Das Ion wurde durch den Ausschlussgang eindeutig bestimmt."}
          </p>

          <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 2rem;">
            <a href="#/protokoll" class="action-btn primary" style="padding: 0.65rem 1.25rem; font-size: 0.95rem;">
              📋 Laborprotokoll erstellen & drucken
            </a>
            <button class="action-btn" onclick="AppState.resetCurrentTree();">
              ↺ Neue Probe analysieren
            </button>
          </div>

          <!-- Rekonstruierter Weg -->
          <div class="path-timeline">
            <h3 style="font-family: var(--font-serif); font-size: 1.15rem; margin-bottom: 1.25rem;">
              Dokumentierter Entscheidungspfad (${history.length} Schritte):
            </h3>
            ${history.map((h, i) => {
              const tree = APP_DATA.schluessel[AppState.state.mode];
              const qNode = tree ? tree.knoten[h.nodeId] : null;
              return `
                <div class="timeline-step">
                  <div class="timeline-step-num">${i + 1}</div>
                  <div class="timeline-step-content">
                    <div class="timeline-step-title">${qNode ? qNode.titel : h.nodeId}</div>
                    <div class="timeline-step-choice">✓ Gewählt: <em>${h.chosenText}</em></div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>

          <!-- Bestätigungsnachweise -->
          ${confirmations.length > 0 ? `
            <div class="confirmations-box">
              <h3 style="font-family: var(--font-serif); font-size: 1.15rem; margin-bottom: 0.5rem;">
                Empfohlene Bestätigungsnachweise im Labor:
              </h3>
              <p style="font-size: 0.85rem; color: var(--ink-secondary); margin-bottom: 1rem;">
                Zur Absicherung des Ergebnisses können folgende Einzelreaktionen aus dem Datensatz durchgeführt werden:
              </p>
              <div class="confirm-grid">
                ${confirmations.map(c => `
                  <div class="confirm-card">
                    <div class="confirm-card-title">${c.titel} (${c.id})</div>
                    <div class="confirm-card-obs"><strong>Befund:</strong> ${c.beobachtung}</div>
                    ${c.gleichung && c.gleichung.length > 0 ? `
                      <div class="equation-block" style="font-size: 0.75rem;">${formatFormula(c.gleichung[0])}</div>
                    ` : ""}
                    ${c.bilder && c.bilder.length > 0 ? `
                      <div style="margin-top: 0.5rem;">
                        <button class="action-btn" style="font-size: 0.75rem;" onclick="openLightbox('${c.bilder[0].src}', '${c.titel}')">
                          📷 Befundbild ansehen
                        </button>
                      </div>
                    ` : ""}
                  </div>
                `).join("")}
              </div>
            </div>
          ` : ""}

          <div style="border-top: 1px solid var(--rule); padding-top: 1.5rem; display: flex; justify-content: space-between;">
            <button class="action-btn" onclick="AppState.stepBack()">
              ← Schritt zurück
            </button>
            <a href="#/katalog" class="action-btn">
              📚 Zum Nachweis-Katalog
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // --- Unbekannt-Ansicht ---
  function renderUnknownView(node) {
    elMain.innerHTML = `
      <div class="content-container">
        <div class="result-card">
          <span class="result-header-tag" style="background-color: var(--warn-bg); color: var(--warn-ink); border-color: var(--warn-border);">
            Keine Übereinstimmung
          </span>
          <div class="result-ion-display" style="font-size: 2.5rem; margin: 1rem 0;">?</div>
          <h2 class="result-ion-name">Ion nicht im Datensatz oder abweichender Befund</h2>
          <p class="result-summary-text">
            ${node.fazit}
          </p>

          <div style="display: flex; justify-content: center; gap: 1rem; margin: 2rem 0;">
            <button class="action-btn primary" onclick="AppState.stepBack()">
              ← Einen Schritt zurückgehen
            </button>
            <button class="action-btn" onclick="AppState.resetCurrentTree();">
              ↺ Von Beginn an wiederholen
            </button>
          </div>

          <div style="text-align: left; background-color: var(--surface-alt); padding: 1.25rem; border-radius: var(--radius-md); font-size: 0.85rem;">
            <strong>Hinweis zum Praktikum:</strong>
            <p style="margin-top: 0.35rem; color: var(--ink-secondary);">
              Prüfen Sie, ob Sie bei Vorproben (wie Flammenfärbung oder Perle) Spuren von Natrium oder unsaubere Magnesiastäbchen hatten. Wiederholen Sie im Zweifel den letzten Teilschritt mit einer frischen Urprobe.
            </p>
          </div>
        </div>
      </div>
    `;
  }

  // --- Seitenleiste: Baumdiagramm ---
  function renderSidebarTree() {
    if (!elSidebarBody) return;
    const mode = AppState.state.mode;
    const tree = APP_DATA.schluessel[mode];
    if (!tree) return;

    const currentId = AppState.state.currentNodeId;
    const historyNodeIds = AppState.state.history.map(h => h.nodeId);

    // Rekursive Baumdarstellung aufbauen
    function buildNodeHtml(nodeId) {
      const node = tree.knoten[nodeId];
      if (!node) return "";

      const isCurrent = nodeId === currentId;
      const isPast = historyNodeIds.includes(nodeId);
      const pastIndex = historyNodeIds.indexOf(nodeId);
      const isCollapsed = treeBranchesCollapsed[nodeId] === true;

      // Hat Kinder?
      const hasChildren = node.typ === "frage" && Array.isArray(node.optionen) && node.optionen.length > 0;

      let itemClass = "tree-item";
      if (isCurrent) itemClass += " current";
      else if (isPast) itemClass += " completed";

      // Klick-Aktion: Wenn bereits besucht, dorthin springen
      let clickAttr = "";
      if (isPast) {
        clickAttr = `onclick="AppState.jumpToStep(${pastIndex})" title="Zu diesem Schritt zurückspringen"`;
      } else if (isCurrent) {
        clickAttr = `title="Aktueller Schritt"`;
      }

      const reachableIons = AppState.getReachableIonsForNode(nodeId);
      const ionSummary = reachableIons.slice(0, 4).map(i => {
        const ion = APP_DATA.ionen[i];
        return ion ? ion.formel : i;
      }).join(" ") + (reachableIons.length > 4 ? ` +${reachableIons.length - 4}` : "");

      let bulletIcon = "○";
      if (isPast) bulletIcon = "✓";
      else if (isCurrent) bulletIcon = "●";
      else if (node.typ === "ergebnis") bulletIcon = "★";

      return `
        <li class="tree-node">
          <div class="${itemClass}" ${clickAttr}>
            ${hasChildren ? `
              <button class="tree-toggle-chevron ${isCollapsed ? "rotated" : ""}" 
                      onclick="event.stopPropagation(); window.toggleTreeBranch('${nodeId}')">
                ▼
              </button>
            ` : `<span style="width: 14px;"></span>`}
            
            <div class="tree-bullet">${bulletIcon}</div>

            <div class="tree-label">
              <div>${node.typ === "ergebnis" ? `<strong>${node.ion}</strong>` : node.titel}</div>
              ${reachableIons.length > 0 && node.typ !== "ergebnis" ? `
                <span class="tree-ion-chips">${formatFormula(ionSummary)}</span>
              ` : ""}
            </div>
          </div>

          ${hasChildren ? `
            <ul class="tree-children ${isCollapsed ? "collapsed" : ""}">
              ${node.optionen.map(opt => buildNodeHtml(opt.next)).join("")}
            </ul>
          ` : ""}
        </li>
      `;
    }

    elSidebarBody.innerHTML = `
      <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ink-muted); margin-bottom: 0.75rem;">
        ${tree.titel}
      </div>
      <ul class="tree-root">
        ${buildNodeHtml(tree.start)}
      </ul>
    `;
  }

  window.toggleTreeBranch = function (nodeId) {
    treeBranchesCollapsed[nodeId] = !treeBranchesCollapsed[nodeId];
    renderSidebarTree();
  };

  // --- Katalog-Ansicht ---
  function renderCatalog() {
    const list = Object.values(APP_DATA.nachweise);
    const q = catalogSearch.toLowerCase().trim();

    const filtered = list.filter(item => {
      // Modus-Filter
      if (catalogFilter === "kationen" && item.gruppe === "AN") return false;
      if (catalogFilter === "anionen" && item.gruppe !== "AN") return false;
      if (["G2", "G3", "G4", "G5"].includes(catalogFilter) && item.gruppe !== catalogFilter) return false;

      // Textsuche
      if (!q) return true;
      const ion = APP_DATA.ionen[item.ion];
      const matchIon = item.ion.toLowerCase().includes(q) || (ion && ion.name.toLowerCase().includes(q));
      const matchTitle = item.titel.toLowerCase().includes(q);
      const matchObs = item.beobachtung.toLowerCase().includes(q);
      const matchEq = item.gleichung && item.gleichung.some(g => g.toLowerCase().includes(q));
      return matchIon || matchTitle || matchObs || matchEq;
    });

    elMain.innerHTML = `
      <div class="content-container">
        <div class="catalog-header">
          <h1 class="catalog-title">Nachweis-Katalog</h1>
          <p style="color: var(--ink-secondary); font-size: 0.95rem;">
            Vollständige Sammlung aller 48 Nachweisreaktionen aus dem Laborkompendium mit Reaktionsbedingungen, Gleichungen und Farbfotografien.
          </p>

          <div class="catalog-search-bar">
            <input type="text" class="search-input" id="catalog-search-input" 
                   placeholder="Suche nach Ion (z. B. Cu2+, Fe3+), Name, Reagenz oder Beobachtung..." 
                   value="${catalogSearch}">
          </div>

          <div class="filter-pills">
            <button class="filter-pill ${catalogFilter === "all" ? "active" : ""}" onclick="window.setCatalogFilter('all')">Alle (${list.length})</button>
            <button class="filter-pill ${catalogFilter === "kationen" ? "active" : ""}" onclick="window.setCatalogFilter('kationen')">Kationen (33)</button>
            <button class="filter-pill ${catalogFilter === "anionen" ? "active" : ""}" onclick="window.setCatalogFilter('anionen')">Anionen (15)</button>
            <button class="filter-pill ${catalogFilter === "G2" ? "active" : ""}" onclick="window.setCatalogFilter('G2')">G2 H₂S-Gr.</button>
            <button class="filter-pill ${catalogFilter === "G3" ? "active" : ""}" onclick="window.setCatalogFilter('G3')">G3 (NH₄)₂S-Gr.</button>
            <button class="filter-pill ${catalogFilter === "G4" ? "active" : ""}" onclick="window.setCatalogFilter('G4')">G4 Carbonat-Gr.</button>
            <button class="filter-pill ${catalogFilter === "G5" ? "active" : ""}" onclick="window.setCatalogFilter('G5')">G5 Lösliche Gr.</button>
          </div>
        </div>

        <div class="catalog-grid">
          ${filtered.map(item => {
            const ion = APP_DATA.ionen[item.ion];
            const hasImg = item.bilder && item.bilder.length > 0;
            return `
              <div class="catalog-card" onclick="window.openDetailModal('${item.id}')">
                <div class="catalog-card-top">
                  <span class="ion-chip">${formatFormula(ion ? ion.formel : item.ion)} <span class="ion-chip-name">${ion ? ion.name : ""}</span></span>
                  <span class="catalog-card-id">${item.id}</span>
                </div>
                <h3 class="catalog-card-title">${item.titel}</h3>
                <div class="catalog-card-obs"><strong>Befund:</strong> ${item.beobachtung}</div>
                <div class="catalog-card-footer">
                  <span>${item.durchfuehrung ? item.durchfuehrung.length + " Schritte" : ""}</span>
                  <span>${hasImg ? `📷 ${item.bilder.length} Foto(s)` : "Kein Foto"}</span>
                </div>
              </div>
            `;
          }).join("")}
        </div>
        ${filtered.length === 0 ? `<p style="padding: 2rem; text-align: center; color: var(--ink-muted);">Keine Nachweise für diesen Suchbegriff gefunden.</p>` : ""}
      </div>
    `;

    const searchInput = document.getElementById("catalog-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        catalogSearch = e.target.value;
        renderCatalog();
        const reInput = document.getElementById("catalog-search-input");
        if (reInput) {
          reInput.focus();
          reInput.setSelectionRange(catalogSearch.length, catalogSearch.length);
        }
      });
    }
  }

  window.setCatalogFilter = function (f) {
    catalogFilter = f;
    renderCatalog();
  };

  // --- Detail-Modal für Katalog ---
  window.openDetailModal = function (id) {
    activeDetailModalId = id;
    const item = APP_DATA.nachweise[id];
    if (!item) return;
    const ion = APP_DATA.ionen[item.ion];

    const modal = document.createElement("div");
    modal.id = "catalog-detail-modal";
    modal.className = "lightbox-modal active";
    modal.style.padding = "1.5rem";

    modal.innerHTML = `
      <div style="background-color: var(--surface); max-width: 680px; width: 100%; max-height: 90vh; overflow-y: auto; border-radius: var(--radius-lg); padding: 2.25rem; position: relative;">
        <button onclick="window.closeDetailModal()" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--ink-secondary);">&times;</button>
        
        <div style="display: flex; gap: 0.5rem; align-items: baseline; margin-bottom: 0.5rem;">
          <span class="ion-chip">${formatFormula(ion ? ion.formel : item.ion)} <span class="ion-chip-name">${ion ? ion.name : ""}</span></span>
          <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--ink-muted);">${item.id}</span>
        </div>

        <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1.25rem;">${item.titel}</h2>

        <div style="margin-bottom: 1.5rem;">
          <span class="section-label">Durchführung</span>
          <ol class="procedure-list">
            ${item.durchfuehrung.map(d => `<li>${d}</li>`).join("")}
          </ol>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <span class="section-label">Beobachtung</span>
          <p style="font-size: 0.95rem; color: var(--ink);">${item.beobachtung}</p>
        </div>

        ${item.gleichung && item.gleichung.length > 0 ? `
          <div style="margin-bottom: 1.5rem;">
            <span class="section-label">Reaktionsgleichung</span>
            ${item.gleichung.map(g => `<div class="equation-block">${formatFormula(g)}</div>`).join("")}
          </div>
        ` : ""}

        ${item.sicherheit ? `
          <div class="safety-alert">
            <span class="safety-alert-icon">⚠️</span>
            <div><strong>Sicherheit:</strong> ${item.sicherheit}</div>
          </div>
        ` : ""}

        ${item.bilder && item.bilder.length > 0 ? `
          <div style="margin-bottom: 1.5rem;">
            <span class="section-label">Dokumentierte Fotografien</span>
            <div class="gallery-container">
              ${item.bilder.map(p => `
                <div class="photo-card">
                  <div class="photo-img-wrap" onclick="openLightbox('${p.src}', '${p.label}')">
                    <img src="assets/img/${p.src}" alt="${p.label}" class="photo-img">
                  </div>
                  <div class="photo-caption">${p.label}</div>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}

        ${item.weitere && item.weitere.length > 0 ? `
          <div style="border-top: 1px solid var(--rule); padding-top: 1rem;">
            <span class="section-label">Weitere Nachweise für ${ion ? ion.name : item.ion}</span>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              ${item.weitere.map(wId => {
                const w = APP_DATA.nachweise[wId];
                return `<button class="action-btn" onclick="window.closeDetailModal(); window.openDetailModal('${wId}')">${w ? w.titel : wId} (${wId})</button>`;
              }).join("")}
            </div>
          </div>
        ` : ""}
      </div>
    `;

    modal.addEventListener("click", (e) => {
      if (e.target === modal) window.closeDetailModal();
    });

    document.body.appendChild(modal);
  };

  window.closeDetailModal = function () {
    const modal = document.getElementById("catalog-detail-modal");
    if (modal) modal.remove();
    activeDetailModalId = null;
  };

  // --- Protokoll-Ansicht ---
  function renderProtocol() {
    const meta = AppState.state.protokollMeta || {};
    const history = AppState.state.history;
    const currNode = AppState.getCurrentNode();
    const isCompleted = currNode && currNode.typ === "ergebnis";
    const ion = isCompleted ? (APP_DATA.ionen[currNode.ion] || { name: currNode.ion, formel: currNode.ion }) : null;

    elMain.innerHTML = `
      <div class="content-container">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;" class="print-hide">
          <a href="#/${AppState.state.mode}" class="action-btn">← Zurück zur Analyse</a>
          <button class="action-btn primary" onclick="window.print()">🖨 Protokoll drucken / als PDF speichern</button>
        </div>

        <div class="protocol-sheet">
          <div class="protocol-header">
            <div>
              <h1 class="protocol-title">Laborprotokoll: Qualitative Analyse</h1>
              <div class="protocol-inst">Anorganisch-Chemisches Praktikum</div>
            </div>
            <div style="text-align: right; font-size: 0.8rem; color: var(--ink-secondary);">
              Analysesystem: <strong>Bestimmungsschlüssel</strong>
            </div>
          </div>

          <div class="protocol-fields-grid">
            <div class="protocol-field">
              <label class="field-label">Bearbeiter / Bearbeiterin</label>
              <input type="text" class="field-input" value="${meta.bearbeiter || ""}" 
                     placeholder="Name Vorname" 
                     onchange="AppState.updateProtokollMeta('bearbeiter', this.value)">
            </div>
            <div class="protocol-field">
              <label class="field-label">Datum</label>
              <input type="date" class="field-input" value="${meta.datum || ""}"
                     onchange="AppState.updateProtokollMeta('datum', this.value)">
            </div>
            <div class="protocol-field">
              <label class="field-label">Proben-Nummer / Kennung</label>
              <input type="text" class="field-input" value="${meta.probenNummer || ""}"
                     placeholder="z. B. Probe A-12"
                     onchange="AppState.updateProtokollMeta('probenNummer', this.value)">
            </div>
          </div>

          ${isCompleted && ion ? `
            <div class="protocol-result-banner">
              <div class="result-banner-left">
                <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--accent);">Identifiziertes ${ion.art === "kation" ? "Kation" : "Anion"}</span>
                <h3>${formatFormula(ion.formel)} — ${ion.name}</h3>
                <p style="font-size: 0.85rem; color: var(--ink-secondary); margin-top: 0.25rem;">
                  Gruppe: ${ion.gruppe} · Befund: ${currNode.fazit}
                </p>
              </div>
              <div style="font-size: 2.25rem; font-family: var(--font-serif); font-weight: 700; color: var(--accent);">
                ${formatFormula(ion.formel)}
              </div>
            </div>
          ` : `
            <div class="info-banner print-hide" style="margin-bottom: 2rem;">
              Die Analyse ist noch nicht abgeschlossen (aktuell bei Schritt ${history.length + 1}). Sie können das Protokoll dennoch bereits ausfüllen oder ausdrucken.
            </div>
          `}

          <h3 style="font-family: var(--font-serif); font-size: 1.15rem; margin-bottom: 0.75rem;">
            Durchgeführter Untersuchungsgang (${history.length} Schritte)
          </h3>

          <table class="protocol-table">
            <thead>
              <tr>
                <th style="width: 40px;">Nr.</th>
                <th>Schritt / Nachweis</th>
                <th>Reagenzien & Methode</th>
                <th>Beobachtung</th>
                <th>Schlussfolgerung</th>
              </tr>
            </thead>
            <tbody>
              ${history.map((h, i) => {
                const tree = APP_DATA.schluessel[AppState.state.mode];
                const qNode = tree ? tree.knoten[h.nodeId] : null;
                const n = (qNode && qNode.nachweis) ? APP_DATA.nachweise[qNode.nachweis] : null;
                return `
                  <tr>
                    <td><strong>${i + 1}</strong></td>
                    <td><strong>${qNode ? qNode.titel : h.nodeId}</strong>${n ? `<br><small style="color: var(--ink-muted);">${n.id}</small>` : ""}</td>
                    <td>${qNode ? qNode.untertitel : "—"}</td>
                    <td>${h.chosenText}</td>
                    <td>${h.subtext || "positiv"}</td>
                  </tr>
                `;
              }).join("")}
              ${history.length === 0 ? `
                <tr><td colspan="5" style="text-align: center; color: var(--ink-muted); padding: 1.5rem;">Noch keine Analyseschritte dokumentiert.</td></tr>
              ` : ""}
            </tbody>
          </table>

          <div style="margin-bottom: 2rem;">
            <label class="field-label">Labornotizen & Bemerkungen</label>
            <textarea class="field-input" style="width: 100%; min-height: 80px; margin-top: 0.35rem;" 
                      placeholder="Besondere Beobachtungen während des Praktikums..."
                      onchange="AppState.updateProtokollMeta('notizen', this.value)">${meta.notizen || ""}</textarea>
          </div>

          <div class="protocol-signatures">
            <div class="sig-line">Unterschrift Praktikant:in</div>
            <div class="sig-line">Visum Assistent:in / Lehrkraft</div>
          </div>
        </div>
      </div>
    `;
  }

  // Beim Laden ausführen
  window.addEventListener("DOMContentLoaded", init);
})();
