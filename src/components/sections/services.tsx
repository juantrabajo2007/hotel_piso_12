import { motion } from "framer-motion";
import {
  Wifi,
  ConciergeBell,
  Sparkles,
  Droplets,
  Tv,
  HeartHandshake,
  Car,
  MapPinned,
} from "lucide-react";

const SERVICES = [
  { icon: Wifi, name: "WiFi gratuito", desc: "Alta velocidad en todo el hotel." },
  { icon: ConciergeBell, name: "Recepción", desc: "Atención 24/7 lista para ayudarte." },
  { icon: Sparkles, name: "Limpieza diaria", desc: "Habitaciones impecables cada día." },
  { icon: Droplets, name: "Agua caliente", desc: "Disponible 24 horas, sin límite." },
  { icon: Tv, name: "TV en habitaciones", desc: "Con canales nacionales y cable." },
  { icon: HeartHandshake, name: "Atención personalizada", desc: "Servicio cálido y cercano." },
  { icon: Car, name: "Parqueadero", desc: "Zona segura para tu vehículo." },
  { icon: MapPinned, name: "Info turística", desc: "Recomendaciones locales." },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Servicios</p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Todo lo que necesitas, pensado para ti
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors hover:border-gold/50"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gold/12 text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                <s.icon className="size-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
