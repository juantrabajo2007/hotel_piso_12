import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Rooms } from "@/components/sections/rooms";
import { Services } from "@/components/sections/services";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { LocationMap } from "@/components/sections/location-map";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Services />
        <Gallery />
        <Testimonials />
        <LocationMap />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-center" richColors />
    </div>
  );
}
