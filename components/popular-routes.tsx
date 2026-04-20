"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Flame, Landmark, MapPin, MapPinned, MessageCircle, Plane, Route } from "lucide-react";
import { contactDetails, popularRoutes } from "@/data/site";

const routeMeta: Record<string, {
  duration: string;
  distance: string;
  fare: string;
  badge?: string;
  featured?: boolean;
}> = {
  "Pune to Mumbai": { duration: "~ 3.5 hrs", distance: "150 km", fare: "Starting from ₹3,300", badge: "Most Booked", featured: true },
  "Pune to Shirdi": { duration: "~ 3 hrs", distance: "185 km", fare: "₹3,999" },
  "Pune to Nashik": { duration: "~ 5 hrs", distance: "210 km", fare: "Starting ₹4,999" },
  "Pune to Kolhapur": { duration: "~ 4 hrs", distance: "290 km", fare: "Starting ₹5,299" },
  "Pune to Goa": { duration: "4 days 3 night package", distance: "", fare: "Starting from ₹14,500", badge: "Pune to Goa", featured: true },
  "Mumbai Airport": { duration: "~ 4.5 hrs", distance: "Pune to Mumbai airport", fare: "Starting ₹2,700 + toll" },
  "Mumbai Darshan": { duration: "~ 5 hrs", distance: "Pune to Mumbai sightseeing", fare: "Starting ₹3,999 + toll" },
  "Wakad to Pune Airport": { duration: "~ 40 min", distance: "Airport drop", fare: "Starting from ₹2,000 Fixed Fare" },
  "Pune Local 5 Seater": { duration: "Local Pune cab", distance: "5 seater", fare: "Starting ₹2,000 Fixed Fare" },
  "Pune Local 7 Seater": { duration: "Local Pune cab", distance: "7 seater", fare: "Starting ₹3,000 Fixed Fare" },
};

const featuredRouteBackgrounds: Record<string, {
  image: string;
  imagePosition: string;
  tintClassName: string;
}> = {
  "Pune to Mumbai": {
    image: "/images/mumbai.jpg",
    imagePosition: "center center",
    tintClassName: "from-amber-100/70 via-white/20 to-orange-200/20",
  },
  "Pune to Goa": {
    image: "/images/Goa.webp",
    imagePosition: "center center",
    tintClassName: "from-emerald-100/70 via-white/20 to-sky-200/30",
  },
};

function getIcon(route: string) {
  if (route.includes("Airport")) return Plane;
  if (route.includes("Shirdi")) return Landmark;
  if (route.includes("Mumbai")) return MapPinned;
  return Route;
}

const waMsg = (route: string) =>
  `https://wa.me/${contactDetails.whatsappRaw}?text=${encodeURIComponent(`Hi, I'd like a quote for ${route}`)}`;

export function PopularRoutes() {
  const featured = popularRoutes.filter((r) => routeMeta[r]?.featured);
  const rest = popularRoutes.filter((r) => !routeMeta[r]?.featured);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/90 shadow-soft">
      {/* Header banner */}
      <div className="relative overflow-hidden bg-[linear-gradient(100deg,#1c1b20_55%,#3b1a08_100%)] px-5 py-7 sm:px-8 sm:py-9">
        <div className="pointer-events-none absolute inset-0 bg-[url('/images/dezire.jpg')] bg-right bg-no-repeat bg-contain opacity-[0.06]" />
        <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-400">Popular Routes</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">Top Routes Booked Daily</h2>
            <ul className="mt-4 space-y-1.5 text-sm text-zinc-300">
              {["Airport pickup in just 15 min", "Fixed pricing – no surge", "Verified, punctual drivers"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-green-400">✔</span> {t}
                </li>
              ))}
            </ul>
          </div>
          {/* Filter tabs */}
          <div className="row-inline gap-2 lg:justify-end">
            {["All Routes", "Airport Trips", "Outstation Rides"].map((tab, i) => (
              <span
                key={tab}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold ${
                  i === 0
                    ? "bg-amber-400/20 text-amber-300 ring-1 ring-amber-400/40"
                    : "bg-white/10 text-zinc-300 ring-1 ring-white/10"
                }`}
              >
                {i === 0 && <Flame className="h-3 w-3" />}
                {i === 1 && <Plane className="h-3 w-3" />}
                {i === 2 && <MapPin className="h-3 w-3" />}
                {tab}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Featured cards — 1 col mobile, 2 col sm+ */}
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((route) => {
            const meta = routeMeta[route]!;
            const Icon = getIcon(route);
            const background = featuredRouteBackgrounds[route];
            return (
              <div key={route} className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white shadow-sm">
                <div className="grid gap-4 border-b border-zinc-100 p-4 sm:grid-cols-[minmax(0,1fr)_210px] sm:items-stretch sm:gap-5 sm:p-5">
                  <div className="flex min-w-0 flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        {meta.badge && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold text-amber-700">
                            <Flame className="h-3 w-3" /> {meta.badge}
                          </span>
                        )}
                        <h3 className="mt-3 font-display text-xl font-semibold text-zinc-950 sm:text-2xl">{route}</h3>
                        <p className="mt-2 text-sm font-semibold text-zinc-700">{meta.fare}</p>
                        <p className="mt-1 text-xs text-zinc-500">{meta.duration} · {meta.distance}</p>
                      </div>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm text-brand-600">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  {background ? (
                    <div className="relative min-h-[180px] overflow-hidden rounded-[1.25rem] border border-zinc-200 bg-zinc-100">
                      <Image
                        src={background.image}
                        alt={route}
                        fill
                        className="object-cover"
                        style={{ objectPosition: background.imagePosition }}
                        sizes="(max-width: 640px) 100vw, 210px"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${background.tintClassName}`} />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    </div>
                  ) : null}
                </div>
                <div className="row-inline items-center gap-2 px-4 py-3 sm:px-5">
                  <Link
                    href="/booking"
                    className="rounded-full bg-brand-500 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-600"
                  >
                    Book Now
                  </Link>
                  <a
                    href={waMsg(route)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 hover:border-green-400"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-green-500" /> Get Quote on WhatsApp
                  </a>
                  <ArrowUpRight className="ml-auto hidden h-4 w-4 shrink-0 text-zinc-400 sm:block" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary cards — 2 col always */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {rest.map((route) => {
            const meta = routeMeta[route] ?? { duration: "", distance: "", fare: "" };
            const Icon = getIcon(route);
            return (
              <div key={route} className="flex flex-col rounded-[1.25rem] border border-zinc-200 bg-white p-3 shadow-sm sm:p-4">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 shrink-0 text-brand-500" />
                  <p className="text-xs font-semibold leading-tight text-zinc-900 sm:text-sm">{route}</p>
                </div>
                <p className="mt-2 text-[11px] text-zinc-500">{meta.duration}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">{meta.fare}</p>
                <a
                  href={waMsg(route)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-2.5 py-1.5 text-[10px] font-semibold text-zinc-700 hover:border-green-400 sm:text-xs"
                >
                  <MessageCircle className="h-3 w-3 text-green-500" />
                  <span className="truncate">Get Quote on WhatsApp</span>
                  <ArrowUpRight className="ml-auto h-3 w-3 shrink-0 text-zinc-400" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-5 row-inline items-center justify-between gap-3">
          <div className="flex gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className={`h-2 rounded-full ${i === 3 ? "w-5 bg-brand-500" : "w-2 bg-zinc-200"}`} />
            ))}
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
          >
            View All Routes <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
