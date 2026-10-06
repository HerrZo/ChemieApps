import { ElementSymbol, ELEMENT_LIST } from '../chemistry/elements';

export interface PeriodicPickerCallbacks {
  onSelectElement: (symbol: ElementSymbol) => void;
}

export function renderPeriodicPicker(container: HTMLElement, cb: PeriodicPickerCallbacks) {
  const section = document.createElement('div');
  section.className = 'sidebar-section';

  section.innerHTML = `
    <div class="section-label">Element wählen (Hauptgruppen)</div>
    <div class="pse-grid" id="pse-container"></div>
  `;

  const grid = section.querySelector('#pse-container') as HTMLElement;

  // 4 Zeilen (Perioden 1..4) x 8 Spalten
  // Leere Plätze für Periode 1 (Spalten 2..7) auffüllen
  for (let period = 1; period <= 4; period++) {
    for (let col = 1; col <= 8; col++) {
      const el = ELEMENT_LIST.find(e => e.period === period && e.col === col);

      if (!el) {
        // Leerzelle (z.B. Periode 1 Spalte 2-7)
        const emptyCell = document.createElement('div');
        emptyCell.className = 'pse-cell-empty';
        grid.appendChild(emptyCell);
        continue;
      }

      const cell = document.createElement('div');
      cell.className = 'pse-cell';
      cell.setAttribute('data-cat', el.cat);
      cell.title = `${el.name} (${el.symbol})\nOrdnungszahl: ${el.z}\nValenzelektronen: ${el.valence}\nEN: ${el.en ?? '–'}`;

      cell.innerHTML = `
        <span class="pse-number">${el.z}</span>
        <span class="pse-symbol">${el.symbol}</span>
        <span class="pse-cat-bar"></span>
      `;

      cell.addEventListener('click', () => {
        cb.onSelectElement(el.symbol);
      });

      grid.appendChild(cell);
    }
  }

  container.appendChild(section);
}
