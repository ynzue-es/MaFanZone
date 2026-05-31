import { ImageResponse } from "next/og";

// Image de partage (réseaux sociaux, messageries) générée à la construction.
export const alt =
  "MaFanZone — Location d’écrans géants LED pour vos fan zones";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
        {/* Logo : play pixelisé + nom */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              position: "relative",
              width: 76,
              height: 76,
              borderRadius: 18,
              background: "rgba(255,255,255,0.08)",
              display: "flex",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 26,
                top: 20,
                width: 0,
                height: 0,
                borderTop: "18px solid transparent",
                borderBottom: "18px solid transparent",
                borderLeft: "30px solid #ffffff",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 12,
                top: 12,
                width: 14,
                height: 14,
                borderRadius: 7,
                background: "#d32436",
              }}
            />
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
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
