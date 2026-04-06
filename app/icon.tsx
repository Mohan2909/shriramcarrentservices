/* eslint-disable @next/next/no-img-element */

import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

let cachedLogoDataUrl: string | null = null;

async function getLogoDataUrl() {
  if (cachedLogoDataUrl) {
    return cachedLogoDataUrl;
  }

  const logoBuffer = await readFile(join(process.cwd(), "public/images/applog.png"));
  cachedLogoDataUrl = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return cachedLogoDataUrl;
}

export default async function Icon() {
  const logoSrc = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <img
          src={logoSrc}
          alt="Shriram Tour & Travels"
          width="32"
          height="32"
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}