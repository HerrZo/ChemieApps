# Qualitative Analyse – Bestimmungsschlüssel für Ionen

Eine minimalistische, wissenschaftlich fundierte Web-App zur systematischen Identifikation unbekannter anorganischer Salze im chemischen Praktikum.

Entwickelt auf Grundlage des verifizierten Labor-Kompendiums der Ionennachweise (`IonennachweiseKI.docx`).

---

## Funktionen

- **Logischer Bestimmungsschlüssel:** Identifikation von 15 Kationen und 10 Anionen über systematische Vorproben, Gruppenreaktionen und Bestätigungsnachweise.
- **Interaktives Baumdiagramm:** Ausklappbare Seitenleiste zeigt den gesamten Entscheidungsbaum, noch erreichbare Ionen in jedem Zweig und ermöglicht das Zurückspringen zu früheren Schritten per Klick.
- **Dokumentierte Farbfotografien:** 60 optimierte Hochauflösungs-Fotografien aus realen Laboransätzen direkt im Reaktionsschritt mit Klick-Vergrößerung (Lightbox).
- **Wissenschaftliche Vertiefung:** Ausklappbare Abschnitte für jeden Nachweis mit stöchiometrisch ausgeglichenen Reaktionsgleichungen und Dokumentation möglicher Störreaktionen.
- **Vollständiger Nachweis-Katalog:** Durchsuchbare Enzyklopädie aller 48 Reaktionen mit Filtern nach analytischen Gruppen (G2 bis G5, AN) und Querverweisen.
- **Druckbares Laborprotokoll:** Erzeugt ein sauberes DIN-A4-Protokoll des durchlaufenen Analysewegs mit Formularfeldern für Bearbeiter:in, Datum, Probe-Nr., Labornotizen und Unterschriftenfeld.
- **Lokale Ausführung & GitHub Pages:** Funktioniert per Doppelklick direkt auf `index.html` (ohne Server/Build-Step) sowie auf jedem statischen Webhoster.
- **Fortschrittsspeicherung:** Der aktuelle Arbeitsstand wird automatisch im Browser (`localStorage`) gespeichert.

---

## Schnellstart

### Lokale Nutzung
Einfach die Datei `index.html` in einem modernen Webbrowser (Chrome, Edge, Firefox, Safari) öffnen:
```bash
# Per Doppelklick oder im Terminal:
start index.html
```

### Nutzung über einen lokalen HTTP-Server (optional)
```bash
# Mit Python:
python -m http.server 8000

# Mit Node.js (npx):
npx serve .
```

---

## Projektstruktur

```
Trennungsgang/
├── index.html              # Single-Page-Anwendung
├── README.md               # Dokumentation
├── css/
│   └── style.css           # Minimalistisches, universitäres Stylesheet & Druck-CSS
├── js/
│   ├── data/
│   │   ├── nachweise.js    # 48 Nachweise mit bereinigten Gleichungen und Bildzuordnungen
│   │   └── schluessel.js   # Entscheidungsbäume für Kationen und Anionen
│   ├── formula.js          # Typografische Formatierung chemischer Gleichungen
│   ├── state.js            # Zustandsverwaltung, Baum-Erreichbarkeiten, localStorage
│   └── app.js              # Routing, View-Rendering, Lightbox & Interaktion
├── assets/
│   └── img/                # 60 optimierte Laborfotografien (~2.6 MB)
└── tools/
    ├── build_images.py     # Skript zur Extraktion & Optimierung der Bilder aus dem docx
    └── validate.js         # Automatisierte Integritätsprüfung aller Knoten & Ionen
```

---

## Datengrundlage & Korrekturen

Alle Nachweisdaten und Fotografien stammen aus `IonennachweiseKI.docx`. Fachliche Korrekturen (wie die korrekten stöchiometrischen Gleichungen für Berliner Blau, Thénards Blau, Rinmanns Grün, Permanganat-Reduktion sowie die Einordnung der Eisen-Thiocyanat-Reaktion als Komplexlösung) wurden gemäß analytischem Lehrbuchstandard integriert.
