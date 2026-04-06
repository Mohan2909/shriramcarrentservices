import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

import { Container } from "@/components/container";
import { contactDetails, SITE_NAME } from "@/data/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/fleet", label: "Fleet" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
];

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/90 backdrop-blur-xl">
      <Container className="py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">

          {/* Logo + name */}
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-brand-100 bg-white p-1.5 shadow-sm sm:h-14 sm:w-14">
              <Image src="/images/applog.png" alt={`${SITE_NAME} logo`} fill className="object-contain p-1" sizes="56px" priority />
            </div>
            <div className="min-w-0">
              <span className="block truncate font-display text-base font-bold text-ink sm:text-lg">{SITE_NAME}</span>
              <span className="hidden text-xs text-zinc-500 sm:block">Cab service across Pune</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-zinc-700 transition hover:text-brand-600">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Call Now CTA */}
          <a
            href={`tel:+${contactDetails.phoneRaw}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 sm:px-5"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile nav pill row */}
        <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }} aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-brand-300 hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
