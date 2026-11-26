export type Room = {
  id: string;
  name: string;
  description: string;
  pricePerNight: number; // LKR
  maxGuests: number;
  features: string[];
};

// TODO: replace with the real details from Grand Highway Resort
export const rooms: Room[] = [
  {
    id: "double",
    name: "Double Room",
    description: "A cozy room for two with a comfortable bed and a calm view.",
    pricePerNight: 15000,
    maxGuests: 2,
    features: ["Air conditioning", "Free Wi-Fi", "Hot water"],
  },
  {
    id: "family",
    name: "Family Room",
    description: "A spacious room for families, with extra beds and space.",
    pricePerNight: 25000,
    maxGuests: 4,
    features: ["Air conditioning", "Free Wi-Fi", "Extra beds"],
  },
  {
    id: "apartment",
    name: "Apartment",
    description: "A private apartment for longer stays, with extra living space.",
    pricePerNight: 35000,
    maxGuests: 6,
    features: ["Air conditioning", "Free Wi-Fi", "Living area"],
  },
];