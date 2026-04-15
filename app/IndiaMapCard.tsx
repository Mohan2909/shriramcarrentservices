"use client";

import Image from "next/image";
import { ArrowRight, Car, MapPin, ShieldCheck } from "lucide-react";

const cities = [
  { label: "Delhi", x: 38.6, y: 17.2, labelClass: "-translate-x-1/2 -translate-y-6" },
  { label: "Jaipur", x: 31.8, y: 35.5, labelClass: "-translate-x-[104%] -translate-y-1/2" },
  { label: "Lucknow", x: 49.5, y: 35.8, labelClass: "translate-x-2 -translate-y-1/2" },
  { label: "Ahmedabad", x: 20.8, y: 41.8, labelClass: "translate-x-2 -translate-y-1/2" },
  { label: "Mumbai", x: 15.6, y: 52.2, labelClass: "translate-x-2 -translate-y-1/2" },
  { label: "Pune", x: 20.8, y: 61.8, labelClass: "translate-x-2 -translate-y-1/2" },
  { label: "Nagpur", x: 34.8, y: 51.8, labelClass: "translate-x-2 -translate-y-1/2" },
  { label: "Hyderabad", x: 41.8, y: 62.8, labelClass: "translate-x-2 -translate-y-1/2" },
  { label: "Bangalore", x: 37.3, y: 80.6, labelClass: "translate-x-2 -translate-y-1/2" },
  { label: "Chennai", x: 52, y: 79.4, labelClass: "translate-x-2 -translate-y-1/2" },
  { label: "Kolkata", x: 68.9, y: 44.5, labelClass: "translate-x-2 -translate-y-1/2" },
] as const;

const coverageStats = [
  {
    value: "100+",
    label: "Cities covered",
    description: "Intercity and local support across major routes.",
    icon: MapPin,
  },
  {
    value: "24/7",
    label: "Trip coordination",
    description: "Fast call and WhatsApp assistance before pickup.",
    icon: ShieldCheck,
  },
  {
    value: "Local + Outstation",
    label: "Booking formats",
    description: "Airport drops, family rides, and custom itineraries.",
    icon: Car,
  },
] as const;

export default function IndiaMapCard() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-[1.9rem] border border-zinc-200 bg-white p-5 shadow-[0_24px_60px_-42px_rgba(24,24,27,0.18)] sm:p-7">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-[2rem]">Nationwide Cab Network</h3>
        <p className="mt-2 text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
          Service coverage across major cities for airport transfers, local rides, and intercity travel.
        </p>

        <div className="mt-6 rounded-[1.4rem] border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            <Image
              src="/images/india.jpg"
              alt="Map of India"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain"
              priority
            />

            <div className="absolute inset-0 z-20">
              {cities.map((city) => (
                <div
                  key={city.label}
                  className="absolute"
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                >
                  <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-orange-500" />
                  <span
                    className={`absolute left-1/2 top-1/2 hidden whitespace-nowrap rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-[8px] font-medium leading-none text-zinc-700 shadow-sm sm:block sm:text-[9px] ${city.labelClass}`}
                  >
                    {city.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 sm:hidden">
            {cities.map((city) => (
              <span
                key={`${city.label}-mobile`}
                className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700"
              >
                {city.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[1.9rem] border border-zinc-200 bg-white p-5 shadow-[0_24px_60px_-42px_rgba(24,24,27,0.18)] sm:p-7">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-[2rem]">Reliable Pan-India Coverage</h3>

        <div className="mt-6 space-y-5 border-b border-zinc-100 pb-6">
          <div className="flex gap-3">
            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-brand-600">
              <ArrowRight className="h-4 w-4" />
            </span>
            <div>
              <h4 className="text-xl font-semibold leading-tight text-zinc-950 sm:text-2xl">North to South Coverage</h4>
              <p className="mt-2 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">Cab services connecting major cities all across India.</p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-brand-600">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <h4 className="text-xl font-semibold leading-tight text-zinc-950 sm:text-2xl">Local & Intercity Rides</h4>
              <p className="mt-2 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">Airport transfers, city rides, and long-distance travel.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {coverageStats.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="rounded-[1.2rem] border border-zinc-200 bg-zinc-50 p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.9rem] border border-zinc-200 bg-white text-brand-600">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-950 sm:text-[1.05rem]">{item.value} {item.label}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-600 sm:text-base">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
