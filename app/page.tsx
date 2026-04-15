import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Briefcase, Car, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import { Container } from "@/components/container";
import { PopularRoutes } from "@/components/popular-routes";
import { ServiceCards } from "@/components/service-cards";
import { GalleryExperience } from "@/components/gallery-experience";
import { GoogleMap } from "@/components/google-map";
import { SectionReveal } from "@/components/section-reveal";
import { StructuredData } from "@/components/structured-data";
import { UserCityBanner } from "@/components/user-city-banner";
import { FleetCarousel } from "@/components/fleet-carousel";
import { contactDetails, fleet, homeContent, homeFaqs, popularRoutes, services, testimonials, SITE_NAME, SITE_URL } from "@/data/site";
import { getGalleryImages } from "@/lib/gallery";
import { buildAbsoluteUrl, buildMetadata } from "@/lib/metadata";
import { buildDefaultServiceAreas } from "@/lib/structured-data";
import IndiaMapCard from "./IndiaMapCard";

export const metadata = buildMetadata({
  title: "Cab Service in Pune | Shriram Tour And Travel, Cab Service",
  description: "Best cab service in Pune for airport transfers, outstation travel, one-way rides, and corporate bookings.",
  path: "/",
  keywords: ["cab service in pune", "best cab service in pune", "taxi in pune", "airport cab pune"],
});

