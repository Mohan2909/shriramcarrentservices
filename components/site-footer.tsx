import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";
import { contactDetails, locations, SITE_NAME, SITE_TAGLINE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-ink pb-24 pt-14 text-white md:pb-10">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-5">
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/5 p-2 shadow-lg shadow-black/20">
                <Image
                  src="/images/applog.png"
                  alt={`${SITE_NAME} emblem`}
                  fill
                  className="object-contain p-2"
                  sizes="80px"
                />
              </div>
              <div className="min-w-0 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300 sm:tracking-[0.3em]">{SITE_TAGLINE}</p>
                <h2 className="font-display text-xl font-semibold sm:text-2xl">{SITE_NAME}</h2>
              </div>
            </div>

            <p className="max-w-xl text-sm leading-7 text-zinc-300">
              Premium local and outstation cab service from Wakad, Datta Mandir Road, Pune. Book direct for airport transfers, corporate rides, and family travel.
            </p>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-4 text-sm text-zinc-300 sm:p-5">
              <p className="leading-7">{contactDetails.address}</p>
              <p className="mt-3 text-zinc-400">Owner: {contactDetails.ownerName}</p>
              <a href={`mailto:${contactDetails.email}`} className="mt-2 inline-flex text-zinc-200 transition hover:text-white">
                {contactDetails.email}
              </a>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:+${contactDetails.phoneRaw}`}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-4 py-2 text-center font-medium text-white transition hover:border-accent-300/50 hover:text-accent-200 sm:w-auto"
                >
                  {contactDetails.phoneDisplay}
                </a>
                <a
                  href={`tel:+${contactDetails.secondaryPhoneRaw}`}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-4 py-2 text-center font-medium text-white transition hover:border-accent-300/50 hover:text-accent-200 sm:w-auto"
                >
                  {contactDetails.secondaryPhoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${contactDetails.whatsappRaw}`}
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-4 py-2 text-center font-medium text-white transition hover:bg-brand-600 sm:w-auto"
                >
                  WhatsApp Booking
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold">Locations We Serve</h3>
                <p className="mt-1 text-sm text-zinc-400">Serving major pickup points across Pune and nearby areas.</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {locations.map((location) => (
                <Link
                  key={location.route}
                  href={`/${location.route}`}
                  className="rounded-2xl border border-white/10 bg-ink/40 px-4 py-3 text-sm text-zinc-200 transition hover:border-accent-300/50 hover:bg-white/10 hover:text-white"
                >
                  {location.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-400 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <p>© {new Date().getFullYear()} {SITE_NAME}.</p>
          <p>Local rides, airport cabs, and outstation travel from Pune.</p>
        </div>
      </Container>
    </footer>
  );
}
