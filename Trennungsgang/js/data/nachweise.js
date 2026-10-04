// Qualitative Analyse – Nachweis-Datensatz (48 Nachweise, korrigierte Fassung)
if (typeof window === "undefined") { global.window = {}; }
window.APP_DATA = window.APP_DATA || {};
var APP_DATA = window.APP_DATA;

APP_DATA.ionen = {
  "Al3+":   { id: "Al3+",   name: "Aluminium",  formel: "Al^3+",   art: "kation", gruppe: "G3" },
  "NH4+":  { id: "NH4+",  name: "Ammonium",   formel: "NH4^+",   art: "kation", gruppe: "G5" },
  "Sb3+":  { id: "Sb3+",  name: "Antimon",    formel: "Sb^3+",   art: "kation", gruppe: "G2" },
  "Bi3+":  { id: "Bi3+",  name: "Bismut",     formel: "Bi^3+",   art: "kation", gruppe: "G2" },
  "Ca2+":  { id: "Ca2+",  name: "Calcium",    formel: "Ca^2+",   art: "kation", gruppe: "G4" },
  "Cr3+":  { id: "Cr3+",  name: "Chrom",      formel: "Cr^3+",   art: "kation", gruppe: "G3" },
  "Co2+":  { id: "Co2+",  name: "Cobalt",     formel: "Co^2+",   art: "kation", gruppe: "G3" },
  "Fe2+":  { id: "Fe2+",  name: "Eisen(II)",  formel: "Fe^2+",   art: "kation", gruppe: "G3" },
  "Fe3+":  { id: "Fe3+",  name: "Eisen(III)", formel: "Fe^3+",   art: "kation", gruppe: "G3" },
  "K+":    { id: "K+",    name: "Kalium",     formel: "K^+",     art: "kation", gruppe: "G5" },
  "Cu2+":  { id: "Cu2+",  name: "Kupfer",     formel: "Cu^2+",   art: "kation", gruppe: "G2" },
  "Li+":   { id: "Li+",   name: "Lithium",    formel: "Li^+",    art: "kation", gruppe: "G5" },
  "Mn2+":  { id: "Mn2+",  name: "Mangan",     formel: "Mn^2+",   art: "kation", gruppe: "G3" },
  "Sr2+":  { id: "Sr2+",  name: "Strontium",  formel: "Sr^2+",   art: "kation", gruppe: "G4" },
  "Zn2+":  { id: "Zn2+",  name: "Zink",       formel: "Zn^2+",   art: "kation", gruppe: "G3" },
  "Br-":   { id: "Br-",   name: "Bromid",     formel: "Br^-",    art: "anion",  gruppe: "AN" },
  "C2O42-":{ id: "C2O42-",name: "Oxalat",     formel: "C2O4^2-", art: "anion",  gruppe: "AN" },
  "CO32-": { id: "CO32-", name: "Carbonat",   formel: "CO3^2-",  art: "anion",  gruppe: "AN" },
  "Cl-":   { id: "Cl-",   name: "Chlorid",    formel: "Cl^-",    art: "anion",  gruppe: "AN" },
  "F-":    { id: "F-",    name: "Fluorid",    formel: "F^-",     art: "anion",  gruppe: "AN" },
  "I-":    { id: "I-",    name: "Iodid",      formel: "I^-",     art: "anion",  gruppe: "AN" },
  "NO3-":  { id: "NO3-",  name: "Nitrat",     formel: "NO3^-",   art: "anion",  gruppe: "AN" },
  "PO43-": { id: "PO43-", name: "Phosphat",   formel: "PO4^3-",  art: "anion",  gruppe: "AN" },
  "SiO2":  { id: "SiO2",  name: "Silikat",    formel: "SiO3^2- / SiO2", art: "anion", gruppe: "AN" },
  "S2-":   { id: "S2-",   name: "Sulfid",     formel: "S^2-",    art: "anion",  gruppe: "AN" }
};

