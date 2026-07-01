import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const ADDRESS = "Diagonal 55 #37-41, Hermosa Provincia, Bello, Antioquia, Colombia";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export function LocationMap() {
  return (
    <section id="ubicacion" className="bg-secondary/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center"
        >
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Ubicación</p>
            <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              Encuéntranos en Bello
            </h2>
            <div className="mt-6 flex items-start gap-3 text-foreground/80">
              <MapPin className="mt-1 size-5 text-gold" />
              <div>
                <p className="font-semibold text-foreground">Hotel Piso 12</p>
                <p>Diagonal 55 #37-41</p>
                <p>Hermosa Provincia, Bello</p>
                <p>Antioquia, Colombia</p>
              </div>
            </div>
            <Button asChild size="lg" className="mt-8 bg-gold text-gold-foreground hover:bg-gold/90">
              <a href={MAPS_URL} target="_blank" rel="noreferrer">
                <Navigation className="mr-1 size-4" /> Cómo llegar
              </a>
            </Button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="Mapa Hotel Piso 12"
              src={EMBED_URL}
              width="100%"
              height="440"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
