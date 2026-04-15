"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { locations } from "@/data/site";

const DEFAULT_CITY = "Pune";

function normalizeCityName(value: string) {
  return value.trim().toLowerCase();
}

export function UserCityBanner() {
  const [city, setCity] = useState(DEFAULT_CITY);

  const matchedLocation = useMemo(() => {
    const normalizedCity = normalizeCityName(city);
    return locations.find((location) => {
      if (normalizeCityName(location.name) === normalizedCity) return true;
      return location.nearby.some((nearby) => normalizeCityName(nearby) === normalizedCity);
    });
  }, [city]);

  useEffect(() => {
    const cached = window.localStorage.getItem("shriram-city");
    if (cached) {
      setCity(cached);
      return;
    }

    const controller = new AbortController();

    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((response) => response.json())
      .then((data: { city?: string }) => {
        const nextCity = data.city?.trim() || DEFAULT_CITY;
        setCity(nextCity);
        window.localStorage.setItem("shriram-city", nextCity);
      })
      .catch(() => setCity(DEFAULT_CITY));

    return () => controller.abort();
  }, []);

  return (
    <div className="flex flex-col gap-3 rounded-[1.35rem] border border-white/50 bg-white/85 px-4 py-3 text-ink shadow-soft backdrop-blur sm:flex-row sm:items-center sm:px-5">
      <div className="flex min-w-0 items-center gap-2 text-sm font-semibold sm:flex-1">
        <MapPin className="h-4 w-4 shrink-0 text-brand-500" />
        <span className="truncate">Cab Service in {city}</span>
      </div>
      {matchedLocation ? (
        <Link
          href={`/${matchedLocation.route}`}
          className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-ink px-3 py-2 text-xs font-semibold text-white transition hover:bg-zinc-800 sm:w-auto sm:px-4 sm:text-sm"
        >
          View rides in {matchedLocation.name}
        </Link>
      ) : null}
    </div>
  );
}
