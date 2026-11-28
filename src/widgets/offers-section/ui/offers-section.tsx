import { siteConfig } from "@/shared/config/site";
import { PillButton } from "@/shared/ui/pill-button";
import { Reveal } from "@/shared/ui/reveal";
import { SectionHeading } from "@/shared/ui/section-heading";
import { OffersSlider } from "./offers-slider";

export function OffersSection() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Restaurant · Lounge · BYOB"
          title="Offers & Events"
          description={`Great food, live music and special deals at Highway Fusion, ${siteConfig.restaurantLocation}.`}
        />

        <Reveal className="mt-12">
          <OffersSlider />
        </Reveal>

        <Reveal className="mt-12 text-center">
          <p className="text-navy/70">
            Call us for the latest offers and events.
          </p>
          <PillButton
            href={siteConfig.restaurantPhoneHref}
            variant="outline-navy"
            className="mt-5"
          >
            {siteConfig.restaurantPhone}
          </PillButton>
        </Reveal>
      </div>
    </section>
  );
}