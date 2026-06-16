/**
 * textToPoints.js
 * Renders text to an offscreen canvas, samples the opaque pixels,
 * and converts them into 3D point coordinates. This is how the
 * "stars forming the name" effect works — each star gets a random
 * starting position and a target position sampled from the text.
 */

export function textToPoints(text, { width = 900, height = 220, fontSize = 160, pointCount = 1400 } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#fff';
  ctx.font = `800 ${fontSize}px 'Baloo 2', 'Arial', sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2 + fontSize * 0.06);

  const data = ctx.getImageData(0, 0, width, height).data;
  const candidates = [];

  for (let y = 0; y < height; y += 2) {
    for (let x = 0; x < width; x += 2) {
      const idx = (y * width + x) * 4;
      if (data[idx] > 128) {
        candidates.push([x, y]);
      }
    }
  }

  // shuffle and pick pointCount candidates (or all if fewer available)
  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }

  const selected = candidates.slice(0, pointCount);
  const scale = 0.025;

  return selected.map(([x, y]) => [
    (x - width / 2) * scale,
    -(y - height / 2) * scale,
    (Math.random() - 0.5) * 1.2,
  ]);
}
