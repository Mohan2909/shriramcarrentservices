import { Container } from "@/components/container";
import { GalleryExperience } from "@/components/gallery-experience";
import { StructuredData } from "@/components/structured-data";
import { SITE_NAME, SITE_URL } from "@/data/site";
import { getGalleryMedia } from "@/lib/gallery";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: `Gallery | ${SITE_NAME}`,
  description: "Browse real cab, ride, and service photos from Shriram Tour & Travels in Pune.",
  path: "/gallery",
  keywords: ["cab gallery pune", "taxi photos pune", "shriram tour travels gallery"],
});

export default async function GalleryPage() {
  const media = await getGalleryMedia();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/gallery#page`,
        url: `${SITE_URL}/gallery`,
        name: `${SITE_NAME} gallery`,
        description: metadata.description,
      },
      buildBreadcrumbStructuredData([
        { name: "Home", path: "/" },
        { name: "Gallery", path: "/gallery" },
      ]),
      {
        "@type": "ItemList",
        itemListElement: media.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": item.type === "video" ? "VideoObject" : "ImageObject",
            contentUrl: `${SITE_URL}${item.src}`,
            name: item.alt,
          },
        })),
      },
    ],
  };

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <StructuredData id="gallery-structured-data" data={structuredData} />
        <GalleryExperience items={media} />
      </Container>
    </section>
  );
}