import { Star } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";

const testimonials = [
  {
    quote:
      "We stopped losing patients to the practice down the road. The phone gets answered before we can even reach for it.",
    author: "Practice Manager",
    company: "Dental Clinic — London",
    rating: 5,
  },
  {
    quote:
      "Appointments went from 40% of calls reaching us to 95% conversion. Deuxen handles the chaos while we focus on care.",
    author: "Lead Clinician",
    company: "Private Healthcare Clinic — Manchester",
    rating: 5,
  },
  {
    quote:
      "Our salon was losing £500/week to missed bookings. In month one, we broke even. Month two, we're up 30% revenue.",
    author: "Owner",
    company: "Beauty Salon — Bristol",
    rating: 5,
  },
  {
    quote:
      "No more phone tag. Every viewing gets booked. Every lead gets a follow-up. It's like hiring three receptionists for the price of one.",
    author: "Managing Director",
    company: "Real Estate Agency — Birmingham",
    rating: 5,
  },
  {
    quote:
      "During dinner service, we're too busy to answer the phone. Deuxen handles reservations perfectly. Zero complaints from customers.",
    author: "Head Chef & Owner",
    company: "Fine Dining Restaurant — Edinburgh",
    rating: 5,
  },
  {
    quote:
      "Job intake calls used to interrupt site work. Now they're transcribed and ready when I'm back in the office. Game changer.",
    author: "Founder",
    company: "Plumbing & Heating Services — Leeds",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-[#00ffc6] text-[#00ffc6]"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#00ffc6]">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.05]">
            Businesses that switched, never looked back.
          </h2>
        </Reveal>

        <RevealStagger
          stagger={0.1}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, idx) => (
            <RevealItem key={idx}>
              <div
                className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 flex flex-col"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta
                  itemProp="reviewRating"
                  content={`${testimonial.rating}`}
                />
                <StarRating rating={testimonial.rating} />
                <p
                  className="mt-5 text-lg text-white leading-relaxed font-medium"
                  itemProp="reviewBody"
                >
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-sm font-semibold text-white" itemProp="author">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    {testimonial.company}
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
