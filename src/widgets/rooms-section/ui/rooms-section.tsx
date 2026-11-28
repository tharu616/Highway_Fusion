import { rooms, RoomCard } from "@/entities/room";
import { PillButton } from "@/shared/ui/pill-button";
import { Reveal } from "@/shared/ui/reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

export function RoomsSection() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Accommodation"
          title="Explore Our Rooms"
          description="Comfortable rooms and apartments, with breakfast included (BB)."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <PillButton href="/rooms#reserve" variant="navy">
            Reserve a Room
          </PillButton>
        </Reveal>
      </div>
    </section>
  );
}