APP_DATA.nachweise = {
  // --- KATIONEN ---
  "K01": {
    id: "K01",
    ion: "Al3+",
    gruppe: "G3",
    titel: "Morin-Test",
    durchfuehrung: [
      "Probelösung neutral bzw. schwach essigsauer einstellen.",
      "Einige Tropfen Morin-Lösung zugeben.",
      "Lösung unter UV-Licht betrachten."
    ],
    beobachtung: "Grüne Fluoreszenz unter UV-Anregung.",
    gleichung: ["Al^3+ + 3 Morin -> [Al(Morin)3]"],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K02"],
    bilder: [
      { src: "K01_nachher.jpg", label: "Grüne Fluoreszenz unter UV-Licht", typ: "nachher" }
    ]
  },
  "K02": {
    id: "K02",
    ion: "Al3+",
    gruppe: "G3",
    titel: "Thénards Blau",
    durchfuehrung: [
      "Magnesiarinne in der Bunsenbrennerflamme gründlich ausglühen.",
      "Aluminiumsalz mit wenig verdünnter Cobalt(II)-nitratlösung Co(NO3)2 versetzen.",
      "In der oxidierenden Flamme kräftig erhitzen.",
      "Hinweis: Ein Überschuss an Co(NO3)2 führt durch Bildung von schwarzem Co3O4 zu einer unerwünschten Schwarzfärbung."
    ],
    beobachtung: "Charakteristische blaue Färbung (Cobaltaluminat CoAl2O4).",
    gleichung: ["Al2O3 + Co(NO3)2 -> CoAl2O4 + 2 NO2 + 0.5 O2"],
    stoerungen: ["Überschuss an Co(NO3)2 führt zu schwarzem Co3O4."],
    sicherheit: null,
    weitere: ["K01"],
    bilder: [
      { src: "K02_nachher.jpg", label: "Blaufärbung auf der Magnesiarinne", typ: "nachher" }
    ]
  },
  "K03": {
    id: "K03",
    ion: "NH4+",
    gruppe: "G5",
    titel: "Sublimation von Ammoniumsalzen",
    durchfuehrung: [
      "Festes Salz in ein trockenes Reagenzglas geben.",
      "Im oberen Teil des Reagenzglases vorsichtig mit dem Bunsenbrenner erhitzen."
    ],
    beobachtung: "Dichter weißer Rauch und weißer Beschlag an den kühleren Reagenzglaswänden.",
    gleichung: ["NH4Cl <-> NH3 + HCl"],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K04"],
    bilder: [
      { src: "K03_vorher.jpg", label: "Festsubstanz vor dem Erhitzen", typ: "vorher" },
      { src: "K03_nachher-1.jpg", label: "Dichter weißer Rauch beim Erhitzen", typ: "nachher" },
      { src: "K03_nachher-2.jpg", label: "Sublimierter Beschlag an der Reagenzglaswand", typ: "nachher" }
    ]
  },
  "K04": {
    id: "K04",
    ion: "NH4+",
    gruppe: "G5",
    titel: "Verhalten gegen Basen (Kreuzprobe / Gasnachweis)",
    durchfuehrung: [
      "Methode 1 (Uhrglas-Kreuzprobe): Feste Probe auf ein Uhrglas geben und mit wenig Natronlauge (NaOH) versetzen. Ein zweites Uhrglas mit einem feuchten roten bzw. Universal-Indikatorpapier an der Unterseite wie eine Glocke darüberlegen.",
      "Methode 2 (Reagenzglas & Pinzette): Feste Probe im Reagenzglas mit wenig NaOH versetzen und leicht handwarm erwärmen (nicht kochen). Ein feuchtes rotes Indikatorpapier mit der Pinzette vorsichtig über die Öffnung halten.",
      "Wichtig: Das Indikatorpapier darf die Flüssigkeit oder benetzte Glasränder niemals berühren, da NaOH selbst stark alkalisch ist! Nur das aufsteigende NH3-Gas darf das Papier erreichen."
    ],
    beobachtung: "Ammoniakgas NH3 entweicht; das feuchte Indikatorpapier in der Gasphase färbt sich rasch blau (alkalisch); stechender Geruch.",
    gleichung: ["NH4^+ + OH^- -> NH3^ + H2O"],
    stoerungen: ["Direkter Kontakt mit Natronlauge führt zu falsch-positiven Ergebnissen (NaOH ist selbst alkalisch)."],
    sicherheit: "Dämpfe nicht direkt einatmen (stechender NH3-Geruch). Nicht kochen, um NaOH-Spritzer zu vermeiden.",
    weitere: ["K03"],
    bilder: [
      { src: "K04_vorher.jpg", label: "Aufbau mit zwei Uhrgläsern und feuchtem pH-Papier", typ: "vorher" },
      { src: "K04_nachher.jpg", label: "Blaufärbung des pH-Papiers durch aufsteigendes NH3", typ: "nachher" }
    ]
  },
  "K05": {
    id: "K05",
    ion: "Sb3+",
    gruppe: "G2",
    titel: "Eisennagel-Probe",
    durchfuehrung: [
      "Einen metallisch blanken Eisennagel in die saure Antimonlösung eintauchen.",
      "Kurze Zeit stehen lassen und die Oberfläche prüfen."
    ],
    beobachtung: "Abscheidung eines fest haftenden schwarzen Belags aus elementarem Antimon.",
    gleichung: ["2 Sb^3+ + 3 Fe -> 2 Sb + 3 Fe^2+"],
    stoerungen: ["Bismut Bi^3+ scheidet sich auf Eisen ebenfalls schwarz ab."],
    sicherheit: null,
    weitere: ["K06"],
    bilder: [
      { src: "K05_nachher.jpg", label: "Schwarzer Antimonbelag auf dem Eisennagel", typ: "nachher" }
    ]
  },
  "K06": {
    id: "K06",
    ion: "Sb3+",
    gruppe: "G2",
    titel: "Nachweis als Molybdänblau",
    durchfuehrung: [
      "Probelösung ansäuern.",
      "Molybdophosphorsäure zugeben und die Lösung kurz vorsichtig erhitzen."
    ],
    beobachtung: "Deutliche Blaufärbung durch Reduktion zu Molybdänblau.",
    gleichung: [],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K05"],
    bilder: [
      { src: "K06_nachher.jpg", label: "Intensive Blaufärbung (Molybdänblau)", typ: "nachher" }
    ]
  },
  "K07": {
    id: "K07",
    ion: "Bi3+",
    gruppe: "G2",
    titel: "Eisennagel-Probe",
    durchfuehrung: [
      "Einen blanken Eisennagel in die saure Bismutlösung eintauchen.",
      "Oberfläche beobachten."
    ],
    beobachtung: "Abscheidung eines schwarzen Belags aus elementarem Bismut.",
    gleichung: ["2 Bi^3+ + 3 Fe -> 2 Bi + 3 Fe^2+"],
    stoerungen: ["Antimon Sb^3+ reagiert identisch."],
    sicherheit: null,
    weitere: ["K08"],
    bilder: [
      { src: "K07_nachher.jpg", label: "Schwarzer Bismutbelag auf dem Eisennagel", typ: "nachher" }
    ]
  },
  "K08": {
    id: "K08",
    ion: "Bi3+",
    gruppe: "G2",
    titel: "Nachweis mit Kaliumiodid",
    durchfuehrung: [
      "Zu schwach saurer Probelösung tropfenweise Kaliumiodid-Lösung (KI) geben.",
      "Anschließend weiteres KI im Überschuss zufügen."
    ],
    beobachtung: "Zunächst schwarzer Niederschlag von BiI3; löst sich im Überschuss von Iodid zu einer intensiv orangegelben Lösung von [BiI4]^- auf.",
    gleichung: [
      "Bi^3+ + 3 I^- -> BiI3 v",
      "BiI3 + I^- -> [BiI4]^-"
    ],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K07"],
    bilder: [
      { src: "K08_nachher.jpg", label: "Schwarzer Niederschlag von BiI3 (bzw. orangegelbe Lösung im Überschuss)", typ: "nachher" }
    ]
  },
  "K09": {
    id: "K09",
    ion: "Ca2+",
    gruppe: "G4",
    titel: "Fällung mit Oxalat",
    durchfuehrung: [
      "Probelösung schwach ammoniakalisch bzw. essigsauer einstellen.",
      "Ammoniumoxalat- oder Oxalsäurelösung zugeben."
    ],
    beobachtung: "Weißer, feinkristalliner Niederschlag von Calciumoxalat CaC2O4 (schwerlöslich in Essigsäure, löslich in starken Mineralsäuren).",
    gleichung: ["Ca^2+ + C2O4^2- -> CaC2O4 v"],
    stoerungen: ["Strontium Sr^2+ und Barium Ba^2+ fällen ebenfalls mit Oxalat."],
    sicherheit: null,
    weitere: ["K10"],
    bilder: [
      { src: "K09_nachher.jpg", label: "Weißer Niederschlag von Calciumoxalat", typ: "nachher" }
    ]
  },
  "K10": {
    id: "K10",
    ion: "Ca2+",
    gruppe: "G4",
    titel: "Flammenfärbung",
    durchfuehrung: [
      "Magnesiastäbchen in der rauschenden Brennerflamme ausglühen, bis keine Eigenfärbung mehr auftritt.",
      "In konzentrierte Salzsäure (HCl) tauchen, etwas feste Probe aufnehmen.",
      "In die nicht-leuchtende Brennerflamme halten."
    ],
    beobachtung: "Ziegelrote Flammenfärbung.",
    gleichung: [],
    stoerungen: ["Lithium Li^+ und Strontium Sr^2+ erzeugen ebenfalls rote Flammenfärbungen."],
    sicherheit: null,
    weitere: ["K09"],
    bilder: [
      { src: "K10_nachher.jpg", label: "Ziegelrote Flammenfärbung von Calcium", typ: "nachher" }
    ]
  },
  "K11": {
    id: "K11",
    ion: "Cr3+",
    gruppe: "G3",
    titel: "Oxidation zu Chromat",
    durchfuehrung: [
      "Probelösung mit Natronlauge (NaOH) alkalisch machen.",
      "Wasserstoffperoxid-Lösung (H2O2) zugeben und leicht erwärmen."
    ],
    beobachtung: "Farbumschlag von grünlichem Chrom(III)-hydroxid zu einer intensiv gelben Chromatlösung (CrO4^2-).",
    gleichung: ["2 Cr^3+ + 3 H2O2 + 10 OH^- -> 2 CrO4^2- + 8 H2O"],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K12", "K13"],
    bilder: [
      { src: "K11_NaOH.jpg", label: "Nach Zugabe von NaOH: grünes Cr(OH)3", typ: "NaOH" },
      { src: "K11_H2O2.jpg", label: "Nach Oxidation mit H2O2: gelbe Chromatlösung", typ: "H2O2" }
    ]
  },
  "K12": {
    id: "K12",
    ion: "Cr3+",
    gruppe: "G3",
    titel: "Oxidationsschmelze",
    durchfuehrung: [
      "Feste Chromprobe mit der doppelten Menge einer Mischung aus wasserfreiem Natriumcarbonat Na2CO3 und Kaliumnitrat KNO3 verreiben.",
      "Auf der Magnesiarinne oder im Nickeltiegel kräftig erhitzen."
    ],
    beobachtung: "Gelbfärbung der Schmelze durch Bildung von Natrium- bzw. Kaliumchromat.",
    gleichung: ["Cr2O3 + 3 NO3^- + 2 CO3^2- -> 2 CrO4^2- + 3 NO2^- + 2 CO2"],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K11", "K13"],
    bilder: [
      { src: "K12_nachher.jpg", label: "Gelbe Schmelze auf der Magnesiarinne", typ: "nachher" }
    ]
  },
  "K13": {
    id: "K13",
    ion: "Cr3+",
    gruppe: "G3",
    titel: "Phosphorsalzperle",
    durchfuehrung: [
      "Magnesiastäbchen ausglühen.",
      "Phosphorsalz (NaNH4HPO4) am Stäbchen in der Flamme zu einer klaren Perle schmelzen.",
      "Spuren des Chromsalzes mit der heißen Perle aufnehmen.",
      "Nacheinander in der Oxidations- (OF) und Reduktionsflamme (RF) erhitzen."
    ],
    beobachtung: "Sowohl in der Oxidationsflamme als auch in der Reduktionsflamme smaragdgrün gefärbte Perle.",
    gleichung: [
      "NaNH4HPO4 -> NaPO3 + NH3^ + H2O",
      "3 NaPO3 + Cr2O3 -> Na3PO4 + 2 CrPO4"
    ],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K11", "K12"],
    bilder: [
      { src: "K13_OF.jpg", label: "Oxidationsflamme (OF): smaragdgrün", typ: "OF" },
      { src: "K13_RF.jpg", label: "Reduktionsflamme (RF): smaragdgrün", typ: "RF" }
    ]
  },
  "K14": {
    id: "K14",
    ion: "Co2+",
    gruppe: "G3",
    titel: "Fällung mit Ammoniak",
    durchfuehrung: [
      "Zur Cobalt(II)-lösung tropfenweise verdünnte Ammoniaklösung (NH3) geben.",
      "Beobachten und anschließend NH3 im Überschuss zusetzen."
    ],
    beobachtung: "Zunächst blauer basischer Niederschlag; löst sich im Überschuss von Ammoniak zu einem braun-gelblichen Hexaammincobalt-Komplex [Co(NH3)6]^2+ auf.",
    gleichung: [
      "Co^2+ + 2 OH^- -> Co(OH)2 v",
      "Co(OH)2 + 6 NH3 -> [Co(NH3)6]^2+ + 2 OH^-"
    ],
    stoerungen: ["In Gegenwart von Ammoniumsalzen fällt kein Hydroxid aus; es bildet sich direkt ein löslicher Komplex."],
    sicherheit: null,
    weitere: ["K15", "K16"],
    bilder: [
      { src: "K14_nachher.jpg", label: "Blau-grünlicher Niederschlag bei Zugabe von Ammoniak", typ: "nachher" }
    ]
  },
  "K15": {
    id: "K15",
    ion: "Co2+",
    gruppe: "G3",
    titel: "Verhalten gegen Natronlauge",
    durchfuehrung: [
      "Probelösung mit Natronlauge (NaOH) versetzen.",
      "Den entstehenden Niederschlag im Reagenzglas vorsichtig erhitzen."
    ],
    beobachtung: "Bei Zugabe von NaOH fällt ein blauer basischer Niederschlag aus. Beim Erhitzen wandelt sich dieser in rosa-rotes Cobalt(II)-hydroxid Co(OH)2 um.",
    gleichung: ["Co^2+ + 2 OH^- -> Co(OH)2 v"],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K14", "K16"],
    bilder: [
      { src: "K15_vorher.jpg", label: "Cobalt(II)-Lösung vor der Fällung (rosa)", typ: "vorher" },
      { src: "K15_nachher.jpg", label: "Blauer Niederschlag, schlägt beim Erhitzen nach rot um", typ: "nachher" }
    ]
  },
  "K16": {
    id: "K16",
    ion: "Co2+",
    gruppe: "G3",
    titel: "Phosphorsalzperle",
    durchfuehrung: [
      "Magnesiastäbchen ausglühen.",
      "Phosphorsalz (NaNH4HPO4) zu einer klaren Glasperle schmelzen.",
      "Wenig Cobaltsalz aufnehmen und in OF und RF erhitzen."
    ],
    beobachtung: "Sowohl in der Oxidationsflamme als auch in der Reduktionsflamme intensiv tiefblau gefärbte Perle (Thénards Blau).",
    gleichung: [
      "NaNH4HPO4 -> NaPO3 + NH3^ + H2O",
      "3 NaPO3 + 3 CoO -> Na3PO4 + Co3(PO4)2"
    ],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K14", "K15"],
    bilder: [
      { src: "K16_OF.jpg", label: "Oxidationsflamme (OF): intensiv tiefblau", typ: "OF" },
      { src: "K16_RF.jpg", label: "Reduktionsflamme (RF): intensiv tiefblau", typ: "RF" }
    ]
  },
  "K17": {
    id: "K17",
    ion: "Fe2+",
    gruppe: "G3",
    titel: "Berliner Blau / Turnbulls Blau",
    durchfuehrung: [
      "Bei Fe^3+: Probelösung mit gelbem Blutlaugensalz K4[Fe(CN)6] versetzen.",
      "Bei Fe^2+: Probelösung mit rotem Blutlaugensalz K3[Fe(CN)6] versetzen."
    ],
    beobachtung: "Sofortiges Auftreten einer tiefblauen Färbung bzw. eines tiefblauen Niederschlags (Berliner Blau KFe[Fe(CN)6]).",
    gleichung: [
      "Fe^3+ + K^+ + [Fe(CN)6]^4- -> KFe[Fe(CN)6] v",
      "Fe^2+ + K^+ + [Fe(CN)6]^3- -> KFe[Fe(CN)6] v"
    ],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K18", "K19"],
    bilder: [
      { src: "K17_nachher.jpg", label: "Intensive Blaufärbung (Berliner Blau)", typ: "nachher" }
    ]
  },
  "K18": {
    id: "K18",
    ion: "Fe3+",
    gruppe: "G3",
    titel: "Phosphorsalzperle",
    durchfuehrung: [
      "Magnesiastäbchen ausglühen, Phosphorsalzperle schmelzen.",
      "Wenig Eisensalz aufnehmen und in OF und RF prüfen."
    ],
    beobachtung: "In der Oxidationsflamme gelb bis rotbraun (je nach Sättigung); in der Reduktionsflamme leicht grünlich (Fe^2+).",
    gleichung: [
      "NaNH4HPO4 -> NaPO3 + NH3^ + H2O",
      "3 NaPO3 + 3 FeO -> Na3PO4 + Fe3(PO4)2"
    ],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K17", "K19"],
    bilder: [
      { src: "K18_OF.jpg", label: "Oxidationsflamme (OF): gelb bis braunrot", typ: "OF" },
      { src: "K18_RF.jpg", label: "Reduktionsflamme (RF): hellgrün", typ: "RF" }
    ]
  },
  "K19": {
    id: "K19",
    ion: "Fe3+",
    gruppe: "G3",
    titel: "Stierblutprobe (Thiocyanat-Nachweis)",
    durchfuehrung: [
      "Schwach saure Eisen(III)-probelösung mit einigen Tropfen Kalium- oder Ammoniumthiocyanat-Lösung (KSCN / NH4SCN) versetzen."
    ],
    beobachtung: "Sofortige Bildung einer intensiv blutroten (\"stierblutroten\") Lösung durch Bildung von löslichen Eisen(III)-thiocyanat-Komplexen.",
    gleichung: ["Fe^3+ + 3 SCN^- -> [Fe(SCN)3]"],
    stoerungen: ["Fe^2+ reagiert nicht (spezifisch für Fe^3+)."],
    sicherheit: null,
    weitere: ["K17", "K18"],
    bilder: [
      { src: "K19_nachher-1.jpg", label: "Blutrote Färbung der Lösung", typ: "nachher" },
      { src: "K19_nachher-2.jpg", label: "Intensive Rotfärbung bei Durchsicht", typ: "nachher" }
    ]
  },
  "K20": {
    id: "K20",
    ion: "K+",
    gruppe: "G5",
    titel: "Flammenfärbung",
    durchfuehrung: [
      "Magnesiastäbchen ausglühen, in konz. HCl tauchen und feste Probe aufnehmen.",
      "In die nicht-leuchtende Brennerflamme halten.",
      "Flamme mit bloßem Auge und durch ein blaues Cobaltglas betrachten."
    ],
    beobachtung: "Fahlviolette Flammenfärbung; durch Cobaltglas deutlich sichtbar (gelbes Natriumlicht wird absorbiert).",
    gleichung: [],
    stoerungen: ["Bereits Spuren von Natrium (gelbe Flamme) überdecken die violette Kaliumflamme vollständig (Cobaltglas verwenden)."],
    sicherheit: null,
    weitere: [],
    bilder: [
      { src: "K20_nachher.jpg", label: "Violette Flammenfärbung (durch Cobaltglas)", typ: "nachher" }
    ]
  },
  "K21": {
    id: "K21",
    ion: "Cu2+",
    gruppe: "G2",
    titel: "Nachweis mit Ammoniak",
    durchfuehrung: [
      "Zur Kupfer(II)-lösung tropfenweise verdünnte Ammoniaklösung (NH3) geben.",
      "Anschließend weiteres Ammoniak im Überschuss zufügen."
    ],
    beobachtung: "Zunächst fällt hellblauer Kupfer(II)-hydroxidniederschlag aus; im Überschuss von NH3 löst sich dieser zu einer intensiv tiefblauen Lösung des Tetraamminkupfer(II)-Komplexes [Cu(NH3)4]^2+ auf.",
    gleichung: [
      "Cu^2+ + 2 OH^- -> Cu(OH)2 v",
      "Cu(OH)2 + 4 NH3 -> [Cu(NH3)4]^2+ + 2 OH^-"
    ],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K22"],
    bilder: [
      { src: "K21_nachher.jpg", label: "Tiefblaue Lösung des Tetraamminkupfer(II)-Komplexes", typ: "nachher" }
    ]
  },
  "K22": {
    id: "K22",
    ion: "Cu2+",
    gruppe: "G2",
    titel: "Flammenfärbung",
    durchfuehrung: [
      "Magnesiastäbchen ausglühen, in konz. HCl und in die Probe tauchen.",
      "In die nicht-leuchtende Brennerflamme halten."
    ],
    beobachtung: "Intensive grüne bzw. blaugrüne Flammenfärbung.",
    gleichung: [],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K21"],
    bilder: [
      { src: "K22_nachher.jpg", label: "Leuchtend grüne Flammenfärbung von Kupfer", typ: "nachher" }
    ]
  },
  "K23": {
    id: "K23",
    ion: "Li+",
    gruppe: "G5",
    titel: "Fällung mit Eisenperiodat",
    durchfuehrung: [
      "Probelösung mit Natronlauge (NaOH) alkalisch machen.",
      "Eisenperiodat-Reagenzlösung zugeben."
    ],
    beobachtung: "Weißgelblicher Niederschlag von Li2[FeIO6].",
    gleichung: ["2 Li^+ + [FeIO6]^2- -> Li2[FeIO6] v"],
    stoerungen: ["Ammonium NH4^+ und Natrium Na^+ können stören."],
    sicherheit: null,
    weitere: ["K24", "K25"],
    bilder: [
      { src: "K23_nachher.jpg", label: "Weißgelblicher Niederschlag von Lithiumeisenperiodat", typ: "nachher" }
    ]
  },
  "K24": {
    id: "K24",
    ion: "Li+",
    gruppe: "G5",
    titel: "Fällung mit Phosphat",
    durchfuehrung: [
      "Probelösung mit Natronlauge (NaOH) alkalisch stellen.",
      "Dinatriumhydrogenphosphat Na2HPO4 zugeben.",
      "Die Mischung zum Sieden erhitzen."
    ],
    beobachtung: "Weißer kristalliner Niederschlag von Lithiumphosphat Li3PO4 (fällt erst in der Hitze vollständig aus).",
    gleichung: ["3 Li^+ + HPO4^2- + OH^- -> Li3PO4 v + H2O"],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K23", "K25"],
    bilder: [
      { src: "K24_vorher.jpg", label: "Lösung vor dem Erhitzen", typ: "vorher" },
      { src: "K24_nachher.jpg", label: "Weißer Niederschlag nach dem Erhitzen", typ: "nachher" }
    ]
  },
  "K25": {
    id: "K25",
    ion: "Li+",
    gruppe: "G5",
    titel: "Flammenfärbung",
    durchfuehrung: [
      "Magnesiastäbchen ausglühen, in konz. HCl und feste Probe tauchen.",
      "In die Flamme halten und Flammenfarbe beobachten."
    ],
    beobachtung: "Karminrote Flammenfärbung; im Handspektroskop scharfe rote Linie bei 671 nm neben der Natriumlinie.",
    gleichung: [],
    stoerungen: ["Natrium kann überlagern; Calcium Ca^2+ und Strontium Sr^2+ erzeugen ebenfalls rote Flammen."],
    sicherheit: null,
    weitere: ["K23", "K24"],
    bilder: [
      { src: "K25_nachher.jpg", label: "Karminrote Flammenfärbung von Lithium", typ: "nachher" }
    ]
  },
  "K26": {
    id: "K26",
    ion: "Mn2+",
    gruppe: "G3",
    titel: "Fällung mit Diammoniumhydrogenphosphat und Oxidation",
    durchfuehrung: [
      "Probelösung mit Diammoniumhydrogenphosphat-Lösung (NH4)2HPO4 versetzen.",
      "Anschließend einige Tropfen Wasserstoffperoxid (H2O2, ca. 30 %) zugeben."
    ],
    beobachtung: "Zunächst weißer Niederschlag von Manganammoniumphosphat; schlägt nach Zugabe von H2O2 rasch in braunes Mangan(IV)-oxidhydroxid MnO(OH)2 um.",
    gleichung: [
      "Mn^2+ + NH4^+ + HPO4^2- -> MnNH4PO4 v + H^+",
      "Mn^2+ + H2O2 + 2 OH^- -> MnO(OH)2 v + H2O"
    ],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K27", "K28"],
    bilder: [
      { src: "K26_vorher.jpg", label: "Weißer Niederschlag nach Zugabe von Phosphat", typ: "vorher" },
      { src: "K26_nachher.jpg", label: "Braune Färbung nach Oxidation mit H2O2", typ: "nachher" }
    ]
  },
  "K27": {
    id: "K27",
    ion: "Mn2+",
    gruppe: "G3",
    titel: "Fällung mit Ammoniumsulfid",
    durchfuehrung: [
      "Schwach alkalische Mangan(II)-lösung mit Ammoniumsulfidlösung (NH4)2S versetzen."
    ],
    beobachtung: "Fleischfarbener (hellrosa-brauner) Niederschlag von Mangansulfid MnS.",
    gleichung: ["Mn^2+ + S^2- -> MnS v"],
    stoerungen: [],
    sicherheit: "Abzug benutzen (Sulfidgeruch).",
    weitere: ["K26", "K28"],
    bilder: [
      { src: "K27_nachher.jpg", label: "Charakteristischer fleischfarbener Niederschlag von MnS", typ: "nachher" }
    ]
  },
  "K28": {
    id: "K28",
    ion: "Mn2+",
    gruppe: "G3",
    titel: "Phosphorsalzperle",
    durchfuehrung: [
      "Phosphorsalzperle am Magnesiastäbchen schmelzen.",
      "Wenig Mangansalz aufnehmen und in OF und RF erhitzen."
    ],
    beobachtung: "In der Oxidationsflamme intensiv violett (Mn^3+); in der Reduktionsflamme vollständig entfärbt / farblos (Mn^2+).",
    gleichung: [
      "NaNH4HPO4 -> NaPO3 + NH3^ + H2O",
      "3 NaPO3 + 3 MnO -> Na3PO4 + Mn3(PO4)2"
    ],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K26", "K27"],
    bilder: [
      { src: "K28_OF.jpg", label: "Oxidationsflamme (OF): violett", typ: "OF" },
      { src: "K28_RF.jpg", label: "Reduktionsflamme (RF): farblos", typ: "RF" }
    ]
  },
  "K29": {
    id: "K29",
    ion: "Sr2+",
    gruppe: "G4",
    titel: "Fällung mit gesättigter CaSO4-Lösung (Gipswasser)",
    durchfuehrung: [
      "Eine frisch gesättigte Calciumsulfat-Lösung (CaSO4, Gipswasser) herstellen.",
      "Zur schwach sauren oder neutralen Probelösung geben und einige Minuten beobachten."
    ],
    beobachtung: "Langsam entstehende weiße Trübung bzw. feinkristalliner Niederschlag von Strontiumsulfat SrSO4 (Calcium fällt nicht aus).",
    gleichung: ["CaSO4 + Sr^2+ -> Ca^2+ + SrSO4 v"],
    stoerungen: ["Barium Ba^2+ fällt sofort und ohne Verzögerung aus."],
    sicherheit: null,
    weitere: ["K30", "K31"],
    bilder: [
      { src: "K29_nachher.jpg", label: "Feine weiße Trübung von SrSO4", typ: "nachher" }
    ]
  },
  "K30": {
    id: "K30",
    ion: "Sr2+",
    gruppe: "G4",
    titel: "Fällung mit Natriumrhodizonat",
    durchfuehrung: [
      "Probelösung auf Tüpfelplatte oder im Reagenzglas mit einigen Tropfen frisch bereiteter Natriumrhodizonat-Lösung versetzen."
    ],
    beobachtung: "Rotbrauner bis braunroter Niederschlag von Strontiumrhodizonat.",
    gleichung: [],
    stoerungen: ["Barium Ba^2+ bildet ebenfalls einen roten Rhodizonatniederschlag."],
    sicherheit: null,
    weitere: ["K29", "K31"],
    bilder: []
  },
  "K31": {
    id: "K31",
    ion: "Sr2+",
    gruppe: "G4",
    titel: "Flammenfärbung",
    durchfuehrung: [
      "Magnesiastäbchen ausglühen, in konz. HCl und Probe tauchen.",
      "In die nicht-leuchtende Flamme halten."
    ],
    beobachtung: "Kräftige karminrote bis purpurrote Flammenfärbung; mehrere rote Spektrallinien zwischen 600 und 650 nm.",
    gleichung: [],
    stoerungen: ["Ähnliche Flammenfärbung wie Calcium Ca^2+ (ziegelrot) und Lithium Li^+ (karminrot)."],
    sicherheit: null,
    weitere: ["K29", "K30"],
    bilder: [
      { src: "K31_nachher.jpg", label: "Intensiv rote Flammenfärbung von Strontium", typ: "nachher" }
    ]
  },
  "K32": {
    id: "K32",
    ion: "Zn2+",
    gruppe: "G3",
    titel: "Rinmanns Grün",
    durchfuehrung: [
      "Zinksalz auf ausgeglühter Magnesiarinne mit wenigen Tropfen stark verdünnter Co(NO3)2-Lösung anfeuchten.",
      "In der oxidierenden Flamme kräftig glühen.",
      "Vorsicht: Bei zu viel Co(NO3)2 überdeckt schwarzes Co3O4 die Reaktion."
    ],
    beobachtung: "Deutliche Grünfärbung (Zinkcobaltoxid ZnCo2O4, Rinmanns Grün).",
    gleichung: ["ZnO + 2 Co(NO3)2 -> ZnCo2O4 + 4 NO2 + 0.5 O2"],
    stoerungen: ["Schwermetalle mit farbigen Oxiden stören."],
    sicherheit: null,
    weitere: ["K33"],
    bilder: [
      { src: "K32_nachher.jpg", label: "Grünfärbung auf der Magnesiarinne", typ: "nachher" }
    ]
  },
  "K33": {
    id: "K33",
    ion: "Zn2+",
    gruppe: "G3",
    titel: "Fällung mit rotem Blutlaugensalz",
    durchfuehrung: [
      "Zu neutraler oder essigsaurer Zinklösung Kaliumhexacyanidoferrat(III)-Lösung K3[Fe(CN)6] zugeben."
    ],
    beobachtung: "Gelboranger Niederschlag von Zinkhexacyanidoferrat(III) Zn3[Fe(CN)6]2.",
    gleichung: ["3 Zn^2+ + 2 [Fe(CN)6]^3- -> Zn3[Fe(CN)6]2 v"],
    stoerungen: [],
    sicherheit: null,
    weitere: ["K32"],
    bilder: [
      { src: "K33_nachher.jpg", label: "Gelber Niederschlag bei Zugabe von rotem Blutlaugensalz", typ: "nachher" }
    ]
  },

  // --- ANIONEN ---
  "A01": {
    id: "A01",
    ion: "Br-",
    gruppe: "AN",
    titel: "Fällung mit Silbernitrat",
    durchfuehrung: [
      "Probelösung mit Salpetersäure (HNO3) ansäuern.",
      "Silbernitrat-Lösung (AgNO3) zugeben.",
      "Den Niederschlag mit konzentrierter Ammoniaklösung (NH3) behandeln."
    ],
    beobachtung: "Fahlgelber (hellgelber) Niederschlag von Silberbromid AgBr; schwer löslich in verdünntem NH3, aber löslich in konzentriertem Ammoniak.",
    gleichung: ["Br^- + Ag^+ -> AgBr v"],
    stoerungen: ["Cl^-, I^-, PO4^3-, C2O4^2- geben ebenfalls Fällungen."],
    sicherheit: null,
    weitere: ["A02"],
    bilder: [
      { src: "A01_nachher.jpg", label: "Fahlgelber Niederschlag von AgBr", typ: "nachher" }
    ]
  },
  "A02": {
    id: "A02",
    ion: "Br-",
    gruppe: "AN",
    titel: "Sublimation / Oxidation von Brom",
    durchfuehrung: [
      "Feste Probe im trockenen Reagenzglas mit konzentrierter Schwefelsäure (H2SO4) versetzen.",
      "Vorsichtig über der Brennerflamme erwärmen."
    ],
    beobachtung: "Entwicklung von braunroten Bromdämpfen (Br2) mit stechendem Geruch.",
    gleichung: ["2 Br^- + H2SO4 + 2 H^+ -> Br2 + SO2 + 2 H2O"],
    stoerungen: ["Iodid I^- (violette Dämpfe) und Nitrat NO3^- (braunes NO2)."],
    sicherheit: "Abzug verwenden! Bromdämpfe sind stark ätzend und giftig.",
    weitere: ["A01"],
    bilder: [
      { src: "A02_nachher.jpg", label: "Braunes aufsteigendes Bromgas", typ: "nachher" }
    ]
  },
  "A03": {
    id: "A03",
    ion: "C2O42-",
    gruppe: "AN",
    titel: "Entfärbung von Permanganat",
    durchfuehrung: [
      "Zu schwach saurer Kaliumpermanganatlösung (KMnO4, hellviolett) gelöste Probe geben.",
      "Leicht erwärmen."
    ],
    beobachtung: "Vollständige Entfärbung der violetten Permanganatlösung unter Bildung von Mangan(II) und CO2.",
    gleichung: ["5 H2C2O4 + 2 MnO4^- + 6 H3O^+ -> 10 CO2 + 2 Mn^2+ + 14 H2O"],
    stoerungen: ["Andere Reduktionsmittel (z. B. Sulfid, Iodid) können ebenfalls entfärben."],
    sicherheit: null,
    weitere: ["A04"],
    bilder: [
      { src: "A03_nachher.jpg", label: "Entfärbte Lösung nach Zugabe von Oxalat", typ: "nachher" }
    ]
  },
  "A04": {
    id: "A04",
    ion: "C2O42-",
    gruppe: "AN",
    titel: "Fällung mit Silbernitrat",
    durchfuehrung: [
      "Zur neutralen Probelösung Silbernitratlösung (AgNO3) zugeben.",
      "Löslichkeit des Niederschlags in verdünnter Salpetersäure prüfen."
    ],
    beobachtung: "Weißer käsiger Niederschlag von Silberoxalat Ag2C2O4; löst sich im Gegensatz zu Silberhalogeniden in verdünnter Salpetersäure leicht wieder auf.",
    gleichung: ["2 Ag^+ + C2O4^2- -> Ag2C2O4 v"],
    stoerungen: ["Halogenide und Phosphate fallen ebenfalls mit Silbernitrat."],
    sicherheit: null,
    weitere: ["A03"],
    bilder: [
      { src: "A04_nachher-1.jpg", label: "Weißer Niederschlag von Silberoxalat", typ: "nachher" },
      { src: "A04_nachher-2.jpg", label: "Niederschlag setzt sich am Boden ab", typ: "nachher" }
    ]
  },
  "A05": {
    id: "A05",
    ion: "CO32-",
    gruppe: "AN",
    titel: "Bildung von Kohlendioxid (CO2)",
    durchfuehrung: [
      "Trockene feste Probe im Reagenzglas mit 6 M Salzsäure (HCl) versetzen.",
      "Einen glimmenden Holzspan in den oberen Teil des Reagenzglases halten (nicht in die Flüssigkeit tauchen!)."
    ],
    beobachtung: "Heftiges Aufschäumen und Gasentwicklung; der Glimmspan erlischt sofort durch das entstehende CO2.",
    gleichung: ["CO3^2- + 2 HCl -> CO2^ + H2O + 2 Cl^-"],
    stoerungen: [],
    sicherheit: null,
    weitere: [],
    bilder: [
      { src: "A05_nachher.jpg", label: "Starkes Aufschäumen und CO2-Gasentwicklung", typ: "nachher" }
    ]
  },
  "A06": {
    id: "A06",
    ion: "Cl-",
    gruppe: "AN",
    titel: "Fällung mit Silbernitrat",
    durchfuehrung: [
      "Probelösung mit Salpetersäure (HNO3) ansäuern.",
      "Silbernitratlösung (AgNO3) zugeben.",
      "Den Niederschlag mit verdünnter Ammoniaklösung (NH3) versetzen."
    ],
    beobachtung: "Weißer, käsiger Niederschlag von Silberchlorid AgCl; löst sich bereits in verdünntem Ammoniak vollständig als Diamminsilber(I)-Komplex [Ag(NH3)2]^+ auf.",
    gleichung: [
      "Cl^- + Ag^+ -> AgCl v",
      "AgCl + 2 NH3 -> [Ag(NH3)2]^+ + Cl^-"
    ],
    stoerungen: ["Br^-, I^-, C2O4^2- bilden ebenfalls Niederschläge mit Silbernitrat."],
    sicherheit: null,
    weitere: [],
    bilder: [
      { src: "A06_nachher.jpg", label: "Rein weißer Niederschlag von AgCl", typ: "nachher" }
    ]
  },
  "A07": {
    id: "A07",
    ion: "F-",
    gruppe: "AN",
    titel: "Ätzprobe (Wassertropfenprobe im Bleitiegel)",
    durchfuehrung: [
      "Feste Probe in einen Bleitiegel geben und mit konzentrierter Schwefelsäure (H2SO4) versetzen.",
      "Tiegel mit einer sauberen Glasplatte abdecken und auf dem Wasserbad erwärmen.",
      "Nach einiger Zeit Glasplatte abnehmen, gründlich mit Wasser abspülen und trocknen.",
      "Mit dem Fingernagel über die exponierte Stelle fahren."
    ],
    beobachtung: "Auf der Glasplatte hat sich an der Öffnung eine milchig-weiße, raue Stelle eingeätzt (Glas wurde durch gasförmigen Fluorwasserstoff HF angegriffen).",
    gleichung: [
      "2 F^- + H2SO4 -> 2 HF + SO4^2-",
      "SiO2 + 4 HF -> SiF4 + 2 H2O"
    ],
    stoerungen: [],
    sicherheit: "VORSICHT: Unbedingt im Abzug arbeiten! Es entsteht hochgiftiger und stark ätzender Fluorwasserstoff (HF).",
    weitere: [],
    bilder: [
      { src: "A07_nachher.jpg", label: "Geätzte raue Stelle auf der Glasplatte", typ: "nachher" }
    ]
  },
  "A08": {
    id: "A08",
    ion: "I-",
    gruppe: "AN",
    titel: "Fällung mit Silbernitrat",
    durchfuehrung: [
      "Probelösung mit Salpetersäure (HNO3) ansäuern.",
      "Silbernitratlösung (AgNO3) zugeben.",
      "Löslichkeit des Niederschlags in konzentrierter Ammoniaklösung (NH3) prüfen."
    ],
    beobachtung: "Deutlich kanariengelber Niederschlag von Silberiodid AgI; praktisch unlöslich selbst in konzentriertem Ammoniak.",
    gleichung: ["I^- + Ag^+ -> AgI v"],
    stoerungen: ["Cl^-, Br^-, PO4^3- fallen ebenfalls."],
    sicherheit: null,
    weitere: ["A09"],
    bilder: [
      { src: "A08_nachher.jpg", label: "Gelber Niederschlag von Silberiodid", typ: "nachher" }
    ]
  },
  "A09": {
    id: "A09",
    ion: "I-",
    gruppe: "AN",
    titel: "Sublimation / Oxidation von Iod",
    durchfuehrung: [
      "Feste Probe im Reagenzglas mit konzentrierter Schwefelsäure (H2SO4) versetzen.",
      "Vorsichtig über der Brennerflamme erwärmen."
    ],
    beobachtung: "Entwicklung von intensiven violetten Ioddämpfen (I2), die sich am oberen kühlen Glasrand als glänzende grauschwarze Kristalle niederschlagen.",
    gleichung: ["2 I^- + H2SO4 + 2 H^+ -> I2 + SO2 + 2 H2O"],
    stoerungen: ["Bromid Br^- (braune Dämpfe)."],
    sicherheit: "Abzug verwenden! Ioddämpfe reizen Schleimhäute und Atemwege.",
    weitere: ["A08"],
    bilder: [
      { src: "A09_nachher.jpg", label: "Intensiv violetter Ioddampf im Reagenzglas", typ: "nachher" }
    ]
  },
  "A10": {
    id: "A10",
    ion: "NO3-",
    gruppe: "AN",
    titel: "Nachweis mit Lunge-Reagenzien",
    durchfuehrung: [
      "Probelösung auf einer weißen Tüpfelplatte mit Essigsäure ansäuern.",
      "Eine Spatelspitze Zinkstaub zur Reduktion von Nitrat zu Nitrit zugeben.",
      "Je einen Tropfen Lunge-Reagenz I (Sulfanilsäure) und Lunge-Reagenz II (1-Naphthylamin) zufügen."
    ],
    beobachtung: "Sofortige Bildung eines intensiv roten Azofarbstoffs.",
    gleichung: ["NO3^- + Zn + 2 H3O^+ -> NO2^- + Zn^2+ + 3 H2O"],
    stoerungen: ["Lunge-Reagenzien müssen frisch angesetzt sein; Nitrit NO2^- reagiert bereits ohne Zinkpulver."],
    sicherheit: null,
    weitere: ["A11"],
    bilder: [
      { src: "A10_nachher.jpg", label: "Roter Azofarbstoff auf der Tüpfelplatte", typ: "nachher" }
    ]
  },
  "A11": {
    id: "A11",
    ion: "NO3-",
    gruppe: "AN",
    titel: "Ringprobe",
    durchfuehrung: [
      "Gelöste Probe mit frisch hergestellter Eisen(II)-sulfatlösung (FeSO4) im Reagenzglas mischen.",
      "Reagenzglas schräg halten und vorsichtig an der Wandung mit konzentrierter Schwefelsäure (H2SO4) unterschichten.",
      "Erschütterungen vermeiden und Phasengrenze betrachten."
    ],
    beobachtung: "An der Grenzfläche der beiden Flüssigkeitsschichten bildet sich ein deutlicher brauner Ring des Nitrosyleisen(II)-Komplexes [Fe(H2O)5NO]^2+.",
    gleichung: [
      "3 Fe^2+ + NO3^- + 4 H3O^+ -> 3 Fe^3+ + NO + 6 H2O",
      "[Fe(H2O)6]^2+ + NO -> [Fe(H2O)5NO]^2+ + H2O"
    ],
    stoerungen: ["Iodid und Bromid können durch Oxidation zu Halogenen Ringbildung überlagern."],
    sicherheit: "Vorsicht beim Arbeiten mit konzentrierter Schwefelsäure (stark exotherm beim Mischen).",
    weitere: ["A10"],
    bilder: [
      { src: "A11_nachher.jpg", label: "Brauner Ring an der Phasengrenze", typ: "nachher" }
    ]
  },
  "A12": {
    id: "A12",
    ion: "PO43-",
    gruppe: "AN",
    titel: "Fällung mit Silbernitrat",
    durchfuehrung: [
      "Zur neutralen bis schwach essigsauren Probelösung Silbernitratlösung (AgNO3) geben."
    ],
    beobachtung: "Deutlicher, leuchtend gelber Niederschlag von Silberphosphat Ag3PO4; löst sich in Salpetersäure und in Ammoniak.",
    gleichung: ["PO4^3- + 3 Ag^+ -> Ag3PO4 v"],
    stoerungen: ["Halogenide und Oxalat fällen ebenfalls mit Silbernitrat."],
    sicherheit: null,
    weitere: ["A13"],
    bilder: [
      { src: "A12_nachher.jpg", label: "Leuchtend gelber Niederschlag von Silberphosphat", typ: "nachher" }
    ]
  },
  "A13": {
    id: "A13",
    ion: "PO43-",
    gruppe: "AN",
    titel: "Fällung mit Zirconylchlorid (ZrOCl2)",
    durchfuehrung: [
      "Zur schwach salzsauren Probelösung Zirconylchloridlösung (ZrOCl2) geben.",
      "Bei geringen Phosphatmengen die Mischung leicht erwärmen.",
      "Tipp: Reagenzglas vor ein schwarzes Filterpapier halten."
    ],
    beobachtung: "Feiner weißer gallertartiger Niederschlag von Zirconiumphosphat Zr3(PO4)4.",
    gleichung: ["4 PO4^3- + 3 ZrO^2+ + 6 H3O^+ -> Zr3(PO4)4 v + 9 H2O"],
    stoerungen: [],
    sicherheit: null,
    weitere: ["A12"],
    bilder: [
      { src: "A13_nachher.jpg", label: "Feiner weißer Niederschlag vor dunklem Hintergrund", typ: "nachher" }
    ]
  },
  "A14": {
    id: "A14",
    ion: "SiO2",
    gruppe: "AN",
    titel: "Bleitiegelprobe (Kieselsäure-Nachweis)",
    durchfuehrung: [
      "Feste Probe im Bleitiegel mit der gleichen Menge Calciumfluorid CaF2 (Flussspat) mischen.",
      "Mit 1 M Schwefelsäure (H2SO4) versetzen und den Tiegel sofort mit dem Deckel schließen.",
      "Auf die zentrale Öffnung im Deckel ein feuchtes, schwarzes Filterpapier legen.",
      "Tiegel vorsichtig auf dem siedenden Wasserbad erwärmen."
    ],
    beobachtung: "Auf dem feuchten schwarzen Filterpapier scheidet sich ein weißer Ring bzw. Fleck von gallertiger Kieselsäure H2SiO3 ab.",
    gleichung: [
      "CaF2 + H2SO4 -> CaSO4 + 2 HF",
      "4 HF + SiO2 -> SiF4 + 2 H2O",
      "SiF4 + 3 H2O -> H2SiO3 v + 4 HF"
    ],
    stoerungen: [],
    sicherheit: "Im Abzug arbeiten; HF entsteht im Tiegel.",
    weitere: [],
    bilder: [
      { src: "A14_nachher.jpg", label: "Weißer Kieselsäurefleck auf dem schwarzen Filterpapier", typ: "nachher" }
    ]
  },
  "A15": {
    id: "A15",
    ion: "S2-",
    gruppe: "AN",
    titel: "Ansäuern und H2S-Bildung",
    durchfuehrung: [
      "Feste Probe im Reagenzglas mit 6 M Salzsäure (HCl) versetzen.",
      "Vorsichtig den Geruch prüfen oder ein mit Bleiacetat getränktes Filterpapier über die Öffnung halten."
    ],
    beobachtung: "Gasentwicklung mit durchdringendem Geruch nach faulen Eiern (H2S); Bleiacetatpapier schwärzt sich (PbS).",
    gleichung: ["S^2- + 2 HCl -> H2S^ + 2 Cl^-"],
    stoerungen: [],
    sicherheit: "VORSICHT: Schwefelwasserstoff (H2S) ist hochgiftig und riecht stark! Nur im funktionierenden Abzug durchführen.",
    weitere: [],
    bilder: []
  }
};
