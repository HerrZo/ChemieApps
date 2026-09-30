/**
 * IsomerExplorer - High Performance Chemical Isomer & Structure Generator
 * Serverless Single Page Application powered by PubChem PUG REST API
 */

// Atomic weights for molecular weight calculation
const ATOMIC_WEIGHTS = {
    H: 1.008, He: 4.0026, Li: 6.94, Be: 9.0122, B: 10.81,
    C: 12.011, N: 14.007, O: 15.999, F: 18.998, Ne: 20.180,
    Na: 22.990, Mg: 24.305, Al: 26.982, Si: 28.085, P: 30.974,
    S: 32.06, Cl: 35.45, Ar: 39.948, K: 39.098, Ca: 40.078,
    Br: 79.904, I: 126.904
};

// Global App State
const state = {
    formula: '',
    canonicalFormula: '',
    rawCompounds: [],
    processedIsomers: [],
    filteredIsomers: [],
    mode: 'constitutional', // 'constitutional' or 'ez'
    filterFg: 'all',
    copyWhiteBg: true,
    cache: new Map()
};

// DOM Elements
const elements = {
    form: document.getElementById('formula-form'),
    input: document.getElementById('formula-input'),
    clearBtn: document.getElementById('clear-btn'),
    searchBtn: document.getElementById('search-btn'),
    presetButtons: document.querySelectorAll('.preset-pill'),
    infoBar: document.getElementById('molecule-info-bar'),
    infoFormula: document.getElementById('info-formula'),
    infoMass: document.getElementById('info-mass'),
    infoDbe: document.getElementById('info-dbe'),
    infoCount: document.getElementById('info-count'),
    toolbar: document.getElementById('filter-toolbar'),
    modeRadios: document.querySelectorAll('input[name="isomer-mode"]'),
    fgFilter: document.getElementById('fg-filter'),
    copyBgWhite: document.getElementById('copy-bg-white'),
    loadingState: document.getElementById('loading-state'),
    errorState: document.getElementById('error-state'),
    errorTitle: document.getElementById('error-title'),
    errorMessage: document.getElementById('error-message'),
    resultsSection: document.getElementById('results-section'),
    resultsHeading: document.getElementById('results-heading'),
    showingCountText: document.getElementById('showing-count-text'),
    isomersGrid: document.getElementById('isomers-grid'),
    toast: document.getElementById('toast'),
    toastTitle: document.getElementById('toast-title'),
    toastMsg: document.getElementById('toast-msg'),
    offscreenCanvas: document.getElementById('clipboard-canvas')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    // Default search for a great starting experience
    elements.input.value = 'C4H8';
    elements.clearBtn.style.display = 'block';
    handleSearch('C4H8');
});

// Event Listeners
function initEventListeners() {
    elements.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = elements.input.value.trim();
        if (query) handleSearch(query);
    });

    elements.input.addEventListener('input', () => {
        elements.clearBtn.style.display = elements.input.value.length > 0 ? 'block' : 'none';
    });

    elements.clearBtn.addEventListener('click', () => {
        elements.input.value = '';
        elements.clearBtn.style.display = 'none';
        elements.input.focus();
    });

    elements.presetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const formula = btn.getAttribute('data-formula');
            elements.input.value = formula;
            elements.clearBtn.style.display = 'block';
            handleSearch(formula);
        });
    });

    elements.modeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            state.mode = e.target.value;
            applyGroupingAndFilters();
        });
    });

    elements.fgFilter.addEventListener('change', (e) => {
        state.filterFg = e.target.value;
        applyGroupingAndFilters();
    });

    elements.copyBgWhite.addEventListener('change', (e) => {
        state.copyWhiteBg = e.target.checked;
    });
}

