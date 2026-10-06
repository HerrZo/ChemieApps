import { describe, it, expect } from 'vitest';
import { initialCloudElectrons, ELEMENTS } from './elements';
import {
  createEmptyMolecule,
  instantiateAtom,
  getFormula,
  getNetCharge,
  getAtomFormalCharge,
  getCloudStats,
  getBonds
} from './model';
import {
  CommandManager,
  AddAtomCommand,
  ConnectAtomsCommand,
  AddProtonCommand,
  PullHydrogenCommand
} from './commands';
import { validateConnection } from './pairRules';
import { analyzePolarity } from './polarity';
import { LIBRARY, buildMoleculeFromRecipe } from './library';
import { relaxMolecule } from '../geometry/relax';
import { calculateAtomLoneCloudDirections } from '../geometry/vsepr';

describe('Chemie-Engine: Kugelwolkenmodell', () => {
  it('initialisiert Elemente und Kugelwolkenbesetzung korrekt', () => {
    // Wasserstoff: 1 Valenzelektron, keine innere Schale
    expect(initialCloudElectrons('H')).toEqual([1]);
    expect(ELEMENTS.H.valence).toBe(1);

    // Helium: 2 Elektronen in 1 Kugelwolke
    expect(initialCloudElectrons('He')).toEqual([2]);

    // Kohlenstoff: 4 einfach besetzte Wolken (Hundsche Regel)
    expect(initialCloudElectrons('C')).toEqual([1, 1, 1, 1]);

    // Stickstoff: 1 freies Paar (2 e⁻) und 3 einfach besetzte Wolken (1 e⁻)
    expect(initialCloudElectrons('N')).toEqual([2, 1, 1, 1]);

    // Sauerstoff: 2 freie Paare, 2 einfach besetzte
    expect(initialCloudElectrons('O')).toEqual([2, 2, 1, 1]);

    // Fluor: 3 freie Paare, 1 einfach besetzte
    expect(initialCloudElectrons('F')).toEqual([2, 2, 2, 1]);

    // Neon: 4 doppelt besetzte Kugelwolken (Oktett voll)
    expect(initialCloudElectrons('Ne')).toEqual([2, 2, 2, 2]);
  });

  it('erzeugt Atome und knüpft kovalente Bindungen mit Undo/Redo', () => {
    const mol = createEmptyMolecule();
    const mgr = new CommandManager();

    // 1. Kohlenstoff und Sauerstoff hinzufügen
    const cmdC = new AddAtomCommand('C');
    const cmdO = new AddAtomCommand('O');
    mgr.execute(cmdC, mol);
    mgr.execute(cmdO, mol);

    expect(mol.atoms.size).toBe(2);
    const atomIds = Array.from(mol.atoms.keys());
    const idC = atomIds[0];
    const idO = atomIds[1];

    // 2. Erste Bindung (Einfachbindung C-O)
    const cmdConn1 = new ConnectAtomsCommand(idC, idO);
    const res1 = mgr.execute(cmdConn1, mol);
    expect(res1.success).toBe(true);
    expect(getBonds(mol)[0].order).toBe(1);

    // 3. Zweite Bindung (Doppelbindung C=O)
    const cmdConn2 = new ConnectAtomsCommand(idC, idO);
    const res2 = mgr.execute(cmdConn2, mol);
    expect(res2.success).toBe(true);
    expect(getBonds(mol)[0].order).toBe(2);

    // 4. Undo test
    mgr.undo(mol);
    expect(getBonds(mol)[0].order).toBe(1);

    mgr.redo(mol);
    expect(getBonds(mol)[0].order).toBe(2);
  });

  it('blockiert Bindungen mit Edelgasen und unzulässige Paare', () => {
    const mol = createEmptyMolecule();
    const { atom: aNe, clouds: cNe } = instantiateAtom('Ne', { x: 0, y: 0, z: 0 });
    const { atom: aH, clouds: cH } = instantiateAtom('H', { x: 2, y: 0, z: 0 });
    mol.atoms.set(aNe.id, aNe);
    mol.atoms.set(aH.id, aH);
    for (const c of cNe) mol.clouds.set(c.id, c);
    for (const c of cH) mol.clouds.set(c.id, c);

    const valNe = validateConnection(mol, aNe.id, aH.id);
    expect(valNe.valid).toBe(false);
    expect(valNe.message).toContain('Edelgas');

    // Li-Li Paarregel (Metallgitter statt Molekül)
    const mol2 = createEmptyMolecule();
    const { atom: aLi1, clouds: cLi1 } = instantiateAtom('Li', { x: 0, y: 0, z: 0 });
    const { atom: aLi2, clouds: cLi2 } = instantiateAtom('Li', { x: 2, y: 0, z: 0 });
    mol2.atoms.set(aLi1.id, aLi1);
    mol2.atoms.set(aLi2.id, aLi2);
    for (const c of cLi1) mol2.clouds.set(c.id, c);
    for (const c of cLi2) mol2.clouds.set(c.id, c);

    const valLi = validateConnection(mol2, aLi1.id, aLi2.id);
    expect(valLi.valid).toBe(false);
    expect(valLi.message).toContain('Metallgitter');
  });

  it('unterstützt Säure-Base Reaktionen (Proton anlagern und abspalten)', () => {
    // Baue Ammoniak NH₃ aus der Bibliothek
    const nh3Recipe = LIBRARY.find(r => r.id === 'nh3')!;
    const mol = buildMoleculeFromRecipe(nh3Recipe);

    expect(getFormula(mol)).toBe('NH₃');
    expect(getNetCharge(mol)).toBe(0);

    // Finde Stickstoff
    const nAtom = Array.from(mol.atoms.values()).find(a => a.element === 'N')!;
    const mgr = new CommandManager();

    // Proton anlagern -> NH₄⁺ (Ammonium-Ion)
    const protonCmd = new AddProtonCommand(nAtom.id);
    const res = mgr.execute(protonCmd, mol);
    expect(res.success).toBe(true);
    expect(getNetCharge(mol)).toBe(1);
    expect(getFormula(mol)).toContain('⁺');

    // Undo -> zurück zu neutralem NH₃
    mgr.undo(mol);
    expect(getNetCharge(mol)).toBe(0);

    // H als Proton abspalten
    const hAtom = Array.from(mol.atoms.values()).find(a => a.element === 'H')!;
    const pullCmd = new PullHydrogenCommand(hAtom.id);
    const resPull = mgr.execute(pullCmd, mol);
    expect(resPull.success).toBe(true);

    const stats = getCloudStats(mol);
    expect(stats.doubleClouds).toBeGreaterThan(0);
  });

  it('berechnet Polarität und Dipolvektoren für HF und F₂', () => {
    // 1. HF
    const hfRecipe = LIBRARY.find(r => r.id === 'hf')!;
    const molHF = buildMoleculeFromRecipe(hfRecipe);
    const polHF = analyzePolarity(molHF);

    expect(polHF.bonds[0].isPolar).toBe(true);
    expect(polHF.bonds[0].deltaEN).toBeCloseTo(1.78, 1);
    expect(polHF.isMoleculePolar).toBe(true);
    expect(polHF.atomLabels.get(Array.from(molHF.atoms.values()).find(a => a.element === 'F')!.id)).toBe('δ⁻');
    expect(polHF.atomLabels.get(Array.from(molHF.atoms.values()).find(a => a.element === 'H')!.id)).toBe('δ⁺');

    // 2. F₂
    const f2Recipe = LIBRARY.find(r => r.id === 'f2')!;
    const molF2 = buildMoleculeFromRecipe(f2Recipe);
    const polF2 = analyzePolarity(molF2);

    expect(polF2.bonds[0].isPolar).toBe(false);
    expect(polF2.bonds[0].deltaEN).toBe(0);
    expect(polF2.isMoleculePolar).toBe(false);
  });

  it('baut Ringmoleküle (Cyclopropan, Cyclohexan) und entspannt die Geometrie stabil', () => {
    const c6Recipe = LIBRARY.find(r => r.id === 'c6h12')!;
    const mol = buildMoleculeFromRecipe(c6Recipe);

    expect(mol.atoms.size).toBe(18); // 6 C + 12 H
    expect(getFormula(mol)).toBe('C₆H₁₂');

    // Entspannungssolver ausführen
    relaxMolecule(mol, 50);

    for (const a of mol.atoms.values()) {
      expect(Number.isFinite(a.position.x)).toBe(true);
      expect(Number.isFinite(a.position.y)).toBe(true);
      expect(Number.isFinite(a.position.z)).toBe(true);
    }
  });

  it('lädt alle 33 Molekülrezepte der Bibliothek fehlerfrei', () => {
    expect(LIBRARY.length).toBe(33);
    for (const recipe of LIBRARY) {
      const mol = buildMoleculeFromRecipe(recipe);
      expect(mol.atoms.size).toBeGreaterThan(0);
      expect(getFormula(mol).length).toBeGreaterThan(0);
      for (const a of mol.atoms.values()) {
        expect(Number.isFinite(a.position.x)).toBe(true);
        expect(Number.isFinite(a.position.y)).toBe(true);
        expect(Number.isFinite(a.position.z)).toBe(true);
      }
    }
  });

  it('stößt Kugelwolken gegenseitig ab und bildet exakte Tetraeder-Geometrie (109,5°)', () => {
    // Kohlenstoff C an (0,0,0) und Wasserstoff H an (0,-1.15,0)
    const mol = createEmptyMolecule();
    const mgr = new CommandManager();
    const cmdC = new AddAtomCommand('C', { x: 0, y: 0, z: 0 });
    const cmdH = new AddAtomCommand('H', { x: 0, y: -1.15, z: 0 });
    mgr.execute(cmdC, mol);
    mgr.execute(cmdH, mol);

    const atoms = Array.from(mol.atoms.values());
    const idC = atoms.find(a => a.element === 'C')!.id;
    const idH = atoms.find(a => a.element === 'H')!.id;

    // Bindung knüpfen
    const cmdConn = new ConnectAtomsCommand(idC, idH);
    mgr.execute(cmdConn, mol);

    // Kugelwolken-Richtungen von Kohlenstoff berechnen
    const dirsMap = calculateAtomLoneCloudDirections(idC, mol);
    expect(dirsMap.size).toBe(3); // 3 freie Kugelwolken verbleiben

    const dirs = Array.from(dirsMap.values());
    // Der Bindungsvektor zeigt nach unten: u = (0, -1, 0)
    const bondU = { x: 0, y: -1, z: 0 };

    // Alle 3 freien Kugelwolken müssen einen Winkel von ~109,47° zum Bindungsvektor haben (cos = -1/3)
    for (const d of dirs) {
      const dot = d.x * bondU.x + d.y * bondU.y + d.z * bondU.z;
      expect(dot).toBeCloseTo(-1 / 3, 1); // 109,5° Abstoßung vom C-H-Bindungspaar
    }

    // Und untereinander müssen sich die 3 freien Wolken ebenfalls mit ~109,47° abstoßen (cos = -1/3)
    const dot01 = dirs[0].x * dirs[1].x + dirs[0].y * dirs[1].y + dirs[0].z * dirs[1].z;
    const dot02 = dirs[0].x * dirs[2].x + dirs[0].y * dirs[2].y + dirs[0].z * dirs[2].z;
    const dot12 = dirs[1].x * dirs[2].x + dirs[1].y * dirs[2].y + dirs[1].z * dirs[2].z;

    expect(dot01).toBeCloseTo(-1 / 3, 1);
    expect(dot02).toBeCloseTo(-1 / 3, 1);
    expect(dot12).toBeCloseTo(-1 / 3, 1);
  });

  it('berechnet Ladung und Formalladung für Hydroxid-Ion OH⁻ korrekt', () => {
    const ohRecipe = LIBRARY.find(r => r.id === 'oh')!;
    const mol = buildMoleculeFromRecipe(ohRecipe);

    expect(getFormula(mol)).toBe('OH⁻');
    expect(getNetCharge(mol)).toBe(-1);

    const oAtom = Array.from(mol.atoms.values()).find(a => a.element === 'O')!;
    const hAtom = Array.from(mol.atoms.values()).find(a => a.element === 'H')!;

    expect(getAtomFormalCharge(mol, oAtom.id)).toBe(-1);
    expect(getAtomFormalCharge(mol, hAtom.id)).toBe(0);
  });
});


