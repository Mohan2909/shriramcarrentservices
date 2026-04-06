export const SITE_NAME = "Shriram Tour & Travels";
export const SITE_TAGLINE = "Premium cab service across Pune and nearby locations";
export const SITE_DESCRIPTION =
  "Book reliable cab service in Pune with Shriram Tour & Travels for airport transfers, outstation rides, one-way trips, and corporate travel.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shriram-tour-travels.vercel.app";

function normalizePhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 10) {
    return `91${digits}`;
  }

  if (digits.length === 11 && digits.startsWith("0")) {
    return `91${digits.slice(1)}`;
  }

  return digits;
}

const defaultPhoneDisplay = process.env.NEXT_PUBLIC_BOOKING_PHONE_DISPLAY || "072192 10425";

export const contactDetails = {
  address: "Wakad, Datta Mandir Road, Pune, Maharashtra, India",
  phoneDisplay: defaultPhoneDisplay,
  phoneRaw: normalizePhoneNumber(process.env.NEXT_PUBLIC_BOOKING_PHONE_RAW || defaultPhoneDisplay),
  whatsappRaw: normalizePhoneNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || defaultPhoneDisplay),
};

export const fleet = [
  {
    name: "Swift Dzire",
    seats: "4 seater",
    image: "/images/swift-dzire.svg",
    blurb: "Compact sedan for local rides, airport transfers, and affordable outstation trips.",
  },
  {
    name: "Hyundai Aura",
    seats: "4 seater",
    image: "/images/hyundai-aura.svg",
    blurb: "Balanced comfort and efficiency for city travel and executive pickup schedules.",
  },
  {
    name: "Ertiga",
    seats: "6-7 seater",
    image: "/images/ertiga.svg",
    blurb: "Spacious choice for families, station pickups, and weekend group travel.",
  },
  {
    name: "Kia Carens",
    seats: "6-7 seater",
    image: "/images/kia-carens.svg",
    blurb: "Premium MPV ride quality for longer routes and polished airport transfers.",
  },
  {
    name: "Innova Crysta",
    seats: "7-8 seater",
    image: "/images/innova-crysta.svg",
    blurb: "Flagship option for corporate mobility, group bookings, and comfort-first outstation rides.",
  },
] as const;

export const services = [
  {
    title: "Outstation Cab",
    description: "Dedicated long-distance cabs for one-day and multi-day intercity travel from Pune.",
  },
  {
    title: "Airport Transfer",
    description: "On-time pickup and drop service for Pune Airport with luggage-friendly vehicle options.",
  },
  {
    title: "One-Way / Round Trip",
    description: "Flexible ride planning for one-way drops, same-day return journeys, and custom itineraries.",
  },
  {
    title: "Corporate Travel",
    description: "Professional cabs for employee transport, client visits, and recurring business travel needs.",
  },
] as const;

export const popularRoutes = [
  "Pune to Mumbai",
  "Pune to Shirdi",
  "Pune to Nashik",
  "Pune to Kolhapur",
  "Wakad to Pune Airport",
  "Hinjewadi to Pune Airport",
];

export const testimonials = [
  {
    name: "Rohit Kulkarni",
    quote: "Clean car, on-time pickup, and the driver knew the Wakad to airport route perfectly. Smooth experience.",
  },
  {
    name: "Sneha Patil",
    quote: "We booked an Innova Crysta for a family trip and the ride was comfortable throughout. Very responsive on WhatsApp.",
  },
  {
    name: "Amit Jadhav",
    quote: "Reliable cab service in Pune for office guests. Booking confirmation was quick and pricing was straightforward.",
  },
];

export type LocationEntry = {
  name: string;
  route: string;
  nearby: string[];
  mapQuery: string;
};

