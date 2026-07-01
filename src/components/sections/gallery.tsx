import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import deluxe from "@/assets/room-deluxe.jpg";
import suite from "@/assets/room-suite.jpg";

const IMAGES = [
  { src: g1, alt: "Lobby del hotel", span: "row-span-2" },
  { src: deluxe, alt: "Habitación Deluxe", span: "" },
  { src: g2, alt: "Baño con acabados premium", span: "" },
  { src: g4, alt: "Vista al valle desde la terraza", span: "row-span-2" },
  { src: suite, alt: "Suite Piso 12", span: "" },
  { src: g3, alt: "Desayuno con café colombiano", span: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="galeria" className="bg-secondary/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Galería</p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Un vistazo a la experiencia
          </h2>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {IMAGES.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => setOpen(img.src)}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${img.span}`}
              aria-label={`Ampliar ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6"
            onClick={() => setOpen(null)}
          >
            <button
              className="absolute right-6 top-6 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Cerrar"
              onClick={() => setOpen(null)}
            >
              <X className="size-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={open}
              alt=""
              className="max-h-[85vh] max-w-[95vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
