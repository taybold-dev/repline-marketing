import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || "Repline";
  const subtitle =
    searchParams.get("subtitle") ||
    "The operating system for player representation";
  const tag =
    searchParams.get("tag") || "Built for hockey agents and advisors";

  // Determine layout based on whether a custom title was provided
  const isDefault = !searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "Inter, system-ui, sans-serif",
          padding: isDefault ? 0 : 60,
          alignItems: isDefault ? "center" : "flex-start",
          justifyContent: "center",
        }}
      >
        {/* Top bar accent */}
        {!isDefault && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 6,
              background: "linear-gradient(90deg, #2563eb, #7c3aed)",
            }}
          />
        )}

        {/* Tag / category */}
        <div
          style={{
            fontSize: isDefault ? 16 : 14,
            color: "#737373",
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            marginBottom: isDefault ? 0 : 16,
            ...(isDefault
              ? { position: "absolute", bottom: 80 }
              : {}),
          }}
        >
          {tag}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: isDefault ? 72 : 56,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: 16,
            maxWidth: isDefault ? undefined : 900,
            textAlign: isDefault ? "center" : "left",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: isDefault ? 28 : 24,
            color: "#a3a3a3",
            maxWidth: isDefault ? 600 : 800,
            textAlign: isDefault ? "center" : "left",
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </div>

        {/* Bottom branding (page-specific only) */}
        {!isDefault && (
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: 60,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              Repline
            </div>
            <div style={{ fontSize: 16, color: "#737373" }}>
              repline.io
            </div>
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
