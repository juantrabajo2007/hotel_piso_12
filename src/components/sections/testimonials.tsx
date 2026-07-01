import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Carolina Restrepo",
    location: "Bogotá, Colombia",
    text: "Excelente ubicación y atención impecable. Volví por trabajo y me sentí como en casa. Las habitaciones son cómodas y muy limpias.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Andrés Gómez",
    location: "Medellín, Colombia",
    text: "Un boutique con muy buen gusto en Bello. El personal es cálido y la relación calidad-precio es difícil de superar en la zona.",
    avatar: "https://i.pravatar.cc/120?img=13",
  },
  {
    name: "María Fernanda Ruiz",
    location: "Cali, Colombia",
    text: "Nos hospedamos en la Suite Piso 12 y quedamos encantados. Detalles cuidados, cama comodísima y muy buen desayuno.",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
];

export function Testimonials() {
  return (
    <section id="opiniones" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Opiniones</p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Lo que dicen nuestros huéspedes
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="mb-4 flex gap-0.5 text-gold" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/90">"{r.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <img
                  src={r.avatar}
                  alt=""
                  loading="lazy"
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.location}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
