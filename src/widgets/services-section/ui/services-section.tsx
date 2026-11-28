import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/shared/assets/images";
import { Reveal } from "@/shared/ui/reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

const services = [
  {
    title: "Rooms & Apartment",
    text: "Rooms & Apartments at Grand Highway Resort offer modern comfort, elegant decor, scenic views, and thoughtful amenities for ultimate relaxation.",
    href: "/rooms",
    image: images.services.rooms,
  },
  {
    title: "Food & Restaurant",
    text: "Dining at Grand Highway Resort features delectable cuisine, blending international flavors and local specialties, crafted freshly with premium quality ingredients.",
    href: "/menu",
    image: images.services.dining,
  },
  {
    title: "Weddings",
    text: "Celebrate your dream wedding at Grand Highway Resort, featuring elegant venues, exquisite catering, personalized services, and unforgettable romantic experiences.",
    href: "/contact",
    image: images.services.weddings,
  },
  {
    title: "Tours & Experiences",
    text: "Explore Galle and nearby attractions with convenient private-driver and airport-transfer options through Lankan Budget Taxi.",
    href: "https://lankanbudgettaxi.com/",
    image: images.services.tours,
    external: true,
  },
  {
    title: "Events & Parties",
    text: "Grand Highway Resort hosts exceptional events, offering elegant venues, superb catering, advanced facilities, personalized service, and unforgettable experiences for guests.",
    href: "/contact",
    image: images.services.events,
  },
  {
    title: "Futsal Court",
    text: "Enjoy energetic matches at Grand Highway Resort’s premium futsal court, featuring modern facilities, vibrant atmosphere, and ideal conditions for play.",
    href: "/contact",
    image: images.services.futsal,
  },
];

const cardClass =
  "bg-card group flex h-full flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-gold";

export function ServicesSection() {
  return (
    <section className="bg-cream mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="What we offer"
        title="Explore Our Services"
        description="Everything you need for a perfect stay, celebration or getaway."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const content = (
            <>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="bg-navy/80 text-gold absolute top-4 right-4 flex size-10 items-center justify-center rounded-full opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="size-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl">{s.title}</h3>
                <p className="text-navy/70 mt-3 text-sm leading-relaxed">
                  {s.text}
                </p>
                <span className="relative mt-5 w-fit text-sm tracking-widest uppercase">
                  Discover
                  <span className="bg-gold absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
                </span>
              </div>
            </>
          );

          return (
            <Reveal key={s.title} delay={(i % 3) * 0.1} className="h-full">
              {"external" in s && s.external ? (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {content}
                </a>
              ) : (
                <Link href={s.href} className={cardClass}>
                  {content}
                </Link>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}