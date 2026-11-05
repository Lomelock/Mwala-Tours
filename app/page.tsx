import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Destinations } from "@/components/destinations";
import { Packages } from "@/components/packages";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Destinations />
        <Packages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
