import React, { useState, useEffect, useRef } from 'react';
import {
  STATES_INFO,
  PHASE_TRANSITIONS,
  MISCONCEPTIONS,
  WATER_DENSITY_POINTS,
  QUIZ_QUESTIONS,
  GLOSSARY_ENTRIES,
  ParticleStateInfo
} from './data';

// ===== INLINE SVG ICONS =====
const IconAtom = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
  </svg>
);

const IconHome = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const IconThermometer = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
  </svg>
);

const IconGauge = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="m4.93 19.07 1.41-1.41" />
    <path d="M12 22v-2" />
    <path d="m19.07 19.07-1.41-1.41" />
    <path d="M22 12h-2" />
    <path d="m19.07 4.93-1.41 1.41" />
    <circle cx="12" cy="12" r="6" />
    <path d="m12 12 3-3" />
  </svg>
);

const IconWind = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
  </svg>
);

const IconSnowflake = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="m20 16-4-4 4-4" />
    <path d="m4 8 4 4-4 4" />
    <path d="m16 4-4 4-4-4" />
    <path d="m8 20 4-4 4 4" />
  </svg>
);

const IconCheck = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconX = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconRotate = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

const IconBook = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const IconEye = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Types
type TabType = 'sandbox' | 'piston' | 'diffusion' | 'water' | 'quiz';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('sandbox');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('teilchenmodell_dark_mode') === 'true';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('teilchenmodell_dark_mode', String(darkMode));
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col max-w-6xl mx-auto px-3 sm:px-6 py-4 transition-colors">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-orange-600 via-chem-600 to-amber-600 text-white p-4 sm:p-5 shadow-lg rounded-2xl mb-6 z-40 relative flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md shadow-inner">
            <IconAtom className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold bg-white/20 px-2 py-0.5 rounded-full text-orange-100">
                Chemie 9 · SG 9.1
              </span>
              <span className="text-xs text-orange-200 hidden sm:inline">Johannes-Scharrer-Gymnasium</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
              Teilchenmodell & Aggregatzustände
            </h1>
            <p className="text-xs text-orange-100 opacity-95">
              Kinetisches Teilchenmodell · Boyle-Mariotte · Diffusion · Dichteanomalie
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Light Mode aktivieren' : 'Dark Mode aktivieren'}
            className="w-10 h-10 rounded-xl bg-white/15 hover:bg-white/25 active:scale-95 text-white border border-white/20 shadow transition flex items-center justify-center text-lg"
            title="Dark Mode umschalten"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <a
            href="../index.html"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold bg-orange-800/60 hover:bg-orange-800 px-3.5 py-2 rounded-xl transition border border-orange-400/30 active:scale-95 shadow"
          >
            <IconHome className="w-4 h-4" />
            <span className="hidden xs:inline">ChemieApps</span>
          </a>
        </div>
      </header>

      {/* NAVIGATION TABS */}
      <nav className="mb-6">
        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-1.5 flex gap-1 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setCurrentTab('sandbox')}
            className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex-1 ${
              currentTab === 'sandbox'
                ? 'bg-gradient-to-r from-orange-500 to-chem-600 text-white shadow-md'
                : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
            }`}
          >
            <IconThermometer className="w-4 h-4" />
            <span>1. Teilchen-Sandbox</span>
          </button>

          <button
            onClick={() => setCurrentTab('piston')}
            className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex-1 ${
              currentTab === 'piston'
                ? 'bg-gradient-to-r from-orange-500 to-chem-600 text-white shadow-md'
                : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
            }`}
          >
            <IconGauge className="w-4 h-4" />
            <span>2. Druckstempel</span>
          </button>

          <button
            onClick={() => setCurrentTab('diffusion')}
            className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex-1 ${
              currentTab === 'diffusion'
                ? 'bg-gradient-to-r from-orange-500 to-chem-600 text-white shadow-md'
                : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
            }`}
          >
            <IconWind className="w-4 h-4" />
            <span>3. Diffusion</span>
          </button>

          <button
            onClick={() => setCurrentTab('water')}
            className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex-1 ${
              currentTab === 'water'
                ? 'bg-gradient-to-r from-orange-500 to-chem-600 text-white shadow-md'
                : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
            }`}
          >
            <IconSnowflake className="w-4 h-4" />
            <span>4. Dichteanomalie</span>
          </button>

          <button
            onClick={() => setCurrentTab('quiz')}
            className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex-1 ${
              currentTab === 'quiz'
                ? 'bg-gradient-to-r from-orange-500 to-chem-600 text-white shadow-md'
                : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
            }`}
          >
            <IconBook className="w-4 h-4" />
            <span>5. Quiz & Trainer</span>
          </button>
        </div>
      </nav>

      {/* ACTIVE STATION CONTENT */}
      <main className="flex-grow animate-fade-in">
        {currentTab === 'sandbox' && <StationSandbox />}
        {currentTab === 'piston' && <StationPiston />}
        {currentTab === 'diffusion' && <StationDiffusion />}
        {currentTab === 'water' && <StationWaterDensity />}
        {currentTab === 'quiz' && <StationQuiz />}
      </main>

      {/* FOOTER */}
      <footer className="mt-12 py-6 border-t border-orange-200/50 text-center text-xs text-slate-500">
        <p className="font-semibold text-slate-700">Johannes-Scharrer-Gymnasium Nürnberg · Fachschaft Chemie</p>
        <p className="mt-1 text-slate-400">
          Entwickelt nach LehrplanPLUS Bayern (C SG 9.1). Teilchen bleiben starr und unteilbar!
        </p>
      </footer>
    </div>
  );
}

// ==========================================
// STATION 1: 2D-TEILCHEN-SANDBOX
// ==========================================
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originX: number;
  originY: number;
  color: string;
}

function StationSandbox() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [tempCelsius, setTempCelsius] = useState<number>(20);
  const [viewMode, setViewMode] = useState<'micro' | 'macro'>('micro');
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const particlesRef = useRef<Particle[]>([]);

  // Determine State of Matter
  const currentStateKey: 'solid' | 'liquid' | 'gas' =
    tempCelsius < 0 ? 'solid' : tempCelsius < 100 ? 'liquid' : 'gas';
  const stateInfo = STATES_INFO[currentStateKey];

  // Calculate physical metrics
  const kelvin = tempCelsius + 273.15;
  const meanSpeedMps = Math.round(Math.sqrt(kelvin) * 32); // Approximate scale: ~500 m/s at 20 °C

  // Initialize Particles (80 particles in 8 cols x 10 rows grid at bottom)
  useEffect(() => {
    const particles: Particle[] = [];
    const cols = 10;
    const rows = 8;
    const spacingX = 26;
    const spacingY = 22;
    const startX = 65;
    const startY = 240;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const ox = startX + c * spacingX + (r % 2 === 1 ? spacingX / 2 : 0);
        const oy = startY + r * spacingY;
        particles.push({
          x: ox,
          y: oy,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          originX: ox,
          originY: oy,
          color: '#38bdf8'
        });
      }
    }
    particlesRef.current = particles;
  }, []);

  // Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const width = canvas.width;
    const height = canvas.height;
    const radius = 9;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Background styling
      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? '#1a1107' : '#fffaf5';
      ctx.fillRect(0, 0, width, height);

      // Grid/measurement lines
      ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)';
      ctx.lineWidth = 1;
      for (let y = 40; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(20, y);
        ctx.lineTo(width - 20, y);
        ctx.stroke();
      }

      // Chamber Walls
      ctx.strokeStyle = isDark ? '#5c3a1e' : '#cbd5e1';
      ctx.lineWidth = 4;
      ctx.strokeRect(18, 18, width - 36, height - 36);

      // Top Piston bar
      ctx.fillStyle = isDark ? '#452b14' : '#94a3b8';
      ctx.fillRect(20, 20, width - 40, 14);

      const particles = particlesRef.current;
      const tNorm = Math.max(0.1, (tempCelsius + 50) / 250); // 0.0 to 1.0
      const speedScale = Math.sqrt(tNorm) * 2.8 * speedMultiplier;

      // Update & Draw Particles
      particles.forEach((p) => {
        if (tempCelsius < 0) {
          // SOLID: Particles vibrate around lattice points
          const jitterAmp = Math.max(0.5, ((tempCelsius + 50) / 50) * 3.2);
          const angle = Math.random() * Math.PI * 2;
          p.x = p.originX + Math.cos(angle) * (Math.random() * jitterAmp);
          p.y = p.originY + Math.sin(angle) * (Math.random() * jitterAmp);
        } else if (tempCelsius < 100) {
          // LIQUID: Flowing & sliding at bottom under gravity
          const gravity = 0.35;
          p.vy += gravity;
          p.vx += (Math.random() - 0.5) * speedScale * 0.4;
          p.vy += (Math.random() - 0.5) * speedScale * 0.4;

          // Damping
          p.vx *= 0.95;
          p.vy *= 0.95;

          // Limit speed
          const spd = Math.hypot(p.vx, p.vy);
          const maxSpd = speedScale * 1.8;
          if (spd > maxSpd) {
            p.vx = (p.vx / spd) * maxSpd;
            p.vy = (p.vy / spd) * maxSpd;
          }

          p.x += p.vx;
          p.y += p.vy;

          // Boundaries (liquid stays mostly in lower 60%)
          const minLiquidY = 160;
          if (p.x < 24 + radius) { p.x = 24 + radius; p.vx *= -0.7; }
          if (p.x > width - 24 - radius) { p.x = width - 24 - radius; p.vx *= -0.7; }
          if (p.y > height - 24 - radius) { p.y = height - 24 - radius; p.vy *= -0.5; }
          if (p.y < minLiquidY) { p.vy += 0.8; }
        } else {
          // GAS: Rapid unconstrained ballistic movement throughout full container
          p.x += p.vx * speedScale;
          p.y += p.vy * speedScale;

          // Bounce off all 4 walls elastical
          if (p.x < 24 + radius) { p.x = 24 + radius; p.vx = Math.abs(p.vx); }
          if (p.x > width - 24 - radius) { p.x = width - 24 - radius; p.vx = -Math.abs(p.vx); }
          if (p.y < 38 + radius) { p.y = 38 + radius; p.vy = Math.abs(p.vy); }
          if (p.y > height - 24 - radius) { p.y = height - 24 - radius; p.vy = -Math.abs(p.vy); }
        }

        // Draw particle
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);

        // Color coding depending on state & energy
        let gradColor1 = '#38bdf8';
        let gradColor2 = '#0284c7';
        if (tempCelsius < 0) {
          gradColor1 = '#7dd3fc';
          gradColor2 = '#0284c7';
        } else if (tempCelsius < 100) {
          gradColor1 = '#22d3ee';
          gradColor2 = '#0891b2';
        } else {
          gradColor1 = '#fb923c';
          gradColor2 = '#ea580c';
        }

        const radGrad = ctx.createRadialGradient(
          p.x - radius * 0.3,
          p.y - radius * 0.3,
          radius * 0.1,
          p.x,
          p.y,
          radius
        );
        radGrad.addColorStop(0, '#ffffff');
        radGrad.addColorStop(0.3, gradColor1);
        radGrad.addColorStop(1, gradColor2);

        ctx.fillStyle = radGrad;
        ctx.fill();
        ctx.strokeStyle = isDark ? '#1e160e' : '#ffffff';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Optional lattice spring lines in solid state
        if (tempCelsius < 0) {
          ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.25)' : 'rgba(2, 132, 199, 0.2)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.originX, p.originY);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [tempCelsius, speedMultiplier]);

  return (
    <div className="space-y-6">
      {/* DIDACTIC MISCONCEPTION BANNER */}
      <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/15 to-red-500/10 border-l-4 border-orange-500 p-4 rounded-xl shadow-sm">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h3 className="text-sm font-bold text-orange-950 dark:text-orange-200">
              Goldstandard: Teilchen selbst schmelzen oder sieden niemals!
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
              Die Kugeln bleiben stets <strong>starr, unteilbar und behalten immer exakt dieselbe Größe und Masse</strong>.
              Was sich verändert, ist ausschließlich ihre <strong>Eigenbewegung (kinetische Energie)</strong>, ihr <strong>mittlerer Abstand</strong> und ihre <strong>Anordnung</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* CANVAS SIMULATION CONTAINER */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-5 shadow-sm border border-orange-100 flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
                <span>Zylinder mit Teilchen</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${stateInfo.badgeBg} ${stateInfo.badgeText}`}>
                  {stateInfo.name}
                </span>
              </h2>
              <p className="text-xs text-slate-500">
                {tempCelsius < 0 ? 'Gitterbindung am Boden' : tempCelsius < 100 ? 'Gleitende Teilchenpackung' : 'Freie Gasteilchen im gesamten Raum'}
              </p>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              <button
                onClick={() => setViewMode('micro')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                  viewMode === 'micro'
                    ? 'bg-orange-600 text-white shadow'
                    : 'text-slate-600 hover:text-orange-600'
                }`}
              >
                Submikro
              </button>
              <button
                onClick={() => setViewMode('macro')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                  viewMode === 'macro'
                    ? 'bg-orange-600 text-white shadow'
                    : 'text-slate-600 hover:text-orange-600'
                }`}
              >
                <span className="flex items-center gap-1">
                  <IconEye className="w-3.5 h-3.5" /> Stoffebene
                </span>
              </button>
            </div>
          </div>

          {/* SIMULATION CANVAS OR MACROSCOPIC VIEW */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 flex items-center justify-center min-h-[380px]">
            {viewMode === 'micro' ? (
              <canvas
                ref={canvasRef}
                width={380}
                height={380}
                className="w-full max-w-[380px] h-[380px] block mx-auto touch-none"
              />
            ) : (
              <MacroscopicView tempCelsius={tempCelsius} />
            )}

            {/* Overlay Phase Transition Indicator */}
            {tempCelsius === 0 && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                ⚖️ Schmelzpunkt (0 °C): Gitter löst sich auf!
              </div>
            )}
            {tempCelsius === 100 && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                🔥 Siedepunkt (100 °C): Teilchen verlassen den Verband!
              </div>
            )}
          </div>

          {/* PRESET BUTTONS */}
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setTempCelsius(-25)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 hover:bg-sky-100 transition"
            >
              ❄️ Eis (-25 °C)
            </button>
            <button
              onClick={() => setTempCelsius(0)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 hover:bg-cyan-100 transition"
            >
              💧 Schmelzen (0 °C)
            </button>
            <button
              onClick={() => setTempCelsius(20)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 hover:bg-blue-100 transition"
            >
              🌊 Wasser (20 °C)
            </button>
            <button
              onClick={() => setTempCelsius(100)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 border border-orange-200 hover:bg-orange-100 transition"
            >
              ♨️ Sieden (100 °C)
            </button>
            <button
              onClick={() => setTempCelsius(160)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 hover:bg-amber-100 transition"
            >
              💨 Dampf (160 °C)
            </button>
          </div>
        </div>

        {/* CONTROLS & TELEMETRY */}
        <div className="lg:col-span-5 space-y-4">
          {/* TEMPERATURE SLIDER CARD */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="temp-slider" className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <IconThermometer className="w-4 h-4 text-orange-600" />
                <span>Temperaturregler</span>
              </label>
              <div className="text-right">
                <span className="text-2xl font-black text-orange-600 font-mono">
                  {tempCelsius > 0 ? `+${tempCelsius}` : tempCelsius} °C
                </span>
                <span className="text-xs text-slate-400 ml-1 font-mono">({kelvin.toFixed(1)} K)</span>
              </div>
            </div>

            <input
              id="temp-slider"
              type="range"
              min="-50"
              max="200"
              step="1"
              value={tempCelsius}
              onChange={(e) => setTempCelsius(parseInt(e.target.value))}
              className="w-full my-3"
            />

            <div className="flex justify-between text-[11px] font-bold text-slate-400 font-mono">
              <span className="text-sky-600">-50 °C</span>
              <span className="text-cyan-600">0 °C (Schmelzen)</span>
              <span className="text-orange-600">100 °C (Sieden)</span>
              <span className="text-red-600">200 °C</span>
            </div>

            {/* SPEED MULTIPLIER BUTTONS */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Animations-Tempo:</span>
              <div className="flex gap-1.5">
                {[0.5, 1, 2].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeedMultiplier(s)}
                    className={`px-2.5 py-1 rounded-lg font-bold transition ${
                      speedMultiplier === s
                        ? 'bg-orange-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* TELEMETRY & PHYSICAL PROPERTIES */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100 space-y-3">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider text-slate-400">
              Physikalische Kenngrößen
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-orange-50/60 dark:bg-orange-950/20 rounded-xl border border-orange-100 dark:border-orange-900/40">
                <div className="text-xs text-slate-500 font-medium">Mittlere Geschwindigkeit</div>
                <div className="text-lg font-black text-orange-600 font-mono">~{meanSpeedMps} m/s</div>
                <div className="text-[10px] text-slate-400">v̄ ∼ √T</div>
              </div>

              <div className="p-3 bg-orange-50/60 dark:bg-orange-950/20 rounded-xl border border-orange-100 dark:border-orange-900/40">
                <div className="text-xs text-slate-500 font-medium">Zusammenhalt (Kohäsion)</div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {tempCelsius < 0 ? 'Sehr stark' : tempCelsius < 100 ? 'Mittel' : 'Nahezu Null'}
                </div>
                <div className="text-[10px] text-slate-400">Gitterbindung vs. Kinetik</div>
              </div>
            </div>

            {/* STATE DETAILS TABLE */}
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl text-xs space-y-2 border border-slate-100 dark:border-slate-800">
              <div className="flex justify-between">
                <span className="text-slate-500">Ordnung:</span>
                <span className="font-semibold text-slate-700 text-right">{stateInfo.arrangement}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Eigenbewegung:</span>
                <span className="font-semibold text-slate-700 text-right">{stateInfo.motion}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Form & Volumen:</span>
                <span className="font-semibold text-slate-700 text-right">{stateInfo.shape} · {stateInfo.volume}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PHASE TRANSITIONS OVERVIEW CARDS */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100">
        <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
          <span>Die 6 Phasenübergänge im Teilchenmodell</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs">
          {PHASE_TRANSITIONS.map((pt, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl border transition-all ${
                pt.energyChange === 'endotherm'
                  ? 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/40'
                  : 'bg-blue-50/70 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/40'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-slate-800">{pt.name}</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                  pt.energyChange === 'endotherm' ? 'bg-amber-200 text-amber-900' : 'bg-blue-200 text-blue-900'
                }`}>
                  {pt.energyChange === 'endotherm' ? '+Q' : '-Q'}
                </span>
              </div>
              <div className="text-[11px] font-medium text-slate-500">
                {pt.from} → {pt.to}
              </div>
              <p className="text-[10px] text-slate-600 mt-1.5 leading-tight">
                {pt.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// MACROSCOPIC GRAPHIC HELPER
function MacroscopicView({ tempCelsius }: { tempCelsius: number }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center animate-fade-in w-full">
      <div className="w-48 h-64 relative border-4 border-slate-300 dark:border-slate-600 rounded-b-3xl bg-slate-100/50 dark:bg-slate-800/50 flex flex-col justify-end overflow-hidden shadow-inner">
        {tempCelsius < 0 ? (
          // Solid Ice cube inside
          <div className="m-auto w-28 h-28 bg-gradient-to-br from-sky-200 via-sky-300 to-blue-400 rounded-2xl border-2 border-white shadow-lg flex items-center justify-center text-3xl">
            🧊
          </div>
        ) : tempCelsius < 100 ? (
          // Liquid water filling bottom
          <div
            className="w-full bg-gradient-to-t from-cyan-500 to-blue-400 transition-all duration-500 flex items-center justify-center text-white font-bold text-sm shadow-md"
            style={{ height: `${Math.min(180, 100 + tempCelsius * 0.4)}px` }}
          >
            💧 Flüssiges Wasser
          </div>
        ) : (
          // Gas steam rising
          <div className="m-auto flex flex-col items-center justify-center text-orange-600 font-bold text-sm animate-pulse-subtle">
            <span className="text-4xl mb-2">💨</span>
            <span>Unsichtbarer Dampf</span>
            <span className="text-[11px] text-slate-500 font-normal mt-1">(Gefäß vollständig gefüllt)</span>
          </div>
        )}
      </div>
      <div className="mt-4 font-bold text-sm text-slate-700 dark:text-slate-200">
        Stoffebene (Makroskopisch): {tempCelsius < 0 ? 'Fester Eisblock' : tempCelsius < 100 ? 'Flüssiges Wasser im Becherglas' : 'Wasserdampf / Gas'}
      </div>
      <p className="text-xs text-slate-400 max-w-xs mt-1">
        Beobachtung mit bloßem Auge. Auf Teilchenebene sind keine Eisblöcke sichtbar, sondern kugelförmige Moleküle!
      </p>
    </div>
  );
}

// ==========================================
// STATION 2: DRUCKSTEMPEL (BOYLE-MARIOTTE)
// ==========================================
function StationPiston() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pistonHeightPercent, setPistonHeightPercent] = useState<number>(100); // 100% to 30%
  const [impactCount, setImpactCount] = useState<number>(75);
  const collisionCounterRef = useRef<number>(0);

  // Boyle-Mariotte: p * V = const.
  // Relative volume: 0.3 to 1.0
  const relativeVolume = pistonHeightPercent / 100;
  const theoreticalPressure = Number((1.0 / relativeVolume).toFixed(2)); // in bar (1 bar at 100%, 3.33 bar at 30%)

  // Canvas particle simulation with piston
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const particleCount = 50;
    const radius = 7;

    // Fixed particle set for consistency
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: 30 + Math.random() * (width - 60),
      y: 80 + Math.random() * (height - 110),
      vx: (Math.random() - 0.5) * 4.5,
      vy: (Math.random() - 0.5) * 4.5
    }));

    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? '#1a1107' : '#fffaf5';
      ctx.fillRect(0, 0, width, height);

      // Piston Y position based on slider
      // Top at y=30 (full 100%), down to y=230 (30% volume)
      const pistonTopY = 30 + (1 - relativeVolume) * 200;

      // Draw Chamber Walls
      ctx.strokeStyle = isDark ? '#5c3a1e' : '#94a3b8';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(25, 20);
      ctx.lineTo(25, height - 20);
      ctx.lineTo(width - 25, height - 20);
      ctx.lineTo(width - 25, 20);
      ctx.stroke();

      // Draw Piston Shaft & Plate
      // Shaft
      ctx.fillStyle = isDark ? '#78350f' : '#64748b';
      ctx.fillRect(width / 2 - 8, 10, 16, pistonTopY - 10);

      // Plate
      const pistonGrad = ctx.createLinearGradient(0, pistonTopY, 0, pistonTopY + 16);
      pistonGrad.addColorStop(0, '#f97316');
      pistonGrad.addColorStop(1, '#c2410c');
      ctx.fillStyle = pistonGrad;
      ctx.fillRect(27, pistonTopY, width - 54, 16);

      // Update & Draw Gas Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wall collisions (left, right, bottom, and moving piston at top)
        if (p.x < 27 + radius) {
          p.x = 27 + radius;
          p.vx = Math.abs(p.vx);
          collisionCounterRef.current++;
        }
        if (p.x > width - 27 - radius) {
          p.x = width - 27 - radius;
          p.vx = -Math.abs(p.vx);
          collisionCounterRef.current++;
        }
        if (p.y > height - 20 - radius) {
          p.y = height - 20 - radius;
          p.vy = -Math.abs(p.vy);
          collisionCounterRef.current++;
        }
        if (p.y < pistonTopY + 16 + radius) {
          p.y = pistonTopY + 16 + radius;
          p.vy = Math.abs(p.vy);
          collisionCounterRef.current++;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ea580c';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Impact rate ticker (measures impacts per 500ms and scales to per second)
    const interval = setInterval(() => {
      setImpactCount(collisionCounterRef.current * 2);
      collisionCounterRef.current = 0;
    }, 500);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(interval);
    };
  }, [relativeVolume]);

  return (
    <div className="space-y-6">
      {/* DIDACTIC BANNER */}
      <div className="bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 p-4 rounded-xl shadow-sm">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎯</span>
          <div>
            <h3 className="text-sm font-bold text-orange-950 dark:text-orange-200">
              Boyle-Mariotte: Warum steigt der Gasdruck bei Kompression?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
              Drückt man den Kolben nach unten, bleibt die Geschwindigkeit der Teilchen unverändert (konstante Temperatur).
              Aber der Raum wird kleiner! Dadurch <strong>prallen pro Sekunde und Quadratzentimeter Wandfläche viel mehr Teilchen gegen die Zylinderwand</strong>.
              Diese Stoßkraft erzeugt makroskopisch den doppelten Druck!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* PISTON CANVAS */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-5 shadow-sm border border-orange-100 flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-3">
            <div>
              <h2 className="font-bold text-slate-900 text-base sm:text-lg">
                Zylinder mit beweglichem Kolben
              </h2>
              <p className="text-xs text-slate-500">Volumen verkleinern durch Herunterdrücken des Kolbens</p>
            </div>
            <span className="text-xs font-mono font-bold bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-200 px-2.5 py-1 rounded-lg">
              V = {pistonHeightPercent}%
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 w-full flex justify-center">
            <canvas
              ref={canvasRef}
              width={340}
              height={360}
              className="max-w-[340px] h-[360px] block touch-none"
            />
          </div>

          {/* QUICK BUTTONS */}
          <div className="mt-4 flex flex-wrap gap-2 justify-center w-full">
            <button
              onClick={() => setPistonHeightPercent(100)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-orange-100 transition"
            >
              100% (Normal: 1 bar)
            </button>
            <button
              onClick={() => setPistonHeightPercent(50)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 border border-orange-200 hover:bg-orange-100 transition"
            >
              50% (Halbiert: 2 bar)
            </button>
            <button
              onClick={() => setPistonHeightPercent(33)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border border-red-200 hover:bg-red-100 transition"
            >
              33% (Gedrittelt: 3 bar)
            </button>
          </div>
        </div>

        {/* CONTROLS & LIVE MANOMETER */}
        <div className="lg:col-span-5 space-y-4">
          {/* SLIDER */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100">
            <label htmlFor="piston-slider" className="text-sm font-bold text-slate-800 flex justify-between items-center mb-2">
              <span className="flex items-center gap-1.5">
                <IconGauge className="w-4 h-4 text-orange-600" />
                Kolbenposition / Gasvolumen (V)
              </span>
              <span className="font-mono text-orange-600 font-bold">{pistonHeightPercent}%</span>
            </label>

            <input
              id="piston-slider"
              type="range"
              min="30"
              max="100"
              step="1"
              value={pistonHeightPercent}
              onChange={(e) => setPistonHeightPercent(parseInt(e.target.value))}
              className="w-full my-3"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span>30% (stark komprimiert)</span>
              <span>100% (voll entspannt)</span>
            </div>
          </div>

          {/* LIVE MANOMETER & IMPACT RATE */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider text-slate-400 mb-3">
              Live-Messwerte (Druck & Stoßrate)
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* PRESSURE DISPLAY */}
              <div className="p-3.5 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/20 rounded-xl border border-orange-200">
                <div className="text-xs text-slate-500 font-medium">Berechneter Druck (p)</div>
                <div className="text-2xl font-black text-orange-600 font-mono mt-0.5">
                  {theoreticalPressure} bar
                </div>
                <div className="text-[10px] text-slate-400 mt-1">p = p₀ · (V₀ / V)</div>
              </div>

              {/* IMPACT RATE COUNTER */}
              <div className="p-3.5 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/20 rounded-xl border border-amber-200">
                <div className="text-xs text-slate-500 font-medium">Gemessene Wandstöße</div>
                <div className="text-2xl font-black text-amber-600 font-mono mt-0.5">
                  ~{impactCount} / s
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Impulsübertrag pro Zeit</div>
              </div>
            </div>

            {/* SYNCHRONOUS P-V HYPERBOLA GRAPH */}
            <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 flex justify-between">
                <span>p(V)-Diagramm (Boyle-Mariotte)</span>
                <span className="font-mono text-orange-600 font-semibold">p · V = const.</span>
              </div>
              <svg viewBox="0 0 280 120" className="w-full h-28 overflow-visible">
                {/* Axes */}
                <line x1="30" y1="10" x2="30" y2="100" stroke="#94a3b8" strokeWidth="2" />
                <line x1="30" y1="100" x2="260" y2="100" stroke="#94a3b8" strokeWidth="2" />
                <text x="15" y="18" fill="#64748b" fontSize="10" fontWeight="bold">p</text>
                <text x="250" y="115" fill="#64748b" fontSize="10" fontWeight="bold">V</text>

                {/* Hyperbola curve: p = 1 / V */}
                <path
                  d="M 45 15 Q 70 55 120 75 T 250 93"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="2.5"
                  strokeDasharray="4"
                />

                {/* Live Position Point */}
                {(() => {
                  const ptX = 30 + relativeVolume * 220; // 30 to 250
                  const ptY = 100 - (theoreticalPressure / 3.33) * 85;
                  return (
                    <>
                      <line x1={ptX} y1="100" x2={ptX} y2={ptY} stroke="#ea580c" strokeWidth="1" strokeDasharray="2" />
                      <line x1="30" y1={ptY} x2={ptX} y2={ptY} stroke="#ea580c" strokeWidth="1" strokeDasharray="2" />
                      <circle cx={ptX} cy={ptY} r="6" fill="#ea580c" stroke="#ffffff" strokeWidth="2" />
                    </>
                  );
                })()}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// STATION 3: DIFFUSIONS-EXPERIMENT
// ==========================================
function StationDiffusion() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [wallOpen, setWallOpen] = useState<boolean>(false);
  const [diffTemp, setDiffTemp] = useState<number>(25); // 0 to 100 °C
  const [homogeneityIndex, setHomogeneityIndex] = useState<number>(0);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const timerRef = useRef<number | null>(null);

  interface DiffParticle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    type: 'blue' | 'brown';
  }
  const particlesRef = useRef<DiffParticle[]>([]);

  // Reset particles into 2 partitioned chambers
  const resetChambers = () => {
    const width = 360;
    const height = 240;
    const countPerSide = 45;
    const newParticles: DiffParticle[] = [];

    // Left chamber: Blue gas (N2 / Air)
    for (let i = 0; i < countPerSide; i++) {
      newParticles.push({
        x: 25 + Math.random() * (width / 2 - 40),
        y: 25 + Math.random() * (height - 50),
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        type: 'blue'
      });
    }

    // Right chamber: Brown gas (Br2 / NO2)
    for (let i = 0; i < countPerSide; i++) {
      newParticles.push({
        x: width / 2 + 15 + Math.random() * (width / 2 - 40),
        y: 25 + Math.random() * (height - 50),
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        type: 'brown'
      });
    }

    particlesRef.current = newParticles;
    setElapsedSeconds(0);
    setHomogeneityIndex(0);
  };

  useEffect(() => {
    resetChambers();
  }, []);

  // Timer when wall is open
  useEffect(() => {
    if (wallOpen) {
      timerRef.current = window.setInterval(() => {
        setElapsedSeconds((s) => s + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [wallOpen]);

  // Simulation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const width = canvas.width;
    const height = canvas.height;
    const radius = 7;
    const midX = width / 2;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? '#1a1107' : '#fffaf5';
      ctx.fillRect(0, 0, width, height);

      // Outer chamber outline
      ctx.strokeStyle = isDark ? '#5c3a1e' : '#94a3b8';
      ctx.lineWidth = 4;
      ctx.strokeRect(15, 15, width - 30, height - 30);

      // Partition Wall
      if (!wallOpen) {
        ctx.fillStyle = '#78350f';
        ctx.fillRect(midX - 5, 15, 10, height - 30);
      } else {
        // Wall pulled up (leaving only small top slot)
        ctx.fillStyle = '#78350f';
        ctx.fillRect(midX - 5, 15, 10, 25);
        ctx.fillRect(midX - 5, height - 30, 10, 15);

        // Dashed opening line
        ctx.strokeStyle = '#ea580c';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(midX, 40);
        ctx.lineTo(midX, height - 30);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Speed scaling based on temperature
      const speedScale = 0.8 + (diffTemp / 100) * 2.2; // 0.8 to 3.0

      const particles = particlesRef.current;
      let leftBrownCount = 0;
      let rightBlueCount = 0;

      particles.forEach((p) => {
        p.x += p.vx * speedScale;
        p.y += p.vy * speedScale;

        // Outer wall bounces
        if (p.x < 15 + radius) { p.x = 15 + radius; p.vx = Math.abs(p.vx); }
        if (p.x > width - 15 - radius) { p.x = width - 15 - radius; p.vx = -Math.abs(p.vx); }
        if (p.y < 15 + radius) { p.y = 15 + radius; p.vy = Math.abs(p.vy); }
        if (p.y > height - 15 - radius) { p.y = height - 15 - radius; p.vy = -Math.abs(p.vy); }

        // Partition Wall bounce when closed
        if (!wallOpen) {
          if (p.type === 'blue' && p.x > midX - 5 - radius) {
            p.x = midX - 5 - radius;
            p.vx = -Math.abs(p.vx);
          } else if (p.type === 'brown' && p.x < midX + 5 + radius) {
            p.x = midX + 5 + radius;
            p.vx = Math.abs(p.vx);
          }
        }

        // Count distribution
        if (p.type === 'brown' && p.x < midX) leftBrownCount++;
        if (p.type === 'blue' && p.x >= midX) rightBlueCount++;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        if (p.type === 'blue') {
          ctx.fillStyle = '#0284c7'; // Stickstoff / Luft
        } else {
          ctx.fillStyle = '#c2410c'; // Brom / NO2
        }
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Calculate Homogeneity Index: (leftBrown + rightBlue) / total
      // Maximum is 45 (out of 90 total) = 100% complete mixture
      const mixedCount = leftBrownCount + rightBlueCount;
      const indexPercent = Math.min(100, Math.round((mixedCount / 45) * 100));
      setHomogeneityIndex(indexPercent);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [wallOpen, diffTemp]);

  return (
    <div className="space-y-6">
      {/* DIDACTIC BANNER */}
      <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-xl shadow-sm">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💨</span>
          <div>
            <h3 className="text-sm font-bold text-cyan-950 dark:text-cyan-200">
              Diffusion: Reiner Zufall statt Absicht!
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
              Teilchen „wollen“ sich nicht verteilen und „wissen“ nicht, wo Platz frei ist.
              Durch die <strong>völlig ungerichtete Zickzack-Bewegung (Brownsche Molekularbewegung)</strong> führt das ständige Aneinanderstoßen
              rein statistisch zur gleichmäßigen Durchmischung. Je höher die Temperatur, desto rasanter verläuft die Diffusion!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* CANVAS CONTAINER */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-5 shadow-sm border border-orange-100 flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-3">
            <div>
              <h2 className="font-bold text-slate-900 text-base sm:text-lg">
                Zwei-Kammer-Diffusionszelle
              </h2>
              <p className="text-xs text-slate-500">
                Blau: Luft/Stickstoff (N₂) · Braun: Bromdampf/Stickstoffdioxid (NO₂)
              </p>
            </div>
            <div className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              Zeit: {elapsedSeconds}s
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 w-full flex justify-center">
            <canvas
              ref={canvasRef}
              width={360}
              height={240}
              className="max-w-[360px] h-[240px] block touch-none"
            />
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-4 flex flex-wrap gap-2.5 justify-center w-full">
            <button
              onClick={() => setWallOpen(!wallOpen)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow transition flex items-center gap-1.5 active:scale-95 ${
                wallOpen
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'bg-orange-600 hover:bg-orange-700 text-white'
              }`}
            >
              {wallOpen ? '🚪 Trennwand schließen' : '🚀 Trennwand hochziehen'}
            </button>
            <button
              onClick={() => {
                setWallOpen(false);
                resetChambers();
              }}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition flex items-center gap-1.5 active:scale-95"
            >
              <IconRotate className="w-4 h-4" /> Zurücksetzen
            </button>
          </div>
        </div>

        {/* CONTROLS & HOMOGENEITY INDEX */}
        <div className="lg:col-span-5 space-y-4">
          {/* TEMPERATURE CONTROLLER */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="diff-temp" className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <IconThermometer className="w-4 h-4 text-orange-600" />
                Diffusions-Temperatur
              </label>
              <span className="text-xl font-mono font-black text-orange-600">{diffTemp} °C</span>
            </div>

            <input
              id="diff-temp"
              type="range"
              min="0"
              max="100"
              step="5"
              value={diffTemp}
              onChange={(e) => setDiffTemp(parseInt(e.target.value))}
              className="w-full my-3"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span>0 °C (träge Diffusion)</span>
              <span>100 °C (blitzschnelle Durchmischung)</span>
            </div>
          </div>

          {/* HOMOGENEITY INDEX BAR */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider text-slate-400 mb-2">
              Durchmischungsgrad (Homogenität)
            </h3>

            <div className="flex justify-between items-baseline mb-1">
              <span className="text-xs text-slate-500 font-medium">Entropie / Verteilung</span>
              <span className="text-2xl font-black text-orange-600 font-mono">{homogeneityIndex}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
              <div
                className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"
                style={{ width: `${homogeneityIndex}%` }}
              />
            </div>

            <p className="text-xs text-slate-500 mt-3 leading-relaxed">
              {homogeneityIndex < 20
                ? 'Gase sind noch scharf voneinander getrennt (niedrige Entropie).'
                : homogeneityIndex < 80
                ? 'Fortschreitende Durchmischung durch zufällige Molekülstöße.'
                : '✅ Nahezu vollständige statistische Gleichverteilung (maximal ungeordneter Zustand)!'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// STATION 4: DICHTEANOMALIE DES WASSERS
// ==========================================
function StationWaterDensity() {
  const [selectedTemp, setSelectedTemp] = useState<number>(4);

  // Find corresponding density from table or interpolate
  const point =
    WATER_DENSITY_POINTS.find((p) => p.temp === selectedTemp) || {
      temp: selectedTemp,
      density: Number((1.0 - Math.abs(selectedTemp - 4) * 0.00015).toFixed(4)),
      state: selectedTemp <= 0 ? 'Eis / Schmelze' : 'Flüssiges Wasser',
      structure: selectedTemp === 4 ? 'DICHTEMAXIMUM' : 'Struktur wandelt sich'
    };

  return (
    <div className="space-y-6">
      {/* DIDACTIC BANNER */}
      <div className="bg-sky-50 dark:bg-sky-950/20 border-l-4 border-sky-600 p-4 rounded-xl shadow-sm">
        <div className="flex items-start gap-3">
          <span className="text-2xl">❄️</span>
          <div>
            <h3 className="text-sm font-bold text-sky-950 dark:text-sky-200">
              Dichteanomalie des Wassers: Warum schwimmt Eis?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
              Die meisten Stoffe ziehen sich beim Erstarren zusammen und werden dichter.
              Nicht so Wasser! Durch die starren <strong>Wasserstoffbrückenbindungen im hexagonalen Eisgitter</strong> entstehen
              große, leere Hohlräume. Beim Schmelzen bricht dieses lockere Gitter zusammen; Moleküle rücken dichter zusammen.
              Bei <strong>exakt 4 °C</strong> ist Wasser am dichtesten (1,000 g/cm³)!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* STRUCTURAL COMPARISON GRAPHIC */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-5 shadow-sm border border-orange-100 flex flex-col">
          <h2 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
            Molekülstruktur: Eis vs. Wasser bei 4 °C
          </h2>
          <p className="text-xs text-slate-500 mb-4">
            Submikroskopischer Vergleich der Hohlräume und Packungsdichte
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Hexagonal Ice Lattice */}
            <div className="p-4 bg-sky-50/60 dark:bg-sky-950/20 rounded-2xl border border-sky-200 flex flex-col items-center text-center">
              <span className="text-xs font-bold text-sky-800 dark:text-sky-300 uppercase tracking-wider mb-2">
                Eisgitter (T ≤ 0 °C)
              </span>
              <svg viewBox="0 0 160 140" className="w-36 h-32 my-1">
                {/* Hexagon with hollow center */}
                <polygon
                  points="80,15 135,45 135,100 80,130 25,100 25,45"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="3"
                  strokeDasharray="4"
                />
                {/* Center void text */}
                <text x="80" y="75" textAnchor="middle" fill="#0284c7" fontSize="11" fontWeight="bold">
                  Großer Hohlraum!
                </text>
                {/* Water molecules on vertices */}
                {[
                  [80, 15],
                  [135, 45],
                  [135, 100],
                  [80, 130],
                  [25, 100],
                  [25, 45]
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="9" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
                ))}
              </svg>
              <div className="text-xs font-bold text-sky-900 dark:text-sky-200 mt-2">
                ρ = 0,917 g/cm³
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Starre Wasserstoffbrücken erzwingen weite Hohlräume → geringere Dichte!
              </p>
            </div>

            {/* Dense liquid at 4 °C */}
            <div className="p-4 bg-cyan-50/60 dark:bg-cyan-950/20 rounded-2xl border border-cyan-200 flex flex-col items-center text-center">
              <span className="text-xs font-bold text-cyan-800 dark:text-cyan-300 uppercase tracking-wider mb-2">
                Flüssig bei 4 °C (Dichtemaximum)
              </span>
              <svg viewBox="0 0 160 140" className="w-36 h-32 my-1">
                {/* Collapsed, tightly packed molecules */}
                {[
                  [80, 45],
                  [110, 60],
                  [95, 95],
                  [65, 95],
                  [50, 60],
                  [80, 75],
                  [125, 85],
                  [35, 85]
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="9" fill="#0891b2" stroke="#ffffff" strokeWidth="2" />
                ))}
                <text x="80" y="25" textAnchor="middle" fill="#0e7490" fontSize="11" fontWeight="bold">
                  Dichteste Packung
                </text>
              </svg>
              <div className="text-xs font-bold text-cyan-900 dark:text-cyan-200 mt-2">
                ρ = 1,000 g/cm³
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Gitterfragmente brechen zusammen; Moleküle füllen die Hohlräume aus!
              </p>
            </div>
          </div>

          {/* WINTER LAKE ECOLOGICAL CUTAWAY */}
          <div className="mt-5 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Ökologische Bedeutung: See im Winter (Überleben der Fische)
            </h3>
            <div className="relative rounded-xl overflow-hidden h-32 bg-gradient-to-b from-sky-200 via-blue-500 to-indigo-900 p-2 flex flex-col justify-between text-white text-xs font-bold shadow-inner">
              {/* Ice Layer on top */}
              <div className="bg-sky-100/90 text-sky-900 px-3 py-1 rounded-lg self-start text-[11px] flex items-center gap-1.5 shadow">
                <span>🧊 Eisdecke (0 °C, ρ = 0,917 g/cm³)</span>
              </div>
              <div className="text-center text-xs opacity-90">
                1 °C bis 3 °C (Zwischenschicht)
              </div>
              {/* Lake bed */}
              <div className="bg-indigo-950/90 text-amber-200 px-3 py-1 rounded-lg self-end text-[11px] flex items-center gap-2 shadow">
                <span>🐟 Seegrund: 4 °C (Schwerstes Wasser sinkt ab)</span>
              </div>
            </div>
          </div>
        </div>

        {/* TEMPERATURE SLIDER & DENSITY CURVE */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="water-temp" className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <IconThermometer className="w-4 h-4 text-orange-600" />
                Wassertemperatur
              </label>
              <span className="text-2xl font-mono font-black text-orange-600">{selectedTemp} °C</span>
            </div>

            <input
              id="water-temp"
              type="range"
              min="-10"
              max="20"
              step="1"
              value={selectedTemp}
              onChange={(e) => setSelectedTemp(parseInt(e.target.value))}
              className="w-full my-3"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span>-10 °C (Eis)</span>
              <span className="text-cyan-600 font-bold">4 °C (Maximum)</span>
              <span>20 °C</span>
            </div>

            {/* DENSITY CARD */}
            <div className="mt-4 p-4 rounded-xl bg-orange-50/60 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/40 flex justify-between items-center">
              <div>
                <div className="text-xs text-slate-500 font-medium">Dichte bei {selectedTemp} °C</div>
                <div className="text-2xl font-black text-orange-600 font-mono mt-0.5">
                  {point.density.toFixed(4)} g/cm³
                </div>
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-lg ${
                selectedTemp === 4 ? 'bg-cyan-500 text-white animate-pulse' : 'bg-slate-100 text-slate-700'
              }`}>
                {selectedTemp === 4 ? '🌟 DICHTEMAXIMUM' : point.state}
              </span>
            </div>
          </div>

          {/* DENSITY GRAPH OVER TEMPERATURE */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider text-slate-400 mb-2">
              Dichtekurve ρ(T) von Wasser
            </h3>

            <svg viewBox="0 0 260 130" className="w-full h-32 overflow-visible">
              {/* Axes */}
              <line x1="30" y1="10" x2="30" y2="110" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="30" y1="110" x2="250" y2="110" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="15" y="15" fill="#64748b" fontSize="10" fontWeight="bold">ρ</text>
              <text x="240" y="125" fill="#64748b" fontSize="10" fontWeight="bold">T (°C)</text>

              {/* Ticks */}
              <text x="30" y="122" fill="#94a3b8" fontSize="8" textAnchor="middle">-10</text>
              <text x="80" y="122" fill="#94a3b8" fontSize="8" textAnchor="middle">0</text>
              <text x="110" y="122" fill="#0891b2" fontSize="8" textAnchor="middle" fontWeight="bold">4</text>
              <text x="230" y="122" fill="#94a3b8" fontSize="8" textAnchor="middle">20</text>

              {/* Step at 0 °C (density jumps from 0.917 to 0.9998) */}
              {/* Line for ice: flat low line */}
              <line x1="30" y1="95" x2="80" y2="95" stroke="#38bdf8" strokeWidth="2.5" />
              {/* Dotted vertical transition at 0 °C */}
              <line x1="80" y1="95" x2="80" y2="35" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3" />
              {/* Parabola peak at 4 °C, then sloping down */}
              <path
                d="M 80 35 Q 110 20 230 48"
                fill="none"
                stroke="#0891b2"
                strokeWidth="2.5"
              />

              {/* Selected Temperature Indicator Point */}
              {(() => {
                let px = 80;
                let py = 35;
                if (selectedTemp < 0) {
                  px = 30 + ((selectedTemp + 10) / 10) * 50;
                  py = 95;
                } else {
                  px = 80 + (selectedTemp / 20) * 150;
                  py = 20 + Math.pow((selectedTemp - 4) / 16, 2) * 28;
                }
                return (
                  <>
                    <line x1={px} y1="110" x2={px} y2={py} stroke="#ea580c" strokeWidth="1" strokeDasharray="2" />
                    <circle cx={px} cy={py} r="5" fill="#ea580c" stroke="#ffffff" strokeWidth="2" />
                  </>
                );
              })()}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// STATION 5: QUIZ & FEHLKONZEPT-TRAINER
// ==========================================
function StationQuiz() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'quiz' | 'misconceptions' | 'glossary'>('quiz');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const currentQ = QUIZ_QUESTIONS[currentQuestionIdx];
  const userChoice = selectedAnswers[currentQ.id];
  const isAnswered = userChoice !== undefined;
  const isCorrect = userChoice === currentQ.correctKey;

  const handleSelect = (key: 'A' | 'B' | 'C' | 'D') => {
    if (isAnswered) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: key }));
  };

  const handleNext = () => {
    if (currentQuestionIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIdx((i) => i + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestionIdx(0);
    setShowResults(false);
  };

  const correctCount = Object.entries(selectedAnswers).filter(
    ([id, ans]) => ans === QUIZ_QUESTIONS.find((q) => q.id === Number(id))?.correctKey
  ).length;

  // Filter glossary
  const filteredGlossary = GLOSSARY_ENTRIES.filter(
    (g) =>
      g.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* SUB-TABS */}
      <div className="flex justify-center gap-2 mb-2">
        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
            activeTab === 'quiz'
              ? 'bg-orange-600 text-white shadow'
              : 'bg-white text-slate-600 hover:bg-orange-50'
          }`}
        >
          🧪 Curriculum-Quiz
        </button>
        <button
          onClick={() => setActiveTab('misconceptions')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
            activeTab === 'misconceptions'
              ? 'bg-orange-600 text-white shadow'
              : 'bg-white text-slate-600 hover:bg-orange-50'
          }`}
        >
          💡 5 Fehlkonzepte im Check
        </button>
        <button
          onClick={() => setActiveTab('glossary')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
            activeTab === 'glossary'
              ? 'bg-orange-600 text-white shadow'
              : 'bg-white text-slate-600 hover:bg-orange-50'
          }`}
        >
          📖 Fachglossar
        </button>
      </div>

      {/* 1. QUIZ SECTION */}
      {activeTab === 'quiz' && (
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-5 sm:p-7 shadow-sm border border-orange-100">
          {!showResults ? (
            <div>
              {/* HEADER */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full">
                  Frage {currentQuestionIdx + 1} von {QUIZ_QUESTIONS.length}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Thema: {currentQ.context}
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-5 leading-snug">
                {currentQ.question}
              </h2>

              {/* OPTIONS */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((opt) => {
                  let btnStyle = 'border-slate-200 hover:border-orange-300 hover:bg-orange-50/50 text-slate-800';
                  if (isAnswered) {
                    if (opt.key === currentQ.correctKey) {
                      btnStyle = 'border-green-500 bg-green-50 dark:bg-green-950/40 text-green-900 dark:text-green-200 font-bold';
                    } else if (userChoice === opt.key) {
                      btnStyle = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200';
                    } else {
                      btnStyle = 'opacity-40 border-slate-200';
                    }
                  }

                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelect(opt.key)}
                      disabled={isAnswered}
                      className={`w-full p-4 rounded-xl border-2 text-left text-xs sm:text-sm transition flex items-start gap-3 ${btnStyle}`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-200 flex items-center justify-center font-black shrink-0 text-xs">
                        {opt.key}
                      </span>
                      <span className="flex-grow pt-0.5 leading-relaxed">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* FEEDBACK EXPLANATION */}
              {isAnswered && (
                <div
                  className={`p-4 rounded-xl text-xs sm:text-sm mb-6 animate-fade-in ${
                    isCorrect
                      ? 'bg-green-50 dark:bg-green-950/30 border border-green-200 text-green-900 dark:text-green-200'
                      : 'bg-amber-50 dark:bg-amber-950/30 border border-amber-200 text-amber-900 dark:text-amber-200'
                  }`}
                >
                  <div className="font-bold mb-1 flex items-center gap-1.5">
                    {isCorrect ? <IconCheck className="w-4 h-4 text-green-600" /> : <IconX className="w-4 h-4 text-red-600" />}
                    {isCorrect ? 'Ausgezeichnet!' : 'Didaktische Klarstellung:'}
                  </div>
                  <p className="leading-relaxed">{currentQ.explanation}</p>
                </div>
              )}

              {/* NEXT BUTTON */}
              {isAnswered && (
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-95"
                  >
                    {currentQuestionIdx < QUIZ_QUESTIONS.length - 1 ? 'Nächste Frage →' : 'Zur Gesamtauswertung →'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* SCORE SUMMARY */
            <div className="text-center py-6 animate-fade-in">
              <span className="text-5xl">🏆</span>
              <h2 className="text-2xl font-black text-slate-900 mt-3">
                Quiz abgeschlossen!
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Du hast {correctCount} von {QUIZ_QUESTIONS.length} Fragen richtig beantwortet.
              </p>

              <div className="my-6 inline-block px-6 py-3 rounded-2xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 text-xl font-black text-orange-600 font-mono">
                {Math.round((correctCount / QUIZ_QUESTIONS.length) * 100)} % Erfolgsquote
              </div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                {correctCount === QUIZ_QUESTIONS.length
                  ? 'Hervorragend! Du beherrschst das Teilchenmodell auf Gymnasialniveau und unterscheidest sauber zwischen Stoff- und Teilchenebene.'
                  : 'Gute Leistung! Wirf noch einen Blick in die 5 Fehlkonzepte, um deine Fachsprache weiter zu schärfen.'}
              </p>

              <button
                onClick={handleRestart}
                className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow transition active:scale-95"
              >
                Quiz wiederholen
              </button>
            </div>
          )}
        </div>
      )}

      {/* 2. MISCONCEPTIONS ACCORDION */}
      {activeTab === 'misconceptions' && (
        <div className="space-y-4 max-w-4xl mx-auto">
          {MISCONCEPTIONS.map((m) => (
            <div
              key={m.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100 space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">
                  Fehlkonzept #{m.id}
                </span>
                <span className="text-xs text-slate-400 font-medium">{m.category}</span>
              </div>

              <div className="p-3 bg-red-50/60 dark:bg-red-950/20 rounded-xl border border-red-200 text-red-900 dark:text-red-200 text-xs sm:text-sm font-semibold flex items-center gap-2">
                <span className="text-lg">❌</span>
                <span>{m.falseBelief}</span>
              </div>

              <div className="p-3 bg-green-50/60 dark:bg-green-950/20 rounded-xl border border-green-200 text-green-900 dark:text-green-200 text-xs sm:text-sm font-bold flex items-center gap-2">
                <span className="text-lg">✅</span>
                <span>{m.scientificFact}</span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-1">
                <strong>Erklärung:</strong> {m.explanation}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 3. GLOSSARY */}
      {activeTab === 'glossary' && (
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-orange-100 flex items-center gap-3">
            <input
              type="text"
              placeholder="Begriff im Glossar suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 text-xs sm:text-sm outline-none focus:border-orange-500 transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.map((g, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100 flex flex-col justify-between space-y-2"
              >
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-orange-600 mb-1">
                    {g.term}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {g.definition}
                  </p>
                </div>
                <div className="p-2.5 bg-orange-50/50 dark:bg-orange-950/20 rounded-xl text-[11px] text-slate-500 border border-orange-100 dark:border-orange-900/30">
                  💡 <strong>Beispiel:</strong> {g.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
