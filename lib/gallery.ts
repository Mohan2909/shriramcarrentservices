import { readdir } from "node:fs/promises";
import { join } from "node:path";

const GALLERY_DIRECTORY = join(process.cwd(), "public/gallery");

const imagePattern = /\.(jpg|jpeg|png|webp)$/i;
const videoPattern = /\.(mp4|webm|mov)$/i;

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  fileName: string;
};

export type GalleryVideo = {
  id: string;
  src: string;
  alt: string;
  fileName: string;
};

export type GalleryItem =
  | (GalleryImage & { type: "image" })
  | (GalleryVideo & { type: "video" });

function toPublicSrc(fileName: string) {
  return encodeURI(`/gallery/${fileName}`);
}

export async function getGalleryImages() {
  const entries = await readdir(GALLERY_DIRECTORY, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && imagePattern.test(entry.name))
    .sort((left, right) => left.name.localeCompare(right.name, undefined, { numeric: true }))
    .map((entry, index) => ({
      id: `gallery-image-${index + 1}`,
      src: toPublicSrc(entry.name),
      alt: `Shriram Tour & Travels gallery photo ${index + 1}`,
      fileName: entry.name,
    })) satisfies GalleryImage[];
}

export async function getGalleryVideo() {
  const entries = await readdir(GALLERY_DIRECTORY, { withFileTypes: true });

  const videoFile = entries
    .filter((entry) => entry.isFile() && videoPattern.test(entry.name))
    .sort((left, right) => left.name.localeCompare(right.name, undefined, { numeric: true }))[0];

  if (!videoFile) {
    return null;
  }

  return {
    id: "gallery-video-1",
    src: toPublicSrc(videoFile.name),
    alt: "Shriram Tour & Travels service video",
    fileName: videoFile.name,
  } satisfies GalleryVideo;
}

export async function getGalleryMedia() {
  const [images, video] = await Promise.all([getGalleryImages(), getGalleryVideo()]);

  const items: GalleryItem[] = images.map((image) => ({
    ...image,
    type: "image",
  }));

  if (video) {
    items.splice(Math.min(4, items.length), 0, {
      ...video,
      type: "video",
    });
  }

  return items;
}