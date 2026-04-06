import { locations, type LocationEntry } from "@/data/site";

export function getLocationByRoute(route: string) {
  return locations.find((location) => location.route === route);
}

export function getLocationParagraphs(location: LocationEntry) {
  const nearby = location.nearby.join(", ");

  return [
    `Shriram Tour & Travels offers dependable cab service in ${location.name} for airport pickups, business meetings, family outings, weekend trips, and daily intercity travel. If you are searching for cab service in ${location.name} that feels punctual, premium, and easy to book, our team is built for exactly that requirement. We handle one-way rides, round trips, local city drops, and outstation journeys with clean vehicles and verified drivers who understand Pune traffic patterns and peak-hour timing. Customers booking a taxi in ${location.name} usually want quick confirmations, transparent pricing, and flexible travel options, so our booking process is designed to stay simple on mobile and fast on WhatsApp.`,
    `${location.name} connects smoothly with ${nearby}, which makes it an important pickup zone for residents, IT professionals, students, and corporate teams. Our cab service in ${location.name} covers early-morning airport transfers, same-day return travel, railway station pickups, and custom plans for events or site visits. Whether you need a Swift Dzire for a budget-friendly commute, an Ertiga for family travel, or an Innova Crysta for a more executive ride, we match the car to your route and passenger count. This makes our taxi in ${location.name} suitable for both short-distance city travel and high-comfort intercity bookings across Maharashtra.`,
    `Many riders from ${location.name} choose us because our drivers focus on punctual arrival, route familiarity, and polite communication. We monitor travel needs across Pune and nearby hubs so that a cab service in ${location.name} remains available for common routes like airport transfers, Hinjewadi office drops, Baner meetings, and weekend departures toward Lonavala, Mumbai, Nashik, Kolhapur, or Shirdi. If you need a taxi in ${location.name} for one passenger, a family, or a small group, our fleet range helps keep the trip practical without compromising on comfort.`,
    `Customers often search with high-intent phrases such as cab service in ${location.name}, taxi in ${location.name}, airport cab in ${location.name}, or outstation taxi from ${location.name}. This page is built to answer those searches with useful booking information, route relevance, and direct contact options. Our team serves residential complexes, office parks, commercial streets, and nearby landmarks around ${location.name}, so you can book confidently even for early departures or late-night arrivals.`,
    `For the fastest response, use the booking form or message us on WhatsApp with your pickup point, drop location, travel date, and car preference. Shriram Tour & Travels keeps cab service in ${location.name} focused on comfort, consistency, and real customer support. If your trip starts in ${location.name} and ends anywhere in Pune or beyond, we are ready with a flexible taxi in ${location.name} that fits your timing and budget.`
  ];
}

export function getLocationFaqs(location: LocationEntry) {
  return [
    {
      question: `Do you offer airport trips from ${location.name}?`,
      answer: `Yes. Airport pickup and drop bookings are available from ${location.name}, including early-morning departures and late-night arrivals.`,
    },
    {
      question: `Can I book an outstation cab from ${location.name}?`,
      answer: `Yes. Outstation rides from ${location.name} can be arranged for one-way travel, round trips, family tours, business visits, and weekend plans.`,
    },
    {
      question: `Which nearby areas can also be covered from ${location.name}?`,
      answer: `${location.name} bookings can also be coordinated for nearby pickup and drop zones such as ${location.nearby.join(", ")}.`,
    },
  ];
}
