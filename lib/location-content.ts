import { locations, type LocationEntry } from "@/data/site";

export function getLocationByRoute(route: string) {
  return locations.find((location) => location.route === route);
}

/** H1 text for the location page */
export function getLocationH1(location: LocationEntry) {
  return `Best Cab Service in ${location.name}, Pune`;
}

/** SEO title — used in generateMetadata */
export function getLocationSeoTitle(location: LocationEntry) {
  return `Cab Service in ${location.name} | Car Rental Pune | Shriram Tour And Travel, Cab Service`;
}

/** Meta description — used in generateMetadata */
export function getLocationMetaDescription(location: LocationEntry) {
  const areaType = location.areaType ? ` ${location.areaType}` : "";
  return `Looking for cab service near me in ${location.name}? Shriram Tour And Travel, Cab Service covers this${areaType} with airport transfers, outstation cabs, and local rides. Book on WhatsApp — available 24/7.`;
}

/** H2 section headings with location-specific copy */
export function getLocationSections(location: LocationEntry) {
  const nearby = location.nearby.join(", ");
  const areaType = location.areaType ?? "area";

  return [
    {
      heading: `Cab Service in ${location.name} — Local, Airport & Outstation`,
      body: `Shriram Tour And Travel, Cab Service provides reliable cab service in ${location.name} for airport pickups, business meetings, family outings, weekend trips, and daily intercity travel. If you are searching for a cab near me in ${location.name}, our team is available 24/7 with clean vehicles, verified drivers, and instant WhatsApp confirmation. We handle one-way rides, round trips, local city drops, and outstation journeys across Maharashtra — all from this ${areaType}.`,
    },
    {
      heading: `Car Rental in ${location.name} — Sedan, SUV & MPV Options`,
      body: `${location.name} connects smoothly with ${nearby}, making it a key pickup zone for residents, IT professionals, students, and corporate teams. Our car rental in ${location.name} covers Swift Dzire and Hyundai Aura for budget-friendly commutes, Ertiga and Kia Carens for family travel, and Innova Crysta for executive or group bookings. Every vehicle is well-maintained, air-conditioned, and matched to your passenger count and route.`,
    },
    {
      heading: `Why Customers Choose Our Taxi in ${location.name}`,
      body: `Riders from ${location.name} choose us for punctual arrivals, route familiarity, and polite communication. Our taxi in ${location.name} covers common routes like Pune Airport transfers, Hinjewadi office drops, Baner meetings, and weekend departures toward Lonavala, Mumbai, Nashik, Kolhapur, or Shirdi. Whether you need a cab for one passenger, a family, or a small group, our fleet keeps the trip practical without compromising comfort.`,
    },
    {
      heading: `Book a Cab Near Me in ${location.name} — Fast WhatsApp Booking`,
      body: `Customers searching for cab near me in ${location.name} or car rental near me in Pune can book directly via WhatsApp or the booking form. Share your pickup point in ${location.name}, drop location, travel date, and car preference — and we confirm within minutes. We serve residential complexes, office parks, commercial streets, and landmarks around ${location.name} for early departures and late-night arrivals alike.`,
    },
  ];
}

/** Legacy paragraph array — kept for backward compatibility */
export function getLocationParagraphs(location: LocationEntry): string[] {
  return getLocationSections(location).map((s) => `${s.heading}\n\n${s.body}`);
}

export function getLocationFaqs(location: LocationEntry) {
  const nearby = location.nearby.join(", ");

  return [
    {
      question: `Do you offer cab service near me in ${location.name}?`,
      answer: `Yes. Shriram Tour And Travel, Cab Service provides cab service in ${location.name} and nearby areas including ${nearby}. You can book via WhatsApp or the online form for same-day and advance trips.`,
    },
    {
      question: `Do you offer airport transfers from ${location.name}?`,
      answer: `Yes. Airport pickup and drop bookings are available from ${location.name} for Pune Airport, including early-morning departures and late-night arrivals with on-time guaranteed service.`,
    },
    {
      question: `Can I book an outstation cab from ${location.name}?`,
      answer: `Yes. Outstation rides from ${location.name} are available for one-way travel, round trips, family tours, business visits, and weekend plans to Mumbai, Nashik, Shirdi, Kolhapur, and more.`,
    },
    {
      question: `Which car rental options are available in ${location.name}?`,
      answer: `We offer Swift Dzire and Hyundai Aura for solo or couple travel, Ertiga and Kia Carens for families, and Innova Crysta for groups or corporate bookings from ${location.name}.`,
    },
    {
      question: `Which nearby areas can also be covered from ${location.name}?`,
      answer: `${location.name} bookings can also be coordinated for nearby pickup and drop zones such as ${nearby}.`,
    },
  ];
}