// Search Handler
async function handleSearch(inputFormula) {
    const parsed = parseFormula(inputFormula);
    if (!parsed || Object.keys(parsed.elements).length === 0) {
        showError('Ungültige Summenformel', 'Bitte gib eine gültige chemische Summenformel wie z. B. C4H8 oder C3H6O ein.');
        return;
    }

    const canonicalFormula = buildHillFormula(parsed.elements);
    state.formula = inputFormula;
    state.canonicalFormula = canonicalFormula;

    // Calculate chemical metrics (DBE, Molecular Mass)
    const mass = calculateMolecularWeight(parsed.elements);
    const dbe = calculateDBE(parsed.elements);

    // Update Info Bar
    elements.infoFormula.textContent = formatSubscripts(canonicalFormula);
    elements.infoMass.textContent = mass.toFixed(2) + ' g/mol';
    elements.infoDbe.textContent = isNaN(dbe) ? 'N/A' : (dbe >= 0 ? dbe.toFixed(1).replace('.0', '') : '0');

    // UI State: Loading
    setLoading(true);

    try {
        let compounds = [];
        if (state.cache.has(canonicalFormula)) {
            compounds = state.cache.get(canonicalFormula);
        } else {
            compounds = await fetchPubChemIsomers(canonicalFormula);
            state.cache.set(canonicalFormula, compounds);
        }

        state.rawCompounds = compounds;

        if (compounds.length === 0) {
            showError('Keine Isomere gefunden', `Für die Summenformel ${canonicalFormula} wurden in der Datenbank keine stabilen Einzelmoleküle gefunden.`);
            return;
        }

        setLoading(false);
        elements.infoBar.style.display = 'grid';
        elements.toolbar.style.display = 'flex';
        elements.resultsSection.style.display = 'block';

        applyGroupingAndFilters();

    } catch (err) {
        console.error('Fetch error:', err);
        showError('Verbindungsfehler', 'Die Chemiedatenbank (PubChem) konnte nicht erreicht werden oder die Formel enthält zu viele Isomere. Bitte versuche es erneut.');
    }
}

