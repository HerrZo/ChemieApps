export interface HeaderCallbacks {
  onModeChange: (mode: 'kwm' | 'lewis') => void;
  onPolarityToggle: (active: boolean) => void;
  onUndo: () => void;
  onRedo: () => void;
  onOpenLibrary: () => void;
  onExport: () => void;
  onToggleTheme: () => void;
  onAbout: () => void;
}

export function renderHeader(container: HTMLElement, cb: HeaderCallbacks) {
  container.innerHTML = `
    <div class="header-brand">
      <a href="../index.html" class="icon-btn" title="Zurück zur App-Übersicht" style="margin-right: 2px; text-decoration: none; color: inherit; display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      </a>
      <img src="./icon.svg" alt="Logo" class="brand-icon" />
      <span class="brand-title">Das Kugelwolkenmodell</span>
    </div>

    <div class="header-center">
      <div class="segmented-control">
        <button id="btn-mode-kwm" class="segmented-btn is-active" title="Kugelwolkenmodell (Taste L)">Kugelwolken</button>
        <button id="btn-mode-lewis" class="segmented-btn" title="Lewis-Formel 3D (Taste L)">Lewis</button>
      </div>

      <button id="btn-toggle-polarity" class="pill-toggle-btn" title="Polarität und Dipolmoment einblenden (Shift+P)">
        <span class="pill-indicator"></span>
        <span>Polarität</span>
      </button>
    </div>

    <div class="header-actions">
      <button id="btn-undo" class="icon-btn" title="Rückgängig (Strg+Z)" disabled>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13"/></svg>
      </button>
      <button id="btn-redo" class="icon-btn" title="Wiederholen (Strg+Y)" disabled>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7"/></svg>
      </button>

      <button id="btn-open-lib" class="btn-secondary" title="Molekülbibliothek öffnen">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
        <span>Bibliothek</span>
      </button>

      <button id="btn-export" class="icon-btn" title="Exportieren (PNG, SVG, JSON)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      </button>

      <button id="btn-theme" class="icon-btn" title="Design wechseln (Hell / Dunkel / Beamer)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      </button>

      <button id="btn-about" class="icon-btn" title="Über das Kugelwolkenmodell & Credits">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      </button>
    </div>
  `;

  // Bindungen
  const btnKwm = container.querySelector('#btn-mode-kwm') as HTMLButtonElement;
  const btnLewis = container.querySelector('#btn-mode-lewis') as HTMLButtonElement;
  const btnPol = container.querySelector('#btn-toggle-polarity') as HTMLButtonElement;

  btnKwm.addEventListener('click', () => {
    btnKwm.classList.add('is-active');
    btnLewis.classList.remove('is-active');
    cb.onModeChange('kwm');
  });

  btnLewis.addEventListener('click', () => {
    btnLewis.classList.add('is-active');
    btnKwm.classList.remove('is-active');
    cb.onModeChange('lewis');
  });

  let polActive = false;
  btnPol.addEventListener('click', () => {
    polActive = !polActive;
    btnPol.classList.toggle('is-active', polActive);
    cb.onPolarityToggle(polActive);
  });

  container.querySelector('#btn-undo')!.addEventListener('click', () => cb.onUndo());
  container.querySelector('#btn-redo')!.addEventListener('click', () => cb.onRedo());
  container.querySelector('#btn-open-lib')!.addEventListener('click', () => cb.onOpenLibrary());
  container.querySelector('#btn-export')!.addEventListener('click', () => cb.onExport());
  container.querySelector('#btn-theme')!.addEventListener('click', () => cb.onToggleTheme());
  container.querySelector('#btn-about')!.addEventListener('click', () => cb.onAbout());
}

export function updateUndoRedoButtons(canUndo: boolean, canRedo: boolean) {
  const btnUndo = document.getElementById('btn-undo') as HTMLButtonElement;
  const btnRedo = document.getElementById('btn-redo') as HTMLButtonElement;
  if (btnUndo) btnUndo.disabled = !canUndo;
  if (btnRedo) btnRedo.disabled = !canRedo;
}