export const locations: LocationEntry[] = [
  { name: "Pune", route: "cab-service-pune", nearby: ["Wakad", "Baner", "Kharadi"], mapQuery: "Pune Maharashtra India" },
  { name: "Wakad", route: "cab-service-wakad", nearby: ["Hinjewadi", "Ravet", "Pimpri"], mapQuery: "Wakad Pune Maharashtra India" },
  { name: "Hinjewadi", route: "cab-service-hinjewadi", nearby: ["Wakad", "Baner", "Pimple Saudagar"], mapQuery: "Hinjewadi Pune Maharashtra India" },
  { name: "Baner", route: "cab-service-baner", nearby: ["Aundh", "Hinjewadi", "Balewadi"], mapQuery: "Baner Pune Maharashtra India" },
  { name: "Aundh", route: "cab-service-aundh", nearby: ["Baner", "Pimple Saudagar", "Shivajinagar"], mapQuery: "Aundh Pune Maharashtra India" },
  { name: "Pimpri", route: "cab-service-pimpri", nearby: ["Chinchwad", "Nigdi", "Wakad"], mapQuery: "Pimpri Pune Maharashtra India" },
  { name: "Chinchwad", route: "cab-service-chinchwad", nearby: ["Pimpri", "Nigdi", "Akurdi"], mapQuery: "Chinchwad Pune Maharashtra India" },
  { name: "Nigdi", route: "cab-service-nigdi", nearby: ["Chinchwad", "Akurdi", "Dehu Road"], mapQuery: "Nigdi Pune Maharashtra India" },
  { name: "Ravet", route: "cab-service-ravet", nearby: ["Wakad", "Nigdi", "Dehu Road"], mapQuery: "Ravet Pune Maharashtra India" },
  { name: "Pimple Saudagar", route: "cab-service-pimple-saudagar", nearby: ["Aundh", "Wakad", "Hinjewadi"], mapQuery: "Pimple Saudagar Pune Maharashtra India" },
  { name: "Kothrud", route: "cab-service-kothrud", nearby: ["Bavdhan", "Pune", "Shivajinagar"], mapQuery: "Kothrud Pune Maharashtra India" },
  { name: "Bavdhan", route: "cab-service-bavdhan", nearby: ["Kothrud", "Baner", "Pashan"], mapQuery: "Bavdhan Pune Maharashtra India" },
  { name: "Hadapsar", route: "cab-service-hadapsar", nearby: ["Magarpatta", "Kharadi", "Pune"], mapQuery: "Hadapsar Pune Maharashtra India" },
  { name: "Magarpatta", route: "cab-service-magarpatta", nearby: ["Hadapsar", "Kharadi", "Viman Nagar"], mapQuery: "Magarpatta Pune Maharashtra India" },
  { name: "Viman Nagar", route: "cab-service-viman-nagar", nearby: ["Kharadi", "Wagholi", "Pune Airport"], mapQuery: "Viman Nagar Pune Maharashtra India" },
  { name: "Kharadi", route: "cab-service-kharadi", nearby: ["Viman Nagar", "Wagholi", "Hadapsar"], mapQuery: "Kharadi Pune Maharashtra India" },
  { name: "Wagholi", route: "cab-service-wagholi", nearby: ["Kharadi", "Viman Nagar", "Hadapsar"], mapQuery: "Wagholi Pune Maharashtra India" },
  { name: "Talegaon", route: "cab-service-talegaon", nearby: ["Dehu Road", "Nigdi", "Wakad"], mapQuery: "Talegaon Pune Maharashtra India" },
  { name: "Dehu Road", route: "cab-service-dehu-road", nearby: ["Talegaon", "Nigdi", "Ravet"], mapQuery: "Dehu Road Pune Maharashtra India" },
  { name: "Akurdi", route: "cab-service-akurdi", nearby: ["Nigdi", "Chinchwad", "Pimpri"], mapQuery: "Akurdi Pune Maharashtra India" },
];

export const homeContent = [
  "Shriram Tour & Travels offers dependable cab service in Pune for airport transfers, local rides, business travel, family pickups, and outstation trips. Customers in Pune, Wakad, Hinjewadi, Baner, Kharadi, and nearby areas can book quickly with clear calls to action and fast WhatsApp support.",
  "Our fleet includes Swift Dzire, Hyundai Aura, Ertiga, Kia Carens, and Innova Crysta to suit solo travelers, families, and corporate groups. We focus on clean cars, on-time arrivals, comfortable travel, and a simple mobile-friendly booking experience.",
  "Dedicated area pages, route-specific copy, strong internal links, and mobile-first booking paths help travelers land on the right page faster and move toward direct enquiries without friction."
];

export const homeFaqs = [
  {
    question: "Which areas do you cover around Pune?",
    answer: "We serve Pune, Wakad, Hinjewadi, Baner, Kharadi, Hadapsar, Viman Nagar, Pimpri-Chinchwad, and nearby pickup zones for local and outstation rides.",
  },
  {
    question: "Can I book airport pickups and drops for early morning trips?",
    answer: "Yes. Airport rides can be arranged for early departures, late-night arrivals, and time-sensitive schedules with direct confirmation over WhatsApp.",
  },
  {
    question: "Which cars are available for families and groups?",
    answer: "Ertiga, Kia Carens, and Innova Crysta are available for families, luggage-heavy airport trips, and small groups, while sedan options work well for daily city travel.",
  },
  {
    question: "How does the booking process work?",
    answer: "Share your trip details through the booking form or WhatsApp, and the team confirms route, timing, vehicle choice, and final trip details directly.",
  },
];
