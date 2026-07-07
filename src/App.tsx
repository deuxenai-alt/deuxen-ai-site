import { motion, useScroll, useSpring } from "framer-motion";
import { RobotHero } from "@/components/ui/robot-hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Industries } from "@/components/sections/industries";
import { Results } from "@/components/sections/results";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA, Footer } from "@/components/sections/cta";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-[#00ffc6] z-[100]"
    />
  );
}

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#050505]">
      <ScrollProgress />

      {/* Hero stays pinned while the content deck slides over it */}
      <div className="sticky top-0 h-dvh">
        <RobotHero
          onCtaClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>

      <main className="relative z-30 -mt-10 rounded-t-[3rem] bg-[#050505] shadow-[0_-30px_80px_rgba(0,0,0,0.55)]">
        <Features />
        <HowItWorks />
        <Industries />
        <Results />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
