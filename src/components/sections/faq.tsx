import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "¿Cuál es el horario de check-in y check-out?", a: "El check-in es a partir de las 3:00 p.m. y el check-out hasta la 1:00 p.m. Consulta por horarios flexibles según disponibilidad." },
  { q: "¿El hotel cuenta con parqueadero?", a: "Sí, disponemos de zona segura de parqueadero para huéspedes. Sujeto a disponibilidad." },
  { q: "¿El WiFi es gratuito?", a: "Sí, WiFi de alta velocidad totalmente gratuito en todas las áreas y habitaciones." },
  { q: "¿Aceptan mascotas?", a: "Recibimos mascotas pequeñas bajo previa confirmación. Escríbenos por WhatsApp para coordinar." },
  { q: "¿Ofrecen desayuno?", a: "Contamos con opciones de desayuno que puedes añadir a tu reserva o solicitar en recepción." },
  { q: "¿Cómo puedo reservar?", a: "Puedes reservar directamente desde este sitio, por WhatsApp o llamando a nuestra recepción." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Preguntas frecuentes</p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Todo lo que quieres saber
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`f-${i}`}
              className="rounded-2xl border border-border bg-card px-6 shadow-soft"
            >
              <AccordionTrigger className="text-left font-display text-lg hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
