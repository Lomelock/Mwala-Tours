import Image from "next/image";
import { Binoculars, Map, Bed, Leaf } from "lucide-react";
import { features } from "@/lib/data";

const iconMap = {
  binoculars: Binoculars,
  map: Map,
  bed: Bed,
  leaf: Leaf,
};

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            About Us
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground text-balance">
            Your Gateway to Unforgettable Adventures
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Mwala Tours is your gateway to unforgettable travel experiences in
            Tanzania. We specialize in creating personalized safari adventures
            that showcase the breathtaking beauty, diverse wildlife, and vibrant
            culture of this incredible destination.
          </p>
        </div>

        {/* Image and Mission */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/Images/IMG-20250316-WA0041.jpg"
              alt="Safari guide with guests"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-serif text-3xl text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our mission is to provide exceptional safari experiences that
              connect travelers with the natural wonders and cultural heritage
              of Tanzania. We are committed to sustainable tourism practices
              that benefit local communities and preserve the environment for
              future generations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With years of experience and deep local knowledge, we craft
              journeys that go beyond the ordinary, creating moments that will
              stay with you forever.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="font-serif text-3xl text-foreground text-center mb-12">
            Why Choose Us?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon =
                iconMap[feature.icon as keyof typeof iconMap] || Binoculars;
              return (
                <div
                  key={feature.title}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
