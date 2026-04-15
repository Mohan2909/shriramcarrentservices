import Link from "next/link";
import { contactDetails, services } from "@/data/site";
import { SectionReveal } from "@/components/section-reveal";

const waMsg = (service: string) =>
  `https://wa.me/${contactDetails.whatsappRaw}?text=${encodeURIComponent(`Hi, I'd like a price quote for ${service}`)}`;

const serviceMeta: Record<string, {
  badge?: { label: string; icon: string };
  price: string;
  features: string[];
  stats?: { icon: string; label: string }[];
  bookLabel: string;
  illustration: React.ReactNode;
}> = {
  "Outstation Cab": {
    badge: { label: "Popular", icon: "🔥⭐" },
    price: "Starting ₹11/km",
    features: ["One-day & multi-day trips", "AC cabs with driver", "Door-to-door pickup"],
    stats: [{ icon: "⚡", label: "4.8 Rating" }, { icon: "✅", label: "500+ Trips" }],
    bookLabel: "Book Outstation Cab",
    illustration: (
      <svg viewBox="0 0 100 80" fill="none" className="h-16 w-auto sm:h-20">
        <ellipse cx="50" cy="72" rx="30" ry="5" fill="#f97316" opacity="0.15" />
        {/* Speech bubble */}
        <ellipse cx="62" cy="22" rx="22" ry="14" fill="#f97316" />
        <path d="M48 32 L44 42 L56 34" fill="#f97316" />
        {/* Speed lines */}
        <line x1="18" y1="28" x2="36" y2="28" stroke="#fed7aa" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="36" x2="38" y2="36" stroke="#fed7aa" strokeWidth="2" strokeLinecap="round" />
        {/* Car */}
        <rect x="20" y="52" width="48" height="18" rx="5" fill="#ea580c" />
        <path d="M28 52 L32 40 L56 40 L60 52Z" fill="#f97316" />
        <rect x="33" y="42" width="10" height="8" rx="2" fill="#bae6fd" />
        <rect x="45" y="42" width="10" height="8" rx="2" fill="#bae6fd" />
        <circle cx="32" cy="70" r="6" fill="#292524" /><circle cx="32" cy="70" r="3" fill="#78716c" />
        <circle cx="56" cy="70" r="6" fill="#292524" /><circle cx="56" cy="70" r="3" fill="#78716c" />
        <rect x="64" y="56" width="5" height="4" rx="1" fill="#fbbf24" opacity="0.9" />
        <rect x="20" y="60" width="48" height="2" rx="1" fill="#c2410c" />
      </svg>
    ),
  },
  "Airport Transfer": {
    badge: { label: "Most Booked", icon: "⭐" },
    price: "Airport from ₹2000 local charges",
    features: ["Swift timing for all flights", "Luggage-friendly vehicles", "Pickup in 15 mins"],
    stats: [{ icon: "⚡", label: "Book in 60s" }, { icon: "✅", label: "Pickup in 15 mins" }],
    bookLabel: "Book Airport Cab",
    illustration: (
      <svg viewBox="0 0 100 80" fill="none" className="h-16 w-auto sm:h-20">
        <ellipse cx="50" cy="72" rx="30" ry="5" fill="#f97316" opacity="0.15" />
        {/* Speech bubble */}
        <ellipse cx="62" cy="22" rx="22" ry="14" fill="#f97316" />
        <path d="M48 32 L44 42 L56 34" fill="#f97316" />
        <line x1="18" y1="28" x2="36" y2="28" stroke="#fed7aa" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="36" x2="38" y2="36" stroke="#fed7aa" strokeWidth="2" strokeLinecap="round" />
        {/* Car */}
        <rect x="20" y="52" width="48" height="18" rx="5" fill="#ea580c" />
        <path d="M28 52 L32 40 L56 40 L60 52Z" fill="#f97316" />
        <rect x="33" y="42" width="10" height="8" rx="2" fill="#bae6fd" />
        <rect x="45" y="42" width="10" height="8" rx="2" fill="#bae6fd" />
        <circle cx="32" cy="70" r="6" fill="#292524" /><circle cx="32" cy="70" r="3" fill="#78716c" />
        <circle cx="56" cy="70" r="6" fill="#292524" /><circle cx="56" cy="70" r="3" fill="#78716c" />
        <rect x="64" y="56" width="5" height="4" rx="1" fill="#fbbf24" opacity="0.9" />
        <rect x="20" y="60" width="48" height="2" rx="1" fill="#c2410c" />
      </svg>
    ),
  },
  "One-Way / Round Trip": {
    price: "",
    features: ["Point-to-point cab transfer", "Same-day return options", "Custom itineraries"],
    bookLabel: "Book Now",
    illustration: (
      <svg viewBox="0 0 100 80" fill="none" className="h-16 w-auto sm:h-20">
        <ellipse cx="50" cy="72" rx="30" ry="5" fill="#f97316" opacity="0.15" />
        {/* Pin */}
        <path d="M68 10 C68 16 62 22 62 22 C62 22 56 16 56 10 a6 6 0 1 1 12 0z" fill="#f97316" />
        <circle cx="62" cy="10" r="2.5" fill="#fff" />
        {/* Arrows */}
        <path d="M20 32 Q50 20 72 28" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <polygon points="72,22 80,28 72,34" fill="#f97316" />
        <path d="M72 44 Q42 56 20 48" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="4 3" />
        <polygon points="20,42 12,48 20,54" fill="#fb923c" />
        {/* Car */}
        <rect x="20" y="54" width="44" height="16" rx="5" fill="#ea580c" />
        <path d="M27 54 L31 43 L53 43 L57 54Z" fill="#f97316" />
        <rect x="32" y="45" width="9" height="7" rx="2" fill="#bae6fd" />
        <rect x="43" y="45" width="9" height="7" rx="2" fill="#bae6fd" />
        <circle cx="30" cy="70" r="6" fill="#292524" /><circle cx="30" cy="70" r="3" fill="#78716c" />
        <circle cx="54" cy="70" r="6" fill="#292524" /><circle cx="54" cy="70" r="3" fill="#78716c" />
        <rect x="20" y="62" width="44" height="2" rx="1" fill="#c2410c" />
      </svg>
    ),
  },
  "Corporate Travel": {
    price: "",
    features: ["Company commutes", "Visitor cab services", "Recurring business trips"],
    bookLabel: "Book Now",
    illustration: (
      <svg viewBox="0 0 100 80" fill="none" className="h-16 w-auto sm:h-20">
        <ellipse cx="50" cy="72" rx="30" ry="5" fill="#f97316" opacity="0.15" />
        {/* Suitcases */}
        <rect x="62" y="28" width="26" height="20" rx="3" fill="#f97316" />
        <rect x="68" y="24" width="14" height="6" rx="2" fill="#fb923c" />
        <rect x="62" y="36" width="26" height="2" fill="#c2410c" />
        <rect x="73" y="28" width="3" height="20" fill="#c2410c" />
        <rect x="68" y="42" width="6" height="4" rx="1" fill="#fbbf24" />
        <rect x="68" y="50" width="18" height="14" rx="2" fill="#fb923c" />
        <rect x="72" y="47" width="10" height="5" rx="1.5" fill="#fdba74" />
        <rect x="68" y="57" width="18" height="1.5" fill="#ea580c" />
        {/* Car */}
        <rect x="12" y="54" width="46" height="16" rx="5" fill="#ea580c" />
        <path d="M19 54 L23 43 L48 43 L53 54Z" fill="#f97316" />
        <rect x="24" y="45" width="9" height="7" rx="2" fill="#bae6fd" />
        <rect x="35" y="45" width="9" height="7" rx="2" fill="#bae6fd" />
        <circle cx="22" cy="70" r="6" fill="#292524" /><circle cx="22" cy="70" r="3" fill="#78716c" />
        <circle cx="48" cy="70" r="6" fill="#292524" /><circle cx="48" cy="70" r="3" fill="#78716c" />
        <rect x="12" y="62" width="46" height="2" rx="1" fill="#c2410c" />
      </svg>
    ),
  },
};

