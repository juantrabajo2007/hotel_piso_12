import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CalendarDays, Users, DoorOpen, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const today = new Date().toISOString().split("T")[0];

const schema = z
  .object({
    roomType: z.string().min(1, "Selecciona tipo de habitación"),
    guests: z.coerce.number().int().min(1).max(10),
    checkIn: z.string().min(1, "Selecciona fecha de llegada"),
    checkOut: z.string().min(1, "Selecciona fecha de salida"),
    name: z.string().min(2, "Ingresa tu nombre"),
  })
  .refine((d) => new Date(d.checkOut) > new Date(d.checkIn), {
    message: "La salida debe ser posterior al ingreso",
    path: ["checkOut"],
  });

type FormValues = z.infer<typeof schema>;

const ROOM_TYPES = [
  { value: "standard", label: "Habitación Standard" },
  { value: "deluxe", label: "Habitación Deluxe" },
  { value: "suite", label: "Suite" },
];

export function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      guests: 2,
      checkIn: today,
      roomType: "standard",
    },
  });

  const onSubmit = (data: FormValues) => {
    const message = `Hola, me gustaría hacer una consulta de disponibilidad:

Tipo de habitación: ${ROOM_TYPES.find((r) => r.value === data.roomType)?.label}
Nombre: ${data.name}
Huéspedes: ${data.guests}
Llegada: ${new Date(data.checkIn).toLocaleDateString("es-CO")}
Salida: ${new Date(data.checkOut).toLocaleDateString("es-CO")}`;

    const whatsappUrl = `https://wa.me/573239665038?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast.success("¡Abriendo WhatsApp!", {
      description: "Podrás completar tu reserva directamente con nosotros",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass rounded-2xl p-6 shadow-soft md:p-8"
      aria-label="Formulario de consulta de disponibilidad"
    >
      <h2 className="mb-6 text-2xl font-bold text-foreground">Consulta de Disponibilidad</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nombre" icon={<User className="size-4" />} error={errors.name?.message}>
          <Input
            type="text"
            placeholder="Tu nombre completo"
            {...register("name")}
          />
        </Field>

        <Field
          label="Tipo de habitación"
          icon={<DoorOpen className="size-4" />}
          error={errors.roomType?.message}
        >
          <select
            {...register("roomType")}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {ROOM_TYPES.map((room) => (
              <option key={room.value} value={room.value}>
                {room.label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Llegada"
          icon={<CalendarDays className="size-4" />}
          error={errors.checkIn?.message}
        >
          <Input type="date" min={today} {...register("checkIn")} />
        </Field>

        <Field
          label="Salida"
          icon={<CalendarDays className="size-4" />}
          error={errors.checkOut?.message}
        >
          <Input type="date" min={today} {...register("checkOut")} />
        </Field>

        <Field
          label="Huéspedes"
          icon={<Users className="size-4" />}
          error={errors.guests?.message}
        >
          <Input type="number" min={1} max={10} {...register("guests")} />
        </Field>
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full bg-gold text-gold-foreground hover:bg-gold/90 md:w-auto"
      >
        <MessageCircle className="mr-2 size-5" />
        Consultar por WhatsApp
      </Button>
    </form>
  );
}

function Field({
  label,
  icon,
  error,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/70">
        {icon} {label}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