export default async function HomePage() {
  const galleryImages = (await getGalleryImages()).slice(0, 8);
  const galleryPreviewItems = galleryImages.map((image) => ({
    ...image,
    type: "image" as const,
  }));

  const fleetPreviewGroups = [
    {
      title: "5 Seater",
      cards: [fleet[0], fleet[1]],
    },
    {
      title: "7 Seater",
      cards: [fleet[4], fleet[2], fleet[5]],
    },
    {
      title: "Bus",
      cards: [fleet[3]],
    },
  ];

  const serviceHubGroups = [
    {
      name: "Pune",
      eyebrow: "City Pickup Hubs",
      summary: "Fast cab availability for airport rides, railway transfers, IT park pickups, and local travel across Pune.",
      areas: ["Baner", "Viman Nagar", "Kharadi", "Hadapsar", "Magarpatta", "Shivajinagar"],
      stats: ["Airport area", "IT corridors", "Station transfers"],
      metric: "20+ pickup zones",
      subMetric: "Airport, station and city travel",
      href: "/cab-service-pune",
    },
    {
      name: "PCMC",
      eyebrow: "PCMC Pickup Hubs",
      summary: "Reliable cabs for commercial zones, residential sectors, bus depot access, and daily commuting across PCMC.",
      areas: ["Pimpri", "Chinchwad", "Akurdi", "Nigdi", "Rahatani", "Hinjewadi"],
      stats: ["Commercial area", "Industrial zone", "Bus depot access"],
      metric: "Daily city connectivity",
      subMetric: "Industrial and residential coverage",
      href: "/cab-service-pimpri",
    },
  ] as const;

  const bookingHighlights = [
    {
      title: "Pickup coverage that feels local",
      description: "Wakad, Hinjewadi, Baner, Kharadi, Pune Airport and nearby routes are positioned for quick confirmation.",
      icon: MapPin,
    },
    {
      title: "Fleet fit for airport to outstation",
      description: "Sedans, family movers, and business-ready cars keep the booking path simple without forcing users to decode options.",
      icon: Briefcase,
    },
    {
      title: "WhatsApp-first response flow",
      description: "Direct chat, instant fares, and clear phone backup make the CTA area feel usable instead of promotional.",
      icon: MessageCircle,
    },
  ] as const;

  const bookingStats = [
    { value: "20+", label: "Pune + PCMC zones" },
    { value: "4.8★", label: "average rider rating" },
    { value: "24/7", label: "call and WhatsApp support" },
  ] as const;

  const bookingChecklist = [
    "Airport transfers and early-morning pickups",
    "Outstation, corporate and family rides",
    "Fast confirmation with direct driver coordination",
    "Clear pricing support before booking closes",
  ] as const;


  const homeStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/#home`,
        url: SITE_URL,
        name: "Cab Service in Pune",
        description: metadata.description,
        about: {
          "@id": `${SITE_URL}/#business`,
        },
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
      },
      {
        "@type": "Service",
        serviceType: "Cab Service",
        name: `${SITE_NAME} cab services in Pune`,
        provider: {
          "@id": `${SITE_URL}/#business`,
        },
        areaServed: buildDefaultServiceAreas(),
        url: SITE_URL,
        image: buildAbsoluteUrl("/opengraph-image"),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cab booking services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
            },
          })),
        },
      },
      {
        "@type": "ItemList",
        name: "Popular cab routes from Pune",
        itemListElement: popularRoutes.map((route, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: route,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: homeFaqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <StructuredData id="home-structured-data" data={homeStructuredData} />
      <section className="relative overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-16">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
            <SectionReveal className="space-y-6">
              <span className="inline-flex max-w-full rounded-full border border-brand-200 bg-white/70 px-3 py-2 text-[10px] font-bold uppercase leading-5 tracking-[0.14em] text-brand-700 backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.24em]">
                Pune • Airport • Outstation • Corporate
              </span>
              <div className="space-y-4">
                <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
                  Best Cab Service in Pune
                </h1>
                <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                  Premium cab booking for Pune, Wakad, Hinjewadi, Baner, and nearby locations with fast confirmations, clean vehicles, and dependable drivers.
                </p>
              </div>
              <UserCityBanner />
              <div className="grid grid-cols-2 gap-3">
                <Link href="/booking" className="inline-flex items-center justify-center rounded-full bg-brand-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-600 sm:px-6">
                  Book Your Cab
                </Link>
                <Link href="/fleet" className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-4 py-3 text-center text-sm font-semibold text-zinc-900 transition hover:border-brand-500 hover:text-brand-600 sm:px-6">
                  Explore Fleet
                </Link>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1} className="relative">
              <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-accent-300/60 blur-3xl" />
              <div className="absolute -right-4 bottom-12 h-32 w-32 rounded-full bg-brand-300/50 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-4 shadow-soft backdrop-blur-sm sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-ink p-6 text-white">
                    <p className="text-sm uppercase tracking-[0.3em] text-accent-300">Lead-ready site</p>
                    <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Airport and outstation rides, booked in minutes.</h2>
                    <p className="mt-4 text-sm leading-7 text-zinc-300">WhatsApp-first flow, mobile CTA bar, and local area pages built to capture high-intent searches across Pune.</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white">
                    <p className="text-sm uppercase tracking-[0.3em] text-accent-200">Serving 20 zones</p>
                    <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">We provide cab services in Pune and nearby localities.</h2>
                    <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-semibold">
                      <span className="rounded-[1.25rem] bg-white/15 px-3 py-3 text-center">Wakad</span>
                      <span className="rounded-[1.25rem] bg-white/15 px-3 py-3 text-center">Hinjewadi</span>
                      <span className="rounded-[1.25rem] bg-white/15 px-3 py-3 text-center">Baner</span>
                      <span className="rounded-[1.25rem] bg-white/15 px-3 py-3 text-center">Kharadi</span>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionReveal>
            <ServiceCards />
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionReveal>
            <div className="mb-8 max-w-4xl sm:mb-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Service Hubs</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-zinc-950 sm:text-3xl">Popular Pune &amp; PCMC Pickup Zones</h2>
                <p className="mt-3 max-w-3xl text-base leading-8 text-zinc-600">
                  Clear coverage, easy locations, and quick pickups so you always know where we operate.
                </p>
              </div>
              <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 shadow-soft">
                <MapPin className="h-4 w-4 text-brand-600" /> Pune + PCMC Coverage
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {serviceHubGroups.map((group) => (
                <div
                  key={group.name}
                  className="flex min-w-0 flex-col rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-soft"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-none sm:max-w-md">
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-700">{group.eyebrow}</p>
                      <h3 className="mt-3 font-display text-3xl font-semibold text-zinc-950">{group.name}</h3>
                      <p className="mt-3 text-base leading-8 text-zinc-600">{group.summary}</p>
                    </div>
                    <span className="inline-flex w-fit shrink-0 items-center gap-2 self-start rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-zinc-800">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> 24/7 Service
                    </span>
                  </div>

                  <div className="mt-6 border-t border-zinc-100 pt-6">
                    <p className="text-2xl font-semibold text-zinc-950">{group.metric}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {group.stats.map((stat) => (
                        <span
                          key={stat}
                          className="rounded-[0.95rem] border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-800"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {group.areas.map((area) => (
                      <div
                        key={area}
                        className="rounded-[1rem] border border-zinc-200 bg-zinc-50 px-4 py-3 text-center text-sm font-medium text-zinc-800"
                      >
                        {area}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={group.href}
                    className="mt-5 inline-flex items-center gap-2 text-lg font-medium text-brand-600 transition hover:text-brand-700"
                  >
                    View all zones <ArrowRight className="h-4 w-4" />
                  </Link>

                  <div className="mt-6 border-t border-zinc-100 pt-5">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="flex items-center gap-3 rounded-[1.1rem] border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-600">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-zinc-700">
                          <MapPin className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-medium leading-6">Pickup support across core hubs</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-[1.1rem] border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-600">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-zinc-700">
                          <Car className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-medium leading-6">Direct cab confirmation</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <SectionReveal className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Fleet preview</p>
              <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Clean vehicles sized for solo riders, families, and corporate teams</h2>
            </SectionReveal>
            <div>
              <Link
                href="/fleet"
                className="inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                View fleet <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <FleetCarousel groups={fleetPreviewGroups} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionReveal>
            <PopularRoutes />
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionReveal>
            <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Nationwide Service</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-zinc-950 sm:text-3xl">Cab availability for local, airport, and intercity travel across India</h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                Reliable cab services connecting cities across India, from local rides to airport transfers and long-distance travel.
              </p>
            </div>
            <IndiaMapCard />
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionReveal>
            <p className="text-center text-sm font-bold uppercase tracking-[0.28em] text-brand-600">Why Choose Us</p>
          </SectionReveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            <SectionReveal delay={0} className="flex flex-col items-center rounded-[1.5rem] border border-zinc-100 bg-white p-5 text-center shadow-soft sm:rounded-[1.75rem] sm:p-7">
              <svg viewBox="0 0 56 56" fill="none" className="h-14 w-14">
                <circle cx="28" cy="28" r="28" fill="#fff7ed" />
                <path d="M28 12 L40 17 L40 28 C40 35 34 41 28 44 C22 41 16 35 16 28 L16 17 Z" fill="#f97316" />
                <path d="M22 28 L26 32 L34 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="mt-4 font-display text-sm font-bold text-zinc-950 sm:text-lg">Verified, Punctual Drivers</h3>
              <p className="mt-2 text-xs leading-6 text-zinc-500 sm:text-sm sm:leading-7">Feel premium with punctual, verified drivers ideal for daily bookings across Pune and nearby areas.</p>
            </SectionReveal>
            <SectionReveal delay={0.07} className="flex flex-col items-center rounded-[1.5rem] border border-zinc-100 bg-white p-5 text-center shadow-soft sm:rounded-[1.75rem] sm:p-7">
              <svg viewBox="0 0 56 56" fill="none" className="h-14 w-14">
                <circle cx="28" cy="28" r="28" fill="#fff7ed" />
                <rect x="10" y="26" width="36" height="14" rx="4" fill="#f97316" />
                <rect x="14" y="20" width="26" height="12" rx="3" fill="#fb923c" />
                <rect x="16" y="22" width="8" height="7" rx="1.5" fill="#bfdbfe" />
                <rect x="26" y="22" width="8" height="7" rx="1.5" fill="#bfdbfe" />
                <circle cx="18" cy="40" r="4" fill="#1c1917" />
                <circle cx="18" cy="40" r="2" fill="#78716c" />
                <circle cx="38" cy="40" r="4" fill="#1c1917" />
                <circle cx="38" cy="40" r="2" fill="#78716c" />
                <rect x="10" y="32" width="36" height="2" rx="1" fill="#c2410c" />
                <rect x="42" y="28" width="5" height="4" rx="1" fill="#fbbf24" opacity="0.8" />
              </svg>
              <h3 className="mt-4 font-display text-sm font-bold text-zinc-950 sm:text-lg">Flexible Fleet Options</h3>
              <p className="mt-2 text-xs leading-6 text-zinc-500 sm:text-sm sm:leading-7">Choose from a range of vehicles accommodating 4 to 8 passengers for daily and outstation rides.</p>
            </SectionReveal>
            <SectionReveal delay={0.14} className="col-span-2 flex flex-col items-center rounded-[1.5rem] border border-zinc-100 bg-white p-5 text-center shadow-soft sm:rounded-[1.75rem] sm:p-7 lg:col-span-1">
              <svg viewBox="0 0 56 56" fill="none" className="h-14 w-14">
                <circle cx="28" cy="28" r="28" fill="#fff7ed" />
                <circle cx="28" cy="26" r="13" fill="#f97316" />
                <path d="M33 31 L30 30 L28 33 C25 32 23 30 22 27 L25 25 L23 21 L19 21 C19 28 24 34 31 34 Z" fill="white" />
                <path d="M28 37 L24 43 L28 41 L32 43 Z" fill="#f97316" />
              </svg>
              <h3 className="mt-4 font-display text-sm font-bold text-zinc-950 sm:text-lg">Easy WhatsApp Booking</h3>
              <p className="mt-2 text-xs leading-6 text-zinc-500 sm:text-sm sm:leading-7">Book cabs quickly through WhatsApp with a seamless mobile booking experience.</p>
            </SectionReveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionReveal>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Testimonials</p>
            <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">What riders say about our Pune cab service</h2>
          </SectionReveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {testimonials.map((item, index) => {
              const initials = item.name.split(" ").map((n: string) => n[0]).join("");
              return (
                <SectionReveal key={item.name} delay={index * 0.06} className="flex flex-col justify-between rounded-[1.5rem] border border-zinc-100 bg-white p-4 shadow-soft sm:rounded-[1.75rem] sm:p-6">
                  <p className="text-xs leading-6 text-zinc-600 sm:text-sm sm:leading-7">“{item.quote}”</p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white sm:h-11 sm:w-11 sm:text-sm">
                      {initials}
                    </span>
                    <p className="text-xs font-semibold text-zinc-900 sm:text-sm">{item.name}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionReveal className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-soft sm:p-7 lg:p-8">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-600 sm:text-sm">Gallery</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl">
                See the Cars, Ride Moments &amp; Real Trips Behind the Bookings
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-500 sm:text-lg">
                Explore our gallery of cab photos, customer-ready vehicles, and real travel moments after cab bookings.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_240px] xl:grid-cols-[minmax(0,1fr)_260px]">
              <div className="min-w-0">
                <GalleryExperience items={galleryPreviewItems} mode="dashboard" />
              </div>

              <div className="flex flex-col gap-4">
                <div className="hidden rounded-[1.7rem] border border-zinc-200 bg-zinc-50 p-5 lg:block">
                  <div className="flex items-center gap-2 text-brand-600">
                    <MapPin className="h-5 w-5" />
                    <p className="text-xs font-bold uppercase tracking-[0.24em]">Pune</p>
                  </div>
                  <p className="mt-5 text-3xl font-semibold tracking-tight text-zinc-950">Pickup Zones</p>
                  <p className="mt-2 text-lg text-zinc-500">Pune, Maharashtra</p>

                  <div className="mt-6 border-t border-zinc-200 pt-5">
                    <p className="text-2xl font-semibold text-zinc-950">24/7 Availability</p>
                    <p className="mt-2 text-base leading-7 text-zinc-500">Instant support day &amp; night</p>
                  </div>
                </div>

                <div className="hidden rounded-[1.7rem] border border-zinc-200 bg-zinc-50 p-5 lg:block">
                  <p className="text-3xl font-semibold tracking-tight text-brand-600">📷 + {galleryImages.length}</p>
                  <p className="mt-2 text-lg text-zinc-500">Photos &amp; Moments</p>
                </div>

                <Link
                  href="/booking"
                  className="hidden items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-4 text-base font-bold text-white transition hover:bg-brand-600 lg:inline-flex"
                >
                  Get Instant Pricing <span>›</span>
                </Link>

                <div className="rounded-[1.7rem] border border-zinc-200 bg-white p-5 lg:hidden">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-600">At - Glance</p>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3 border-b border-zinc-100 pb-4">
                      <span className="mt-1 text-brand-600">📍</span>
                      <div>
                        <p className="text-lg font-semibold text-zinc-950">+ {galleryImages.length} Photos &amp; Moments</p>
                        <p className="mt-1 text-base text-zinc-500">Pune, Maharashtra</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-brand-600">🕘</span>
                      <div>
                        <p className="text-lg font-semibold text-zinc-950">24/7 Availability</p>
                        <p className="mt-1 text-base text-zinc-500">Instant support day &amp; night</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/booking"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-4 text-base font-bold text-white transition hover:bg-brand-600"
                  >
                    Get Instant Pricing <span>›</span>
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionReveal>
            <div className="overflow-hidden rounded-[2.15rem] border border-zinc-200 bg-white shadow-soft">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="border-b border-zinc-200 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-9">
                  <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-700 sm:text-xs">
                    Booking Control Center
                  </span>
                  <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                    Book a cab quickly and hassle-free.
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
                    Get a cab quickly with streamlined features and easy contact options for local rides, airport pickups, and outstation cabs.
                  </p>

                  <div className="mt-8 grid gap-3">
                    {bookingHighlights.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="rounded-[1.45rem] border border-zinc-200 bg-zinc-50 p-4 sm:p-5"
                        >
                          <div className="flex items-start gap-3">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-brand-600">
                              <Icon className="h-5 w-5" />
                            </span>
                            <div>
                              <h3 className="text-base font-semibold text-zinc-950">{item.title}</h3>
                              <p className="mt-1 text-sm leading-7 text-zinc-600">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <a
                      href={`https://wa.me/${contactDetails.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-4 text-sm font-semibold text-white transition hover:bg-brand-600"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Start on WhatsApp
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <Link
                      href="/booking"
                      className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-4 text-sm font-semibold text-zinc-900 transition hover:border-brand-400 hover:text-brand-700"
                    >
                      Book Now
                    </Link>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {bookingStats.map((item, index) => (
                      <div
                        key={item.label}
                        className={`rounded-[1.25rem] border border-zinc-200 bg-zinc-50 p-4 ${index === bookingStats.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
                      >
                        <p className="font-display text-2xl font-semibold text-zinc-950">{item.value}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-[1.25rem] border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-600">
                      <span className="inline-flex items-center gap-2 font-medium text-zinc-900">
                        <Phone className="h-4 w-4 text-brand-600" /> Call for confirmation
                      </span>
                    </div>
                    <div className="rounded-[1.25rem] border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-600">
                      <span className="inline-flex items-center gap-2 font-medium text-zinc-900">
                        <Briefcase className="h-4 w-4 text-brand-600" /> Support for family or corporate group bookings
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-[linear-gradient(180deg,#fffdf9_0%,#fff8ef_100%)] p-4 sm:p-6 lg:p-7">
                  <div className="rounded-[1.8rem] border border-zinc-200 bg-white p-3 shadow-[0_24px_70px_-44px_rgba(15,23,42,0.24)] sm:p-4">
                    <div className="flex flex-col gap-3 border-b border-zinc-100 px-2 pb-4 sm:flex-row sm:items-start sm:justify-between sm:px-3">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-600">Live Pickup Point</p>
                        <h3 className="mt-2 font-display text-2xl font-semibold text-zinc-950">Datta Mandir Road, Wakad</h3>
                        <p className="mt-1 text-sm text-zinc-500">Catering PCMC, airports, nearby cities &amp; outstation bookings.</p>
                      </div>
                      <span className="inline-flex w-fit rounded-full bg-brand-500 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                        Serving 20+ zones
                      </span>
                    </div>

                    <div className="mt-4 overflow-hidden rounded-[1.55rem] border border-zinc-200">
                      <GoogleMap
                        query="Wakad, Datta Mandir Road, Pune, Maharashtra, India"
                        title="Shriram Tour And Travel, Cab Service Pune map"
                        className="rounded-none border-0 bg-transparent shadow-none"
                        iframeClassName="h-[320px] w-full md:h-[390px]"
                      />
                    </div>
                  </div>

                  <div className="mt-4 rounded-[1.8rem] bg-[linear-gradient(135deg,#3b1d0d_0%,#7a3b12_56%,#bb5a17_100%)] p-5 text-white sm:p-6">
                    <div className="grid gap-5 sm:grid-cols-[1.02fr_0.98fr] sm:items-start">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-orange-200">Rapid Response Desk</p>
                        <h3 className="mt-3 font-display text-2xl font-semibold sm:text-[2rem]">Need a cab in Pune quickly?</h3>
                        <p className="mt-3 max-w-md text-sm leading-7 text-orange-50/90">
                          Chat on WhatsApp for instant bookings and assistance.
                        </p>

                        <div className="mt-5 grid gap-2 text-sm text-orange-100">
                          {[
                            "Trip coordination",
                            "Instant quotes",
                            "24/7 availability",
                            "Call for confirmation",
                            "Support for family or corporate group bookings",
                          ].map((item) => (
                            <p key={item} className="flex items-center gap-2">
                              <span className="text-orange-200">•</span>
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-3">
                        <a
                          href={`tel:${contactDetails.phoneRaw}`}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-orange-50"
                        >
                          <Phone className="h-4 w-4" />
                          +91 {contactDetails.phoneDisplay}
                        </a>
                        <a
                          href={`https://wa.me/${contactDetails.whatsappRaw}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Chat on WhatsApp
                        </a>
                        <Link
                          href="/booking"
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-orange-50"
                        >
                          Get Instant Quote
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionReveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-600 sm:text-sm">Common Questions</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-zinc-950 sm:text-3xl">Questions Travelers Ask Before Confirming Ride</h2>
            <p className="mt-2 text-sm text-zinc-500">Quick answers to help clarify our cab services and booking process.</p>
          </SectionReveal>

          {/* Edge-to-edge on mobile, 2-col always */}
          <div className="-mx-4 mt-6 grid grid-cols-2 gap-px bg-zinc-100 sm:mx-0 sm:gap-4 sm:bg-transparent">
            {[
              {
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10"><circle cx="20" cy="20" r="20" fill="#fff7ed"/><path d="M20 10 C20 16 14 20 14 20 C14 20 20 24 20 30 C20 24 26 20 26 20 C26 20 20 16 20 10Z" fill="#f97316" opacity="0.3"/><path d="M20 8 C20 15 13 19 13 19 C13 19 20 23 20 30" stroke="#f97316" strokeWidth="1.5" fill="none" strokeLinecap="round"/><circle cx="20" cy="14" r="4" fill="#f97316"/><circle cx="20" cy="14" r="2" fill="#fff"/></svg>
                ),
                question: "Which areas do you serve around Pune?",
                bullets: [
                  { icon: "🚕", text: <><strong>Pune, Wakad,</strong> Hinjewadi, Baner, Kharadi &amp; Viman Nagar</> },
                  { icon: "🚗", text: "Popular pickup zones covered for local & outstation rides" },
                ],
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10"><circle cx="20" cy="20" r="20" fill="#fff7ed"/><circle cx="20" cy="20" r="10" stroke="#f97316" strokeWidth="2" fill="none"/><line x1="20" y1="20" x2="20" y2="13" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/><line x1="20" y1="20" x2="25" y2="20" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/><circle cx="20" cy="20" r="1.5" fill="#f97316"/></svg>
                ),
                question: "Can I book airport pickups for early morning flights?",
                bullets: [
                  { icon: "✈️", text: "Rides available for early flights & late arrivals" },
                  { icon: "💬", text: "Confirmed instantly on WhatsApp" },
                ],
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10"><circle cx="20" cy="20" r="20" fill="#fff7ed"/><rect x="10" y="22" width="20" height="10" rx="3" fill="#f97316"/><path d="M13 22 L15 16 L25 16 L27 22Z" fill="#fb923c"/><circle cx="14" cy="32" r="3" fill="#292524"/><circle cx="26" cy="32" r="3" fill="#292524"/><circle cx="20" cy="14" r="4" fill="#f97316" opacity="0.6"/><circle cx="26" cy="12" r="3" fill="#fb923c" opacity="0.5"/></svg>
                ),
                question: "Which cars do you offer for families & groups?",
                bullets: [
                  { icon: "🚐", text: <><strong>Ertiga, Kia Carens,</strong> Innova Crysta</> },
                  { icon: "🧳", text: "Spacious, AC cabs with luggage space" },
                ],
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10"><circle cx="20" cy="20" r="20" fill="#fff7ed"/><rect x="13" y="10" width="14" height="18" rx="2" fill="#f97316" opacity="0.2" stroke="#f97316" strokeWidth="1.5"/><line x1="16" y1="15" x2="24" y2="15" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/><line x1="16" y1="19" x2="24" y2="19" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/><line x1="16" y1="23" x2="21" y2="23" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/><circle cx="26" cy="28" r="5" fill="#f97316"/><path d="M24 28 L25.5 29.5 L28 27" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ),
                question: "How does the booking process work?",
                bullets: [
                  { icon: "🚖", text: "Fill form or WhatsApp us trip details" },
                  { icon: "✅", text: "Quick matching & driver confirmation" },
                ],
              },
            ].map((faq, index) => (
              <SectionReveal
                key={faq.question}
                delay={index * 0.06}
                className="flex flex-col bg-white p-4 sm:rounded-[1.75rem] sm:border sm:border-zinc-100 sm:p-6 sm:shadow-soft"
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0">{faq.icon}</div>
                  <h3 className="font-display text-sm font-bold leading-snug text-zinc-950 sm:text-base">{faq.question}</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {faq.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs leading-5 text-zinc-600 sm:text-sm sm:leading-6">
                      <span className="shrink-0 text-base leading-none">{b.icon}</span>
                      <span>{b.text}</span>
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-6 flex justify-end">
            <a
              href={`https://wa.me/${contactDetails.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-brand-500 px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-600 sm:px-6 sm:text-base"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.428a.5.5 0 0 0 .609.61l5.652-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.001-1.368l-.358-.214-3.714.973.99-3.617-.234-.372A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
              WhatsApp Your Cab Details <span>›</span>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

