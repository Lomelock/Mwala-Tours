import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/70 mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-primary-foreground text-balance">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-white/20" />
              <p className="text-lg text-primary-foreground/90 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-medium text-primary-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-primary-foreground/60">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
