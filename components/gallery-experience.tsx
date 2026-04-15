"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import type { GalleryItem } from "@/lib/gallery";

type GalleryExperienceProps = {
  items: GalleryItem[];
  mode?: "page" | "dashboard";
};

export function GalleryExperience({ items, mode = "page" }: GalleryExperienceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollToIndex = useCallback((index: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>(`[data-gallery-card="${index}"]`);
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, []);

  const openItem = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      setActiveIndex(index);
      scrollToIndex(index);
    },
    [scrollToIndex],
  );

  const moveGalleryToPrevious = useCallback(() => {
    if (!items.length) return;
    setCurrentIndex((current) => (current - 1 + items.length) % items.length);
  }, [items.length]);

  const moveGalleryToNext = useCallback(() => {
    if (!items.length) return;
    setCurrentIndex((current) => (current + 1) % items.length);
  }, [items.length]);

  const moveToPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      const nextIndex = (current - 1 + items.length) % items.length;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  }, [items.length, scrollToIndex]);

  const moveToNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      const nextIndex = (current + 1) % items.length;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  }, [items.length, scrollToIndex]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (activeIndex === null) return;
      if (event.key === "Escape") { setActiveIndex(null); return; }
      if (event.key === "ArrowRight") moveToNext();
      if (event.key === "ArrowLeft") moveToPrevious();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, moveToNext, moveToPrevious]);

  const activeItem = activeIndex === null ? null : items[activeIndex];
  const safeCurrentIndex = items.length ? currentIndex % items.length : 0;
  const secondaryIndex = items.length > 1 ? (safeCurrentIndex + 1) % items.length : safeCurrentIndex;
  const secondaryItem = items[secondaryIndex];
  const isDashboard = mode === "dashboard";

  if (!items.length) {
    return null;
  }

  return (
    <>
      <div className="rounded-[1.9rem] border border-zinc-200 bg-white p-4 shadow-soft sm:p-5">
        <div className="flex items-center justify-end gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={moveGalleryToPrevious}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-brand-300 hover:text-brand-600"
              aria-label="Scroll gallery left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={moveGalleryToNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-brand-300 hover:text-brand-600"
              aria-label="Scroll gallery right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className={`mt-4 grid gap-3 ${isDashboard ? "lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.95fr)]" : "lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]"}`}>
          <motion.div
            key={items[safeCurrentIndex].id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden rounded-[1.7rem] border border-zinc-200 bg-zinc-50"
          >
            <button
              data-gallery-card={safeCurrentIndex}
              type="button"
              onClick={() => openItem(safeCurrentIndex)}
              className="group block w-full text-left"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10]">
                {items[safeCurrentIndex].type === "image" ? (
                  <div className="absolute inset-0 p-3 sm:p-4">
                    <Image
                      src={items[safeCurrentIndex].src}
                      alt={items[safeCurrentIndex].alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1023px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.24),transparent_28%),linear-gradient(135deg,#18181b_0%,#27272a_35%,#c2410c_100%)]" />
                )}
              </div>
            </button>

            <button
              type="button"
              onClick={moveGalleryToPrevious}
              className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-zinc-700 shadow-sm backdrop-blur hover:bg-white md:hidden"
              aria-label="Previous gallery image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={moveGalleryToNext}
              className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-zinc-700 shadow-sm backdrop-blur hover:bg-white md:hidden"
              aria-label="Next gallery image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>

          {secondaryItem ? (
            <motion.button
              key={secondaryItem.id}
              data-gallery-card={secondaryIndex}
              type="button"
              onClick={() => openItem(secondaryIndex)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="group relative hidden overflow-hidden rounded-[1.7rem] border border-zinc-200 bg-zinc-50 text-left lg:block"
            >
              <div className="relative aspect-[16/10]">
                {secondaryItem.type === "image" ? (
                  <div className="absolute inset-0 p-3 sm:p-4">
                    <Image
                      src={secondaryItem.src}
                      alt={secondaryItem.alt}
                      fill
                      className="object-contain"
                      sizes="34vw"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.24),transparent_28%),linear-gradient(135deg,#18181b_0%,#27272a_35%,#c2410c_100%)]" />
                )}
              </div>
            </motion.button>
          ) : null}
        </div>

        <div className="scroll-track mt-5">
          <div
            ref={railRef}
            className="row-scroll flex gap-3 overflow-x-auto pb-1"
            style={{ WebkitOverflowScrolling: "touch", overscrollBehaviorX: "contain" } as React.CSSProperties}
          >
            {items.map((item, index) => (
              <button
                key={`${item.id}-thumb`}
                type="button"
                data-gallery-card={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={item.alt}
                className={`inline-flex shrink-0 items-center rounded-full border p-2 text-left transition hover:border-brand-300 hover:bg-white ${safeCurrentIndex === index ? "border-brand-300 bg-white" : "border-zinc-200 bg-zinc-50"}`}
              >
                <span className="relative h-14 w-14 overflow-hidden rounded-xl bg-white ring-1 ring-zinc-200">
                  {item.type === "image" ? (
                    <Image src={item.src} alt={item.alt} fill className="object-contain p-1" sizes="56px" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center bg-ink text-white">
                      <Play className="h-4 w-4 fill-current" />
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        {isDashboard ? (
          <Link
            href="/gallery"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-600 lg:hidden"
          >
            Browse Full Gallery <ChevronRight className="h-4 w-4" />
          </Link>
        ) : null}

      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={moveToPrevious}
              className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:inline-flex"
              aria-label="Previous item"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl"
            >
              <div className="relative aspect-[16/10] bg-black">
                {activeItem.type === "image" ? (
                  <Image
                    src={activeItem.src}
                    alt={activeItem.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                ) : (
                  <video controls autoPlay className="h-full w-full" preload="metadata">
                    <source src={activeItem.src} type="video/mp4" />
                  </video>
                )}
              </div>

              <div className="flex items-center justify-end gap-2 border-t border-white/10 px-5 py-4 text-white sm:px-6">
                <div className="flex items-center gap-2 md:hidden">
                  <button
                    type="button"
                    onClick={moveToPrevious}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
                    aria-label="Previous item"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={moveToNext}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
                    aria-label="Next item"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={moveToNext}
              className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:inline-flex"
              aria-label="Next item"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
