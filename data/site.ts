export const SITE_NAME = "Shriram Tour & Travels";
export const SITE_TAGLINE = "Premium cab service across Pune and nearby locations";
export const SITE_OWNER = "Pravin Arvind Masne";
export const SITE_DESCRIPTION =
  "Book reliable cab service in Pune with Shriram Tour & Travels for airport transfers, outstation rides, one-way trips, and corporate travel.";

function normalizeSiteUrl(value: string | undefined) {
  const fallbackUrl = "https://shriram-tour-travels.vercel.app";

  if (!value) {
    return fallbackUrl;
  }

  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return fallbackUrl;
  }

  const withProtocol = /^https?:\/\//i.test(trimmedValue) ? trimmedValue : `https://${trimmedValue}`;

  return withProtocol.replace(/\/$/, "");
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

function normalizePhoneNumber(value: string | undefined) {
  if (!value) {
    return "";
  }

  const digits = value.replace(/\D/g, "");

  if (digits.length === 10) {
    return `91${digits}`;
  }

  if (digits.length === 11 && digits.startsWith("0")) {
    return `91${digits.slice(1)}`;
  }

  return digits;
}

const defaultPrimaryPhoneDisplay = process.env.NEXT_PUBLIC_BOOKING_PHONE_DISPLAY || "7219210425";
const defaultSecondaryPhoneDisplay = process.env.NEXT_PUBLIC_BOOKING_SECONDARY_PHONE_DISPLAY || "8407929993";
const defaultEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "shriramcarrentalservices@gmail.com";

export const contactDetails = {
  address: "Wakad, Datta Mandir Road, Pune, Maharashtra, India",
  ownerName: SITE_OWNER,
  email: defaultEmail,
  phoneDisplay: defaultPrimaryPhoneDisplay,
  phoneRaw: normalizePhoneNumber(process.env.NEXT_PUBLIC_BOOKING_PHONE_RAW || defaultPrimaryPhoneDisplay),
  secondaryPhoneDisplay: defaultSecondaryPhoneDisplay,
  secondaryPhoneRaw: normalizePhoneNumber(process.env.NEXT_PUBLIC_BOOKING_SECONDARY_PHONE_RAW || defaultSecondaryPhoneDisplay),
  whatsappDisplay: defaultSecondaryPhoneDisplay,
  whatsappRaw: normalizePhoneNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || defaultSecondaryPhoneDisplay),
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
  /** Approximate coordinates for JSON-LD GeoCoordinates */
  geo?: { lat: number; lng: number };
  /** Short descriptor used in meta descriptions and H2 copy */
  areaType?: string;
};

