import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Repline
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a3a3a3",
            maxWidth: 600,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          The operating system for player representation
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 16,
            color: "#737373",
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
          }}
        >
          Built for hockey agents and advisors
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
