import { BookingForm } from "./booking-form";

export function Booking() {
  return (
    <section id="reservar" className="space-y-8 px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-2xl">
        <BookingForm />
      </div>
    </section>
  );
}
