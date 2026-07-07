import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";

const stats = [
  { value: "100%", label: "of calls answered — nothing goes to voicemail" },
  { value: "<1s", label: "average pickup time, every single call" },
  { value: "3×", label: "more appointments booked from the same call volume" },
  { value: "24/7", label: "coverage — nights, weekends and holidays" },
];

export function Results() {
  return (
    <section
      id="results"
      className="relative py-28 sm:py-36 px-6 sm:px-8 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#00ffc6]">
            Results
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.05]">
            Missed calls are missed revenue.
          </h2>
        </Reveal>

        <RevealStagger className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {stats.map((stat) => (
            <RevealItem key={stat.value}>
              <p className="text-5xl sm:text-6xl font-black tracking-tighter text-white">
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {stat.label}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.2} className="mt-24">
          <figure className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-10 sm:p-14">
            <blockquote className="text-2xl sm:text-3xl font-medium tracking-tight text-white leading-snug max-w-3xl">
              "We stopped losing patients to the practice down the road. The
              phone gets answered before we can even reach for it."
            </blockquote>
            <figcaption className="mt-6 text-sm text-zinc-400">
              Practice manager, dental clinic — London
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
