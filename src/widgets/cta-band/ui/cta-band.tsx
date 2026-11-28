import { PillButton } from "@/shared/ui/pill-button";
import { Reveal } from "@/shared/ui/reveal";
import { siteConfig } from "@/shared/config/site";

export function CtaBand() {
  return (
    <section className="bg-cream mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="bg-navy border-gold/30 relative overflow-hidden rounded-3xl border px-8 py-16 text-center md:px-16">
          <div className="bg-gold/20 absolute -top-24 left-1/2 size-80 -translate-x-1/2 rounded-full blur-[110px]" />
          <div className="relative">
            <p className="text-gold text-sm tracking-[0.4em] uppercase">
              {siteConfig.tagline}
            </p>
            <h2 className="text-cream mt-4 font-serif text-4xl md:text-5xl">
              Create memories that last
            </h2>
            <div className="bg-gold mx-auto mt-6 h-px w-20" />
            <p className="text-cream/75 mx-auto mt-6 max-w-xl text-lg">
              Book your stay or order your favorite dishes for pickup. Call us
              on {siteConfig.phone}.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <PillButton href="/rooms#reserve" variant="gold">
                Book Your Stay
              </PillButton>
              <PillButton href="/menu" variant="outline-light">
                Order Food
              </PillButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}