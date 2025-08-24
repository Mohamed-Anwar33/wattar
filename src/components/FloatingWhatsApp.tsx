import React from "react";

// Floating WhatsApp Button - Appears on all pages
// Number is taken from Vite env: VITE_WHATSAPP_NUMBER (digits only, e.g. 9665XXXXXXXX)
// You can also pass a fallback via props if needed.

type FloatingWhatsAppProps = {
  phoneNumber?: string; // digits only
  prefill?: string;
};

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber,
  prefill = "مرحبا، أحتاج التحدث مع فريق وتار 👋",
}) => {
  const number = phoneNumber || (import.meta.env.VITE_WHATSAPP_NUMBER as string) || "966500000000";
  const encoded = encodeURIComponent(prefill);
  const href = `https://wa.me/${number}?text=${encoded}`;

  return (
    <div className="fixed bottom-8 right-6 md:bottom-8 md:right-8 z-[50]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        title="تواصل عبر واتساب"
        className="group relative flex items-center"
      >
        {/* Halo glow */}
        <span className="absolute -inset-2 rounded-full bg-emerald-400/20 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Circular button */}
        <span className="relative grid place-items-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-2xl shadow-emerald-500/40 ring-2 ring-white/10 dark:ring-slate-900/20 overflow-hidden">
          {/* subtle inner shine */}
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-10 transition-opacity" />
          {/* ripple ping behind icon on hover */}
          <span className="absolute w-full h-full rounded-full border border-white/20 scale-90 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 md:w-7 md:h-7"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.1.55 4.1 1.6 5.88L.05 24l6.27-1.62A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 21.6c-1.98 0-3.92-.54-5.6-1.58l-.4-.24-3.72.96.99-3.62-.26-.41A9.59 9.59 0 0 1 2.4 12C2.4 6.6 6.6 2.4 12 2.4s9.6 4.2 9.6 9.6-4.2 9.6-9.6 9.6Zm5.38-7.23c-.29-.15-1.7-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.3-.74.94-.91 1.13-.17.2-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.61-1.98-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.02-.52-.07-.15-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.06.15.2 2.11 3.22 5.1 4.39.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.35-.07-.13-.26-.21-.55-.36Z" />
          </svg>
        </span>

        {/* Expanding label on hover (md+) */}
        <span className="pointer-events-none hidden md:flex items-center overflow-hidden ml-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur px-0 w-0 group-hover:w-28 group-hover:px-3 h-10 text-emerald-700 dark:text-emerald-300 font-semibold shadow-lg border border-white/30 dark:border-slate-700/40 transition-all duration-300">
          واتساب
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
