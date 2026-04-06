import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { GoogleMap } from "@/components/google-map";
import { SectionReveal } from "@/components/section-reveal";
import { StructuredData } from "@/components/structured-data";
import { locations, SITE_URL } from "@/data/site";
import { getLocationFaqs, getLocationParagraphs } from "@/lib/location-content";
import { buildAbsoluteUrl, buildMetadata } from "@/lib/metadata";
import { buildAreaServed, buildBreadcrumbStructuredData } from "@/lib/structured-data";

type LocationPageProps = {
  params: {
    locationSlug: string;
  };
};

export function generateStaticParams() {
  return locations.map((location) => ({ locationSlug: location.route }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: LocationPageProps) {
  const location = locations.find((entry) => entry.route === params.locationSlug);

  if (!location) {
    return buildMetadata({
      title: "Page Not Found | Shriram Tour & Travels",
      description: "Location page not found.",
      path: "/",
    });
  }

  return buildMetadata({
    title: `Cab Service in ${location.name} | Shriram Tour & Travels`,
    description: `Book cab service in ${location.name} with Shriram Tour & Travels for airport transfers, local rides, outstation trips, and corporate travel.`,
    path: `/${location.route}`,
    keywords: [
      `cab service in ${location.name.toLowerCase()}`,
      `taxi in ${location.name.toLowerCase()}`,
      `${location.name.toLowerCase()} airport cab`,
      `pune cab service ${location.name.toLowerCase()}`,
    ],
  });
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = locations.find((entry) => entry.route === params.locationSlug);

  if (!location) {
    notFound();
  }

  const paragraphs = getLocationParagraphs(location);
  const faqs = getLocationFaqs(location);
  const relatedLinks = locations.filter((entry) => location.nearby.includes(entry.name)).slice(0, 3);
  const pageUrl = buildAbsoluteUrl(`/${location.route}`);
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#page`,
        url: pageUrl,
        name: `Cab Service in ${location.name}`,
        description: `Book cab service in ${location.name} for airport rides, local travel, and outstation journeys.`,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
      },
      {
        "@type": "Service",
        name: `Cab service in ${location.name}`,
        serviceType: "Cab Service",
        provider: {
          "@id": `${SITE_URL}/#business`,
        },
        areaServed: buildAreaServed([location.name, ...location.nearby]),
        url: pageUrl,
      },
      buildBreadcrumbStructuredData([
        { name: "Home", path: "/" },
        { name: location.name, path: `/${location.route}` },
      ]),
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
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
    <section className="py-16 sm:py-20">
      <Container>
        <StructuredData id={`location-${location.route}-structured-data`} data={pageStructuredData} />
        <SectionReveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Location page</p>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Best Cab Service in {location.name}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">Book cab service in {location.name} for local travel, airport transfers, outstation journeys, and professional corporate rides with direct WhatsApp confirmation.</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <Link href="/booking" className="rounded-full bg-brand-500 px-4 py-3 text-center text-sm font-semibold text-white sm:px-5">Book a Cab</Link>
            <Link href="/contact" className="rounded-full border border-zinc-300 bg-white px-4 py-3 text-center text-sm font-semibold text-zinc-900 sm:px-5">Contact Us</Link>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionReveal className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="space-y-5 text-sm leading-8 text-zinc-600">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 42)}>{paragraph}</p>
              ))}
            </div>
          </SectionReveal>
          <SectionReveal delay={0.08} className="space-y-6">
            <GoogleMap query={location.mapQuery} title={`Map for ${location.name}`} />
            <div className="rounded-[2rem] bg-ink p-6 text-white shadow-soft sm:p-8">
              <h2 className="font-display text-2xl font-semibold">Internal links for nearby service areas</h2>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {relatedLinks.map((link) => (
                  <Link key={link.route} href={`/${link.route}`} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:border-accent-300/50 hover:text-white">
                    Cab service in {link.name}
                  </Link>
                ))}
                <Link href="/fleet" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:border-accent-300/50 hover:text-white">Explore our fleet</Link>
                <Link href="/services" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:border-accent-300/50 hover:text-white">View travel services</Link>
              </div>
            </div>
          </SectionReveal>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {faqs.map((item, index) => (
            <SectionReveal key={item.question} delay={index * 0.06} className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-soft">
              <h2 className="font-display text-2xl font-semibold">{item.question}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{item.answer}</p>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
