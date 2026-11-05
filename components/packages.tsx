import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ArrowRight, PawPrint } from "lucide-react";
import { packages } from "@/lib/data";

export function Packages() {
  return (
    <section id="packages" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Safari Packages
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground text-balance">
            Our Packages
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Explore our exclusive safari packages designed to give you the best
            experience in Tanzania.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all"
            >
              {/* Images */}
              <div className="relative h-52 flex overflow-hidden">
                {pkg.images.slice(0, 2).map((image, index) => (
                  <div
                    key={index}
                    className="relative flex-1 overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${pkg.title} ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {pkg.title}
                </h3>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {pkg.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {pkg.location}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {pkg.wildlife.length > 0 && (
                  <div className="mb-4 p-3 rounded-xl bg-primary/5">
                    <div className="flex items-center gap-2 text-xs font-medium text-primary mb-2">
                      <PawPrint className="h-3.5 w-3.5" />
                      Wildlife Highlights
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.wildlife.slice(0, 4).map((animal) => (
                        <span key={animal} className="text-xs text-muted-foreground">
                          {animal}
                          {pkg.wildlife.indexOf(animal) < Math.min(pkg.wildlife.length - 1, 3) && " •"}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                  {pkg.description}
                </p>

                <Link
                  href={pkg.itineraryLink}
                  target="_blank"
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all"
                >
                  View Itinerary
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
