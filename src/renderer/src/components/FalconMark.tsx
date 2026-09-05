// Golden falcon mark — the chrome brand mark for this fork (title bar), in the
// same pixel-snapped style as the rest of the UI. Drawn as inline pixel
// rects (no external image), colored from the faz3a gold brand tokens
// (design/tokens.css). Replaces the Munder Difflin wordmark image in the app
// chrome only — the docs site / README / LimeZu attribution keep their own
// logo untouched.

export interface FalconMarkProps {
  size?: number;
}

// 16x16 pixel grid: a simple falcon silhouette (wings swept back, pointed
// beak). [x, y] cells lit in gold; the rest of the grid is transparent.
const CELLS: [number, number][] = [
  [7, 1], [8, 1],
  [6, 2], [7, 2], [8, 2], [9, 2],
  [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3],
  [2, 4], [3, 4], [4, 4], [6, 4], [7, 4], [8, 4], [11, 4], [12, 4], [13, 4],
  [0, 5], [1, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [13, 5], [14, 5], [15, 5],
  [1, 6], [2, 6], [6, 6], [7, 6], [8, 6], [9, 6], [13, 6], [14, 6],
  [3, 7], [4, 7], [6, 7], [7, 7], [8, 7], [9, 7], [11, 7], [12, 7],
  [6, 8], [7, 8], [8, 8], [9, 8],
  [6, 9], [7, 9], [8, 9], [9, 9],
  [7, 10], [8, 10],
  [7, 11], [8, 11]
];

export function FalconMark({ size = 20 }: FalconMarkProps): JSX.Element {
  const px = size / 16;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      role="img"
      aria-label="Hermes"
      style={{ display: 'block', imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}
    >
      {CELLS.map(([x, y]) => (
        <rect
          key={`${x}-${y}`}
          x={x * px}
          y={y * px}
          width={px}
          height={px}
          fill="var(--cth-brand-gold)"
        />
      ))}
    </svg>
  );
}