// PubChem REST API Query
async function fetchPubChemIsomers(formula) {
    const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/fastformula/${encodeURIComponent(formula)}/property/IUPACName,Title,InChI,InChIKey,ConnectivitySMILES,CanonicalSMILES,IsomericSMILES,Charge/JSON`;
    
    const response = await fetch(url);
    if (!response.ok) {
        if (response.status === 404) return [];
        throw new Error(`PubChem API returned HTTP ${response.status}`);
    }

    const data = await response.json();
    const props = data?.PropertyTable?.Properties || [];

    // Filter clean, neutral single molecules
    const cleanCompounds = props.filter(p => {
        // Must have neutral charge
        if (p.Charge && p.Charge !== 0) return false;

        const conn = p.ConnectivitySMILES || p.CanonicalSMILES || '';
        // Skip mixtures/hydrates (contain dot '.')
        if (conn.includes('.')) return false;

        // Skip radicals / isotopes / strange charged brackets in connectivity
        if (conn.includes('[') || conn.includes(']') || conn.includes('+') || conn.includes('-')) {
            return false;
        }

        return true;
    });

    return cleanCompounds;
}

// Grouping & Filtering Engine
function applyGroupingAndFilters() {
    const raw = state.rawCompounds;
    if (!raw || raw.length === 0) return;

    let grouped = [];

    if (state.mode === 'constitutional') {
        // Group strictly by connectivity (ignore E/Z and R/S stereochemistry)
        const groups = new Map();

        for (const comp of raw) {
            // Use ConnectivitySMILES or first 14 chars of InChIKey (skeleton)
            const key = comp.ConnectivitySMILES || (comp.InChIKey ? comp.InChIKey.substring(0, 14) : comp.CanonicalSMILES);
            if (!groups.has(key)) {
                groups.set(key, comp);
            } else {
                // If existing has no title or numeric CID title, prefer a compound with a better title
                const existing = groups.get(key);
                if (shouldPreferCompound(comp, existing)) {
                    groups.set(key, comp);
                }
            }
        }
        grouped = Array.from(groups.values());

    } else {
        // Inklusive E/Z-Isomerie:
        // Group by Connectivity + InChI /b layer (double-bond stereochemistry)
        // If an InChI has /b, it differentiates E vs Z.
        // If compounds exist with /b (specific E or Z), we discard the unspecified / generic one.
        const groups = new Map();
        const hasStereoForSkeleton = new Set();

        for (const comp of raw) {
            const inchi = comp.InChI || '';
            const bLayer = extractInChIBLayer(inchi);
            const skeleton = comp.ConnectivitySMILES || (comp.InChIKey ? comp.InChIKey.substring(0, 14) : '');

            if (bLayer) {
                hasStereoForSkeleton.add(skeleton);
            }

            const key = `${skeleton}__${bLayer}`;
            if (!groups.has(key)) {
                groups.set(key, comp);
            } else {
                const existing = groups.get(key);
                if (shouldPreferCompound(comp, existing)) {
                    groups.set(key, comp);
                }
            }
        }

        // Filter out unspecified records if specified E/Z versions exist
        grouped = [];
        for (const [key, comp] of groups.entries()) {
            const skeleton = comp.ConnectivitySMILES || (comp.InChIKey ? comp.InChIKey.substring(0, 14) : '');
            const isUnspecified = !key.includes('__b');
            if (isUnspecified && hasStereoForSkeleton.has(skeleton)) {
                // Skip the generic unspecified record because we have distinct E and Z entries
                continue;
            }
            grouped.push(comp);
        }
    }

    state.processedIsomers = grouped;

    // Apply Functional Group Filter
    let filtered = grouped;
    if (state.filterFg !== 'all') {
        filtered = grouped.filter(comp => matchesFunctionalGroup(comp, state.filterFg));
    }

    state.filteredIsomers = filtered;

    // Update counts & UI
    elements.infoCount.textContent = grouped.length;
    elements.resultsHeading.textContent = state.mode === 'constitutional' 
        ? `Konstitutionsisomere (${filtered.length}${filtered.length !== grouped.length ? ' gefiltert von ' + grouped.length : ''})`
        : `Isomere inkl. E/Z-Geometrie (${filtered.length}${filtered.length !== grouped.length ? ' gefiltert von ' + grouped.length : ''})`;

    elements.showingCountText.textContent = `${filtered.length} Strukturformeln gefunden`;

    renderCards(filtered);
}

// Extract /b layer from InChI string (Double bond stereochemistry)
function extractInChIBLayer(inchi) {
    if (!inchi) return '';
    const parts = inchi.split('/');
    for (const part of parts) {
        if (part.startsWith('b')) {
            return part; // e.g. "b4-3+" or "b4-3-"
        }
    }
    return '';
}

// Detect E/Z configuration label for badges
function getEZConfiguration(comp) {
    const inchi = comp.InChI || '';
    const bLayer = extractInChIBLayer(inchi);
    const title = (comp.Title || '').toLowerCase();
    const iupac = (comp.IUPACName || '').toLowerCase();

    if (bLayer.includes('+') || title.includes('trans') || iupac.startsWith('(e)') || iupac.includes('(2e)') || iupac.includes('(3e)')) {
        return { label: '(E) trans', type: 'trans' };
    }
    if (bLayer.includes('-') || title.includes('cis') || iupac.startsWith('(z)') || iupac.includes('(2z)') || iupac.includes('(3z)')) {
        return { label: '(Z) cis', type: 'cis' };
    }
    return null;
}

// Helper to choose better compound metadata (e.g. meaningful name over "CID 12345")
function shouldPreferCompound(newComp, existingComp) {
    const newTitle = newComp.Title || '';
    const existTitle = existingComp.Title || '';
    const newIsCid = newTitle.startsWith('CID ') || !newTitle;
    const existIsCid = existTitle.startsWith('CID ') || !existTitle;

    if (existIsCid && !newIsCid) return true;
    if (!existIsCid && newIsCid) return false;

    // Prefer compound with IUPAC name
    if (!existingComp.IUPACName && newComp.IUPACName) return true;

    // Otherwise prefer smaller CID (older, more established record)
    return (newComp.CID || 999999999) < (existingComp.CID || 999999999);
}

// Functional Group Matcher
function matchesFunctionalGroup(comp, fg) {
    const smiles = comp.ConnectivitySMILES || comp.CanonicalSMILES || '';
    const iupac = (comp.IUPACName || '').toLowerCase();
    const title = (comp.Title || '').toLowerCase();

    switch (fg) {
        case 'alcohol':
            return (smiles.includes('O') && !smiles.includes('=O') && (smiles.endsWith('O') || smiles.includes('CO') || smiles.includes('OC'))) ||
                   iupac.endsWith('ol') || title.includes('alcohol');
        case 'carbonyl':
            return smiles.includes('=O') || iupac.includes('al') || iupac.includes('on') || title.includes('one') || title.includes('aldehyde');
        case 'ether':
            return smiles.includes('COC') && !smiles.includes('=O');
        case 'alkene':
            return smiles.includes('=') && !smiles.includes('=O');
        case 'alkyne':
            return smiles.includes('#');
        case 'cyclic':
            return /[0-9]/.test(smiles); // SMILES ring numbers
        default:
            return true;
    }
}

// Render Isomer Cards
function renderCards(isomers) {
    elements.isomersGrid.innerHTML = '';

    if (isomers.length === 0) {
        elements.isomersGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                Keine Isomere entsprechen dem gewählten Filter.
            </div>
        `;
        return;
    }

    isomers.forEach((comp, idx) => {
        const card = createIsomerCard(comp, idx + 1);
        elements.isomersGrid.appendChild(card);
    });
}

