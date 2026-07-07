import {
  Stethoscope,
  Sparkles,
  Home,
  UtensilsCrossed,
  Wrench,
  Smile,
} from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";

const industries = [
  {
    icon: Smile,
    name: "Dental practices",
    detail: "Recall reminders, new-patient intake and emergency triage.",
  },
  {
    icon: Stethoscope,
    name: "Clinics & healthcare",
    detail: "Appointment scheduling with zero waiting-room phone chaos.",
  },
  {
    icon: Sparkles,
    name: "Salons & spas",
    detail: "Bookings, reschedules and no-show reduction on autopilot.",
  },
  {
    icon: Home,
    name: "Real estate",
    detail: "Viewing bookings and lead qualification from every enquiry.",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants",
    detail: "Reservations and event enquiries handled during the rush.",
  },
  {
    icon: Wrench,
    name: "Home services",
    detail: "Job intake and quoting calls answered while you're on site.",
  },
];

export function Industries() {
  return (
    <section
      id="industries"
      className="relative py-28 sm:py-36 px-6 sm:px-8 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#00ffc6]">
            Industries
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.05]">
            Built for businesses that live on the phone.
          </h2>
        </Reveal>

        <RevealStagger className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry) => (
            <RevealItem key={industry.name}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 flex items-start gap-4 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <industry.icon
                    className="w-5 h-5 text-zinc-300 group-hover:text-[#00ffc6] transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{industry.name}</h3>
                  <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">
                    {industry.detail}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
