import { rooms, RoomCard } from "@/entities/room";
import { ReservationForm } from "@/features/book-room";

export function RoomsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-36 pb-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-primary text-sm tracking-[0.4em] uppercase">
          Stay with us
        </p>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl">
          Rooms & Reservation
        </h1>
        <p className="text-muted-foreground mt-4">
          Choose your room and send a request. We will confirm by email or
          phone.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {rooms.map((room, i) => (
          <RoomCard key={room.id} room={room} index={i} />
        ))}
      </div>

      <section id="reserve" className="mx-auto mt-24 max-w-3xl scroll-mt-28">
        <h2 className="mb-6 text-center font-serif text-3xl">
          Reserve your room
        </h2>
        <ReservationForm />
      </section>
    </div>
  );
}