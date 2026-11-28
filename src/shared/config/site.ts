export const siteConfig = {
  name: "Highway Fusion",
  tagline: "Highway to Christmas",
  description:
    "Highway Fusion by Grand Highway Resort, Galle. Dining, rooms, reservations and pickup orders.",
  footerTagline:
    "A luxurious sanctuary on Sri Lanka's southern coast, where warm hospitality meets fine dining.",
  phone: "+94 77 790 4010",
  phoneHref: "tel:+94777904010",
  email: "info@example.com", // TODO: real email
  addressLines: ["Grand Highway Resort, Galle", "Southern Province, Sri Lanka"], // TODO: full street address
  nav: [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/rooms" },
    { label: "Menu", href: "/menu" },
    { label: "Hotel", href: "/hotel" },
    { label: "Locations", href: "/locations" },
    { label: "Contact", href: "/contact" },
  ],
  footerNav: [
    { label: "Rooms", href: "/rooms" },
    { label: "Dining", href: "/menu" },
    { label: "Locations", href: "/locations" },
    { label: "Contact", href: "/contact" },
  ],
} as const;