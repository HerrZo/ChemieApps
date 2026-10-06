import * as THREE from 'three';

export function createTextSprite(
  text: string,
  fontSize = 32,
  color = '#ffffff',
  bgColor?: string
): THREE.Sprite {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;

  // Retinaschärfe
  ctx.clearRect(0, 0, 128, 128);

  if (bgColor) {
    ctx.fillStyle = bgColor;
    ctx.beginPath();
    ctx.arc(64, 64, 48, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = color;
  ctx.font = `600 ${fontSize}px -apple-system, Inter, "SF Pro Text", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;

  const mat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false
  });

  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(0.35, 0.35, 1);
  return sprite;
}

export function createDeltaSprite(text: 'δ⁺' | 'δ⁻'): THREE.Sprite {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;

  ctx.clearRect(0, 0, 128, 128);
  ctx.fillStyle = '#f2b544'; // Feines Amber
  ctx.font = `bold 42px -apple-system, Inter, "SF Pro Display", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false
  });

  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(0.32, 0.32, 1);
  return sprite;
}
