import { PiPhoneCallBold } from "react-icons/pi";
import { Reveal } from "@/components/ui/reveal";

const CONTACT_EMAIL = "manojvenkata1999@gmail.com";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative py-32 sm:py-44 px-6 sm:px-8 border-t border-white/5 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,255,198,0.12), transparent)",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[1.02]">
            Never miss
            <br />
            another call.
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Hear your AI receptionist in action. Book a live demo and we'll
            call you — the agent does the talking.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Deuxen%20AI%20Demo%20Request`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00ffc6] text-black font-black hover:bg-[#00e5b2] transition-colors shadow-[0_0_30px_rgba(0,255,198,0.35)]"
            >
              Book a Demo
              <PiPhoneCallBold size={18} />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Talk to us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm font-bold tracking-widest text-white uppercase">
          Deuxen AI Automations
        </p>
        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="#product" className="hover:text-white transition-colors">
            Product
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors"
          >
            How it works
          </a>
          <a href="#industries" className="hover:text-white transition-colors">
            Industries
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Deuxen AI Automations. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
