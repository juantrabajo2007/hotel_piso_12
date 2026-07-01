import { motion } from "framer-motion";
import { MapPin, Heart, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function About() {
  return (
    <section id="nosotros" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid gap-16 md:grid-cols-2 md:items-center"
        >
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Sobre nosotros</p>
            <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              Un refugio boutique <br /> en el corazón de{" "}
              <span className="text-gold italic">Bello</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Hotel Piso 12 nació con la convicción de ofrecer una experiencia diferente: un lugar
              cómodo, moderno y con calidez humana, a pocos minutos de Medellín. Cada detalle está
              pensado para viajeros de negocios, turistas y parejas que buscan sentirse en casa.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <Stat value={98} suffix="%" label="Huéspedes felices" />
              <Stat value={12} suffix="min" label="A Medellín" />
              <Stat value={24} suffix="/7" label="Recepción" />
            </div>
          </div>

          <div className="grid gap-4">
            <Card
              icon={<MapPin className="size-6" />}
              title="Excelente ubicación"
              text="Diagonal 55 #37-41, Hermosa Provincia, Bello. Cerca de rutas principales y a corta distancia del centro de Medellín."
            />
            <Card
              icon={<Heart className="size-6" />}
              title="Atención personalizada"
              text="Nuestro equipo acompaña cada estadía con recomendaciones locales, flexibilidad y trato cercano."
            />
            <Card
              icon={<Sparkles className="size-6" />}
              title="Confort moderno"
              text="Habitaciones renovadas, WiFi de alta velocidad, TV, baño privado y una limpieza impecable todos los días."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl font-semibold text-foreground">
        <AnimatedCounter value={value} />
        <span className="text-gold">{suffix}</span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function Card({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-2xl border border-border bg-card p-6 shadow-soft"
    >
      <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-gold/15 text-gold">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </motion.div>
  );
}
