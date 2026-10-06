export type ToolMode = 'select' | 'connect' | 'proton' | 'delete';

export interface ToolbarCallbacks {
  onToolChange: (tool: ToolMode) => void;
  onAutoAlign: () => void;
  onClear: () => void;
}

export function renderToolbar(container: HTMLElement, cb: ToolbarCallbacks): { setActiveTool: (t: ToolMode) => void } {
  container.innerHTML = `
    <div class="sidebar-section">
      <div class="section-label">Werkzeuge</div>
      <div class="tool-group">
        <button id="tool-select" class="tool-btn is-active" data-tool="select">
          <div class="tool-btn-left">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3l7 18 3-7 7-3L3 3z"/></svg>
            <span>Auswählen</span>
          </div>
          <span class="shortcut-badge">V</span>
        </button>

        <button id="tool-connect" class="tool-btn" data-tool="connect">
          <div class="tool-btn-left">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
            <span>Verbinden</span>
          </div>
          <span class="shortcut-badge">B</span>
        </button>

        <button id="tool-proton" class="tool-btn" data-tool="proton">
          <div class="tool-btn-left">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            <span>Proton</span>
          </div>
          <span class="shortcut-badge">P</span>
        </button>

        <button id="tool-delete" class="tool-btn" data-tool="delete">
          <div class="tool-btn-left">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
            <span>Löschen</span>
          </div>
          <span class="shortcut-badge">X</span>
        </button>

        <button id="btn-align" class="tool-btn" title="Geometrie entspannen und ausrichten">
          <div class="tool-btn-left">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 00-9-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 009 9 9.75 9.75 0 006.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
            <span>Ausrichten</span>
          </div>
          <span class="shortcut-badge">R</span>
        </button>

        <button id="btn-clear" class="tool-btn" title="Szene leeren">
          <div class="tool-btn-left">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
            <span>Neu anfangen</span>
          </div>
        </button>
      </div>
    </div>
  `;

  const toolBtns = container.querySelectorAll('.tool-btn[data-tool]') as NodeListOf<HTMLButtonElement>;

  const setActiveTool = (tool: ToolMode) => {
    toolBtns.forEach(b => {
      b.classList.toggle('is-active', b.getAttribute('data-tool') === tool);
    });
    cb.onToolChange(tool);
  };

  toolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tool = btn.getAttribute('data-tool') as ToolMode;
      setActiveTool(tool);
    });
  });

  container.querySelector('#btn-align')!.addEventListener('click', () => cb.onAutoAlign());
  container.querySelector('#btn-clear')!.addEventListener('click', () => cb.onClear());

  return { setActiveTool };
}
