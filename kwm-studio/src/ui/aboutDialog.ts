export function openAboutDialog(container: HTMLElement, onClose: () => void) {
  container.hidden = false;
  container.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-header">
        <div style="font-weight: 600; font-size: 17px;">Über das Kugelwolkenmodell</div>
        <button id="about-close-btn" class="icon-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div class="modal-body" style="display: flex; flex-direction: column; gap: 16px; font-size: 14px; line-height: 1.6;">
        <div style="padding: 12px 14px; background: var(--bg-surface-2); border: 1px solid var(--line); border-radius: var(--radius-md);">
          <strong>Didaktischer Ursprung:</strong><br/>
          Diese Anwendung basiert auf den didaktischen Konzepten des ursprünglichen Programms <em>3D-Kugelwolkenmodell (v1.3)</em>, entwickelt von <strong>André Reinke</strong>. Neu überarbeitet mit moderner 3D-Web-Grafik, Touch-Bedienung und ruhiger Designsprache.
        </div>

        <div>
          <h4 style="font-size: 15px; margin-bottom: 6px;">Grundlagen des Modells:</h4>
          <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>Atomrumpf (Graphit):</strong> Atomkern und nicht-reaktive innerste Schalen.</li>
            <li><strong>Innere Schale (Dunkelrot):</strong> Vollbesetzte untere Energiestufe (ab Periode 2).</li>
            <li><strong>Blaue Kugelwolken:</strong> Einfach besetzt (1 Elektron) – bindungsfähig.</li>
            <li><strong>Rote Kugelwolken:</strong> Doppelt besetzt (2 Elektronen) – freies Elektronenpaar oder kovalente Bindungswolke.</li>
            <li><strong>Proton (H⁺):</strong> Kann an rote, freie Kugelwolken angelagert werden (Säure-Base-Reaktion nach Brønsted).</li>
          </ul>
        </div>

        <div>
          <h4 style="font-size: 15px; margin-bottom: 6px;">Tastatur-Kurzbefehle:</h4>
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <tr><td style="padding: 4px 0;"><strong>V</strong></td><td>Werkzeug Auswählen</td></tr>
            <tr><td style="padding: 4px 0;"><strong>B</strong></td><td>Werkzeug Verbinden</td></tr>
            <tr><td style="padding: 4px 0;"><strong>P</strong></td><td>Werkzeug Proton (Anlagern/Abspalten)</td></tr>
            <tr><td style="padding: 4px 0;"><strong>X / Entf</strong></td><td>Löschen</td></tr>
            <tr><td style="padding: 4px 0;"><strong>R</strong></td><td>Automatisch ausrichten (Geometrie entspannen)</td></tr>
            <tr><td style="padding: 4px 0;"><strong>L</strong></td><td>Kugelwolken ↔ Lewis-Formel</td></tr>
            <tr><td style="padding: 4px 0;"><strong>Shift + P</strong></td><td>Polarität an/aus</td></tr>
            <tr><td style="padding: 4px 0;"><strong>W A S D</strong></td><td>Kamera drehen</td></tr>
            <tr><td style="padding: 4px 0;"><strong>+ / −</strong></td><td>Zoom</td></tr>
            <tr><td style="padding: 4px 0;"><strong>Leertaste</strong></td><td>Auto-Rotation an/aus</td></tr>
            <tr><td style="padding: 4px 0;"><strong>Strg + Z / Y</strong></td><td>Rückgängig / Wiederholen</td></tr>
          </table>
        </div>
      </div>
    </div>
  `;

  const close = () => {
    container.hidden = true;
    container.innerHTML = '';
    onClose();
  };

  container.querySelector('#about-close-btn')!.addEventListener('click', close);
  container.addEventListener('click', e => {
    if (e.target === container) close();
  });
}
