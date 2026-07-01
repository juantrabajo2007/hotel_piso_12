import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(80),
  email: z.string().trim().email("Correo inválido").max(255),
  phone: z.string().trim().min(7, "Teléfono inválido").max(20),
  message: z.string().trim().min(10, "Cuéntanos un poco más").max(1000),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    const message = `Hola, me gustaría hacer una consulta:

Nombre: ${data.name}
Correo: ${data.email}
Teléfono: ${data.phone}

Mensaje: ${data.message}`;

    const whatsappUrl = `https://wa.me/573239665038?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast.success("¡Abriendo WhatsApp!", {
      description: `Gracias ${data.name}, completa tu mensaje directamente en WhatsApp.`,
    });
    reset();
  };

  return (
    <section id="contacto" className="bg-secondary/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Contacto</p>
            <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              Hablemos de tu <br /> próxima estadía
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Cuéntanos qué necesitas y te responderemos con la mejor propuesta disponible.
            </p>

            <ul className="mt-10 space-y-5">
              <Info icon={<MapPin className="size-5" />} title="Dirección">
                Diagonal 55 #37-41, Hermosa Provincia, Bello, Antioquia
              </Info>
              <Info icon={<Phone className="size-5" />} title="Teléfono">
                +57 300 000 0000
              </Info>
              <Info icon={<Mail className="size-5" />} title="Correo">
                reservas@hotelpiso12.com
              </Info>
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-10"
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2">
              <FormField label="Nombre" error={errors.name?.message}>
                <Input {...register("name")} placeholder="Tu nombre" autoComplete="name" />
              </FormField>
              <FormField label="Correo" error={errors.email?.message}>
                <Input type="email" {...register("email")} placeholder="tucorreo@ejemplo.com" autoComplete="email" />
              </FormField>
              <FormField label="Teléfono" error={errors.phone?.message} className="md:col-span-2">
                <Input type="tel" {...register("phone")} placeholder="+57 ..." autoComplete="tel" />
              </FormField>
              <FormField label="Mensaje" error={errors.message?.message} className="md:col-span-2">
                <Textarea rows={5} {...register("message")} placeholder="¿En qué podemos ayudarte?" />
              </FormField>
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="mt-6 w-full bg-gold text-gold-foreground hover:bg-gold/90 md:w-auto md:px-10"
            >
              <Send className="mr-1 size-4" />
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5 flex size-10 items-center justify-center rounded-full bg-gold/15 text-gold">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="text-foreground">{children}</p>
      </div>
    </li>
  );
}

function FormField({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">
        {label}
      </Label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
