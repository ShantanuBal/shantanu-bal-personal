import { ImageResponse } from "next/og";

export const alt = "Shantanu Bal — Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#060614",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px",
          position: "relative",
        }}
      >
        {/* Subtle top glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #22d3ee55, transparent)",
            display: "flex",
          }}
        />

        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1,
            letterSpacing: "-3px",
            display: "flex",
          }}
        >
          Shantanu Bal
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#94a3b8",
            fontWeight: 400,
            display: "flex",
            marginTop: "24px",
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#22d3ee",
            fontWeight: 400,
            display: "flex",
            marginTop: "40px",
          }}
        >
          shantanubal.com
        </div>
      </div>
    ),
    { ...size }
  );
}
