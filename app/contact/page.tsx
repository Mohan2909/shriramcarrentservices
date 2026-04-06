import { Container } from "@/components/container";
import { GoogleMap } from "@/components/google-map";
import { SectionReveal } from "@/components/section-reveal";
import { StructuredData } from "@/components/structured-data";
import { contactDetails, SITE_NAME, SITE_URL } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Contact | Shriram Tour & Travels",
  description: "Contact Shriram Tour & Travels in Wakad, Pune for cab booking, airport transfer, and outstation travel enquiries.",
  path: "/contact",
  keywords: ["contact cab service pune", "wakad cab booking", "pune taxi contact"],
});

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        name: `Contact ${SITE_NAME}`,
        url: `${SITE_URL}/contact`,
        mainEntity: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      buildBreadcrumbStructuredData([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/contact#organization`,
        name: SITE_NAME,
        address: contactDetails.address,
        ...(contactDetails.phoneDisplay ? { telephone: contactDetails.phoneDisplay } : {}),
      },
    ],
  };

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <StructuredData id="contact-structured-data" data={structuredData} />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionReveal className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-soft sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Contact</p>
            <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Get in touch for direct cab booking</h1>
            <div className="mt-8 space-y-5 text-sm leading-8 text-zinc-600">
              <div>
                <h2 className="font-semibold text-zinc-900">Address</h2>
                <p>{contactDetails.address}</p>
              </div>
              <div className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                <h2 className="font-semibold text-zinc-900">Phone</h2>
                <a href={`tel:+${contactDetails.phoneRaw}`} className="truncate text-right transition hover:text-brand-600">{contactDetails.phoneDisplay}</a>
              </div>
              <div className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                <h2 className="font-semibold text-zinc-900">WhatsApp</h2>
                <a href={`https://wa.me/${contactDetails.whatsappRaw}`} target="_blank" rel="noreferrer" className="truncate text-right transition hover:text-brand-600">Start WhatsApp Chat</a>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <GoogleMap query={contactDetails.address} title="Shriram Tour & Travels address map" />
          </SectionReveal>
        </div>
      </Container>
    </section>
  );
}
