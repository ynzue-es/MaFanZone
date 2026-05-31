import { ImageResponse } from "next/og";

// Image de partage (réseaux sociaux, messageries) générée à la construction.
export const alt =
  "MaFanZone — Location d’écrans géants LED pour vos fan zones";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Même grille de pixels que le logo (app/components/Logo.tsx) : un « play » avec un pixel rouge.
const CELLS: { c: number; r: number; color: string }[] = [
  { c: 0, r: 0, color: "#ffffff" },
  { c: 0, r: 1, color: "#ffffff" }, { c: 1, r: 1, color: "#e6ecf7" }, { c: 2, r: 1, color: "#e6ecf7" },
  { c: 0, r: 2, color: "#e6ecf7" }, { c: 1, r: 2, color: "#e6ecf7" }, { c: 2, r: 2, color: "#e6ecf7" }, { c: 3, r: 2, color: "#e6ecf7" }, { c: 4, r: 2, color: "#ee2a3c" },
  { c: 0, r: 3, color: "#e6ecf7" }, { c: 1, r: 3, color: "#e6ecf7" }, { c: 2, r: 3, color: "#b9c6e2" },
  { c: 0, r: 4, color: "#b9c6e2" },
];
const LOGO_BOX = 84; // taille de l'icône dans l'OG
const F = LOGO_BOX / 48; // facteur d'échelle (logo dessiné sur 48 unités)

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0e2a5e 0%, #081c40 100%)",
          padding: "72px 80px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo : play pixelisé (identique au logo du site) + nom */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              width: LOGO_BOX,
              height: LOGO_BOX,
            }}
          >
            {CELLS.map(({ c, r, color }) => (
              <div
                key={`${c}-${r}`}
                style={{
                  position: "absolute",
                  left: (2.5 + c * 9) * F,
                  top: (2.5 + r * 9) * F,
                  width: 7 * F,
                  height: 7 * F,
                  borderRadius: 1.7 * F,
                  background: color,
                }}
              />
            ))}
          </div>
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>
            MaFanZone
          </div>
        </div>

        {/* Accroche */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            Faites vivre les grands matchs à vos supporters
          </div>
          <div style={{ fontSize: 32, color: "rgba(255,255,255,0.8)" }}>
            Écrans géants LED clé en main · Devis gratuit
          </div>
        </div>

        {/* Pied : zone + barre rouge */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 56, height: 6, background: "#d32436", borderRadius: 3 }} />
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.7)" }}>
            Ain · Rhône · Jura · Bugey
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
