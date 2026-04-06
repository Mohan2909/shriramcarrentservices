import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Landmark, MapPinned, Plane, Route } from "lucide-react";

import { Container } from "@/components/container";
import { GalleryExperience } from "@/components/gallery-experience";
import { GoogleMap } from "@/components/google-map";
import { SectionReveal } from "@/components/section-reveal";
import { StructuredData } from "@/components/structured-data";
import { UserCityBanner } from "@/components/user-city-banner";
import { fleet, homeContent, homeFaqs, popularRoutes, services, testimonials, SITE_NAME, SITE_URL } from "@/data/site";
import { getGalleryImages } from "@/lib/gallery";
import { buildAbsoluteUrl, buildMetadata } from "@/lib/metadata";
import { buildAreaServed, buildDefaultServiceAreas } from "@/lib/structured-data";

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

  const routeCards = popularRoutes.map((route, index) => {
    const isAirport = route.includes("Airport");
    const isPilgrimage = route.includes("Shirdi");
    const isBusiness = route.includes("Mumbai");

    return {
      route,
      icon: isAirport ? Plane : isPilgrimage ? Landmark : isBusiness ? MapPinned : Route,
      tag: isAirport ? "Airport transfer" : isPilgrimage ? "Pilgrimage ride" : isBusiness ? "Business corridor" : "Outstation ride",
      detail: isAirport ? "Timed for flight departures and arrivals from Pune." : isPilgrimage ? "Comfort-first travel for temple visits and family groups." : isBusiness ? "Direct intercity travel with early pickups and smooth drop-offs." : "Reliable long-distance booking for weekend and family travel.",
      accent: index % 3 === 0 ? "from-brand-500/12 to-brand-100" : index % 3 === 1 ? "from-accent-300/30 to-white" : "from-zinc-100 to-white",
    };
  });

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
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Services</p>
                <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Cab options for every travel need</h2>
              </div>
              <Link href="/services" className="hidden text-sm font-semibold text-brand-600 md:inline-block">View all services</Link>
            </div>
          </SectionReveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <SectionReveal key={service.title} delay={index * 0.06} className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-soft">
                <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{service.description}</p>
              </SectionReveal>
            ))}
          </div>
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
          <SectionReveal className="relative overflow-hidden rounded-[2.25rem] border border-zinc-200/80 bg-white/90 p-5 shadow-soft backdrop-blur sm:p-7 lg:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent-300/20 blur-3xl" />

            <div className="relative">
              <div className="overflow-hidden rounded-[1.95rem] bg-gradient-to-r from-ink via-ink/95 to-brand-900 px-5 py-6 text-white sm:px-7 sm:py-8 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                  <div className="p-1">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent-300">Popular routes</p>
                    <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold sm:text-4xl">High-demand rides booked every week</h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">Use our fleet for airport transfers, pilgrimage trips, business travel, and weekend outstation bookings from Pune.</p>
                  </div>

                  <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {[
                      "Airport drops from Wakad and Hinjewadi",
                      "Outstation routes with direct support",
                      "Fast booking flow built for mobile users",
                    ].map((item) => (
                      <div key={item} className="flex min-h-[88px] items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/10 px-4 py-4 text-white backdrop-blur-sm">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                          <Clock3 className="h-4 w-4 text-accent-300" />
                        </div>
                        <p className="text-sm leading-6 text-zinc-100">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {routeCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <SectionReveal
                      key={item.route}
                      delay={index * 0.05}
                      className="group flex h-full flex-col rounded-[1.75rem] border border-zinc-200 bg-white p-4 shadow-[0_10px_30px_rgba(24,24,27,0.07)] transition duration-300 hover:-translate-y-1 sm:p-5"
                    >
                      <div className={`rounded-[1.35rem] bg-gradient-to-br ${item.accent} p-4 sm:p-5`}>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="inline-flex rounded-full border border-zinc-300/70 bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-700">
                              {item.tag}
                            </span>
                            <p className="mt-4 font-display text-[1.4rem] font-semibold leading-tight text-zinc-950 sm:text-[1.9rem]">{item.route}</p>
                          </div>
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-sm">
                            <Icon className="h-5 w-5" />
                          </div>
                        </div>
                      </div>

                      <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600">{item.detail}</p>
                      <div className="mt-5 flex items-center justify-between gap-4 border-t border-dashed border-zinc-200 pt-4">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Direct booking support</span>
                        <ArrowUpRight className="h-4 w-4 text-zinc-400 transition group-hover:text-brand-600" />
                      </div>
                    </SectionReveal>
                  );
                })}
              </div>

              <div className="row-scroll mt-6 flex gap-3 pb-1">
                {[
                  "Airport pickup",
                  "Temple trip",
                  "Corporate ride",
                  "Weekend outstation",
                ].map((item) => (
                  <span key={item} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-200 bg-brand-50/70 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-brand-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              "Verified drivers with punctual pickups",
              "Flexible fleet for 4 to 8 passengers",
              "Fast WhatsApp booking and mobile CTA flow",
            ].map((item, index) => (
              <SectionReveal key={item} delay={index * 0.07} className="rounded-[1.75rem] border border-brand-100 bg-gradient-to-br from-white to-brand-50 p-6 shadow-soft">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Why choose us</p>
                <h2 className="mt-3 font-display text-2xl font-semibold">{item}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">Designed to feel premium while staying practical for daily booking needs across Pune and surrounding locations.</p>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionReveal>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Testimonials</p>
            <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">What riders say about our Pune cab service</h2>
          </SectionReveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <SectionReveal key={item.name} delay={index * 0.06} className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-soft">
                <p className="text-sm leading-7 text-zinc-600">“{item.quote}”</p>
                <p className="mt-6 font-semibold text-zinc-900">{item.name}</p>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionReveal className="overflow-hidden rounded-[2.2rem] border border-zinc-200 bg-white shadow-soft">
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Gallery</p>
                <h2 className="mt-2 max-w-2xl font-display text-2xl font-semibold sm:text-3xl">See the cars, ride moments, and real travel setup behind the bookings</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
                  A visual look at actual vehicles, customer-ready interiors, and on-road service moments from Pune bookings, airport drops, and outstation travel.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-[1.4rem] bg-brand-50 px-4 py-4">
                  <p className="font-display text-2xl font-semibold text-brand-700">{galleryImages.length}+</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Preview shots</p>
                </div>
                <div className="rounded-[1.4rem] bg-zinc-100 px-4 py-4">
                  <p className="font-display text-2xl font-semibold text-zinc-900">Pune</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Core market</p>
                </div>
                <div className="rounded-[1.4rem] bg-accent-300/25 px-4 py-4">
                  <p className="font-display text-2xl font-semibold text-zinc-900">24/7</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Trip support</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-zinc-200 bg-zinc-50/80 px-6 py-4 sm:px-8">
              <p className="text-sm text-zinc-600">Open the full gallery to browse all available service photos.</p>
              <Link href="/gallery" className="inline-flex shrink-0 items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
                View Full Gallery
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08} className="mt-8">
            <GalleryExperience items={galleryPreviewItems} />
          </SectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <SectionReveal className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-soft sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Search-ready content</p>
              <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Cab service in Pune that is built to convert and rank</h2>
              <div className="mt-5 space-y-5 text-sm leading-8 text-zinc-600">
                {homeContent.map((paragraph) => (
                  <p key={paragraph.slice(0, 36)}>{paragraph}</p>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal delay={0.08} className="space-y-6">
              <GoogleMap query="Wakad, Datta Mandir Road, Pune, Maharashtra, India" title="Shriram Tour & Travels Pune map" />
              <div className="rounded-[2rem] bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white shadow-soft sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent-200">Book now</p>
                <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Need a cab in Pune today?</h2>
                <p className="mt-4 text-sm leading-7 text-orange-50">Book instantly for airport transfers, one-way rides, round trips, and business travel.</p>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                  <Link href="/booking" className="rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-brand-700 sm:px-5">Start Booking</Link>
                  <Link href="/contact" className="rounded-full border border-white/40 px-4 py-3 text-center text-sm font-semibold text-white sm:px-5">Contact Us</Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionReveal>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Common questions</p>
            <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Booking details travelers usually ask before they confirm</h2>
          </SectionReveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {homeFaqs.map((item, index) => (
              <SectionReveal key={item.question} delay={index * 0.06} className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-soft">
                <h3 className="font-display text-2xl font-semibold">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.answer}</p>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
