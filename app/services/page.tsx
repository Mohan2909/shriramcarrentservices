import Image from "next/image";
import Link from "next/link";
import { Briefcase, MapPin, Plane, Route } from "lucide-react";

import { Container } from "@/components/container";
import { SectionReveal } from "@/components/section-reveal";
import { StructuredData } from "@/components/structured-data";
import { services } from "@/data/site";
import { buildAbsoluteUrl, buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Services | Shriram Tour And Travel, Cab Service",
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
        {/* 2-col on mobile, 4-col on desktop */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {services.map((service, index) => {
            const icons = [Route, Plane, MapPin, Briefcase];
            const Icon = icons[index % icons.length];
            return (
              <SectionReveal key={service.title} delay={index * 0.06} className="flex flex-col rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-soft sm:p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50">
                  <Icon className="h-8 w-8 text-brand-500" />
                </div>
                <h2 className="mt-4 font-display text-base font-semibold leading-snug sm:text-xl">{service.title}</h2>
                <p className="mt-2 flex-1 text-xs leading-6 text-zinc-600 sm:text-sm sm:leading-7">{service.description}</p>
                <Link href="/booking" className="mt-5 inline-flex items-center justify-center rounded-full bg-brand-500 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-brand-600 sm:text-sm">Enquire Now</Link>
              </SectionReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
