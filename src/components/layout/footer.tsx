import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-gold font-display text-sm font-bold text-gold-foreground">
              12
            </span>
            <span className="font-display text-lg font-semibold">Hotel Piso 12</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Boutique en Bello, Antioquia. Comodidad y atención personalizada cerca de Medellín.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-wider text-gold">Contacto</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 text-gold" /> Diagonal 55 #37-41, Bello</li>
            <li className="flex items-center gap-2"><Phone className="size-4 text-gold" /> +57 300 000 0000</li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-gold" /> reservas@hotelpiso12.com</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-wider text-gold">Navegar</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#nosotros" className="hover:text-gold">Sobre nosotros</a></li>
            <li><a href="#habitaciones" className="hover:text-gold">Habitaciones</a></li>
            <li><a href="#servicios" className="hover:text-gold">Servicios</a></li>
            <li><a href="#galeria" className="hover:text-gold">Galería</a></li>
            <li><a href="#faq" className="hover:text-gold">Preguntas frecuentes</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-wider text-gold">Síguenos</h4>
          <div className="flex gap-3">
            <Social href="https://wa.me/573000000000" label="WhatsApp"><MessageCircle className="size-5" /></Social>
            <Social href="https://facebook.com" label="Facebook"><Facebook className="size-5" /></Social>
            <Social href="https://instagram.com" label="Instagram"><Instagram className="size-5" /></Social>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>© {YEAR} Hotel Piso 12. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Políticas de privacidad</a>
            <a href="#" className="hover:text-gold">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full border border-white/15 text-primary-foreground/90 transition-colors hover:border-gold hover:text-gold"
    >
      {children}
    </a>
  );
}
