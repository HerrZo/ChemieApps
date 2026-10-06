export interface ShortcutHandlers {
  onToolSelect: () => void;
  onToolConnect: () => void;
  onToolProton: () => void;
  onToolDelete: () => void;
  onAutoAlign: () => void;
  onToggleMode: () => void;
  onTogglePolarity: () => void;
  onRotateCamera: (dTheta: number, dPhi: number) => void;
  onZoomCamera: (factor: number) => void;
  onToggleAutoRotate: () => void;
  onResetCamera: () => void;
  onFullscreen: () => void;
  onUndo: () => void;
  onRedo: () => void;
}

export function bindShortcuts(handlers: ShortcutHandlers) {
  window.addEventListener('keydown', e => {
    // Wenn ein Eingabefeld fokussiert ist, Tastenkürzel ignorieren
    const tag = (document.activeElement?.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;

    if (e.key === 'z' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      if (e.shiftKey) {
        handlers.onRedo();
      } else {
        handlers.onUndo();
      }
      return;
    }

    if (e.key === 'y' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handlers.onRedo();
      return;
    }

    if (e.key === 'P' && e.shiftKey) {
      e.preventDefault();
      handlers.onTogglePolarity();
      return;
    }

    switch (e.key.toLowerCase()) {
      case 'v':
        handlers.onToolSelect();
        break;
      case 'b':
        handlers.onToolConnect();
        break;
      case 'p':
        handlers.onToolProton();
        break;
      case 'x':
      case 'delete':
      case 'backspace':
        handlers.onToolDelete();
        break;
      case 'r':
        handlers.onAutoAlign();
        break;
      case 'l':
        handlers.onToggleMode();
        break;
      case 'w':
      case 'arrowup':
        handlers.onRotateCamera(0, -0.08);
        break;
      case 's':
      case 'arrowdown':
        handlers.onRotateCamera(0, 0.08);
        break;
      case 'a':
      case 'arrowleft':
        handlers.onRotateCamera(0.08, 0);
        break;
      case 'd':
      case 'arrowright':
        handlers.onRotateCamera(-0.08, 0);
        break;
      case '+':
      case '=':
        handlers.onZoomCamera(0.9);
        break;
      case '-':
      case '_':
        handlers.onZoomCamera(1.1);
        break;
      case ' ':
        e.preventDefault();
        handlers.onToggleAutoRotate();
        break;
      case '0':
        handlers.onResetCamera();
        break;
      case 'f':
        handlers.onFullscreen();
        break;
    }
  });
}
