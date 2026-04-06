import type { Metadata } from "next";

import { locations, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/data/site";

type MetadataArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  geoPlacename?: string;
  geoPosition?: string; // "lat;lng"
};

export const SHARE_IMAGE_PATH = "/opengraph-image";

const defaultKeywordSet = [
  "cab service in pune",
  "car rental pune",
  "car rental near me",
  "taxi service in pune",
  "airport cab pune",
  "outstation cab pune",
  "pune airport taxi",
  "local cab service pune",
  "cab near me pune",
  "cab booking pune",
  ...locations.flatMap((location) => [
    `cab service in ${location.name.toLowerCase()}`,
    `car rental in ${location.name.toLowerCase()}`,
    `taxi in ${location.name.toLowerCase()}`,
    `cab near me ${location.name.toLowerCase()}`,
  ]),
];

function mergeKeywords(keywords: string[]) {
  return Array.from(new Set([...defaultKeywordSet, ...keywords.map((k) => k.toLowerCase())]));
}

export function buildAbsoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  geoPlacename,
  geoPosition,
}: MetadataArgs): Metadata {
  const url = buildAbsoluteUrl(path);
  const shareImage = buildAbsoluteUrl(SHARE_IMAGE_PATH);
  const mergedKeywords = mergeKeywords(keywords);

  return {
    title,
    description,
    keywords: mergedKeywords,
    applicationName: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    referrer: "origin-when-cross-origin",
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "Travel",
    authors: [{ name: SITE_NAME }],
    alternates: {
      canonical: path,
    },
    manifest: "/manifest.webmanifest",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: shareImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} cab booking preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage],
    },
    other: {
      "geo.region": "IN-MH",
      "geo.placename": geoPlacename ?? "Pune, Maharashtra, India",
      ...(geoPosition ? { "geo.position": geoPosition, ICBM: geoPosition.replace(";", ", ") } : {}),
    },
  };
}

export const defaultMetadata: Metadata = buildMetadata({
  title: "Cab Service in Pune | Car Rental Pune | Shriram Tour & Travels",
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: ["car rental pune", "car rental near me", "cab service pune", "cab near me pune"],
});
