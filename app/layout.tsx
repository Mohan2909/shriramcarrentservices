import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";

import { FloatingActions } from "@/components/floating-actions";
import { StructuredData } from "@/components/structured-data";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { contactDetails, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/data/site";
import { buildAbsoluteUrl, defaultMetadata } from "@/lib/metadata";
import { buildDefaultServiceAreas, buildPrimaryNavigationStructuredData } from "@/lib/structured-data";

import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL(SITE_URL),
};

export const viewport = {
  themeColor: "#f97316",
};

const globalStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      areaServed: buildDefaultServiceAreas(),
      ...(contactDetails.phoneDisplay
        ? {
            telephone: contactDetails.phoneDisplay,
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: contactDetails.phoneDisplay,
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["en", "hi", "mr"],
              },
            ],
          }
        : {}),
    },
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      image: buildAbsoluteUrl("/opengraph-image"),
      areaServed: buildDefaultServiceAreas(),
      serviceArea: ["Pune", "Wakad", "Hinjewadi", "Baner", "Kharadi"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Wakad, Datta Mandir Road",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "India",
      },
      ...(contactDetails.phoneDisplay ? { telephone: contactDetails.phoneDisplay } : {}),
      parentOrganization: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en-IN",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    ...buildPrimaryNavigationStructuredData(),
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${outfit.variable}`}>
        <StructuredData id="global-structured-data" data={globalStructuredData} />
        <div className="flex min-h-screen flex-col">
          <SiteNavbar />
          <main className="flex-1 pb-24 md:pb-0">{children}</main>
          <SiteFooter />
        </div>
        <FloatingActions />
      </body>
    </html>
  );
}
