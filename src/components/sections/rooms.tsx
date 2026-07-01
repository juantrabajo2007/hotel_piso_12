import { motion } from "framer-motion";
import { Users, Bed, Wifi, Tv, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import deluxe from "@/assets/room-deluxe.jpg";
import suite from "@/assets/room-suite.jpg";
import standard from "@/assets/room-standard.jpg";

const ROOMS = [
  {
    img: standard,
    name: "Habitación Estándar",
    desc: "Ideal para viajeros de negocios que buscan descanso y practicidad.",
    capacity: "1–2 personas",
    beds: "1 cama Queen",
    price: 150000,
  },
  {
    img: deluxe,
    name: "Habitación Deluxe",
    desc: "Amplia, moderna y con vista a la ciudad para una estadía especial.",
    capacity: "2 personas",
    beds: "1 cama King",
    price: 220000,
    featured: true,
  },
  {
    img: suite,
    name: "Suite Piso 12",
    desc: "Nuestro espacio insignia: sala de estar, escritorio y luz natural.",
    capacity: "2–3 personas",
    beds: "1 King + Sofá cama",
    price: 320000,
  },
];

const fmt = (n: number) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

export function Rooms() {
  return (
    <section id="habitaciones" className="bg-secondary/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Habitaciones</p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Descansa con estilo, despierta con energía
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {ROOMS.map((room, i) => (
            <motion.article
              key={room.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.img}
                  alt={room.name}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {room.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground shadow-gold">
                    Más elegida
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold">{room.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{room.desc}</p>

                <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-foreground/80">
                  <Feat icon={<Users className="size-4" />}>{room.capacity}</Feat>
                  <Feat icon={<Bed className="size-4" />}>{room.beds}</Feat>
                  <Feat icon={<Wifi className="size-4" />}>WiFi rápido</Feat>
                  <Feat icon={<Tv className="size-4" />}>Smart TV</Feat>
                  <Feat icon={<Bath className="size-4" />}>Baño privado</Feat>
                </ul>

                <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Desde</p>
                    <p className="font-display text-2xl font-semibold text-foreground">{fmt(room.price)}</p>
                    <p className="text-xs text-muted-foreground">por noche</p>
                  </div>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="#reservar">Reservar</a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Feat({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <span className="text-gold">{icon}</span>
      {children}
    </li>
  );
}
