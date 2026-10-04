// Qualitative Analyse – Formel-Formatierung
(function () {
  /**
   * Wandelt chemische Kurznotationen in sauberes HTML um.
   */
  function formatFormula(text) {
    if (!text) return "";
    let s = String(text);

    // Standardisiere Pfeile und Zeichen
    s = s.replace(/<->/g, " ⇄ ");
    s = s.replace(/->/g, " → ");

    // Fällungs- und Gaspfeile
    s = s.replace(/(\s|^)v(?=\s|$)/g, "↓");
    s = s.replace(/\bv\b/g, "↓");
    s = s.replace(/([A-Za-z0-9\)\]])\^(\s|$)/g, "$1↑$2");
    s = s.replace(/(\s|^)\^(?=\s|$)/g, "↑");

    // Tokenize bei Reaktionsoperatoren (mit Leerzeichen darum) oder Whitespace
    return s.split(/(\s+[+]\s+|\s+→\s+|\s+⇄\s+|\s+)/).map(part => {
      // Wenn es Whitespace oder Reaktions-Plus / Pfeil ist
      if (/^(\s+[+]\s+|\s+→\s+|\s+⇄\s+|\s+)$/.test(part)) {
        return part;
      }

      // Stöchiometrische Vorfaktoren (z.B. "2", "3", "0.5", "10") abspalten
      const coefMatch = part.match(/^([0-9]+(?:[\.,][0-9]+)?)(?=[A-Za-z\[\(])/);
      let coef = "";
      let formula = part;
      if (coefMatch) {
        coef = coefMatch[1] + " ";
        formula = part.slice(coefMatch[1].length);
      }

      // 1. Ladung mit Zirkumflex (z.B. Al^3+, SO4^2-, NH4^+, OH^-, Bi^3+)
      formula = formula.replace(/\^([0-9]*[\+\-−])/g, (m, charge) => {
        const c = charge.replace(/-/g, "−");
        return `<sup>${c}</sup>`;
      });

      // 2. Ladung ohne Zirkumflex am Ende des Wortes (z.B. CO32-, Cr3+, OH-, Fe2+)
      formula = formula.replace(/([A-Za-z\)\]])([0-9]+)([\+\-−])$/g, (m, el, num, sign) => {
        const sgn = sign.replace(/-/g, "−");
        return `${el}<sup>${num}${sgn}</sup>`;
      });
      formula = formula.replace(/([A-Za-z\)\]])([\+\-−])$/g, (m, el, sign) => {
        const sgn = sign.replace(/-/g, "−");
        return `${el}<sup>${sgn}</sup>`;
      });

      // 3. Tiefgestellte Indizes (Zahlen direkt nach chemischen Symbolen oder schließenden Klammern)
      formula = formula.replace(/([A-Za-z\)\]])([0-9]+)(?![^<]*>)/g, (m, el, num) => {
        return `${el}<sub>${num}</sub>`;
      });

      return coef + formula;
    }).join("");
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { formatFormula };
  } else {
    window.formatFormula = formatFormula;
  }
})();
