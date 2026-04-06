"use client";

import { useMemo, useState } from "react";

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

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => {
      window.location.href = whatsappHref;
    }, 900);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-brand-100 bg-white p-6 shadow-soft sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-semibold text-zinc-700">
            Name
            <input required name="name" value={formData.name} onChange={handleChange} className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-brand-500" placeholder="Your full name" />
          </label>
          <label className="space-y-2 text-sm font-semibold text-zinc-700">
            Phone
            <input required name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-brand-500" placeholder="10-digit mobile number" />
          </label>
          <label className="space-y-2 text-sm font-semibold text-zinc-700">
            Pickup
            <input required name="pickup" value={formData.pickup} onChange={handleChange} className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-brand-500" placeholder="Pickup location" />
          </label>
          <label className="space-y-2 text-sm font-semibold text-zinc-700">
            Drop
            <input required name="drop" value={formData.drop} onChange={handleChange} className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-brand-500" placeholder="Drop location" />
          </label>
          <label className="space-y-2 text-sm font-semibold text-zinc-700">
            Date & Time
            <input required type="datetime-local" name="travelDateTime" value={formData.travelDateTime} onChange={handleChange} className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-brand-500" />
          </label>
          <label className="space-y-2 text-sm font-semibold text-zinc-700">
            Car Type
            <select name="carType" value={formData.carType} onChange={handleChange} className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-brand-500">
              {fleet.map((car) => (
                <option key={car.name} value={car.name}>
                  {car.name} ({car.seats})
                </option>
              ))}
            </select>
          </label>
        </div>

        <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-600">
          Confirm on WhatsApp
        </button>

        {submitted ? (
          <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
            Booking request captured. Redirecting you to WhatsApp with your prefilled message.
          </p>
        ) : null}
      </form>

      <div className="rounded-[2rem] bg-ink p-6 text-white shadow-soft sm:p-8">
        <p className="text-sm uppercase tracking-[0.28em] text-accent-300">Instant confirmation</p>
        <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Fast cab booking for Pune and nearby pickup points</h2>
        <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-300">
          <p>Share your trip details once and continue the conversation directly on WhatsApp for quick driver confirmation.</p>
          <p>Use this form for airport transfers, local city rides, one-way intercity travel, round trips, and corporate bookings.</p>
          <p>Booking confirmations are routed directly to the client WhatsApp number for faster response from the team.</p>
        </div>
      </div>
    </div>
  );
}
