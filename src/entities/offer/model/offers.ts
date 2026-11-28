import type { StaticImageData } from "next/image";
import { siteConfig } from "@/shared/config/site";

import liveMusic from "@/shared/assets/images/offers/live-music.webp";
import biteCombo from "@/shared/assets/images/offers/bite-combo.webp";
// STEP 2: import your new flyer here, e.g.
// import newOffer from "@/shared/assets/images/offers/new-offer.webp";

export type OfferCta = { label: string; href: string };

export type Offer = {
  id: string;
  active?: boolean; // false = hide this offer
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  tags?: string[];
  price?: { label: string; value: string };
  highlight?: string;
  cta: OfferCta;
  secondaryCta?: OfferCta;
  image: StaticImageData;
  imageAlt: string;
};

const allOffers: Offer[] = [
  {
    id: "live-music",
    badge: "Every Saturday",
    title: "Live Music Nights",
    subtitle: "with Calypso-K",
    description:
      "Good food, great music and the best vibes. Enjoy live music with Calypso-K at Highway Fusion, every Saturday.",
    points: ["Delicious food", "Refreshing drinks", "Great atmosphere"],
    cta: {
      label: "Reserve Your Table",
      href: siteConfig.restaurantPhoneHref,
    },
    image: liveMusic,
    imageAlt: "Live Music Nights with Calypso-K every Saturday at Highway Fusion",
  },
  {
    id: "bite-combo",
    badge: "Combo Offer",
    title: "Bite Combo Pack",
    subtitle: "Restaurant · Lounge · BYOB",
    description:
      "A full spread of favorites, served your way. Dine in, take it away, or get it delivered.",
    points: [
      "Chicken Devilled",
      "Pork Curry",
      "Fish & Chips",
      "Chicken Rice",
      "Garden Green Salad",
    ],
    tags: ["Dine In", "Takeaway", "Free Delivery (within 10 km)"],
    price: { label: "Combo for only", value: "Rs. 8,499/=" },
    highlight: "FREE Coke 1 Ltr",
    cta: { label: "Order Now", href: siteConfig.restaurantPhoneHref },
    secondaryCta: { label: "View Menu", href: "/menu" },
    image: biteCombo,
    imageAlt: "Bite Combo Pack at Highway Fusion for Rs. 8,499",
  },

  // STEP 3: copy this block for a new offer
  // {
  //   id: "new-offer",
  //   badge: "Weekend Special",
  //   title: "Offer Title",
  //   subtitle: "Short subtitle",
  //   description: "One or two sentences about the offer.",
  //   points: ["Point one", "Point two", "Point three"],
  //   tags: ["Dine In", "Takeaway"],            // optional
  //   price: { label: "Only", value: "Rs. 0,000/=" }, // optional
  //   highlight: "FREE something",              // optional
  //   cta: { label: "Order Now", href: siteConfig.restaurantPhoneHref },
  //   secondaryCta: { label: "View Menu", href: "/menu" }, // optional
  //   image: newOffer,
  //   imageAlt: "Describe the flyer",
  // },
];

export const offers: Offer[] = allOffers.filter((o) => o.active !== false);