// Create Card DOM Element
function createIsomerCard(comp, index) {
    const card = document.createElement('div');
    card.className = 'isomer-card';

    const cid = comp.CID;
    const smiles = comp.ConnectivitySMILES || comp.CanonicalSMILES || '';
    const title = comp.Title && !comp.Title.startsWith('CID ') ? comp.Title : (comp.IUPACName || `Isomer #${index}`);
    const iupac = comp.IUPACName || title;

    // Check E/Z config if in E/Z mode
    const ezConfig = state.mode === 'ez' ? getEZConfiguration(comp) : null;

    // High resolution PubChem 2D PNG depiction URL
    const imgUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/PNG?record_type=2d&image_size=large`;

    card.innerHTML = `
        <div class="card-image-box">
            <div class="card-top-badges">
                <span class="badge-index">#${index}</span>
                ${ezConfig ? `<span class="badge-config badge-${ezConfig.type}">${ezConfig.label}</span>` : ''}
            </div>
            <img class="molecule-img" src="${imgUrl}" alt="${escapeHtml(title)}" loading="lazy" />
        </div>
        <div class="card-content">
            <h4 class="mol-name" title="${escapeHtml(title)}">${escapeHtml(title)}</h4>
            <div class="mol-iupac" title="${escapeHtml(iupac)}">${escapeHtml(iupac)}</div>
            <div class="mol-details-row">
                <span class="meta-chip" title="SMILES">${escapeHtml(smiles)}</span>
                <span class="meta-chip">CID: ${cid}</span>
            </div>
            <div class="card-actions">
                <button type="button" class="btn-copy-img" data-cid="${cid}" data-img="${imgUrl}" data-title="${escapeHtml(title)}">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span>📋 Bild kopieren</span>
                </button>
                <div class="secondary-actions">
                    <button type="button" class="btn-secondary btn-save-png" data-cid="${cid}" data-img="${imgUrl}" data-name="${escapeHtml(title)}" title="Als PNG-Datei herunterladen">
                        💾 PNG
                    </button>
                    <button type="button" class="btn-secondary btn-copy-smiles" data-smiles="${escapeHtml(smiles)}" title="SMILES-Code kopieren (z. B. für ChemDraw)">
                        🧪 SMILES
                    </button>
                    <a href="https://pubchem.ncbi.nlm.nih.gov/compound/${cid}" target="_blank" rel="noopener" class="btn-secondary" title="In PubChem öffnen">
                        ↗ Info
                    </a>
                </div>
            </div>
        </div>
    `;

    // Attach Action Handlers
    const copyImgBtn = card.querySelector('.btn-copy-img');
    copyImgBtn.addEventListener('click', () => copyImageToClipboard(imgUrl, title));

    const savePngBtn = card.querySelector('.btn-save-png');
    savePngBtn.addEventListener('click', () => downloadImage(imgUrl, `${title}_${state.canonicalFormula}.png`));

    const copySmilesBtn = card.querySelector('.btn-copy-smiles');
    copySmilesBtn.addEventListener('click', () => copyTextToClipboard(smiles, `SMILES kopiert: ${smiles}`));

    return card;
}

// Copy Image to Clipboard (Async Clipboard API with Canvas HD rendering)
async function copyImageToClipboard(imgUrl, title) {
    try {
        // Load image into HTML Image element
        const img = new Image();
        img.crossOrigin = 'anonymous'; // PubChem allows CORS *
        
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = () => reject(new Error('Image load failed'));
            img.src = imgUrl;
        });

        // Set up high-res Canvas
        const canvas = elements.offscreenCanvas;
        const padding = 24;
        const width = img.naturalWidth || 500;
        const height = img.naturalHeight || 500;

        canvas.width = width + padding * 2;
        canvas.height = height + padding * 2;
        const ctx = canvas.getContext('2d');

        // Render Background (Solid clean white or transparent)
        if (state.copyWhiteBg) {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        // Draw chemical structure
        ctx.drawImage(img, padding, padding, width, height);

        // Convert to PNG Blob
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        if (!blob) throw new Error('Blob creation failed');

        // Write to Clipboard
        await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
        ]);

        showToast('✓ Strukturformel kopiert!', `Das Bild von "${title}" liegt in deiner Zwischenablage. Jetzt einfach Strg + V in Word oder PowerPoint drücken!`);

    } catch (err) {
        console.warn('Clipboard write API fallback:', err);
        // Fallback: Direct fetch blob or notify user
        try {
            const resp = await fetch(imgUrl);
            const blob = await resp.blob();
            await navigator.clipboard.write([
                new ClipboardItem({ 'image/png': blob })
            ]);
            showToast('✓ Strukturformel kopiert!', 'In Zwischenablage kopiert (Strg + V).');
        } catch (fallbackErr) {
            console.error('Final copy fallback failed:', fallbackErr);
            showToast('Hinweis', 'Direktes Bild-Kopieren wurde vom Browser blockiert. Nutze den "💾 PNG" Button zum Speichern.');
        }
    }
}

// Download Image File
async function downloadImage(imgUrl, filename) {
    try {
        const resp = await fetch(imgUrl);
        const blob = await resp.blob();
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = sanitizeFilename(filename);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
        showToast('Download gestartet', `${filename} wird heruntergeladen.`);
    } catch (err) {
        console.error('Download error:', err);
        window.open(imgUrl, '_blank');
    }
}

// Copy Text to Clipboard (SMILES / InChI)
async function copyTextToClipboard(text, message) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('Kopiert!', message);
    } catch (err) {
        console.error('Copy text error:', err);
    }
}

// Chemical Formula Parser & Calculations
function parseFormula(str) {
    const clean = str.replace(/\s+/g, '');
    const regex = /([A-Z][a-z]?)([0-9]*)/g;
    const elements = {};
    let match;
    let totalMatchedLength = 0;

    // Normalize lowercase inputs like "c4h8" to "C4H8"
    const normalized = normalizeFormulaInput(clean);

    while ((match = regex.exec(normalized)) !== null) {
        if (match.index === regex.lastIndex) regex.lastIndex++;
        const el = match[1];
        const count = match[2] ? parseInt(match[2], 10) : 1;
        elements[el] = (elements[el] || 0) + count;
        totalMatchedLength += match[0].length;
    }

    if (totalMatchedLength !== normalized.length) return null;
    return { elements };
}

// Normalize e.g. "c3h6o" -> "C3H6O", "c2h5cl" -> "C2H5Cl"
function normalizeFormulaInput(input) {
    return input.replace(/([a-zA-Z])([0-9]*)/g, (m, letter, num) => {
        // Recognize 2-letter elements (Cl, Br, Na, Si...)
        if (letter.length === 2) {
            return letter.charAt(0).toUpperCase() + letter.charAt(1).toLowerCase() + num;
        }
        return letter.toUpperCase() + num;
    });
}

// Build standard Hill System formula: C first, then H, then alphabetical
function buildHillFormula(elements) {
    let result = '';
    if (elements.C) {
        result += `C${elements.C > 1 ? elements.C : ''}`;
    }
    if (elements.H) {
        result += `H${elements.H > 1 ? elements.H : ''}`;
    }
    const otherKeys = Object.keys(elements)
        .filter(k => k !== 'C' && k !== 'H')
        .sort();

    for (const k of otherKeys) {
        result += `${k}${elements[k] > 1 ? elements[k] : ''}`;
    }
    return result;
}

// Molecular Weight Calculation
function calculateMolecularWeight(elements) {
    let mass = 0;
    for (const [el, count] of Object.entries(elements)) {
        const weight = ATOMIC_WEIGHTS[el] || 0;
        mass += weight * count;
    }
    return mass;
}

// Degree of Unsaturation / Double Bond Equivalents (DBE)
// DBE = C + 1 - (H - X + N) / 2
function calculateDBE(elements) {
    const c = (elements.C || 0) + (elements.Si || 0);
    const h = elements.H || 0;
    const x = (elements.F || 0) + (elements.Cl || 0) + (elements.Br || 0) + (elements.I || 0);
    const n = (elements.N || 0) + (elements.P || 0);

    return c + 1 - (h - x + n) / 2;
}

// Format Subscripts for Display (e.g. C4H8 -> C₄H₈)
function formatSubscripts(formula) {
    const subs = { '0':'₀', '1':'₁', '2':'₂', '3':'₃', '4':'₄', '5':'₅', '6':'₆', '7':'₇', '8':'₈', '9':'₉' };
    return formula.replace(/[0-9]/g, digit => subs[digit] || digit);
}

// Toast Notifications
let toastTimeout;
function showToast(title, msg) {
    elements.toastTitle.textContent = title;
    elements.toastMsg.textContent = msg;
    elements.toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 4500);
}

// UI State Management
function setLoading(isLoading) {
    elements.loadingState.style.display = isLoading ? 'block' : 'none';
    elements.searchBtn.disabled = isLoading;
    if (isLoading) {
        elements.errorState.style.display = 'none';
        elements.resultsSection.style.display = 'none';
        elements.infoBar.style.display = 'none';
        elements.toolbar.style.display = 'none';
    }
}

function showError(title, msg) {
    setLoading(false);
    elements.errorTitle.textContent = title;
    elements.errorMessage.textContent = msg;
    elements.errorState.style.display = 'block';
    elements.resultsSection.style.display = 'none';
    elements.toolbar.style.display = 'none';
    elements.infoBar.style.display = 'none';
}

function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function sanitizeFilename(name) {
    return name.replace(/[^a-zA-Z0-9_\-\.]/g, '_');
}
