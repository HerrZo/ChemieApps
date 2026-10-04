import http.server
import socketserver
import threading
import subprocess
import time
import os

PORT = 8994
DIRECTORY = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

server = socketserver.TCPServer(("", PORT), Handler)
t = threading.Thread(target=server.serve_forever)
t.daemon = True
t.start()

edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

out_dir = os.path.join(DIRECTORY, "tools", "screenshots")
os.makedirs(out_dir, exist_ok=True)

# Wir erstellen auch eine Testseite, die einen Zustand mit gefundenem Ion simuliert
state_test_html = """
<!DOCTYPE html>
<html>
<head>
<script>
// Zustand für Calcium setzen
const testState = {
  mode: "kationen",
  currentNodeId: "k-res-ca",
  history: [
    { nodeId: "k-nh4", optionIndex: 1, chosenText: "Keine Veränderung; pH-Papier bleibt neutral", subtext: "Ammonium ist ausgeschlossen." },
    { nodeId: "k-flamme", optionIndex: 2, chosenText: "Rot (ziegelrot, purpurrot oder karminrot)", subtext: "Mögliche Ionen: Ca2+, Sr2+, Li+" },
    { nodeId: "k-rot-cas04", optionIndex: 1, chosenText: "Nein – Lösung bleibt völlig klar", subtext: "Strontium ist ausgeschlossen." },
    { nodeId: "k-rot-oxalat", optionIndex: 0, chosenText: "Ja – weißer Niederschlag von Calciumoxalat CaC2O4", subtext: "Belegt Calcium." }
  ],
  protokollMeta: {
    bearbeiter: "cand. chem. Max Mustermann",
    datum: "2026-10-04",
    probenNummer: "Probe K-07",
    notizen: "Flammenfärbung ziegelrot. Gipswasser-Probe negativ. Nachweis mit Ammoniumoxalat positiv."
  }
};
localStorage.setItem("qa_analyse_state_v1", JSON.stringify(testState));
window.location.href = "index.html#/kationen";
</script>
</head>
<body></body>
</html>
"""
with open(os.path.join(DIRECTORY, "tools", "setup_result.html"), "w", encoding="utf-8") as f:
    f.write(state_test_html)

shots = [
    ("start.png", f"http://localhost:{PORT}/index.html#/", "1440,900"),
    ("kationen_schritt1.png", f"http://localhost:{PORT}/index.html#/kationen", "1440,900"),
    ("anionen_schritt1.png", f"http://localhost:{PORT}/index.html#/anionen", "1440,900"),
    ("katalog.png", f"http://localhost:{PORT}/index.html#/katalog", "1440,900"),
    ("ergebnis_calcium.png", f"http://localhost:{PORT}/tools/setup_result.html", "1440,900"),
    ("protokoll.png", f"http://localhost:{PORT}/index.html#/protokoll", "1440,900"),
    ("mobile_kationen.png", f"http://localhost:{PORT}/index.html#/kationen", "390,844"),
]

for name, url, window_size in shots:
    out_file = os.path.join(out_dir, name)
    cmd = [
        edge_path,
        "--headless",
        "--disable-gpu",
        f"--window-size={window_size}",
        f"--screenshot={out_file}",
        url
    ]
    print(f"Erstelle Screenshot: {name} von {url}...")
    subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    time.sleep(0.5)

server.shutdown()
print("Alle Screenshots erfolgreich erstellt!")
