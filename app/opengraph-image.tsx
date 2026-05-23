import { ImageResponse } from "next/og";

export const alt = "Shantanu Bal — Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px",
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#0f172a",
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
            color: "#64748b",
            fontWeight: 400,
            display: "flex",
            marginTop: "24px",
          }}
        >
          Senior Software Engineer
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            fontWeight: 400,
            display: "flex",
            marginTop: "12px",
          }}
        >
          Seattle → New York · Fintech
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#3b82f6",
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
