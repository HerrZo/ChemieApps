import * as THREE from 'three';

export type VisualStyle = 'modern' | 'classic';

export class MaterialPalette {
  public style: VisualStyle = 'modern';

  // Materialien
  public singleCloud!: THREE.MeshPhysicalMaterial;
  public doubleCloud!: THREE.MeshPhysicalMaterial;
  public innerShell!: THREE.MeshPhysicalMaterial;
  public core!: THREE.MeshStandardMaterial;
  public proton!: THREE.MeshPhysicalMaterial;
  public selectionGlow!: THREE.MeshBasicMaterial;
  public dipoleArrow!: THREE.MeshStandardMaterial;
  public lewisLine!: THREE.MeshBasicMaterial;

  constructor(style: VisualStyle = 'modern', isDark = false) {
    this.update(style, isDark);
  }

  update(style: VisualStyle, isDark: boolean) {
    this.style = style;

    const colors = style === 'modern'
      ? {
          single: 0x5b8fd9,
          double: 0xc8414b,
          inner: 0xa8343d,
          core: 0x2b2d31,
          proton: 0xd9822b,
          lewis: isDark ? 0xf5f5f7 : 0x1d1d1f,
          dipole: isDark ? 0x3d8bff : 0x0a66d8
        }
      : {
          single: 0x6ea6e8,
          double: 0xe01010,
          inner: 0xe01010,
          core: 0x4a4a52,
          proton: 0xe01010,
          lewis: 0x000000,
          dipole: 0x2e7d4f
        };

    // Satin-Haptik mit dezentem Fresnel-Randglanz
    this.singleCloud = new THREE.MeshPhysicalMaterial({
      color: colors.single,
      roughness: 0.35,
      metalness: 0.05,
      clearcoat: 0.4,
      clearcoatRoughness: 0.2,
      transmission: 0.15,
      opacity: 0.92,
      transparent: true
    });

    this.doubleCloud = new THREE.MeshPhysicalMaterial({
      color: colors.double,
      roughness: 0.35,
      metalness: 0.05,
      clearcoat: 0.4,
      clearcoatRoughness: 0.2,
      transmission: 0.15,
      opacity: 0.92,
      transparent: true
    });

    this.innerShell = new THREE.MeshPhysicalMaterial({
      color: colors.inner,
      roughness: 0.45,
      metalness: 0.1,
      clearcoat: 0.3,
      opacity: 0.95,
      transparent: true
    });

    this.core = new THREE.MeshStandardMaterial({
      color: colors.core,
      roughness: 0.5,
      metalness: 0.2
    });

    this.proton = new THREE.MeshPhysicalMaterial({
      color: colors.proton,
      roughness: 0.3,
      emissive: colors.proton,
      emissiveIntensity: 0.2
    });

    this.selectionGlow = new THREE.MeshBasicMaterial({
      color: 0x0a66d8,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });

    this.dipoleArrow = new THREE.MeshStandardMaterial({
      color: colors.dipole,
      roughness: 0.3
    });

    this.lewisLine = new THREE.MeshBasicMaterial({
      color: colors.lewis
    });
  }
}
