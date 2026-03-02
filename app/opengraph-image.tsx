import { ImageResponse } from "next/og";
export const alt = "Austin Knapp - AI & Data Engineer | Founder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(180deg, #0b0b0b 0%, #050505 100%)",
          color: "#f5f5f5",
          padding: "68px",
          fontFamily: "Inter, sans-serif",
          border: "1px solid rgba(255,255,255,0.18)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.72)",
          }}
        >
          Austin Knapp
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 70,
              lineHeight: 1.04,
              fontWeight: 700,
              maxWidth: 980,
            }}
          >
            AI &amp; Data Engineer | Founder
          </div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.72)" }}>
            Building ML systems, SaaS platforms, and data pipelines that ship.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
