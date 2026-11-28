import type { StaticImageData } from "next/image";
import { images } from "@/shared/assets/images";

export type Room = {
  id: string;
  name: string;
  description: string;
  pricePerNight: number; // LKR / BB
  maxGuests: number;
  beds: number;
  baths: number;
  wifi: boolean;
  image: StaticImageData;
};

export const rooms: Room[] = [
  {
    id: "double",
    name: "Deluxe Double Room",
    description:
      "Unparalleled comfort in our Double Room, featuring plush bedding and modern furnishings.",
    pricePerNight: 9500,
    maxGuests: 2,
    beds: 1,
    baths: 1,
    wifi: true,
    image: images.rooms.double,
  },
  {
    id: "family",
    name: "Family Room",
    description:
      "A family retreat in our Family Room, combining generous space, modern amenities.",
    pricePerNight: 11000,
    maxGuests: 4,
    beds: 2,
    baths: 1,
    wifi: true,
    image: images.rooms.family,
  },
  {
    id: "apartment",
    name: "2B Apartment",
    description:
      "Indulge in elegance at our Grand Highway Resort Apartment, featuring contemporary design.",
    pricePerNight: 16000,
    maxGuests: 4,
    beds: 2,
    baths: 2,
    wifi: true,
    image: images.rooms.apartment,
  },
];