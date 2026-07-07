import {
  PhoneCall,
  CalendarCheck,
  AudioLines,
  PhoneForwarded,
  RefreshCw,
  BarChart3,
} from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";

const features = [
  {
    icon: PhoneCall,
    title: "Answers every call, 24/7",
    description:
      "No voicemail, no hold music. Your AI receptionist picks up on the first ring — at 2pm or 2am, weekends and holidays included.",
    large: true,
  },
  {
    icon: CalendarCheck,
    title: "Books appointments live",
    description:
      "Checks your real calendar availability mid-conversation and confirms the booking before the caller hangs up.",
    large: true,
  },
  {
    icon: AudioLines,
    title: "Natural human voice",
    description:
      "Callers talk normally and get answers instantly — most never realise it isn't a person.",
    large: false,
  },
  {
    icon: PhoneForwarded,
    title: "Smart call routing",
    description:
      "Urgent or complex calls are transferred to your team with full context of the conversation.",
    large: false,
  },
  {
    icon: RefreshCw,
    title: "Syncs with your tools",
    description:
      "Google Calendar, CRMs and booking systems stay up to date automatically after every call.",
    large: false,
  },
  {
    icon: BarChart3,
    title: "Every call, transcribed",
    description:
      "Summaries, transcripts and outcomes for every conversation, delivered to your dashboard.",
    large: false,
  },
];

export function Features() {
  return (
    <section id="product" className="relative py-28 sm:py-36 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#00ffc6]">
            The Product
          </p>
          <h2 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.05]">
            A receptionist that never sleeps, sighs or takes lunch.
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Deuxen voice agents handle your front desk end to end — answering,
            qualifying, booking and following up — so your team can focus on
            the customers in front of them.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <RevealItem
              key={feature.title}
              className={feature.large ? "lg:col-span-2" : ""}
            >
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-2xl bg-[#00ffc6]/10 border border-[#00ffc6]/20 flex items-center justify-center">
                  <feature.icon
                    className="w-5 h-5 text-[#00ffc6]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
