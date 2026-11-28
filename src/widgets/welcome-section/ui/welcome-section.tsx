import Image from "next/image";
import { Sparkles, UtensilsCrossed, Waves } from "lucide-react";
import { images } from "@/shared/assets/images";
import { Reveal } from "@/shared/ui/reveal";
import { SectionHeading } from "@/shared/ui/section-heading";

const highlights = [
  { icon: Waves, label: "Refreshing Pool" },
  { icon: Sparkles, label: "Spa Treatments" },
  { icon: UtensilsCrossed, label: "On-site Dining" },
];

export function WelcomeSection() {
  return (
    <section className="bg-cream mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="border-gold/60 absolute -right-4 -bottom-4 h-full w-full rounded-3xl border" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={images.about}
                alt="Grand Highway Resort, Galle"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="bg-navy text-cream absolute -bottom-6 left-6 rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-gold font-serif text-xl">Galle</p>
              <p className="text-cream/70 text-xs tracking-widest uppercase">
                Sri Lanka
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading align="left" eyebrow="Welcome" title="Welcome to GHR" />
          <Reveal
            delay={0.1}
            className="text-navy/70 mt-8 space-y-5 leading-relaxed"
          >
            <p>
              Welcome to Grand Highway Resort in Galle, a luxurious sanctuary
              nestled along Sri Lanka’s southern coast. Experience world-class
              hospitality, impeccable service, and breathtaking vistas from the
              moment you arrive. Our meticulously designed accommodations offer
              modern amenities, plush bedding, and private balconies that
              showcase panoramic views of sparkling waters and lush greenery.
            </p>
            <p>
              Whether you’re seeking relaxation or adventure, you’ll find
              countless activities to indulge in. Take a refreshing dip in the
              pool, enjoy a rejuvenating spa treatment, or explore the pristine
              coastline with a guided tour. Savor exquisite dining experiences
              at our on-site restaurants, where expert chefs craft authentic
              local cuisine and international favorites. Our dedicated team is
              always on hand, ensuring your stay is nothing short of
              extraordinary.
            </p>
            <p>
              Discover the captivating charm of Galle, famed for its historic
              Dutch Fort, bustling markets, and cultural vibrancy. With a focus
              on sustainability and community, Grand Highway Resort seamlessly
              blends luxury with mindful practices. Embrace our warm hospitality
              for an unforgettable stay. Treat yourself to an unforgettable
              getaway at Grand Highway Resort and create cherished memories that
              will linger long after your departure.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 grid grid-cols-3 gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-card flex flex-col items-center gap-3 rounded-2xl p-4 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon className="text-gold size-7" />
                <span className="text-xs md:text-sm">{label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}