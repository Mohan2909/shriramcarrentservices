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
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur-xl">
      <Container className="py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-brand-100 bg-white p-1.5 shadow-sm sm:h-16 sm:w-16">
              <Image
                src="/images/applog.png"
                alt={`${SITE_NAME} logo`}
                fill
                className="object-contain p-1"
                sizes="64px"
                priority
              />
            </div>
            <div className="min-w-0">
              <span className="block truncate font-display text-base font-bold text-ink sm:text-xl">{SITE_NAME}</span>
              <span className="hidden text-xs text-zinc-500 sm:block">Cab service across Pune</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-zinc-700 transition hover:text-brand-600">
                {item.label}
              </Link>
            ))}
          </nav>

          <a href={`tel:+${contactDetails.phoneRaw}`} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-brand-600 sm:px-4">
            <PhoneCall className="h-4 w-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>

        <nav className="row-scroll mt-3 flex gap-2 pb-1 md:hidden">
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
