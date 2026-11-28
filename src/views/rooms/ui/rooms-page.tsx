import { rooms, RoomCard } from "@/entities/room";
import { ReservationForm } from "@/features/book-room";
import { PageHeader } from "@/shared/ui/page-header";
import { SectionHeading } from "@/shared/ui/section-heading";

export function RoomsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stay with us"
        title="Rooms & Reservation"
        description="Choose your room and send a request. We will confirm by email or phone."
      />

      <section className="bg-cream mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>
      </section>

      <section id="reserve" className="bg-secondary scroll-mt-20 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="Reservation" title="Reserve Your Room" />
          <div className="mt-12">
            <ReservationForm />
          </div>
        </div>
      </section>
    </>
  );
}