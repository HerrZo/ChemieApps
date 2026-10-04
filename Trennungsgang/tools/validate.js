const fs = require('fs');
const path = require('path');

// Mock window
global.window = {};

const rootDir = path.resolve(__dirname, '..');
const nachweisePath = path.join(rootDir, 'js', 'data', 'nachweise.js');
const schluesselPath = path.join(rootDir, 'js', 'data', 'schluessel.js');
const imgDir = path.join(rootDir, 'assets', 'img');

require(nachweisePath);
require(schluesselPath);

const APP_DATA = global.window.APP_DATA;

console.log("=== Starte Validierung des Trennungsgang-Datensatzes ===");

let errors = 0;
let warnings = 0;

function error(msg) {
  console.error("  [FEHLER] " + msg);
  errors++;
}
function warn(msg) {
  console.warn("  [WARNUNG] " + msg);
  warnings++;
}

// 1. Nachweise prüfen
const nachweiseKeys = Object.keys(APP_DATA.nachweise);
console.log(`\n1. Nachweise pruefen (${nachweiseKeys.length} Nachweise geladen)...`);
if (nachweiseKeys.length !== 48) {
  error(`Erwartet 48 Nachweise, gefunden: ${nachweiseKeys.length}`);
}

for (const [id, n] of Object.entries(APP_DATA.nachweise)) {
  if (!n.ion) error(`Nachweis ${id} hat kein Ion.`);
  if (!n.titel) error(`Nachweis ${id} hat keinen Titel.`);
  if (!Array.isArray(n.durchfuehrung) || n.durchfuehrung.length === 0) error(`Nachweis ${id} hat keine Durchfuehrung.`);
  if (!n.beobachtung) error(`Nachweis ${id} hat keine Beobachtung.`);

  // Querverweise
  if (Array.isArray(n.weitere)) {
    for (const w of n.weitere) {
      if (!APP_DATA.nachweise[w]) {
        error(`Nachweis ${id}: Querverweis 'weitere' zeigt auf unbekannte ID '${w}'.`);
      }
    }
  }

  // Bilder
  if (Array.isArray(n.bilder)) {
    for (const img of n.bilder) {
      const p = path.join(imgDir, img.src);
      if (!fs.existsSync(p)) {
        error(`Nachweis ${id}: Bilddatei fehlt auf Festplatte: ${img.src}`);
      }
    }
  }
}

// 2. Schlüssel prüfen
console.log("\n2. Schluessel (Entscheidungsbaeume) pruefen...");

for (const art of ['kationen', 'anionen']) {
  console.log(`\n  --- Schluessel: ${art} ---`);
  const s = APP_DATA.schluessel[art];
  if (!s) {
    error(`Schluessel ${art} fehlt.`);
    continue;
  }
  if (!s.start || !s.knoten[s.start]) {
    error(`Startknoten ${s.start} existiert nicht in ${art}.`);
  }

  const visited = new Set();
  const reachedIons = new Set();

  function traverse(nodeId, pathStack) {
    if (pathStack.includes(nodeId)) {
      error(`Zyklus entdeckt im ${art}-Baum: ${pathStack.join(' -> ')} -> ${nodeId}`);
      return;
    }
    visited.add(nodeId);
    const node = s.knoten[nodeId];
    if (!node) {
      error(`Knoten ${nodeId} nicht gefunden (Pfad: ${pathStack.join(' -> ')}).`);
      return;
    }

    if (node.nachweis) {
      if (!APP_DATA.nachweise[node.nachweis]) {
        error(`Knoten ${nodeId} verweist auf unbekannten Nachweis ${node.nachweis}.`);
      }
    }
    if (node.spezialBild) {
      const p = path.join(imgDir, node.spezialBild.src);
      if (!fs.existsSync(p)) {
        error(`Knoten ${nodeId} Spezialbild fehlt: ${node.spezialBild.src}`);
      }
    }

    if (node.typ === 'ergebnis') {
      reachedIons.add(node.ion);
      if (!APP_DATA.ionen[node.ion]) {
        error(`Ergebnisknoten ${nodeId} verweist auf unbekanntes Ion ${node.ion}.`);
      }
      if (Array.isArray(node.bestaetigung)) {
        for (const b of node.bestaetigung) {
          if (!APP_DATA.nachweise[b]) {
            error(`Ergebnisknoten ${nodeId} Bestaetigung ${b} existiert nicht.`);
          }
        }
      }
    } else if (node.typ === 'frage') {
      if (!Array.isArray(node.optionen) || node.optionen.length === 0) {
        error(`Frageknoten ${nodeId} hat keine Optionen.`);
      } else {
        for (const opt of node.optionen) {
          if (!opt.next) {
            error(`Frageknoten ${nodeId} Option hat kein 'next'.`);
          } else {
            traverse(opt.next, [...pathStack, nodeId]);
          }
        }
      }
    }
  }

  traverse(s.start, []);

  // Prüfen auf unerreichte Knoten
  for (const nodeId of Object.keys(s.knoten)) {
    if (!visited.has(nodeId)) {
      warn(`Knoten ${nodeId} in ${art} ist verwaist (vom Startknoten nicht erreichbar).`);
    }
  }

  console.log(`  Besuchte Knoten: ${visited.size}/${Object.keys(s.knoten).length}`);
  console.log(`  Erreichte Ionen (${reachedIons.size}):`, Array.from(reachedIons).join(', '));

  // Prüfen ob alle Ionen der Art erreicht wurden
  const expectedIons = Object.values(APP_DATA.ionen)
    .filter(i => i.art === (art === 'kationen' ? 'kation' : 'anion'))
    .map(i => i.id);

  for (const exp of expectedIons) {
    if (!reachedIons.has(exp)) {
      error(`Erwartetes Ion '${exp}' (${APP_DATA.ionen[exp].name}) wird im ${art}-Baum NICHT erreicht!`);
    }
  }
}

console.log("\n=======================================================");
if (errors === 0 && warnings === 0) {
  console.log("ERFOLG: Keine Fehler oder Warnungen gefunden!");
} else {
  console.log(`ABGESCHLOSSEN: ${errors} Fehler, ${warnings} Warnungen.`);
}
if (errors > 0) process.exit(1);