export const locations: LocationEntry[] = [
  { name: "Pune", route: "cab-service-pune", nearby: ["Wakad", "Baner", "Kharadi"], mapQuery: "Pune Maharashtra India", geo: { lat: 18.5204, lng: 73.8567 }, areaType: "city centre" },
  { name: "Wakad", route: "cab-service-wakad", nearby: ["Hinjewadi", "Ravet", "Pimpri"], mapQuery: "Wakad Pune Maharashtra India", geo: { lat: 18.5975, lng: 73.7898 }, areaType: "IT suburb" },
  { name: "Hinjewadi", route: "cab-service-hinjewadi", nearby: ["Wakad", "Baner", "Pimple Saudagar"], mapQuery: "Hinjewadi Pune Maharashtra India", geo: { lat: 18.5912, lng: 73.7389 }, areaType: "IT hub" },
  { name: "Baner", route: "cab-service-baner", nearby: ["Aundh", "Hinjewadi", "Balewadi"], mapQuery: "Baner Pune Maharashtra India", geo: { lat: 18.5590, lng: 73.7868 }, areaType: "residential hub" },
  { name: "Aundh", route: "cab-service-aundh", nearby: ["Baner", "Pimple Saudagar", "Shivajinagar"], mapQuery: "Aundh Pune Maharashtra India", geo: { lat: 18.5626, lng: 73.8076 }, areaType: "residential area" },
  { name: "Pimpri", route: "cab-service-pimpri", nearby: ["Chinchwad", "Nigdi", "Wakad"], mapQuery: "Pimpri Pune Maharashtra India", geo: { lat: 18.6279, lng: 73.7997 }, areaType: "industrial township" },
  { name: "Chinchwad", route: "cab-service-chinchwad", nearby: ["Pimpri", "Nigdi", "Akurdi"], mapQuery: "Chinchwad Pune Maharashtra India", geo: { lat: 18.6186, lng: 73.8037 }, areaType: "PCMC area" },
  { name: "Nigdi", route: "cab-service-nigdi", nearby: ["Chinchwad", "Akurdi", "Dehu Road"], mapQuery: "Nigdi Pune Maharashtra India", geo: { lat: 18.6488, lng: 73.7693 }, areaType: "PCMC suburb" },
  { name: "Ravet", route: "cab-service-ravet", nearby: ["Wakad", "Nigdi", "Dehu Road"], mapQuery: "Ravet Pune Maharashtra India", geo: { lat: 18.6468, lng: 73.7601 }, areaType: "growing suburb" },
  { name: "Pimple Saudagar", route: "cab-service-pimple-saudagar", nearby: ["Aundh", "Wakad", "Hinjewadi"], mapQuery: "Pimple Saudagar Pune Maharashtra India", geo: { lat: 18.5931, lng: 73.8069 }, areaType: "residential suburb" },
  { name: "Kothrud", route: "cab-service-kothrud", nearby: ["Bavdhan", "Pune", "Shivajinagar"], mapQuery: "Kothrud Pune Maharashtra India", geo: { lat: 18.5074, lng: 73.8077 }, areaType: "residential area" },
  { name: "Bavdhan", route: "cab-service-bavdhan", nearby: ["Kothrud", "Baner", "Pashan"], mapQuery: "Bavdhan Pune Maharashtra India", geo: { lat: 18.5204, lng: 73.7726 }, areaType: "hillside suburb" },
  { name: "Hadapsar", route: "cab-service-hadapsar", nearby: ["Magarpatta", "Kharadi", "Pune"], mapQuery: "Hadapsar Pune Maharashtra India", geo: { lat: 18.5018, lng: 73.9260 }, areaType: "east Pune hub" },
  { name: "Magarpatta", route: "cab-service-magarpatta", nearby: ["Hadapsar", "Kharadi", "Viman Nagar"], mapQuery: "Magarpatta Pune Maharashtra India", geo: { lat: 18.5116, lng: 73.9285 }, areaType: "IT township" },
  { name: "Viman Nagar", route: "cab-service-viman-nagar", nearby: ["Kharadi", "Wagholi", "Kalyani Nagar"], mapQuery: "Viman Nagar Pune Maharashtra India", geo: { lat: 18.5679, lng: 73.9143 }, areaType: "airport zone" },
  { name: "Kharadi", route: "cab-service-kharadi", nearby: ["Viman Nagar", "Wagholi", "Hadapsar"], mapQuery: "Kharadi Pune Maharashtra India", geo: { lat: 18.5512, lng: 73.9442 }, areaType: "IT corridor" },
  { name: "Wagholi", route: "cab-service-wagholi", nearby: ["Kharadi", "Viman Nagar", "Hadapsar"], mapQuery: "Wagholi Pune Maharashtra India", geo: { lat: 18.5697, lng: 73.9800 }, areaType: "east suburb" },
  { name: "Talegaon", route: "cab-service-talegaon", nearby: ["Dehu Road", "Nigdi", "Wakad"], mapQuery: "Talegaon Pune Maharashtra India", geo: { lat: 18.7333, lng: 73.6833 }, areaType: "outskirt town" },
  { name: "Dehu Road", route: "cab-service-dehu-road", nearby: ["Talegaon", "Nigdi", "Ravet"], mapQuery: "Dehu Road Pune Maharashtra India", geo: { lat: 18.6667, lng: 73.7500 }, areaType: "cantonment area" },
  { name: "Akurdi", route: "cab-service-akurdi", nearby: ["Nigdi", "Chinchwad", "Pimpri"], mapQuery: "Akurdi Pune Maharashtra India", geo: { lat: 18.6481, lng: 73.7726 }, areaType: "PCMC locality" },
  { name: "Shivajinagar", route: "cab-service-shivajinagar", nearby: ["Aundh", "Kothrud", "Pune"], mapQuery: "Shivajinagar Pune Maharashtra India", geo: { lat: 18.5308, lng: 73.8474 }, areaType: "central Pune" },
  { name: "Kalyani Nagar", route: "cab-service-kalyani-nagar", nearby: ["Viman Nagar", "Kharadi", "Koregaon Park"], mapQuery: "Kalyani Nagar Pune Maharashtra India", geo: { lat: 18.5461, lng: 73.9008 }, areaType: "upscale locality" },
  { name: "Koregaon Park", route: "cab-service-koregaon-park", nearby: ["Kalyani Nagar", "Shivajinagar", "Viman Nagar"], mapQuery: "Koregaon Park Pune Maharashtra India", geo: { lat: 18.5362, lng: 73.8938 }, areaType: "premium locality" },
  { name: "Yerawada", route: "cab-service-yerawada", nearby: ["Viman Nagar", "Kalyani Nagar", "Kharadi"], mapQuery: "Yerawada Pune Maharashtra India", geo: { lat: 18.5530, lng: 73.8930 }, areaType: "central suburb" },
  { name: "Pashan", route: "cab-service-pashan", nearby: ["Baner", "Bavdhan", "Aundh"], mapQuery: "Pashan Pune Maharashtra India", geo: { lat: 18.5362, lng: 73.7897 }, areaType: "residential area" },
  { name: "Balewadi", route: "cab-service-balewadi", nearby: ["Baner", "Aundh", "Hinjewadi"], mapQuery: "Balewadi Pune Maharashtra India", geo: { lat: 18.5741, lng: 73.7793 }, areaType: "sports city zone" },
  { name: "Sus", route: "cab-service-sus", nearby: ["Baner", "Pashan", "Bavdhan"], mapQuery: "Sus Pune Maharashtra India", geo: { lat: 18.5450, lng: 73.7620 }, areaType: "emerging suburb" },
  { name: "Undri", route: "cab-service-undri", nearby: ["Hadapsar", "Pune", "Kondhwa"], mapQuery: "Undri Pune Maharashtra India", geo: { lat: 18.4618, lng: 73.9010 }, areaType: "south Pune suburb" },
  { name: "Kondhwa", route: "cab-service-kondhwa", nearby: ["Undri", "Hadapsar", "Pune"], mapQuery: "Kondhwa Pune Maharashtra India", geo: { lat: 18.4726, lng: 73.8900 }, areaType: "south Pune area" },
  { name: "Katraj", route: "cab-service-katraj", nearby: ["Kondhwa", "Pune", "Sinhagad Road"], mapQuery: "Katraj Pune Maharashtra India", geo: { lat: 18.4530, lng: 73.8620 }, areaType: "south Pune locality" },
  { name: "Sinhagad Road", route: "cab-service-sinhagad-road", nearby: ["Katraj", "Kothrud", "Pune"], mapQuery: "Sinhagad Road Pune Maharashtra India", geo: { lat: 18.4800, lng: 73.8200 }, areaType: "south-west corridor" },
  { name: "Pimple Nilakh", route: "cab-service-pimple-nilakh", nearby: ["Pimple Saudagar", "Aundh", "Wakad"], mapQuery: "Pimple Nilakh Pune Maharashtra India", geo: { lat: 18.5980, lng: 73.8010 }, areaType: "PCMC suburb" },
  { name: "Bhosari", route: "cab-service-bhosari", nearby: ["Pimpri", "Chinchwad", "Nigdi"], mapQuery: "Bhosari Pune Maharashtra India", geo: { lat: 18.6480, lng: 73.8380 }, areaType: "industrial area" },
  { name: "Dhanori", route: "cab-service-dhanori", nearby: ["Viman Nagar", "Kharadi", "Yerawada"], mapQuery: "Dhanori Pune Maharashtra India", geo: { lat: 18.5870, lng: 73.9100 }, areaType: "north-east suburb" },
  { name: "Manjri", route: "cab-service-manjri", nearby: ["Hadapsar", "Kharadi", "Wagholi"], mapQuery: "Manjri Pune Maharashtra India", geo: { lat: 18.5100, lng: 73.9600 }, areaType: "east Pune locality" },
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
