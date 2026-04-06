import { MessageCircle, Phone } from "lucide-react";

import { contactDetails } from "@/data/site";

export function FloatingActions() {
  return (
    <>
      <a
        href={`https://wa.me/${contactDetails.whatsappRaw}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-soft transition hover:scale-105 md:inline-flex"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl gap-3">
          <a href={`tel:+${contactDetails.phoneRaw}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white">
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a href={`https://wa.me/${contactDetails.whatsappRaw}`} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-500 px-4 py-3 text-sm font-semibold text-white">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
