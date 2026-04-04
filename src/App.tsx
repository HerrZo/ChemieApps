import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ZmwwApp } from './modules/zmww/ZmwwApp';
import { AlkaneApp } from './modules/alkane-trainer/AlkaneApp';
import { GasApp } from './modules/gasreaktionen/GasApp';
import { PolaritaetApp } from './modules/molekuelpolaritaet/PolaritaetApp';
import { WechselwirkungenApp } from './modules/wechselwirkungen/WechselwirkungenApp';

function Home() {
  return (
    <div className="home-dashboard">
      <h1>👨‍🔬 BioApps: Chemie-Lernplattform</h1>
      <p>Wähle dein Lernmodul aus:</p>
      <div className="module-grid">
        <Link to="/zmww" className="module-card">
          <h3>⚛️ ZMWW</h3>
          <p>Zwischenmolekulare Wechselwirkungen</p>
        </Link>
        <Link to="/alkane" className="module-card">
          <h3>🔥 Alkane-Verbrennung</h3>
          <p>Guide, Trainer und Praxis-Quiz</p>
        </Link>
        <Link to="/gasreaktionen" className="module-card">
          <h3>⚗️ Gasreaktionen</h3>
          <p>Avogadro-Gesetz & Volumen</p>
        </Link>
        <Link to="/polaritaet" className="module-card">
          <h3>⚡ Molekülpolarität</h3>
          <p>Dipole und Ladungsverteilung</p>
        </Link>
        <Link to="/wechselwirkungen" className="module-card">
          <h3>🔬 Wechselwirkungen (Erweitert)</h3>
          <p>Tiefgehende Betrachtung von Molekülkräften</p>
        </Link>
      </div>
    </div>
  );
}

export function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="global-nav">
          <Link to="/" className="nav-logo">BioApps Home</Link>
        </nav>
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zmww" element={<ZmwwApp />} />
            <Route path="/alkane" element={<AlkaneApp />} />
            <Route path="/gasreaktionen" element={<GasApp />} />
            <Route path="/polaritaet" element={<PolaritaetApp />} />
            <Route path="/wechselwirkungen" element={<WechselwirkungenApp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
