import { locations, SITE_URL } from "@/data/site";
import { buildAbsoluteUrl } from "@/lib/metadata";

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