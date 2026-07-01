import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/sections/booking-form";
import heroImg from "@/assets/hero.jpg";

const WHATSAPP_URL =
  "https://wa.me/573239665038?text=Hola%20Hotel%20Piso%2012%2C%20quiero%20información%20sobre%20disponibilidad";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Fachada del Hotel Piso 12 en Bello, Antioquia"
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/70 via-[#0F172A]/50 to-[#0F172A]/85" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-32 text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-gold"
        >
          <span className="h-px w-10 bg-gold" /> Boutique · Bello, Antioquia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          Hotel <span className="text-gold">Piso 12</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl"
        >
          Tu mejor opción de alojamiento en Bello, Antioquia. A minutos de Medellín, con la
          atención personalizada de un hotel boutique.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button
            asChild
            size="lg"
            className="h-12 bg-gold px-8 text-gold-foreground shadow-gold hover:bg-gold/90"
          >
            <a href="#reservar">
              <CalendarCheck className="mr-1 size-5" /> Reservar ahora
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-white/40 bg-white/5 px-8 text-white backdrop-blur hover:bg-white/15 hover:text-white"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-1 size-5" /> WhatsApp
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          id="reservar"
          className="mt-16 md:mt-24"
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  );
}
