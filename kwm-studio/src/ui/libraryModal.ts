import { LIBRARY, Recipe } from '../chemistry/library';

export interface LibraryModalCallbacks {
  onSelectRecipe: (recipe: Recipe) => void;
  onClose: () => void;
}

export function openLibraryModal(container: HTMLElement, cb: LibraryModalCallbacks) {
  container.hidden = false;
  container.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-header">
        <div style="font-weight: 600; font-size: 17px;">Molekülbibliothek (33 Modelle)</div>
        <button id="modal-close-btn" class="icon-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div style="padding: 12px 16px; border-bottom: 1px solid var(--line); display: flex; gap: 12px; align-items: center;">
        <input id="lib-search" type="text" placeholder="Molekül suchen (z.B. Wasser, Ethan, CO₂)..." style="flex: 1; height: 32px; padding: 0 10px; border-radius: var(--radius-sm); border: 1px solid var(--line); background: var(--bg-surface-2); color: inherit; font-family: inherit; font-size: 13px; outline: none;" />
        <div class="segmented-control">
          <button class="segmented-btn is-active" data-group="all">Alle</button>
          <button class="segmented-btn" data-group="Anorganisch">Anorganisch</button>
          <button class="segmented-btn" data-group="Ionen">Ionen</button>
          <button class="segmented-btn" data-group="Organisch">Organisch</button>
        </div>
      </div>

      <div class="modal-body">
        <div class="recipe-grid" id="recipe-cards-container"></div>
      </div>
    </div>
  `;

  const cardsContainer = container.querySelector('#recipe-cards-container') as HTMLElement;
  const searchInput = container.querySelector('#lib-search') as HTMLInputElement;
  const filterBtns = container.querySelectorAll('.segmented-btn[data-group]') as NodeListOf<HTMLButtonElement>;

  let activeGroup = 'all';
  let searchTerm = '';

  const renderCards = () => {
    cardsContainer.innerHTML = '';
    const filtered = LIBRARY.filter(r => {
      const matchGroup = activeGroup === 'all' || r.group === activeGroup;
      const matchSearch = searchTerm === '' ||
        r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.atoms.join('').toLowerCase().includes(searchTerm.toLowerCase());
      return matchGroup && matchSearch;
    });

    if (filtered.length === 0) {
      cardsContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-3); padding: 30px;">Keine Moleküle gefunden</div>`;
      return;
    }

    filtered.forEach(r => {
      const card = document.createElement('div');
      card.className = 'recipe-card';
      card.innerHTML = `
        <div style="font-weight: 600; font-size: 14px; color: var(--text-1);">${r.name}</div>
        <div style="font-size: 12px; color: var(--text-2); margin-top: 3px;">${r.group} · ${r.atoms.length} Atome</div>
      `;

      card.addEventListener('click', () => {
        container.hidden = true;
        container.innerHTML = '';
        cb.onSelectRecipe(r);
      });

      cardsContainer.appendChild(card);
    });
  };

  searchInput.addEventListener('input', () => {
    searchTerm = searchInput.value.trim();
    renderCards();
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeGroup = btn.getAttribute('data-group')!;
      renderCards();
    });
  });

  const closeModal = () => {
    container.hidden = true;
    container.innerHTML = '';
    cb.onClose();
  };

  container.querySelector('#modal-close-btn')!.addEventListener('click', closeModal);
  container.addEventListener('click', e => {
    if (e.target === container) closeModal();
  });

  renderCards();
  searchInput.focus();
}
