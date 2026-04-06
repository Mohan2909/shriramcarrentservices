import Link from "next/link";

import { Container } from "@/components/container";
import { SectionReveal } from "@/components/section-reveal";
import { StructuredData } from "@/components/structured-data";
import { services } from "@/data/site";
import { buildAbsoluteUrl, buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Services | Shriram Tour & Travels",
  description: "Book outstation cab, airport transfer, one-way trip, round trip, and corporate travel in Pune.",
  path: "/services",
  keywords: ["outstation cab pune", "airport transfer pune", "corporate cab pune"],
});

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${buildAbsoluteUrl("/services")}#page`,
        url: buildAbsoluteUrl("/services"),
        name: "Cab services",
        description: metadata.description,
      },
      buildBreadcrumbStructuredData([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]),
      {
        "@type": "ItemList",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: buildAbsoluteUrl("/services"),
          item: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
      },
    ],
  };

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <StructuredData id="services-structured-data" data={structuredData} />
        <SectionReveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Services</p>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Cab services designed around real travel demand</h1>
        </SectionReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <SectionReveal key={service.title} delay={index * 0.06} className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-soft sm:p-8">
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">{service.title}</h2>
              <p className="mt-4 text-sm leading-8 text-zinc-600">{service.description} Our service plans are optimized for punctuality, comfort, and quick WhatsApp-based confirmations from Pune and nearby pickup locations.</p>
              <Link href="/booking" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 sm:w-auto">Enquire Now</Link>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
