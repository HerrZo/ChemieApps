export type ToastLevel = 'info' | 'warning' | 'blocked';

export function showToast(text: string, level: ToastLevel = 'info', duration = 4000) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.setAttribute('data-level', level);

  const dot = document.createElement('span');
  dot.className = 'toast-dot';

  const label = document.createElement('span');
  label.textContent = text;

  toast.appendChild(dot);
  toast.appendChild(label);
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 200ms ease, transform 200ms ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px) scale(0.95)';
    setTimeout(() => toast.remove(), 220);
  }, duration);
}
