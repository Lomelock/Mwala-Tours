import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "Destinations",
    links: [
      { label: "Serengeti", href: "#destinations" },
      { label: "Ngorongoro", href: "#destinations" },
      { label: "Lake Natron", href: "#destinations" },
      { label: "Tarangire", href: "#destinations" },
    ],
  },
  {
    title: "Packages",
    links: [
      { label: "Serengeti Adventure", href: "#packages" },
      { label: "Northern Circuit", href: "#packages" },
      { label: "Trekking", href: "#packages" },
      { label: "Custom Safari", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Book Now", href: "/booking.html" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl">
                <Image
                  src="/Mwala tours logo.jpg"
                  alt="Mwala Tours Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-2xl text-background">
                Mwala Tours
              </span>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              Your trusted partner for unforgettable safari adventures in
              Tanzania. Experience the wild heart of Africa with expert guides
              and personalized journeys.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:mwalatours@gmail.com"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" />
                mwalatours@gmail.com
              </a>
              <a
                href="tel:+255789021754"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                +255 789 021 754
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="h-4 w-4" />
                Arusha, Tanzania
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-medium text-background mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            &copy; {new Date().getFullYear()} Mwala Tours. All rights reserved.
          </p>
          <p className="text-sm text-background/60">
            Powered by{" "}
            <span className="text-background/80">Singra Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
