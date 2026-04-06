import { BookingForm } from "@/components/booking-form";
import { Container } from "@/components/container";
import { SectionReveal } from "@/components/section-reveal";
import { StructuredData } from "@/components/structured-data";
import { SITE_URL } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Book a Cab | Shriram Tour & Travels",
  description: "Submit your booking details and continue on WhatsApp for instant cab confirmation in Pune.",
  path: "/booking",
  keywords: ["book cab pune", "cab booking pune", "taxi booking wakad"],
});

export default function BookingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/booking#page`,
        url: `${SITE_URL}/booking`,
        name: "Book a cab",
        description: metadata.description,
      },
      buildBreadcrumbStructuredData([
        { name: "Home", path: "/" },
        { name: "Booking", path: "/booking" },
      ]),
    ],
  };

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <StructuredData id="booking-structured-data" data={structuredData} />
        <SectionReveal>
          <BookingForm />
        </SectionReveal>
      </Container>
    </section>
  );
}
