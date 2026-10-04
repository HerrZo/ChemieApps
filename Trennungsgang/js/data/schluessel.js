// Qualitative Analyse – Entscheidungsbäume für Kationen und Anionen
if (typeof window === "undefined") { global.window = {}; }
window.APP_DATA = window.APP_DATA || {};
var APP_DATA = window.APP_DATA;

APP_DATA.schluessel = {
  kationen: {
    titel: "Kationen-Bestimmungsschlüssel",
    beschreibung: "Systematischer Ausschluss- und Nachweisgang für 15 Kationen anhand von Vorproben (Ammonium, Flamme, Perle) und gezielten Einzelnachweisen.",
    start: "k-nh4",
    knoten: {
      // 1. Vorprobe Ammonium
      "k-nh4": {
        id: "k-nh4",
        schrittNummer: 1,
        typ: "frage",
        titel: "Vorprobe auf Ammonium",
        untertitel: "Verhalten gegen Basen (Kreuzprobe / Gasnachweis mit Indikatorpapier)",
        nachweis: "K04",
        frage: "Färbt sich das feucht über die Probe gehaltene Indikatorpapier (ohne Flüssigkeitskontakt) blau?",
        optionen: [
          {
            text: "Ja – Indikatorpapier in der Gasphase färbt sich rasch blau (stechender NH₃-Geruch)",
            subtext: "Ammoniak entweicht und belegt Ammonium.",
            next: "k-res-nh4"
          },
          {
            text: "Nein – Indikatorpapier bleibt neutral / keine Reaktion",
            subtext: "Ammonium ist ausgeschlossen.",
            next: "k-flamme"
          }
        ]
      },
      "k-res-nh4": {
        id: "k-res-nh4",
        typ: "ergebnis",
        ion: "NH4+",
        bestaetigung: ["K03"],
        fazit: "Das Kation der Probe ist Ammonium (NH₄⁺)."
      },

      // 2. Flammenfärbung
      "k-flamme": {
        id: "k-flamme",
        schrittNummer: 2,
        typ: "frage",
        titel: "Vorprobe: Flammenfärbung",
        untertitel: "Prüfung am ausgeglühten Magnesiastäbchen mit Salzsäure",
        nachweis: "K10",
        frage: "Welche charakteristische Flammenfärbung beobachten Sie in der Bunsenbrennerflamme?",
        optionen: [
          {
            text: "Grün bis blaugrün",
            subtext: "Hinweis auf Kupfer (Cu²⁺).",
            next: "k-cu-nh3"
          },
          {
            text: "Fahlviolett (durch Cobaltglas deutlich sichtbar)",
            subtext: "Hinweis auf Kalium (K⁺).",
            next: "k-res-k"
          },
          {
            text: "Rot (ziegelrot, purpurrot oder karminrot)",
            subtext: "Mögliche Ionen: Calcium (Ca²⁺), Strontium (Sr²⁺), Lithium (Li⁺).",
            next: "k-rot-cas04"
          },
          {
            text: "Keine charakteristische Flammenfärbung (nur flüchtiges Natriumgelb)",
            subtext: "Schließt Cu²⁺, K⁺, Ca²⁺, Sr²⁺, Li⁺ aus.",
            next: "k-perle"
          }
        ]
      },

      // Kupfer-Zweig
      "k-cu-nh3": {
        id: "k-cu-nh3",
        schrittNummer: 3,
        typ: "frage",
        titel: "Bestätigung Kupfer: Reaktion mit Ammoniak",
        untertitel: "Fällung und Komplexbildung",
        nachweis: "K21",
        frage: "Was beobachten Sie bei tropfenweiser Zugabe von Ammoniak und anschließendem Überschuss?",
        optionen: [
          {
            text: "Hellblauer Niederschlag, der sich im Überschuss von NH₃ zu einer intensiv tiefblauen Lösung auflöst",
            subtext: "Bildung des Tetraamminkupfer(II)-Komplexes [Cu(NH₃)₄]²⁺.",
            next: "k-res-cu"
          },
          {
            text: "Keine Blaufärbung / negatives Ergebnis",
            subtext: "Kupfer nicht bestätigt.",
            next: "k-unbekannt"
          }
        ]
      },
      "k-res-cu": {
        id: "k-res-cu",
        typ: "ergebnis",
        ion: "Cu2+",
        bestaetigung: ["K22"],
        fazit: "Das Kation der Probe ist Kupfer (Cu²⁺)."
      },

      // Kalium-Zweig
      "k-res-k": {
        id: "k-res-k",
        typ: "ergebnis",
        ion: "K+",
        bestaetigung: [],
        fazit: "Das Kation der Probe ist Kalium (K⁺). Die violette Flammenfärbung (sichtbar durch Cobaltglas) ist im vorliegenden Datensatz der spezifische Nachweis."
      },

      // Rote Flammenfärbung (Ca, Sr, Li)
      "k-rot-cas04": {
        id: "k-rot-cas04",
        schrittNummer: 3,
        typ: "frage",
        titel: "Fällung mit gesättigter CaSO₄-Lösung (Gipswasser)",
        untertitel: "Differenzierung von Strontium gegen Calcium und Lithium",
        nachweis: "K29",
        frage: "Fällt bei Zugabe von gesättigter CaSO₄-Lösung zur Probelösung ein Niederschlag aus?",
        optionen: [
          {
            text: "Ja – langsame Bildung einer feinen weißen Trübung / Fällung (SrSO₄)",
            subtext: "Calciumsulfat fällt wegen gleicher Löslichkeit nicht; Strontiumsulfat ist schwerer löslich.",
            next: "k-res-sr"
          },
          {
            text: "Nein – Lösung bleibt völlig klar",
            subtext: "Strontium ist ausgeschlossen. Noch möglich: Ca²⁺, Li⁺.",
            next: "k-rot-oxalat"
          }
        ]
      },
      "k-res-sr": {
        id: "k-res-sr",
        typ: "ergebnis",
        ion: "Sr2+",
        bestaetigung: ["K31", "K30"],
        fazit: "Das Kation der Probe ist Strontium (Sr²⁺)."
      },

      "k-rot-oxalat": {
        id: "k-rot-oxalat",
        schrittNummer: 4,
        typ: "frage",
        titel: "Fällung mit Oxalat",
        untertitel: "Nachweis von Calcium",
        nachweis: "K09",
        frage: "Fällt bei Zugabe von Ammoniumoxalat-Lösung ein weißer Niederschlag aus?",
        optionen: [
          {
            text: "Ja – weißer Niederschlag von Calciumoxalat CaC₂O₄ (schwerlöslich in Essigsäure)",
            subtext: "Belegt Calcium.",
            next: "k-res-ca"
          },
          {
            text: "Nein – keine Fällung",
            subtext: "Calcium ist ausgeschlossen. Noch möglich: Li⁺.",
            next: "k-rot-phosphat"
          }
        ]
      },
      "k-res-ca": {
        id: "k-res-ca",
        typ: "ergebnis",
        ion: "Ca2+",
        bestaetigung: ["K10"],
        fazit: "Das Kation der Probe ist Calcium (Ca²⁺)."
      },

      "k-rot-phosphat": {
        id: "k-rot-phosphat",
        schrittNummer: 5,
        typ: "frage",
        titel: "Fällung mit Dinatriumhydrogenphosphat in der Hitze",
        untertitel: "Nachweis von Lithium",
        nachweis: "K24",
        frage: "Fällt bei Zugabe von Na₂HPO₄ und NaOH beim Erhitzen zum Sieden ein weißer Niederschlag aus?",
        optionen: [
          {
            text: "Ja – weißer kristalliner Niederschlag von Li₃PO₄ in der Hitze",
            subtext: "Belegt Lithium.",
            next: "k-res-li"
          },
          {
            text: "Nein – keine Fällung",
            subtext: "Lithium nicht bestätigt.",
            next: "k-unbekannt"
          }
        ]
      },
      "k-res-li": {
        id: "k-res-li",
        typ: "ergebnis",
        ion: "Li+",
        bestaetigung: ["K23", "K25"],
        fazit: "Das Kation der Probe ist Lithium (Li⁺)."
      },

      // 3. Phosphorsalzperle (Cr, Co, Mn, Fe vs. farblos Al, Zn, Sb, Bi)
      "k-perle": {
        id: "k-perle",
        schrittNummer: 3,
        typ: "frage",
        titel: "Vorprobe: Phosphorsalzperle",
        untertitel: "Erhitzen mit NaNH₄HPO₄ in Oxidationsflamme (OF) und Reduktionsflamme (RF)",
        nachweis: "K13",
        frage: "Welche Färbung zeigt die Phosphorsalzperle in OF und RF?",
        optionen: [
          {
            text: "OF: smaragdgrün | RF: smaragdgrün",
            subtext: "Hinweis auf Chrom (Cr³⁺).",
            next: "k-cr-chromat"
          },
          {
            text: "OF: intensiv tiefblau | RF: tiefblau",
            subtext: "Hinweis auf Cobalt (Co²⁺).",
            next: "k-co-naoh"
          },
          {
            text: "OF: intensiv violett | RF: farblos entfärbt",
            subtext: "Hinweis auf Mangan (Mn²⁺).",
            next: "k-mn-sulfid"
          },
          {
            text: "OF: gelb bis braunrot | RF: hellgrün",
            subtext: "Hinweis auf Eisen (Fe²⁺ / Fe³⁺).",
            next: "k-fe-thiocyanat"
          },
          {
            text: "Perle bleibt in beiden Flammen farblos und klar",
            subtext: "Schließt Cr, Co, Mn, Fe aus. Noch möglich: Al³⁺, Zn²⁺, Sb³⁺, Bi³⁺.",
            next: "k-nagel"
          }
        ]
      },

      // Chrom-Zweig
      "k-cr-chromat": {
        id: "k-cr-chromat",
        schrittNummer: 4,
        typ: "frage",
        titel: "Bestätigung Chrom: Oxidation zu Chromat",
        untertitel: "Oxidation in alkalischem Milieu mit Wasserstoffperoxid",
        nachweis: "K11",
        frage: "Wie verhält sich die Lösung nach Zugabe von NaOH und H₂O₂?",
        optionen: [
          {
            text: "Farbumschlag von grünem Chrom(III)-hydroxid zu einer intensiv gelben Chromatlösung (CrO₄²⁻)",
            subtext: "Chrom eindeutig bestätigt.",
            next: "k-res-cr"
          },
          {
            text: "Keine Gelbfärbung / negativ",
            subtext: "Chrom nicht bestätigt.",
            next: "k-unbekannt"
          }
        ]
      },
      "k-res-cr": {
        id: "k-res-cr",
        typ: "ergebnis",
        ion: "Cr3+",
        bestaetigung: ["K12", "K13"],
        fazit: "Das Kation der Probe ist Chrom (Cr³⁺)."
      },

      // Cobalt-Zweig
      "k-co-naoh": {
        id: "k-co-naoh",
        schrittNummer: 4,
        typ: "frage",
        titel: "Bestätigung Cobalt: Fällung mit NaOH und Erhitzen",
        untertitel: "Verhalten gegen Natronlauge",
        nachweis: "K15",
        frage: "Was beobachten Sie bei Zugabe von Natronlauge und anschließendem Erhitzen?",
        optionen: [
          {
            text: "Blauer basischer Niederschlag, der beim Erhitzen in rosa-rotes Co(OH)₂ umschlägt",
            subtext: "Cobalt eindeutig bestätigt.",
            next: "k-res-co"
          },
          {
            text: "Kein blauer bzw. roter Niederschlag / negativ",
            subtext: "Cobalt nicht bestätigt.",
            next: "k-unbekannt"
          }
        ]
      },
      "k-res-co": {
        id: "k-res-co",
        typ: "ergebnis",
        ion: "Co2+",
        bestaetigung: ["K14", "K16"],
        fazit: "Das Kation der Probe ist Cobalt (Co²⁺)."
      },

      // Mangan-Zweig
      "k-mn-sulfid": {
        id: "k-mn-sulfid",
        schrittNummer: 4,
        typ: "frage",
        titel: "Bestätigung Mangan: Fällung mit Ammoniumsulfid",
        untertitel: "Mangansulfid-Fällung",
        nachweis: "K27",
        frage: "Fällt bei Zugabe von Ammoniumsulfidlösung (NH₄)₂S ein Niederschlag aus?",
        optionen: [
          {
            text: "Ja – charakteristischer fleischfarbener (hellrosa-brauner) Niederschlag von MnS",
            subtext: "Mangan eindeutig bestätigt.",
            next: "k-res-mn"
          },
          {
            text: "Kein fleischfarbener Niederschlag / negativ",
            subtext: "Mangan nicht bestätigt.",
            next: "k-unbekannt"
          }
        ]
      },
      "k-res-mn": {
        id: "k-res-mn",
        typ: "ergebnis",
        ion: "Mn2+",
        bestaetigung: ["K26", "K28"],
        fazit: "Das Kation der Probe ist Mangan (Mn²⁺)."
      },

      // Eisen-Differenzierung
      "k-fe-thiocyanat": {
        id: "k-fe-thiocyanat",
        schrittNummer: 4,
        typ: "frage",
        titel: "Differenzierung Eisen(III) vs. Eisen(II): Stierblutprobe",
        untertitel: "Reaktion mit Thiocyanatlösung",
        nachweis: "K19",
        frage: "Wie reagiert die schwach saure Probelösung bei Zugabe von Thiocyanat (SCN⁻)?",
        optionen: [
          {
            text: "Sofortige Bildung einer intensiv blutroten Lösung",
            subtext: "Spezifischer Nachweis für Eisen(III) [Fe(SCN)₃].",
            next: "k-res-fe3"
          },
          {
            text: "Keine Rotfärbung (Lösung bleibt farblos oder nur schwach gelblich)",
            subtext: "Eisen(III) ist ausgeschlossen. Noch möglich: Eisen(II) Fe²⁺.",
            next: "k-fe2-blutlauge"
          }
        ]
      },
      "k-res-fe3": {
        id: "k-res-fe3",
        typ: "ergebnis",
        ion: "Fe3+",
        bestaetigung: ["K17", "K18"],
        fazit: "Das Kation der Probe ist Eisen(III) (Fe³⁺)."
      },

      "k-fe2-blutlauge": {
        id: "k-fe2-blutlauge",
        schrittNummer: 5,
        typ: "frage",
        titel: "Nachweis Eisen(II): Fällung mit rotem Blutlaugensalz",
        untertitel: "Turnbulls Blau / Berliner Blau",
        nachweis: "K17",
        frage: "Fällt bei Zugabe von rotem Blutlaugensalz K₃[Fe(CN)₆] ein tiefblauer Niederschlag aus?",
        optionen: [
          {
            text: "Ja – sofortige Bildung von tiefblauem Niederschlag (Berliner Blau)",
            subtext: "Eisen(II) eindeutig bestätigt.",
            next: "k-res-fe2"
          },
          {
            text: "Nein – keine Blaufärbung",
            subtext: "Eisen(II) nicht bestätigt.",
            next: "k-unbekannt"
          }
        ]
      },
      "k-res-fe2": {
        id: "k-res-fe2",
        typ: "ergebnis",
        ion: "Fe2+",
        bestaetigung: ["K18"],
        fazit: "Das Kation der Probe ist Eisen(II) (Fe²⁺)."
      },

      // 4. Eisennagel-Probe (Bi, Sb vs. Al, Zn)
      "k-nagel": {
        id: "k-nagel",
        schrittNummer: 4,
        typ: "frage",
        titel: "Eisennagel-Probe",
        untertitel: "Zementation / Abscheidung von edleren Metallen auf blankem Eisen",
        nachweis: "K05",
        frage: "Scheidet sich nach Eintauchen eines blanken Eisennagels ein schwarzer Belag ab?",
        optionen: [
          {
            text: "Ja – festhaftender schwarzer Belag von elementarem Metall",
            subtext: "Mögliche Ionen: Bismut (Bi³⁺) oder Antimon (Sb³⁺).",
            next: "k-bi-sb-ki"
          },
          {
            text: "Nein – Eisennagel bleibt metallisch blank",
            subtext: "Bi³⁺ und Sb³⁺ ausgeschlossen. Noch möglich: Aluminium (Al³⁺), Zink (Zn²⁺).",
            next: "k-gluehprobe"
          }
        ]
      },

      // Bismut vs. Antimon
      "k-bi-sb-ki": {
        id: "k-bi-sb-ki",
        schrittNummer: 5,
        typ: "frage",
        titel: "Unterscheidung Bismut / Antimon: Reaktion mit Kaliumiodid",
        untertitel: "Iodid-Fällung und Komplexbildung",
        nachweis: "K08",
        frage: "Was beobachten Sie bei tropfenweiser Zugabe von Kaliumiodid (KI)?",
        optionen: [
          {
            text: "Schwarzer Niederschlag von BiI₃, der sich im KI-Überschuss orangegelb als [BiI₄]⁻ auflöst",
            subtext: "Bismut eindeutig belegt.",
            next: "k-res-bi"
          },
          {
            text: "Kein schwarzer Niederschlag (keine Fällung)",
            subtext: "Bismut ausgeschlossen. Noch möglich: Antimon (Sb³⁺).",
            next: "k-sb-molybdaen"
          }
        ]
      },
      "k-res-bi": {
        id: "k-res-bi",
        typ: "ergebnis",
        ion: "Bi3+",
        bestaetigung: ["K07"],
        fazit: "Das Kation der Probe ist Bismut (Bi³⁺)."
      },

      "k-sb-molybdaen": {
        id: "k-sb-molybdaen",
        schrittNummer: 6,
        typ: "frage",
        titel: "Bestätigung Antimon: Nachweis als Molybdänblau",
        untertitel: "Reduktion von Molybdophosphorsäure",
        nachweis: "K06",
        frage: "Tritt nach Zugabe von Molybdophosphorsäure und Erhitzen eine intensive Blaufärbung auf?",
        optionen: [
          {
            text: "Ja – kräftige Blaufärbung (Molybdänblau)",
            subtext: "Antimon eindeutig bestätigt.",
            next: "k-res-sb"
          },
          {
            text: "Nein – keine Blaufärbung",
            subtext: "Antimon nicht bestätigt.",
            next: "k-unbekannt"
          }
        ]
      },
      "k-res-sb": {
        id: "k-res-sb",
        typ: "ergebnis",
        ion: "Sb3+",
        bestaetigung: ["K05"],
        fazit: "Das Kation der Probe ist Antimon (Sb³⁺)."
      },

      // Glühprobe: Aluminium vs. Zink
      "k-gluehprobe": {
        id: "k-gluehprobe",
        schrittNummer: 5,
        typ: "frage",
        titel: "Glühprobe mit Cobalt(II)-nitrat auf Magnesiarinne",
        untertitel: "Thénards Blau vs. Rinmanns Grün",
        nachweis: "K02",
        frage: "Welche Färbung entsteht beim Glühen der Probe mit wenig Co(NO₃)₂ auf der Magnesiarinne?",
        optionen: [
          {
            text: "Schwache bis deutliche Blaufärbung (Thénards Blau CoAl₂O₄)",
            subtext: "Hinweis auf Aluminium (Al³⁺).",
            next: "k-al-morin"
          },
          {
            text: "Deutliche Grünfärbung (Rinmanns Grün ZnCo₂O₄)",
            subtext: "Hinweis auf Zink (Zn²⁺).",
            next: "k-zn-blutlauge"
          },
          {
            text: "Keine Färbung oder nur Schwarzfärbung",
            subtext: "Keines der erwarteten Ionen.",
            next: "k-unbekannt"
          }
        ]
      },

      "k-al-morin": {
        id: "k-al-morin",
        schrittNummer: 6,
        typ: "frage",
        titel: "Bestätigung Aluminium: Morin-Test unter UV-Licht",
        untertitel: "Fluoreszenz-Nachweis",
        nachweis: "K01",
        frage: "Zeigt die schwach saure Probelösung nach Morin-Zugabe unter UV-Licht eine grüne Fluoreszenz?",
        optionen: [
          {
            text: "Ja – leuchtend grüne Fluoreszenz",
            subtext: "Aluminium eindeutig bestätigt.",
            next: "k-res-al"
          },
          {
            text: "Nein – keine Fluoreszenz",
            subtext: "Aluminium nicht bestätigt.",
            next: "k-unbekannt"
          }
        ]
      },
      "k-res-al": {
        id: "k-res-al",
        typ: "ergebnis",
        ion: "Al3+",
        bestaetigung: ["K02"],
        fazit: "Das Kation der Probe ist Aluminium (Al³⁺)."
      },

      "k-zn-blutlauge": {
        id: "k-zn-blutlauge",
        schrittNummer: 6,
        typ: "frage",
        titel: "Bestätigung Zink: Fällung mit rotem Blutlaugensalz",
        untertitel: "Hexacyanidoferrat(III)-Fällung",
        nachweis: "K33",
        frage: "Fällt bei Zugabe von rotem Blutlaugensalz K₃[Fe(CN)₆] ein gelber Niederschlag aus?",
        optionen: [
          {
            text: "Ja – gelber Niederschlag von Zn₃[Fe(CN)₆]₂",
            subtext: "Zink eindeutig bestätigt.",
            next: "k-res-zn"
          },
          {
            text: "Nein – keine Fällung",
            subtext: "Zink nicht bestätigt.",
            next: "k-unbekannt"
          }
        ]
      },
      "k-res-zn": {
        id: "k-res-zn",
        typ: "ergebnis",
        ion: "Zn2+",
        bestaetigung: ["K32"],
        fazit: "Das Kation der Probe ist Zink (Zn²⁺)."
      },

      // Unbekanntes Kation
      "k-unbekannt": {
        id: "k-unbekannt",
        typ: "unbekannt",
        titel: "Kein eindeutiges Kation gefunden",
        fazit: "Die beobachteten Reaktionen passen zu keinem der 15 im Datensatz enthaltenen Kationen. Mögliche Ursachen: Es liegt ein Kation vor, das im Datensatz nicht abgedeckt ist (z. B. Na⁺, Mg²⁺, Ba²⁺, Ni²⁺), oder ein Durchführungsschritt lieferte ein abweichendes Ergebnis."
      }
    }
  },

  anionen: {
    titel: "Anionen-Bestimmungsschlüssel",
    beschreibung: "Systematische Bestimmung von 10 Anionen über die Säure-Vorprobe (Gasentwicklung), die Fällungsgruppe mit Silbernitrat und spezifische Einzelnachweise.",
    start: "a-gas-hcl",
    knoten: {
      // 1. Vorprobe Salzsäure (Gasbildung)
      "a-gas-hcl": {
        id: "a-gas-hcl",
        schrittNummer: 1,
        typ: "frage",
        titel: "Vorprobe: Versetzen der festen Probe mit 6 M Salzsäure",
        untertitel: "Prüfung auf Gasentwicklung (flüchtige Säuren)",
        nachweis: "A05",
        frage: "Was beobachten Sie, wenn Sie die feste Probe im Reagenzglas mit 6 M Salzsäure versetzen?",
        optionen: [
          {
            text: "Starke Gasentwicklung (Aufschäumen); ein vorsichtig eingeführter glimmender Holzspan erlischt sofort",
            subtext: "Kohlendioxid CO₂ entweicht und belegt Carbonat (CO₃²⁻).",
            next: "a-res-co3"
          },
          {
            text: "Gasentwicklung mit stechendem, durchdringendem Geruch nach faulen Eiern (H₂S)",
            subtext: "Schwefelwasserstoff entweicht und belegt Sulfid (S²⁻).",
            next: "a-res-s2"
          },
          {
            text: "Keine auffällige Gasentwicklung / keine Reaktion",
            subtext: "Carbonat und Sulfid sind ausgeschlossen.",
            next: "a-agno3"
          }
        ]
      },
      "a-res-co3": {
        id: "a-res-co3",
        typ: "ergebnis",
        ion: "CO32-",
        bestaetigung: [],
        fazit: "Das Anion der Probe ist Carbonat (CO₃²⁻)."
      },
      "a-res-s2": {
        id: "a-res-s2",
        typ: "ergebnis",
        ion: "S2-",
        bestaetigung: [],
        sicherheit: "Vorsicht: Schwefelwasserstoff H₂S ist hochgiftig! Nur im Abzug arbeiten.",
        fazit: "Das Anion der Probe ist Sulfid (S²⁻)."
      },

      // 2. Gruppenfällung mit Silbernitrat
      "a-agno3": {
        id: "a-agno3",
        schrittNummer: 2,
        typ: "frage",
        titel: "Gruppenreaktion mit Silbernitrat (AgNO₃)",
        untertitel: "Fällungsreaktion in salpetersaurer bzw. neutraler Lösung",
        nachweis: "A06",
        spezialBild: { src: "AG_vergleich.jpg", label: "Farben der Silberhalogenid-Fällungen im Vergleich: Cl⁻ (weiß), Br⁻ (fahlgelb), I⁻ (gelb)" },
        frage: "Welche Fällung entsteht bei Zugabe von Silbernitratlösung (AgNO₃)?",
        optionen: [
          {
            text: "Rein weißer, käsiger Niederschlag",
            subtext: "Mögliche Anionen: Chlorid (Cl⁻) oder Oxalat (C₂O₄²⁻).",
            next: "a-weiss-kmno4"
          },
          {
            text: "Fahlgelber (heller, creme-gelblicher) Niederschlag",
            subtext: "Hinweis auf Bromid (Br⁻).",
            next: "a-br-nh3"
          },
          {
            text: "Deutlich gelber bis kanariengelber Niederschlag",
            subtext: "Mögliche Anionen: Iodid (I⁻) oder Phosphat (PO₄³⁻).",
            next: "a-gelb-nh3"
          },
          {
            text: "Keine Fällung / Lösung bleibt völlig klar",
            subtext: "Silbernitrat-Gruppe negativ. Noch möglich: Nitrat (NO₃⁻), Fluorid (F⁻), Silikat (SiO₂).",
            next: "a-ringprobe"
          }
        ]
      },

      // Weißer Niederschlag: Oxalat vs. Chlorid
      "a-weiss-kmno4": {
        id: "a-weiss-kmno4",
        schrittNummer: 3,
        typ: "frage",
        titel: "Unterscheidung Chlorid / Oxalat: Entfärbung von Permanganat",
        untertitel: "Redoxreaktion mit Kaliumpermanganat (KMnO₄)",
        nachweis: "A03",
        frage: "Wird eine schwach saure, hellviolette KMnO₄-Lösung beim Erwärmen mit der Probe entfärbt?",
        optionen: [
          {
            text: "Ja – die vorher stark violette Lösung entfärbt sich rasch und vollständig",
            subtext: "Oxalat wird zu Kohlendioxid oxidiert. Belegt Oxalat (C₂O₄²⁻).",
            next: "a-res-c2o4"
          },
          {
            text: "Nein – Lösung bleibt violett",
            subtext: "Oxalat ist ausgeschlossen. Noch möglich: Chlorid (Cl⁻).",
            next: "a-cl-nh3"
          }
        ]
      },
      "a-res-c2o4": {
        id: "a-res-c2o4",
        typ: "ergebnis",
        ion: "C2O42-",
        bestaetigung: ["A04"],
        fazit: "Das Anion der Probe ist Oxalat (C₂O₄²⁻)."
      },

      "a-cl-nh3": {
        id: "a-cl-nh3",
        schrittNummer: 4,
        typ: "frage",
        titel: "Bestätigung Chlorid: Löslichkeit in verdünntem Ammoniak",
        untertitel: "Komplexierung zu Diamminsilber(I)",
        nachweis: "A06",
        frage: "Löst sich der weiße Niederschlag bei Zugabe von verdünnter Ammoniaklösung (NH₃) auf?",
        optionen: [
          {
            text: "Ja – Niederschlag löst sich bereits in verdünntem Ammoniak vollständig und klar auf",
            subtext: "Bildung des löslichen Diamminsilber(I)-Komplexes [Ag(NH₃)₂]⁺.",
            next: "a-res-cl"
          },
          {
            text: "Nein – Niederschlag löst sich nicht auf",
            subtext: "Chlorid nicht bestätigt.",
            next: "a-unbekannt"
          }
        ]
      },
      "a-res-cl": {
        id: "a-res-cl",
        typ: "ergebnis",
        ion: "Cl-",
        bestaetigung: [],
        fazit: "Das Anion der Probe ist Chlorid (Cl⁻)."
      },

      // Fahlgelber Niederschlag: Bromid
      "a-br-nh3": {
        id: "a-br-nh3",
        schrittNummer: 3,
        typ: "frage",
        titel: "Prüfung Bromid: Löslichkeit des Silberbromids in Ammoniak",
        untertitel: "Differenzierung der Silberhalogenide durch NH₃-Konzentration",
        nachweis: "A01",
        frage: "Wie verhält sich der fahlgelbe Niederschlag bei Behandlung mit Ammoniak?",
        optionen: [
          {
            text: "In verdünntem NH₃ praktisch unlöslich, löst sich aber in konzentrierter Ammoniaklösung auf",
            subtext: "Charakteristisches Löslichkeitsverhalten von AgBr.",
            next: "a-res-br"
          },
          {
            text: "Verhält sich anders / unlöslich selbst in konz. NH₃",
            subtext: "Bromid nicht bestätigt.",
            next: "a-unbekannt"
          }
        ]
      },
      "a-res-br": {
        id: "a-res-br",
        typ: "ergebnis",
        ion: "Br-",
        bestaetigung: ["A02"],
        fazit: "Das Anion der Probe ist Bromid (Br⁻)."
      },

      // Gelber Niederschlag: Iodid vs. Phosphat
      "a-gelb-nh3": {
        id: "a-gelb-nh3",
        schrittNummer: 3,
        typ: "frage",
        titel: "Unterscheidung Iodid / Phosphat: Löslichkeit in Ammoniak",
        untertitel: "Prüfung mit konzentrierter Ammoniaklösung",
        nachweis: "A08",
        frage: "Löst sich der gelbe Niederschlag in konzentrierter Ammoniaklösung (NH₃) auf?",
        optionen: [
          {
            text: "Nein – der gelbe Niederschlag ist selbst in konzentriertem Ammoniak unlöslich (AgI)",
            subtext: "Iodid eindeutig belegt.",
            next: "a-res-i"
          },
          {
            text: "Ja – der intensiv gelbe Niederschlag löst sich in Ammoniak klar auf (Ag₃PO₄)",
            subtext: "Silberphosphat löst sich in Ammoniak; Hinweis auf Phosphat (PO₄³⁻).",
            next: "a-po4-zrocl2"
          }
        ]
      },
      "a-res-i": {
        id: "a-res-i",
        typ: "ergebnis",
        ion: "I-",
        bestaetigung: ["A09"],
        fazit: "Das Anion der Probe ist Iodid (I⁻)."
      },

      "a-po4-zrocl2": {
        id: "a-po4-zrocl2",
        schrittNummer: 4,
        typ: "frage",
        titel: "Bestätigung Phosphat: Fällung mit Zirconylchlorid (ZrOCl₂)",
        untertitel: "Spezifischer Phosphat-Nachweis",
        nachweis: "A13",
        frage: "Fällt bei Zugabe von ZrOCl₂-Lösung (ggf. unter leichtem Erwärmen) ein feiner Niederschlag aus?",
        optionen: [
          {
            text: "Ja – feiner weißer, gallertiger Niederschlag (vor dunklem Grund gut sichtbar)",
            subtext: "Zirconiumphosphat Zr₃(PO₄)₄ fällt spezifisch aus.",
            next: "a-res-po4"
          },
          {
            text: "Nein – keine Fällung",
            subtext: "Phosphat nicht bestätigt.",
            next: "a-unbekannt"
          }
        ]
      },
      "a-res-po4": {
        id: "a-res-po4",
        typ: "ergebnis",
        ion: "PO43-",
        bestaetigung: ["A12"],
        fazit: "Das Anion der Probe ist Phosphat (PO₄³⁻)."
      },

      // Lösliche Gruppe (AgNO3 negativ): Nitrat, Fluorid, Silikat
      "a-ringprobe": {
        id: "a-ringprobe",
        schrittNummer: 3,
        typ: "frage",
        titel: "Nachweis auf Nitrat: Ringprobe",
        untertitel: "Redoxreaktion mit Eisen(II) und Unterschichten mit Schwefelsäure",
        nachweis: "A11",
        frage: "Was beobachten Sie an der Phasengrenze nach dem Unterschichten mit konzentrierter H₂SO₄?",
        optionen: [
          {
            text: "An der Grenzfläche bildet sich ein deutlicher brauner Ring des Nitrosylkomplexes [Fe(H₂O)₅NO]²⁺",
            subtext: "Nitrat eindeutig belegt.",
            next: "a-res-no3"
          },
          {
            text: "Keine Ringbildung / Phasengrenze bleibt farblos",
            subtext: "Nitrat ist ausgeschlossen. Noch möglich: Fluorid (F⁻), Silikat (SiO₂).",
            next: "a-aetzprobe"
          }
        ]
      },
      "a-res-no3": {
        id: "a-res-no3",
        typ: "ergebnis",
        ion: "NO3-",
        bestaetigung: ["A10"],
        fazit: "Das Anion der Probe ist Nitrat (NO₃⁻)."
      },

      "a-aetzprobe": {
        id: "a-aetzprobe",
        schrittNummer: 4,
        typ: "frage",
        titel: "Ätzprobe im Bleitiegel (Fluorid)",
        untertitel: "Reaktion mit konzentrierter Schwefelsäure und Glasätzung durch HF",
        nachweis: "A07",
        frage: "Zeigt die abgewaschene Glasplatte an der Tiegelöffnung eine eingeätzte, raue Stelle?",
        optionen: [
          {
            text: "Ja – Glasplatte ist an der exponierten Stelle weißlich beschlagen und deutlich rau",
            subtext: "Fluorwasserstoff HF hat das Glas angegriffen. Belegt Fluorid (F⁻).",
            next: "a-res-f"
          },
          {
            text: "Nein – Glasplatte bleibt völlig glatt und unversehrt",
            subtext: "Fluorid ist ausgeschlossen. Noch möglich: Silikat (SiO₂).",
            next: "a-silikat-bleitiegel"
          }
        ]
      },
      "a-res-f": {
        id: "a-res-f",
        typ: "ergebnis",
        ion: "F-",
        bestaetigung: [],
        sicherheit: "Vorsicht: Fluorwasserstoff (HF) ist extrem giftig und ätzend! Nur im Abzug durchführen.",
        fazit: "Das Anion der Probe ist Fluorid (F⁻)."
      },

      "a-silikat-bleitiegel": {
        id: "a-silikat-bleitiegel",
        schrittNummer: 5,
        typ: "frage",
        titel: "Bleitiegelprobe auf Silikat (Kieselsäure)",
        untertitel: "Reaktion mit CaF₂ und H₂SO₄; Nachweis am feuchten Filterpapier",
        nachweis: "A14",
        frage: "Scheidet sich auf dem feuchten schwarzen Filterpapier über dem Tiegel ein weißer Fleck ab?",
        optionen: [
          {
            text: "Ja – weißer gallertiger Fleck von Kieselsäure H₂SiO₃ auf dem Filterpapier",
            subtext: "Silikat eindeutig bestätigt.",
            next: "a-res-sio2"
          },
          {
            text: "Nein – kein Fleck sichtbar",
            subtext: "Silikat nicht bestätigt.",
            next: "a-unbekannt"
          }
        ]
      },
      "a-res-sio2": {
        id: "a-res-sio2",
        typ: "ergebnis",
        ion: "SiO2",
        bestaetigung: [],
        fazit: "Das Anion der Probe ist Silikat (SiO₃²⁻ / SiO₂)."
      },

      // Unbekanntes Anion
      "a-unbekannt": {
        id: "a-unbekannt",
        typ: "unbekannt",
        titel: "Kein eindeutiges Anion gefunden",
        fazit: "Die Beobachtungen passen zu keinem der 10 im Datensatz enthaltenen Anionen. Mögliche Ursachen: Es liegt ein anderes Anion vor (z. B. Sulfat SO₄²⁻, Acetat), oder eine Reaktion verlief unvollständig."
      }
    }
  }
};
