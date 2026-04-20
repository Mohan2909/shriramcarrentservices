"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

type FleetEntry = {
  name: string;
  seats: string;
  image: string;
  blurb: string;
  details?: string[];
};

type FleetGroup = {
  title: string;
  cards: FleetEntry[];
};

export function FleetCarousel({ groups }: { groups: FleetGroup[] }) {
  const [active, setActive] = useState<number[]>(groups.map(() => 0));

  const updateIndex = (groupIndex: number, nextIndex: number) => {
    setActive((current) => {
      const updated = [...current];
      updated[groupIndex] = nextIndex;
      return updated;
    });
  };

  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-3">
      {groups.map((group, groupIndex) => {
        const activeIndex = active[groupIndex] ?? 0;
        const card = group.cards[activeIndex];
        const hasMultiple = group.cards.length > 1;
        const canGoPrev = activeIndex > 0;
        const canGoNext = activeIndex < group.cards.length - 1;

        return (
          <SectionReveal key={group.title} className="flex h-full flex-col gap-4">
            <div className="flex items-center justify-between gap-3 rounded-[1.75rem] border border-zinc-200 bg-white p-4 shadow-soft">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{group.title}</p>
              </div>
              {hasMultiple ? (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => updateIndex(groupIndex, Math.max(activeIndex - 1, 0))}
                    disabled={!canGoPrev}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
                      canGoPrev
                        ? "border-brand-200 bg-brand-500 text-white shadow-sm hover:border-brand-600 hover:bg-brand-600"
                        : "border-zinc-200 bg-zinc-50 text-zinc-300"
                    } disabled:cursor-not-allowed`}
                    aria-label={`Previous ${group.title} vehicle`}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => updateIndex(groupIndex, Math.min(activeIndex + 1, group.cards.length - 1))}
                    disabled={!canGoNext}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
                      canGoNext
                        ? "border-brand-200 bg-brand-500 text-white shadow-sm hover:border-brand-600 hover:bg-brand-600"
                        : "border-zinc-200 bg-zinc-50 text-zinc-300"
                    } disabled:cursor-not-allowed`}
                    aria-label={`Next ${group.title} vehicle`}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              ) : null}
            </div>

            <div className="relative flex flex-1 flex-col overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-soft">
              <div className="relative h-48 bg-gradient-to-br from-brand-50 to-accent-50">
                <Image src={card.image} alt={card.name} fill className="object-contain p-6" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold">{card.name}</h3>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">{card.seats}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{card.blurb}</p>
                {card.details?.length ? (
                  <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                    {card.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="mt-1 block h-2.5 w-2.5 rounded-full bg-brand-500" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>

            {hasMultiple ? (
              <div className="mt-auto flex items-center justify-center gap-2">
                {group.cards.map((_, itemIndex) => (
                  <span
                    key={itemIndex}
                    className={`inline-block h-2.5 w-2.5 rounded-full ${itemIndex === activeIndex ? "bg-brand-500" : "bg-zinc-300"}`}
                  />
                ))}
              </div>
            ) : (
             null
            )}
          </SectionReveal>
        );
      })}
    </div>
  );
}
