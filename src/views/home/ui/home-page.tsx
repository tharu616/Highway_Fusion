import { Hero } from "@/widgets/hero";
import { MarqueeStrip } from "@/widgets/marquee-strip";
import { WelcomeSection } from "@/widgets/welcome-section";
import { StatsBand } from "@/widgets/stats-band";
import { DiscoverGalle } from "@/widgets/discover-galle";
import { FusionIntro } from "@/widgets/fusion-intro";
import { ServicesSection } from "@/widgets/services-section";
import { RoomsSection } from "@/widgets/rooms-section";
import { CtaBand } from "@/widgets/cta-band";

export function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <WelcomeSection />
      <StatsBand />
      <DiscoverGalle />
      <FusionIntro />
      <ServicesSection />
      <RoomsSection />
      <CtaBand />
    </>
  );
}