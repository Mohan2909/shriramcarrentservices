import { ImageResponse } from "next/og";

import { SITE_NAME, SITE_TAGLINE } from "@/data/site";

export const alt = `${SITE_NAME} preview`;
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
          display: "flex",
          height: "100%",
          width: "100%",
          background: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 45%, #fde68a 100%)",
          color: "#18181b",
          fontFamily: "Arial, sans-serif",
          padding: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            borderRadius: "36px",
            background: "rgba(255,255,255,0.78)",
            border: "1px solid rgba(217,119,6,0.18)",
            boxShadow: "0 24px 90px rgba(146,64,14,0.12)",
            padding: "54px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", maxWidth: "760px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "999px",
                  background: "#fff",
                  border: "1px solid rgba(217,119,6,0.18)",
                  color: "#9a3412",
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  padding: "12px 22px",
                  textTransform: "uppercase",
                  alignSelf: "flex-start",
                }}
              >
                Pune | Airport | Outstation
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ fontSize: 72, lineHeight: 1.04, fontWeight: 800 }}>{SITE_NAME}</div>
                <div style={{ fontSize: 30, lineHeight: 1.35, color: "#52525b" }}>{SITE_TAGLINE}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "14px" }}>
              {[
                "Airport pickup",
                "Outstation trips",
                "Corporate rides",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    borderRadius: "999px",
                    background: "#18181b",
                    color: "#fff",
                    fontSize: 24,
                    fontWeight: 600,
                    padding: "14px 22px",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "240px",
              borderRadius: "32px",
              background: "linear-gradient(180deg, #f97316 0%, #c2410c 100%)",
              color: "#fff",
              textAlign: "center",
              padding: "24px",
            }}
          >
            <div style={{ fontSize: 24, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.8 }}>Direct booking</div>
            <div style={{ fontSize: 56, lineHeight: 1.05, fontWeight: 800, marginTop: "16px" }}>Fast</div>
            <div style={{ fontSize: 28, lineHeight: 1.3, marginTop: "12px" }}>WhatsApp confirmations and local pickup coverage</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}