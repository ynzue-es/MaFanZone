/* Logo MaFanZone : un « play » dessiné en pixels (style grille), avec un pixel rouge en pointe. */

type Tone = "dark" | "light";

// Grille 5×5 : cellules allumées qui forment un triangle de lecture (play).
// t = teinte : "l" clair · "m" moyen · "d" foncé · "a" accent rouge
const CELLS: { c: number; r: number; t: "l" | "m" | "d" | "a" }[] = [
  { c: 0, r: 0, t: "l" },
  { c: 0, r: 1, t: "l" }, { c: 1, r: 1, t: "m" }, { c: 2, r: 1, t: "m" },
  { c: 0, r: 2, t: "m" }, { c: 1, r: 2, t: "m" }, { c: 2, r: 2, t: "m" }, { c: 3, r: 2, t: "m" }, { c: 4, r: 2, t: "a" },
  { c: 0, r: 3, t: "m" }, { c: 1, r: 3, t: "m" }, { c: 2, r: 3, t: "d" },
  { c: 0, r: 4, t: "d" },
];

const PALETTE: Record<Tone, Record<"l" | "m" | "d" | "a", string>> = {
  dark: { l: "#2a4c8f", m: "#0e2a5e", d: "#081c40", a: "#d32436" },
  light: { l: "#ffffff", m: "#e6ecf7", d: "#b9c6e2", a: "#ee2a3c" },
};

export function LogoMark({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: Tone;
}) {
  const colors = PALETTE[tone];
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="MaFanZone">
      {CELLS.map(({ c, r, t }) => (
        <rect
          key={`${c}-${r}`}
          x={2.5 + c * 9}
          y={2.5 + r * 9}
          width="7"
          height="7"
          rx="1.7"
          fill={colors[t]}
        />
      ))}
    </svg>
  );
}

/** Logo complet : icône pixel + nom. tone="light" pour les fonds sombres. */
export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: Tone;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8" tone={tone} />
      <span
        className={`font-display text-xl font-extrabold tracking-tight ${
          tone === "light" ? "text-white" : "text-marine"
        }`}
      >
        MaFanZone
      </span>
    </span>
  );
}
