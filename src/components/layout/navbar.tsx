import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#habitaciones", label: "Habitaciones" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-soft" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Hotel Piso 12 Logo" className="h-10 w-auto" />
          <span
            className={cn(
              "font-display text-lg font-semibold tracking-tight",
              scrolled ? "text-foreground" : "text-white drop-shadow",
            )}
          >
            Hotel Piso 12
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold",
                scrolled ? "text-foreground/80" : "text-white/90 drop-shadow",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cambiar tema"
            onClick={() => setDark((d) => !d)}
            className={cn(!scrolled && "text-white hover:bg-white/10 hover:text-white")}
          >
            {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
          <Button
            asChild
            className="hidden bg-gold text-gold-foreground hover:bg-gold/90 md:inline-flex"
          >
            <a href="#reservar">Reservar ahora</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Menú"
            className={cn("lg:hidden", !scrolled && "text-white hover:bg-white/10 hover:text-white")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-2 bg-gold text-gold-foreground hover:bg-gold/90">
                <a href="#reservar" onClick={() => setOpen(false)}>
                  Reservar ahora
                </a>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
