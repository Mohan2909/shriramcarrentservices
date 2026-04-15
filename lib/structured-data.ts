import { contactDetails, locations, SITE_NAME, SITE_URL } from "@/data/site";
import { buildAbsoluteUrl } from "@/lib/metadata";
import type { LocationEntry } from "@/data/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

const primaryNavigation = [
  { name: "Home", path: "/" },
  { name: "Fleet", path: "/fleet" },
  { name: "Services", path: "/services" },
  { name: "Booking", path: "/booking" },
  { name: "Contact", path: "/contact" },
];

export function buildAreaServed(areaNames: string[]) {
  return areaNames.map((name) => ({
    "@type": "City",
    name,
  }));
}

export function buildPrimaryNavigationStructuredData() {
  return primaryNavigation.map((item) => ({
    "@type": "SiteNavigationElement",
    "@id": `${SITE_URL}/#nav-${item.name.toLowerCase()}`,
    name: item.name,
    url: buildAbsoluteUrl(item.path),
  }));
}

export function buildBreadcrumbStructuredData(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(item.path),
    })),
  };
}

export function buildDefaultServiceAreas() {
  return buildAreaServed(locations.map((location) => location.name));
}

/** Full LocalBusiness + CarRental schema for a location page */
export function buildLocationStructuredData(location: LocationEntry) {
  const pageUrl = buildAbsoluteUrl(`/${location.route}`);
  const faqs = getLocationFaqSchema(location);

  const geoBlock = location.geo
    ? {
        geo: {
          "@type": "GeoCoordinates",
          latitude: location.geo.lat,
          longitude: location.geo.lng,
        },
      }
    : {};

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#page`,
        url: pageUrl,
        name: `Cab Service in ${location.name} | Car Rental Pune`,
        description: `Book cab service in ${location.name} for airport rides, local travel, and outstation journeys.`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: buildBreadcrumbStructuredData([
          { name: "Home", path: "/" },
          { name: `Cab Service in ${location.name}`, path: `/${location.route}` },
        ]),
      },
      {
        "@type": ["LocalBusiness", "TaxiService"],
        "@id": `${pageUrl}#localbusiness`,
        name: `${SITE_NAME} — ${location.name}`,
        url: pageUrl,
        image: buildAbsoluteUrl("/opengraph-image"),
        description: `Reliable cab service and car rental in ${location.name}, Pune. Airport transfers, outstation cabs, and local rides available 24/7.`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Wakad, Datta Mandir Road",
          addressLocality: location.name,
          addressRegion: "Maharashtra",
          postalCode: "411057",
          addressCountry: "IN",
        },
        ...geoBlock,
        telephone: contactDetails.phoneDisplay,
        email: contactDetails.email,
        areaServed: buildAreaServed([location.name, ...location.nearby]),
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: location.geo
            ? { "@type": "GeoCoordinates", latitude: location.geo.lat, longitude: location.geo.lng }
            : { "@type": "GeoCoordinates", latitude: 18.5204, longitude: 73.8567 },
          geoRadius: "15000",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Bank Transfer",
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `Car Rental in ${location.name}`,
        serviceType: "Car Rental",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: buildAreaServed([location.name, ...location.nearby]),
        url: pageUrl,
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          description: `Cab and car rental service in ${location.name} for airport transfers, outstation trips, and local rides.`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs,
      },
    ],
  };
}

/** Internal linking: returns up to 6 related location entries for a given location */
export function getRelatedLocations(location: LocationEntry, maxCount = 6): LocationEntry[] {
  const nearbySet = new Set(location.nearby);
  const direct = locations.filter((l) => nearbySet.has(l.name));
  const extras = locations
    .filter((l) => l.name !== location.name && !nearbySet.has(l.name))
    .slice(0, maxCount - direct.length);
  return [...direct, ...extras].slice(0, maxCount);
}

function getLocationFaqSchema(location: LocationEntry) {
  const nearby = location.nearby.join(", ");
  return [
    {
      "@type": "Question",
      name: `Do you offer cab service near me in ${location.name}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Yes. Shriram Tour And Travel, Cab Service provides cab service in ${location.name} and nearby areas including ${nearby}. Book via WhatsApp or the online form for same-day and advance trips.`,
      },
    },
    {
      "@type": "Question",
      name: `Do you offer airport transfers from ${location.name}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Yes. Airport pickup and drop bookings are available from ${location.name} for Pune Airport, including early-morning departures and late-night arrivals.`,
      },
    },
    {
      "@type": "Question",
      name: `Can I book an outstation cab from ${location.name}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Yes. Outstation rides from ${location.name} are available for one-way travel, round trips, and weekend plans to Mumbai, Nashik, Shirdi, Kolhapur, and more.`,
      },
    },
    {
      "@type": "Question",
      name: `Which car rental options are available in ${location.name}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `We offer Swift Dzire and Hyundai Aura for solo travel, Ertiga and Kia Carens for families, and Innova Crysta for groups or corporate bookings from ${location.name}.`,
      },
    },
  ];
}
