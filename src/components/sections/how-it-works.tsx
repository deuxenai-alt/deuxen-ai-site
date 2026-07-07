import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";

const steps = [
  {
    number: "01",
    title: "We learn your business",
    description:
      "Services, pricing, opening hours, FAQs and booking rules — your agent is trained on how your front desk actually works.",
  },
  {
    number: "02",
    title: "We connect your number",
    description:
      "Keep your existing phone number. Calls route to your AI receptionist instantly — no new hardware, no app to install.",
  },
  {
    number: "03",
    title: "It starts answering",
    description:
      "From day one, every call is answered, every appointment lands on your calendar, and you get a summary of each conversation.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-28 sm:py-36 px-6 sm:px-8 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#00ffc6]">
            How it works
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.05]">
            Live in days, not months.
          </h2>
        </Reveal>

        <RevealStagger
          stagger={0.12}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {steps.map((step) => (
            <RevealItem key={step.number}>
              <div className="relative">
                <span className="text-7xl font-black tracking-tighter text-white/10 select-none">
                  {step.number}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
