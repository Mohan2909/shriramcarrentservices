import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Car, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import { Container } from "@/components/container";
import { PopularRoutes } from "@/components/popular-routes";
import { ServiceCards } from "@/components/service-cards";
import { GalleryExperience } from "@/components/gallery-experience";
import { GoogleMap } from "@/components/google-map";
import { SectionReveal } from "@/components/section-reveal";
import { StructuredData } from "@/components/structured-data";
import { UserCityBanner } from "@/components/user-city-banner";
import { contactDetails, fleet, homeContent, homeFaqs, popularRoutes, services, testimonials, SITE_NAME, SITE_URL } from "@/data/site";
import { getGalleryImages } from "@/lib/gallery";
import { buildAbsoluteUrl, buildMetadata } from "@/lib/metadata";
import { buildDefaultServiceAreas } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Cab Service in Pune | Shriram Tour & Travels",
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
              <span className="row-scroll inline-flex max-w-full rounded-full border border-brand-200 bg-white/70 px-4 py-2 text-[11px] font-bold uppercase leading-5 tracking-[0.18em] text-brand-700 backdrop-blur sm:text-xs sm:tracking-[0.28em]">
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
              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
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
                      <span className="rounded-2xl bg-white/15 px-3 py-3">Wakad</span>
                      <span className="rounded-2xl bg-white/15 px-3 py-3">Hinjewadi</span>
                      <span className="rounded-2xl bg-white/15 px-3 py-3">Baner</span>
                      <span className="rounded-2xl bg-white/15 px-3 py-3">Kharadi</span>
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
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Fleet preview</p>
            <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Clean vehicles sized for solo riders, families, and corporate teams</h2>
          </SectionReveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {fleet.slice(0, 3).map((car, index) => (
              <SectionReveal key={car.name} delay={index * 0.06} className="overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-soft">
                <div className="relative h-48 bg-gradient-to-br from-brand-50 to-accent-50">
                  <Image src={car.image} alt={car.name} fill className="object-contain p-6" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold">{car.name}</h3>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">{car.seats}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{car.blurb}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
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
          {/* Gallery header card — edge-to-edge on mobile */}
          <SectionReveal className="-mx-4 bg-white px-5 py-6 sm:mx-0 sm:rounded-[1.75rem] sm:border sm:border-zinc-200 sm:p-7 sm:shadow-soft">
            <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-600 sm:text-sm">Gallery</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-zinc-950 sm:text-3xl">
                  See the Cars, Ride Moments &amp; Real Trips Behind the Bookings
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">
                  View our fleet, on-trip photos, customer-ready vehicles, and real travel moments after cab bookings.
                </p>
              </div>
              {/* Stats — 3-col on sm+, 2-col on mobile */}
              <div className="grid grid-cols-3 gap-2 sm:shrink-0 sm:grid-cols-1 sm:gap-3">
                <div className="rounded-[1.2rem] bg-brand-50 px-4 py-3 text-center sm:px-5 sm:py-4">
                  <p className="text-lg font-bold text-brand-600 sm:text-2xl">📷 {galleryImages.length}+</p>
                  <p className="mt-0.5 text-[10px] font-semibold text-zinc-500 sm:text-xs">Gallery</p>
                </div>
                <div className="rounded-[1.2rem] bg-zinc-100 px-4 py-3 text-center sm:px-5 sm:py-4">
                  <p className="text-lg font-bold text-zinc-900 sm:text-2xl">Pune</p>
                  <p className="mt-0.5 text-[10px] font-semibold text-zinc-500 sm:text-xs">Pickup Zones</p>
                </div>
                <div className="rounded-[1.2rem] bg-amber-50 px-4 py-3 text-center sm:px-5 sm:py-4">
                  <p className="text-lg font-bold text-zinc-900 sm:text-2xl">24/7</p>
                  <p className="mt-0.5 text-[10px] font-semibold text-zinc-500 sm:text-xs">Available 24/7</p>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-4 border-t border-zinc-100 pt-5">
              <p className="text-xs leading-6 text-zinc-500 sm:text-sm sm:leading-7">
                Explore photos of our vehicles, clean interiors, and real customer moments from Pune rides, airport drops, and outstation journeys.
              </p>
              <Link
                href="/gallery"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-500 px-4 py-2.5 text-xs font-bold text-white hover:bg-brand-600 sm:px-5 sm:py-3 sm:text-sm"
              >
                Browse Full Gallery <span>›</span>
              </Link>
            </div>
          </SectionReveal>

          {/* Gallery rail + side CTA — edge-to-edge on mobile */}
          <SectionReveal delay={0.08} className="-mx-4 mt-px sm:mx-0 sm:mt-4">
            <div className="grid sm:grid-cols-[1fr_auto] sm:gap-4">
              {/* Gallery experience */}
              <div className="min-w-0">
                <GalleryExperience items={galleryPreviewItems} />
              </div>
              {/* Side CTA panel — hidden on mobile, shown sm+ */}
              <div className="hidden w-64 shrink-0 flex-col rounded-[1.75rem] bg-gradient-to-br from-brand-500 to-[#b83a00] p-6 text-white sm:flex xl:w-72">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-300">Get At-A-Glance</p>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug">
                  Get Instant Pricing &amp; Booking
                </h3>
                <p className="mt-2 text-sm text-orange-100">Instant fares in 30 secs.</p>
                <Link
                  href="/booking"
                  className="mt-5 inline-flex items-center justify-center gap-1 rounded-full bg-white/20 px-4 py-3 text-sm font-bold text-white ring-1 ring-white/30 hover:bg-white/30"
                >
                  Book Your Cab Now <span>›</span>
                </Link>
                <a
                  href={`https://wa.me/${contactDetails.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-zinc-900 hover:bg-zinc-50"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-green-500"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.428a.5.5 0 0 0 .609.61l5.652-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.001-1.368l-.358-.214-3.714.973.99-3.617-.234-.372A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                  Get Instant Quote on WhatsApp
                </a>
                <ul className="mt-5 space-y-2">
                  {["Instant fares in 30 secs", "4.8 / 6.0 Rated Drivers", "Pickup to final drop photos"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-orange-100">
                      <span className="text-green-400">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          {/* Edge-to-edge on mobile: -mx-4, no gap, stacked. On sm+: side-by-side with gap */}
          <div className="-mx-4 grid grid-cols-1 sm:mx-0 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {/* Left — content card */}
            <SectionReveal className="bg-white px-5 py-7 sm:rounded-[1.75rem] sm:border sm:border-zinc-200 sm:p-8 sm:shadow-soft">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-600 sm:text-sm">Search-Ready Content</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-zinc-950 sm:text-3xl">
                Cab Service in Pune Built for Fast Bookings
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-500">
                Popular cab rides in Pune, airport transfers, and reliable outstation trips. Fast booking with direct WhatsApp confirmations.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Serving Pune, Wakad, Hinjewadi, Baner, Kharadi & Nearby Rides",
                  "Fleet of Swift Dzire, Ertiga, Kia Carens & Innova Crysta",
                  "Prompt, clean, and AC cabs for family & corporate groups",
                  "24x7 support, instant fares, and fastest driver matching",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700">
                    <span className="mt-0.5 text-brand-500">✓</span> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-zinc-400">
                Rated <span className="font-bold text-zinc-700">4.8 ★</span> based on 1,000+ Pune trips
              </p>
              <Link
                href="/booking"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 py-3.5 text-sm font-bold text-white hover:bg-brand-600 sm:text-base"
              >
                Book Instant Cab Now <span>›</span>
              </Link>
              <p className="mt-3 text-center text-xs text-zinc-400">
                Rated <span className="font-semibold text-zinc-600">4.8 ★</span> based on 1,000+ Pune trips
              </p>
            </SectionReveal>

            {/* Right — map + CTA card */}
            <SectionReveal delay={0.08} className="flex flex-col">
              {/* Map */}
              <div className="relative overflow-hidden sm:rounded-t-[1.75rem]">
                <GoogleMap query="Wakad, Datta Mandir Road, Pune, Maharashtra, India" title="Shriram Tour & Travels Pune map" />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg">
                  🔥 Serving 20+ Zones
                </span>
              </div>
              {/* Orange CTA panel */}
              <div className="bg-gradient-to-br from-brand-500 to-[#b83a00] px-5 py-6 sm:rounded-b-[1.75rem] sm:px-7">
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  🔔 Need a Cab in Pune ASAP?
                </h3>
                <p className="mt-2 text-sm leading-6 text-orange-100">
                  Get fast confirmation on WhatsApp. Best rated for airport transfers, outstation rides, corporate travel & more.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/${contactDetails.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-white px-3 py-3 text-xs font-bold text-zinc-900 hover:bg-zinc-50 sm:text-sm"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-green-500 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.428a.5.5 0 0 0 .609.61l5.652-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.001-1.368l-.358-.214-3.714.973.99-3.617-.234-.372A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                    Start Booking on WhatsApp
                  </a>
                  <a
                    href={`tel:${contactDetails.phoneRaw}`}
                    className="flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-3 py-3 text-xs font-bold text-white hover:bg-zinc-800 sm:text-sm"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    +91 {contactDetails.phoneDisplay}
                  </a>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {[
                    "Instant fares & driver match in 60 secs",
                    "24/7 prompt support",
                    "4.8/5.0 Rated Drivers",
                    "Best in class fleet",
                  ].map((item) => (
                    <p key={item} className="flex items-center gap-1.5 text-[11px] text-orange-100">
                      <span className="text-green-400">✓</span> {item}
                    </p>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
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

