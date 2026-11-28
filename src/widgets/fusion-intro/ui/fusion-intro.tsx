import Image from "next/image";
import { Globe, Leaf, Martini } from "lucide-react";
import { images } from "@/shared/assets/images";
import { PillButton } from "@/shared/ui/pill-button";
import { Reveal } from "@/shared/ui/reveal";

const chips = [
  { icon: Globe, label: "Global flavors" },
  { icon: Leaf, label: "Fresh local ingredients" },
  { icon: Martini, label: "Crafted cocktails" },
];

export function FusionIntro() {
  return (
    <section className="bg-navy text-cream relative overflow-hidden py-24 md:py-32">
      <div className="bg-gold/15 absolute -top-32 -left-32 size-[32rem] rounded-full blur-[140px]" />
      <div className="bg-gold/10 absolute -right-32 -bottom-32 size-[28rem] rounded-full blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <p className="text-gold text-sm tracking-[0.3em] uppercase">
            Now open at GHR
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            Highway <span className="text-gold">Fusion</span>
          </h2>
          <div className="bg-gold mt-6 h-px w-20" />
          <p className="text-cream/75 mt-8 text-lg leading-relaxed">
            Introducing Highway Fusion, the latest culinary destination at Grand
            Highway Resort. Here, global flavors meet local inspiration to
            create an unforgettable dining experience for every palate. Guests
            are welcomed into an inviting ambiance that blends modern elegance
            with the warmth of classic hospitality. From expertly crafted
            cocktails to delectable entrées showcasing fresh, locally sourced
            ingredients, every menu item promises a journey of taste unlike any
            other.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {chips.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="border-gold/30 bg-cream/5 text-cream/90 flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
              >
                <Icon className="text-gold size-4" /> {label}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <PillButton href="/menu" variant="gold">
              Order for Pickup
            </PillButton>
            <PillButton href="/menu" variant="outline-light">
              View Menu
            </PillButton>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-lg">
            <div className="border-gold/50 absolute -top-4 -left-4 h-full w-full rounded-[2rem] border" />
            <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src={images.fusion}
                alt="Highway Fusion restaurant at Grand Highway Resort"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}