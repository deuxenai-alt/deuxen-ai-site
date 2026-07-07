"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Loader2, CheckCircle2, PhoneCall } from "lucide-react";

const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL as
  | string
  | undefined;
const CONTACT_EMAIL = "manojvenkata1999@gmail.com";

const SERVICES = [
  "Dental / Healthcare",
  "Salon / Spa",
  "Real Estate",
  "Restaurant",
  "Home Services",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export function DemoFormModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    firstFieldRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) setStatus("idle");
  }, [open]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!N8N_WEBHOOK_URL) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        "Deuxen AI Demo Request"
      )}&body=${encodeURIComponent(
        `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nCompany: ${data.company}\nService: ${data.service}\nNotes: ${data.notes}`
      )}`;
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-form-title"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 sm:p-10 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close demo request form"
              className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {status === "success" ? (
              <div className="py-8 text-center">
                <CheckCircle2
                  className="mx-auto text-[#00ffc6]"
                  size={48}
                  aria-hidden="true"
                />
                <h2 className="mt-4 text-2xl font-bold text-white">
                  Request received
                </h2>
                <p className="mt-2 text-zinc-400">
                  We'll call you shortly to set up your demo.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/15 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2
                  id="demo-form-title"
                  className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                >
                  Book a Demo
                </h2>
                <p className="mt-2 text-sm text-zinc-400">
                  Tell us about your business — we'll call you and show you
                  the AI receptionist live.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <label className="sm:col-span-2 text-sm text-zinc-300">
                    Name
                    <input
                      ref={firstFieldRef}
                      required
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00ffc6]/50 focus:border-[#00ffc6]/50"
                      placeholder="Jane Smith"
                    />
                  </label>

                  <label className="text-sm text-zinc-300">
                    Phone
                    <input
                      required
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00ffc6]/50 focus:border-[#00ffc6]/50"
                      placeholder="+44 7123 456789"
                    />
                  </label>

                  <label className="text-sm text-zinc-300">
                    Email
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00ffc6]/50 focus:border-[#00ffc6]/50"
                      placeholder="jane@business.com"
                    />
                  </label>

                  <label className="text-sm text-zinc-300">
                    Company
                    <input
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00ffc6]/50 focus:border-[#00ffc6]/50"
                      placeholder="Your Business Ltd"
                    />
                  </label>

                  <label className="text-sm text-zinc-300">
                    Industry
                    <select
                      name="service"
                      defaultValue=""
                      className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ffc6]/50 focus:border-[#00ffc6]/50"
                    >
                      <option value="" disabled className="bg-[#0a0a0a]">
                        Select...
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-[#0a0a0a]">
                          {s}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="sm:col-span-2 text-sm text-zinc-300">
                    Notes{" "}
                    <span className="text-zinc-500">(optional)</span>
                    <textarea
                      name="notes"
                      rows={3}
                      className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00ffc6]/50 focus:border-[#00ffc6]/50 resize-none"
                      placeholder="What would you like the AI receptionist to handle?"
                    />
                  </label>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="sm:col-span-2 text-sm text-red-400"
                    >
                      Something went wrong sending your request. Please try
                      again, or email{" "}
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="underline"
                      >
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00ffc6] text-black font-black hover:bg-[#00e5b2] transition-colors shadow-[0_0_30px_rgba(0,255,198,0.35)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Request Demo
                        <PhoneCall size={18} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
