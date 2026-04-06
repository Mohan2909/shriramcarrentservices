import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";
import { SectionReveal } from "@/components/section-reveal";
import { StructuredData } from "@/components/structured-data";
import { fleet } from "@/data/site";
import { buildAbsoluteUrl, buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Fleet | Shriram Tour & Travels",
  description: "Explore Swift Dzire, Hyundai Aura, Ertiga, Kia Carens, and Innova Crysta for Pune cab bookings.",
  path: "/fleet",
  keywords: ["cab fleet pune", "innova crysta pune", "ertiga cab pune"],
});

export default function FleetPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${buildAbsoluteUrl("/fleet")}#page`,
        url: buildAbsoluteUrl("/fleet"),
        name: "Cab fleet",
        description: metadata.description,
      },
      buildBreadcrumbStructuredData([
        { name: "Home", path: "/" },
        { name: "Fleet", path: "/fleet" },
      ]),
      {
        "@type": "ItemList",
        itemListElement: fleet.map((car, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: buildAbsoluteUrl("/fleet"),
          item: {
            "@type": "Product",
            name: car.name,
            description: car.blurb,
            image: buildAbsoluteUrl(car.image),
          },
        })),
      },
    ],
  };

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <StructuredData id="fleet-structured-data" data={structuredData} />
        <SectionReveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Fleet</p>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Vehicle options for every booking type</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">Choose the right cab for city travel, airport transfers, family tours, and corporate rides. Every option is positioned for comfort, luggage practicality, and route flexibility.</p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {fleet.map((car, index) => (
            <SectionReveal key={car.name} delay={index * 0.06} className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-soft">
              <div className="relative h-56 bg-gradient-to-br from-brand-50 to-accent-50">
                <Image src={car.image} alt={car.name} fill className="object-contain p-8" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="min-w-0 truncate font-display text-2xl font-semibold">{car.name}</h2>
                  <span className="shrink-0 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">{car.seats}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{car.blurb}</p>
                <Link href="/booking" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 sm:w-auto">Book this car</Link>
              </div>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
