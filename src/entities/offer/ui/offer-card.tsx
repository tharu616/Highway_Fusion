import Image from "next/image";
import { Check, Gift } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { PillButton } from "@/shared/ui/pill-button";
import type { Offer } from "../model/offers";

export function OfferCard({
  offer,
  reverse = false,
}: {
  offer: Offer;
  reverse?: boolean;
}) {
  return (
    <article className="bg-card grid items-center gap-10 overflow-hidden rounded-3xl p-6 shadow-xl md:p-10 lg:grid-cols-2 lg:gap-14">
      <div
        className={cn(
          "group relative mx-auto w-full max-w-xl",
          reverse && "lg:order-2"
        )}
      >
        <div className="border-gold/60 absolute -right-3 -bottom-3 h-full w-full rounded-3xl border" />
        <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src={offer.image}
            alt={offer.imageAlt}
            fill
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <div className={cn(reverse && "lg:order-1")}>
        <span className="bg-navy text-gold inline-block rounded-full px-4 py-1.5 text-xs tracking-[0.25em] uppercase">
          {offer.badge}
        </span>
        <h3 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
          {offer.title}
        </h3>
        <p className="text-gold mt-2 text-sm tracking-widest uppercase">
          {offer.subtitle}
        </p>
        <div className="bg-gold mt-5 h-px w-16" />
        <p className="text-navy/70 mt-5 leading-relaxed">{offer.description}</p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {offer.points.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm">
              <span className="bg-gold/20 text-gold flex size-6 shrink-0 items-center justify-center rounded-full">
                <Check className="size-3.5" />
              </span>
              {p}
            </li>
          ))}
        </ul>

        {offer.price && (
          <div className="bg-navy mt-7 inline-block rounded-2xl px-7 py-4">
            <p className="text-gold text-xs tracking-widest uppercase">
              {offer.price.label}
            </p>
            <p className="text-cream mt-1 font-serif text-4xl">
              {offer.price.value}
            </p>
          </div>
        )}

        {offer.highlight && (
          <p className="border-gold/50 text-navy mt-4 flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold">
            <Gift className="text-gold size-4" /> {offer.highlight}
          </p>
        )}

        {offer.tags && (
          <div className="mt-5 flex flex-wrap gap-2">
            {offer.tags.map((t) => (
              <span
                key={t}
                className="bg-secondary text-navy/80 rounded-full px-4 py-1.5 text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-4">
          <PillButton href={offer.cta.href} variant="navy">
            {offer.cta.label}
          </PillButton>
          {offer.secondaryCta && (
            <PillButton href={offer.secondaryCta.href} variant="outline-navy">
              {offer.secondaryCta.label}
            </PillButton>
          )}
        </div>
      </div>
    </article>
  );
}