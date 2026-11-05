import Image from "next/image";
import { MapPin, Maximize2 } from "lucide-react";
import { destinations } from "@/lib/data";

export function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Explore
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground text-balance">
            Our Destinations
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Discover Tanzania&apos;s most iconic wildlife destinations, each
            offering unique experiences and unforgettable encounters.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="space-y-6">
          {destinations.map((destination, index) => (
            <article
              key={destination.id}
              className={`group flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all`}
            >
              {/* Image */}
              <div className="relative lg:w-2/5 aspect-[4/3] lg:aspect-auto overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center">
                <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                  {destination.title}
                </h3>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {destination.distance}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize2 className="h-4 w-4" />
                    {destination.area}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {destination.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {destination.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
