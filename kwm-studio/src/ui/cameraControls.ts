export interface CameraControlsCallbacks {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onToggleAutoRotate: () => void;
  onToggleLockCamera: () => void;
  onReset: () => void;
  onFullscreen: () => void;
}

export function renderCameraControls(
  container: HTMLElement,
  cb: CameraControlsCallbacks
): { setCameraLocked: (locked: boolean) => void } {
  container.innerHTML = `
    <button id="cam-zoom-in" class="icon-btn" title="Vergrößern (+)">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
    </button>
    <button id="cam-zoom-out" class="icon-btn" title="Verkleinern (−)">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
    </button>
    <button id="cam-lock" class="icon-btn" title="Ansicht drehen gesperrt / entsperrt">
      <svg id="cam-lock-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
      </svg>
    </button>
    <button id="cam-rotate" class="icon-btn" title="Auto-Rotation an/aus (Leertaste)">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
    </button>
    <button id="cam-reset" class="icon-btn" title="Ansicht zurücksetzen (0)">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
    </button>
    <button id="cam-fullscreen" class="icon-btn" title="Vollbildmodus (F)">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
    </button>
  `;

  const lockBtn = container.querySelector('#cam-lock') as HTMLButtonElement;
  const lockIcon = container.querySelector('#cam-lock-icon') as SVGElement;

  const setCameraLocked = (locked: boolean) => {
    lockBtn.classList.toggle('is-active', locked);
    if (locked) {
      lockBtn.title = 'Ansicht fixiert (Klick zum Entsperren des Drehens)';
      lockIcon.innerHTML = `
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      `;
    } else {
      lockBtn.title = 'Ansicht fixieren (Verhindert Drehen beim Klicken)';
      lockIcon.innerHTML = `
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
      `;
    }
  };

  container.querySelector('#cam-zoom-in')!.addEventListener('click', () => cb.onZoomIn());
  container.querySelector('#cam-zoom-out')!.addEventListener('click', () => cb.onZoomOut());
  lockBtn.addEventListener('click', () => cb.onToggleLockCamera());
  container.querySelector('#cam-rotate')!.addEventListener('click', () => cb.onToggleAutoRotate());
  container.querySelector('#cam-reset')!.addEventListener('click', () => cb.onReset());
  container.querySelector('#cam-fullscreen')!.addEventListener('click', () => cb.onFullscreen());

  return { setCameraLocked };
}
