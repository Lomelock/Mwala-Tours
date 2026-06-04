"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const heroImages = [
  "/omer-salom-gi6T2ktnpnE-unsplash.jpg",
  "/jorge-tung-1pZJqQlgpsY-unsplash.jpg",
  "/pexels-balazsimon-15994102.jpg",
  "/jorge-tung--5Betfvtgso-unsplash.jpg",
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt="Tanzania Safari"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
          Premium Safari Experiences
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-white text-balance leading-[1.1]">
          Discover the Soul of Tanzania
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/90 leading-relaxed">
          From the majestic Serengeti plains to the ancient Ngorongoro Crater,
          experience Africa&apos;s most breathtaking wilderness with expert
          guides and unforgettable moments.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#packages"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all"
          >
            Explore Packages
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-medium text-white hover:bg-white/20 transition-all"
          >
            Contact Us
          </a>
        </div>

        {/* Image Indicators */}
        <div className="mt-16 flex justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentImage
                  ? "w-8 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
