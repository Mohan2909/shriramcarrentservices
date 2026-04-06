"use client";

import { useMemo, useState } from "react";
import { MapPin, User } from "lucide-react";
import { contactDetails, fleet } from "@/data/site";
import { formatDateTime } from "@/lib/utils";

const initialState = {
  name: "",
  phone: "",
  pickup: "",
  drop: "",
  travelDateTime: "",
  carType: fleet[0].name,
};

const perks = [
  "Instant fares, confirmation, and driver info in 60 seconds or less.",
  "Guaranteed timely pickups at airports, homes, offices, and hotels",
  "Booking updates and support 24/7 through WhatsApp chat",
];

const trustPoints = [
  { icon: "📲", text: "Auto-confirmed via WhatsApp in 60 secs" },
  { icon: "✅", text: "Instant fare quote & booking confirmation" },
  { icon: "✅", text: "Driver matched and details shared" },
  { icon: "✅", text: "24/7 WhatsApp support for quick changes" },
];

export function BookingForm() {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const whatsappHref = useMemo(() => {
    const message = [
      "New cab booking enquiry",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Pickup: ${formData.pickup}`,
      `Drop: ${formData.drop}`,
      `Date/Time: ${formatDateTime(formData.travelDateTime)}`,
      `Car Type: ${formData.carType}`,
    ].join("\n");
    return `https://wa.me/${contactDetails.whatsappRaw}?text=${encodeURIComponent(message)}`;
  }, [formData]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((c) => ({ ...c, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => { window.location.href = whatsappHref; }, 900);
  }

  const saveContactHref = `https://wa.me/${contactDetails.whatsappRaw}`;

  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-zinc-950 sm:text-3xl">Plan Your Trip &amp; Confirm in Seconds</h2>
      <p className="mt-2 text-sm text-zinc-500">Fill out the form to instantly share your trip details on WhatsApp for fast confirmation.</p>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left — form */}
        <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-zinc-200 bg-white p-5 shadow-soft sm:p-7">
          {/* WhatsApp badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-700 ring-1 ring-green-200">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-green-500"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.428a.5.5 0 0 0 .609.61l5.652-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.001-1.368l-.358-.214-3.714.973.99-3.617-.234-.372A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
            Auto-confirmed on WhatsApp
          </span>

          {/* Fields — 2 col always */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
            <label className="space-y-1.5 text-xs font-semibold text-zinc-700 sm:text-sm">
              <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-zinc-400" /> Name</span>
              <input required name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className="w-full rounded-2xl border border-zinc-200 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
            </label>
            <label className="space-y-1.5 text-xs font-semibold text-zinc-700 sm:text-sm">
              <span>Phone</span>
              <input required name="phone" value={formData.phone} onChange={handleChange} placeholder="10-digit number" className="w-full rounded-2xl border border-zinc-200 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
            </label>
            <label className="space-y-1.5 text-xs font-semibold text-zinc-700 sm:text-sm">
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand-500" /> Pickup</span>
              <input required name="pickup" value={formData.pickup} onChange={handleChange} placeholder="Pickup location" className="w-full rounded-2xl border border-zinc-200 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
            </label>
            <label className="space-y-1.5 text-xs font-semibold text-zinc-700 sm:text-sm">
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand-500" /> Drop</span>
              <input required name="drop" value={formData.drop} onChange={handleChange} placeholder="Drop location" className="w-full rounded-2xl border border-zinc-200 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
            </label>
            <label className="space-y-1.5 text-xs font-semibold text-zinc-700 sm:text-sm">
              <span>Date &amp; Time</span>
              <input required type="datetime-local" name="travelDateTime" value={formData.travelDateTime} onChange={handleChange} className="w-full rounded-2xl border border-zinc-200 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
            </label>
            <label className="space-y-1.5 text-xs font-semibold text-zinc-700 sm:text-sm">
              <span>Car Type</span>
              <select name="carType" value={formData.carType} onChange={handleChange} className="w-full rounded-2xl border border-zinc-200 px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100">
                {fleet.map((car) => (
                  <option key={car.name} value={car.name}>{car.name} ({car.seats})</option>
                ))}
              </select>
            </label>
          </div>

          <button type="submit" className="mt-5 w-full rounded-full bg-brand-500 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-600 sm:text-base">
            Confirm &amp; Send via WhatsApp
          </button>

          {submitted && (
            <p className="mt-3 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              Redirecting you to WhatsApp with your prefilled message…
            </p>
          )}

          <ul className="mt-5 space-y-2">
            {trustPoints.map((p) => (
              <li key={p.text} className="flex items-center gap-2 text-xs text-zinc-600 sm:text-sm">
                <span>{p.icon}</span> {p.text}
              </li>
            ))}
          </ul>
        </form>

        {/* Right — WhatsApp info panel */}
        <div className="rounded-[1.75rem] bg-gradient-to-br from-brand-500 via-brand-600 to-[#b83a00] p-6 text-white shadow-soft sm:p-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-300">Instant Booking Confirmation</p>

          <div className="mt-4 flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500 shadow-lg">
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.428a.5.5 0 0 0 .609.61l5.652-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.001-1.368l-.358-.214-3.714.973.99-3.617-.234-.372A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
            </div>
            <h3 className="font-display text-xl font-bold leading-snug sm:text-2xl">
              Get Instant Fare Quote &amp; Driver Details on WhatsApp
            </h3>
          </div>

          <ul className="mt-6 space-y-4">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm leading-6 text-orange-50">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">✓</span>
                {p}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs leading-6 text-orange-100">
            <span className="font-bold text-white">TIP:</span> Save our WhatsApp number for quick future bookings.
          </p>

          <div className="mt-4 flex items-center gap-2 rounded-full bg-white/15 p-1.5 pl-4 backdrop-blur">
            <span className="text-lg">🇮🇳</span>
            <span className="flex-1 text-sm font-semibold">+91 {contactDetails.whatsappDisplay}</span>
            <a
              href={saveContactHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-600 px-4 py-2 text-xs font-bold text-white hover:bg-green-700 sm:text-sm"
            >
              Save Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
