import { ImageResponse } from "next/og";

export const alt = "Schlüsseldienst Nuding – Türöffnung 50 €, 24/7 Notdienst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0f12",
          backgroundImage:
            "radial-gradient(circle at 80% 10%, rgba(15,181,166,0.22), transparent 45%)",
          padding: "72px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              background: "#0fb5a6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>
            Schlüsseldienst Nuding
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 70, fontWeight: 800, lineHeight: 1.04 }}>Tür zu, Kopf leer?</div>
          <div style={{ fontSize: 70, fontWeight: 800, lineHeight: 1.04, color: "#3fe0d0" }}>
            Wir machens fair.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 27, color: "rgba(255,255,255,0.82)" }}>
          <span style={{ display: "flex", color: "#ff5a1f", fontWeight: 700 }}>Türöffnung 50 €</span>
          <span style={{ display: "flex" }}>·</span>
          <span style={{ display: "flex" }}>24/7 Notdienst</span>
          <span style={{ display: "flex" }}>·</span>
          <span style={{ display: "flex" }}>Bergisch Gladbach &amp; Köln</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