export function ServiceCards() {
  return (
    <div>
      {/* Header — inside container padding */}
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">Services</p>
      <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Cab options for every travel need</h2>

      {/* Grid — negative margin on mobile to go edge-to-edge, gap-0 on mobile */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-2">
        {services.map((service, index) => {
          const meta = serviceMeta[service.title];
          if (!meta) return null;
          return (
            <SectionReveal
              key={service.title}
              delay={index * 0.07}
              className="flex min-w-0 flex-col rounded-[1.35rem] border border-zinc-200 bg-white p-3 shadow-soft sm:rounded-[1.75rem] sm:p-6"
            >
              {/* Top row: badge + illustration */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  {meta.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-[9px] font-bold text-amber-700 ring-1 ring-amber-200 sm:px-2.5 sm:text-xs">
                      {meta.badge.icon} {meta.badge.label}
                    </span>
                  )}
                  <h3 className="mt-2 font-display text-sm font-bold leading-snug text-zinc-950 sm:text-xl">{service.title}</h3>
                  {meta.price && <p className="mt-0.5 text-[10px] leading-4 text-zinc-500 sm:text-sm">{meta.price}</p>}
                </div>
                <div className="hidden shrink-0 sm:block">{meta.illustration}</div>
              </div>

              {/* Divider */}
              <div className="my-2.5 border-t border-zinc-100 sm:my-3" />

              {/* Features + stats */}
              <div className="grid grid-cols-1 gap-y-2 gap-x-4 sm:grid-cols-2">
                <ul className="space-y-1.5">
                  {meta.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-[10px] leading-4 text-zinc-600 sm:text-sm">
                      <span className="mt-0.5 text-brand-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
                {meta.stats && (
                  <ul className="space-y-1.5">
                    {meta.stats.map((s) => (
                      <li key={s.label} className="flex items-center gap-1.5 text-[10px] leading-4 text-zinc-600 sm:text-sm">
                        <span className="text-brand-500">{s.icon}</span> {s.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* CTAs */}
              <div className="mt-3 grid grid-cols-1 gap-1.5 sm:mt-4 sm:flex sm:flex-row sm:flex-wrap sm:gap-2">
                <Link
                  href="/booking"
                  className="inline-flex min-h-9 items-center justify-center gap-1 rounded-full bg-brand-500 px-2.5 py-2 text-center text-[10px] font-bold leading-none text-white hover:bg-brand-600 sm:min-h-11 sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  {meta.bookLabel} <span>›</span>
                </Link>
                <a
                  href={waMsg(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 items-center justify-center rounded-full border border-zinc-200 bg-white px-2.5 py-2 text-center text-[10px] font-semibold leading-none text-zinc-700 hover:border-brand-400 sm:min-h-11 sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  Get Price on WhatsApp
                </a>
              </div>
            </SectionReveal>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="mt-5 flex justify-end">
        <a
          href={`https://wa.me/${contactDetails.whatsappRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-brand-600 hover:underline"
        >
          Book Your Cab on WhatsApp →
        </a>
      </div>
    </div>
  );
}
