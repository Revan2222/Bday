/**
 * Doodles.jsx
 * Small reusable SVG doodle components used throughout the experience:
 * stars, hearts, balloons, clouds, squiggles. Kept as simple inline SVGs
 * (no external assets) so everything renders instantly.
 */

export function Star({ size = 24, color = 'var(--sunny-yellow)', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style} fill="none">
      <path
        d="M12 1L14.6 8.2L22 9.5L16.6 14.8L18.2 22L12 18.1L5.8 22L7.4 14.8L2 9.5L9.4 8.2L12 1Z"
        fill={color}
      />
    </svg>
  );
}

export function Heart({ size = 24, color = 'var(--pink)', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style} fill="none">
      <path
        d="M12 21s-7.5-4.6-10-9.3C0.4 8.4 2 4.8 5.6 4.1c2.1-0.4 4 0.7 5.4 2.5 1.4-1.8 3.3-2.9 5.4-2.5 3.6 0.7 5.2 4.3 3.6 7.6C19.5 16.4 12 21 12 21z"
        fill={color}
      />
    </svg>
  );
}

export function Cloud({ width = 120, height = 70, color = 'var(--white)', style = {} }) {
  return (
    <svg width={width} height={height} viewBox="0 0 120 70" style={style} fill="none">
      <ellipse cx="35" cy="42" rx="30" ry="22" fill={color} />
      <ellipse cx="65" cy="30" rx="32" ry="26" fill={color} />
      <ellipse cx="90" cy="45" rx="26" ry="18" fill={color} />
      <ellipse cx="55" cy="50" rx="40" ry="18" fill={color} />
    </svg>
  );
}

export function Balloon({ size = 60, color = 'var(--shin-red)', style = {} }) {
  return (
    <svg width={size} height={size * 1.6} viewBox="0 0 60 96" style={style} fill="none">
      <ellipse cx="30" cy="32" rx="26" ry="30" fill={color} />
      <ellipse cx="22" cy="20" rx="7" ry="9" fill="rgba(255,255,255,0.35)" />
      <path d="M30 62L26 70L34 70Z" fill={color} />
      <path
        d="M30 70C30 70 24 80 30 96"
        stroke="var(--ink-soft)"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export function Sparkle({ size = 18, color = 'var(--sunny-yellow)', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style} fill="none">
      <path
        d="M12 0C12 6 13 11 12 12C11 13 6 12 0 12C6 12 11 13 12 14C13 15 12 20 12 24C12 20 13 15 14 14C15 13 20 12 24 12C20 12 15 13 14 12C13 11 12 6 12 0Z"
        fill={color}
      />
    </svg>
  );
}

export function Squiggle({ width = 100, height = 20, color = 'var(--ink)', style = {} }) {
  return (
    <svg width={width} height={height} viewBox="0 0 100 20" style={style} fill="none">
      <path
        d="M2 10C10 2 18 18 26 10C34 2 42 18 50 10C58 2 66 18 74 10C82 2 90 18 98 10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
