import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Botir Qakhramoniy — Full Stack Developer";
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
          justifyContent: "center",
          padding: "0 90px",
          backgroundColor: "#1c1c22",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 30, color: "#00ff99", letterSpacing: 4 }}>
          FULL STACK DEVELOPER
        </div>
        <div style={{ fontSize: 86, fontWeight: 700, marginTop: 18 }}>
          Botir Qakhramoniy
        </div>
        <div
          style={{
            width: 120,
            height: 6,
            backgroundColor: "#00ff99",
            marginTop: 34,
          }}
        />
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.7)",
            marginTop: 34,
          }}
        >
          React · Next.js · Node.js · PostgreSQL
        </div>
      </div>
    ),
    size
  );
}
