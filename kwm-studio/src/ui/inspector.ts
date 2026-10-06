import { Molecule, getFormula, getMolarMass, getNetCharge, getAtomFormalCharge, getCloudStats } from '../chemistry/model';
import { ELEMENTS } from '../chemistry/elements';
import { analyzePolarity } from '../chemistry/polarity';
import { generateLewisSVG } from '../chemistry/lewis';

export interface InspectorCallbacks {
  onDeleteAtom?: (atomId: string) => void;
  onDeselectAtom?: () => void;
}

export function renderInspector(
  container: HTMLElement,
  mol: Molecule,
  selectedAtomId: string | null = null,
  cb?: InspectorCallbacks
) {
  const formula = getFormula(mol);
  const mass = getMolarMass(mol);
  const charge = getNetCharge(mol);
  const stats = getCloudStats(mol);
  const pol = analyzePolarity(mol);

  const massFormatted = mass > 0 ? mass.toLocaleString('de-DE', { maximumFractionDigits: 2 }) + ' u' : '–';
  const chargeText = charge === 0 ? 'neutral' : (charge > 0 ? `+${charge}` : `${charge}`);

  const selectedAtom = selectedAtomId ? mol.atoms.get(selectedAtomId) : null;
  const selElementInfo = selectedAtom ? ELEMENTS[selectedAtom.element] : null;
  const selFc = selectedAtom ? getAtomFormalCharge(mol, selectedAtom.id) : 0;

  container.innerHTML = `
    <div class="inspector-header">
      <div class="inspector-title-row">
        <span class="molecule-formula">${formula}</span>
        <span class="badge-charge">${chargeText}</span>
      </div>
      <div class="molecule-sub">Molmasse: ${massFormatted}</div>
    </div>

    ${selectedAtom && selElementInfo ? `
      <!-- Ausgewähltes Atom -->
      <div class="inspector-section" style="border: 1px solid var(--accent); border-radius: var(--radius-md); padding: 10px; background: var(--bg-surface-2);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="font-weight: 600; font-size: 13px; color: var(--accent);">Ausgewähltes Atom</div>
          <button id="btn-deselect-atom" class="icon-btn" title="Auswahl aufheben" style="width: 22px; height: 22px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 6px;">
          <span style="font-size: 20px; font-weight: 700; color: var(--text-1);">${selectedAtom.element}</span>
          <span style="font-size: 13px; color: var(--text-2);">${selElementInfo.name} (Z = ${selElementInfo.z})</span>
        </div>
        <div style="font-size: 12px; color: var(--text-2); line-height: 1.5; margin-bottom: 10px;">
          Valenzelektronen: ${selElementInfo.valence} · EN: ${selElementInfo.en || '–'}
          ${selFc !== 0 ? `<br/><strong style="color: ${selFc > 0 ? 'var(--accent)' : 'var(--danger)'};">Formalladung: ${selFc > 0 ? `+${selFc}` : selFc}</strong>` : ''}
          ${selectedAtom.isProton ? '<br/><span style="color: var(--danger);">Freies Proton (H⁺)</span>' : ''}
        </div>
        <button id="btn-delete-selected" class="btn" style="width: 100%; height: 28px; font-size: 12px; background: rgba(224, 49, 49, 0.1); color: var(--danger); border: 1px solid rgba(224, 49, 49, 0.3);">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
          Atom löschen (Entf)
        </button>
      </div>
    ` : ''}

    <!-- 1. Kugelwolken-Statistik (die 4 Original-Zähler) -->
    <div class="inspector-section">
      <div class="section-label">Kugelwolken-Analyse</div>
      <table class="stats-table">
        <tbody>
          <tr>
            <td>Freie Speicherplätze</td>
            <td class="stat-val">${stats.freeSlots}</td>
          </tr>
          <tr>
            <td>Einfach besetzt (1 e⁻)</td>
            <td class="stat-val" style="color: var(--cat-nonmetal);">${stats.singleClouds}</td>
          </tr>
          <tr>
            <td>Doppelt besetzt (2 e⁻)</td>
            <td class="stat-val" style="color: var(--danger);">${stats.doubleClouds}</td>
          </tr>
          <tr>
            <td>Vollbesetzte innere Schalen</td>
            <td class="stat-val">${stats.innerShells}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 2. Lewis-Formel (2D Vektor) -->
    <div class="inspector-section">
      <div class="section-label">Lewis-Projektion</div>
      <div class="lewis-preview-card" id="lewis-preview-container">
        ${generateLewisSVG(mol, 260, 150)}
      </div>
    </div>

    <!-- 3. Polaritäts-Details -->
    <div class="inspector-section">
      <div class="section-label">Polarität & Bindungen</div>
      <table class="stats-table">
        <tbody>
          <tr>
            <td>Gesamtdipol</td>
            <td class="stat-val">${pol.isMoleculePolar ? 'Polar (|μ| > 0,15)' : 'Unpolar'}</td>
          </tr>
          ${pol.bonds.map(b => {
            const elA = mol.atoms.get(b.atomAId)?.element || '';
            const elB = mol.atoms.get(b.atomBId)?.element || '';
            const deltaStr = b.deltaEN.toLocaleString('de-DE', { maximumFractionDigits: 2 });
            return `
              <tr>
                <td>${elA}–${elB} (ΔEN)</td>
                <td class="stat-val">${deltaStr} ${b.isPolar ? '⚡' : ''}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  if (selectedAtom && cb) {
    container.querySelector('#btn-delete-selected')?.addEventListener('click', () => {
      cb.onDeleteAtom?.(selectedAtom.id);
    });
    container.querySelector('#btn-deselect-atom')?.addEventListener('click', () => {
      cb.onDeselectAtom?.();
    });
  }
}
