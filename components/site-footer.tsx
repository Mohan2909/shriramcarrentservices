import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/container";
import { contactDetails, locations, SITE_NAME, SITE_TAGLINE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 pb-24 pt-14 text-white md:pb-10">
      <Container>

        {/* Top: logo + tagline + description */}
        <div className="flex items-start gap-4 border-b border-white/10 pb-8">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1.5">
            <Image src="/images/applog.png" alt={`${SITE_NAME} emblem`} fill className="object-contain p-1" sizes="64px" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-300">{SITE_TAGLINE}</p>
            <h2 className="mt-1 font-display text-xl font-bold sm:text-2xl">{SITE_NAME}</h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-400">
              Premium local and outstation cab service from Wakad, Datta Mandir Road, Pune. Book direct for airport transfers, corporate rides, and family travel.
            </p>
          </div>
        </div>

        {/* Main grid: contact card + locations */}
        <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Contact card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <MapPin className="h-5 w-5 text-accent-300" />
              <h3 className="font-display text-lg font-semibold">Contact Information</h3>
            </div>
            <div className="mt-4 space-y-3 text-sm text-zinc-300">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                <div>
                  <p>{contactDetails.address}</p>
                  <p className="mt-1 text-zinc-400">Owner: {contactDetails.ownerName}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent-300" />
                <a href={`mailto:${contactDetails.email}`} className="break-all transition hover:text-white">{contactDetails.email}</a>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={`tel:+${contactDetails.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-accent-300/50">
                <Phone className="h-3.5 w-3.5" />
                {contactDetails.phoneDisplay}
              </a>
              <a href={`tel:+${contactDetails.secondaryPhoneRaw}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-accent-300/50">
                {contactDetails.secondaryPhoneDisplay}
              </a>
              <a href={`https://wa.me/${contactDetails.whatsappRaw}`} className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-500">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Booking
              </a>
            </div>
          </div>

          {/* Locations card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <h3 className="font-display text-lg font-semibold">Locations We Serve</h3>
            <p className="mt-1 text-sm text-zinc-400">Serving major pickup points across Pune and nearby areas.</p>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {locations.map((location) => (
                <Link
                  key={location.route}
                  href={`/${location.route}`}
                  className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-3 py-2.5 text-sm text-zinc-300 transition hover:border-accent-300/40 hover:text-white"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-accent-300" />
                  {location.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} {SITE_NAME}.</p>
          <p>Local rides, airport cabs, and outstation travel from Pune.</p>
        </div>
      </Container>
    </footer>
  );
}
