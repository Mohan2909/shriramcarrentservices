import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { GoogleMap } from "@/components/google-map";
import { SectionReveal } from "@/components/section-reveal";
import { StructuredData } from "@/components/structured-data";
import { contactDetails, locations, SITE_URL } from "@/data/site";
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
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "Service",
        name: `Cab service in ${location.name}`,
        serviceType: "Cab Service",
        provider: { "@id": `${SITE_URL}/#business` },
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
          acceptedAnswer: { "@type": "Answer", text: item.answer },
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
          {/* CTA buttons — always a row */}
          <div className="mt-6 flex gap-3">
            <Link href="/booking" className="flex-1 rounded-full bg-brand-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-600 sm:flex-none sm:px-5">Book a Cab</Link>
            <Link href="/contact" className="flex-1 rounded-full border border-zinc-300 bg-white px-4 py-3 text-center text-sm font-semibold text-zinc-900 transition hover:border-brand-400 sm:flex-none sm:px-5">Contact Us</Link>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionReveal className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="space-y-5 text-sm leading-8 text-zinc-600">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 42)}>{paragraph}</p>
              ))}
            </div>
            {/* WhatsApp CTA strip */}
            <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm text-zinc-600">For instant bookings, message us directly on WhatsApp for 24/7 support:</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-base font-semibold">🇮🇳 +91 {contactDetails.whatsappDisplay}</span>
                <a
                  href={`https://wa.me/${contactDetails.whatsappRaw}`}
                  className="ml-auto rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
                >
                  Message Now
                </a>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.08} className="space-y-6">
            <GoogleMap query={location.mapQuery} title={`Map for ${location.name}`} />
            <div className="rounded-[2rem] bg-ink p-6 text-white shadow-soft sm:p-8">
              <h2 className="font-display text-xl font-semibold">Popular Service Areas</h2>
              {/* Related links — always 2-col grid */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {relatedLinks.map((link) => (
                  <Link key={link.route} href={`/${link.route}`} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:border-accent-300/50 hover:text-white">
                    Cabs in {link.name} <span className="text-zinc-400">›</span>
                  </Link>
                ))}
                <Link href="/services" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:border-accent-300/50 hover:text-white">
                  Explore Outstation Trips <span className="text-zinc-400">›</span>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* FAQs — 2-col grid on mobile, 3-col grid on lg */}
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {faqs.map((item, index) => (
              <SectionReveal key={item.question} delay={index * 0.06} className="rounded-[1.75rem] border border-zinc-200 bg-white p-5 shadow-soft lg:p-6">
                <h2 className="font-display text-lg font-semibold leading-snug sm:text-2xl">{item.question}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.answer}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </Container>
      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white/95 px-4 py-3 backdrop-blur-sm">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <p className="hidden text-sm text-zinc-600 sm:block">For instant bookings, message us directly on WhatsApp for 24/7 support:</p>
            <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
              <span className="text-sm font-semibold">🇮🇳 +91 {contactDetails.whatsappDisplay}</span>
              <a
                href={`https://wa.me/${contactDetails.whatsappRaw}`}
                className="flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                +91 {contactDetails.whatsappDisplay}
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
