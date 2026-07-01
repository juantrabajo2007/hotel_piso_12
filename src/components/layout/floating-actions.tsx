import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/573239665038?text=Hola%20Hotel%20Piso%2012%2C%20quiero%20información%20sobre%20disponibilidad";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chatear por WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-110"
      >
        <MessageCircle className="size-6" />
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      </a>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Volver arriba"
            className="fixed bottom-24 right-6 z-40 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
