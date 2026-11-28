import hero from "./hero.webp";
import about from "./about.webp";
import galle from "./galle.webp";
import fusion from "./fusion.webp";
import doubleRoom from "./rooms/double.webp";
import familyRoom from "./rooms/family.webp";
import apartmentRoom from "./rooms/apartment.webp";
import serviceRooms from "./services/rooms.webp";
import serviceDining from "./services/dining.webp";
import serviceWeddings from "./services/weddings.webp";
import serviceTours from "./services/tours.webp";
import serviceEvents from "./services/events.webp";
import serviceFutsal from "./services/futsal.webp";
import offerLiveMusic from "./offers/live-music.webp";
import offerBiteCombo from "./offers/bite-combo.webp";

export const images = {
  hero,
  about,
  galle,
  fusion,
  rooms: {
    double: doubleRoom,
    family: familyRoom,
    apartment: apartmentRoom,
  },
  services: {
    rooms: serviceRooms,
    dining: serviceDining,
    weddings: serviceWeddings,
    tours: serviceTours,
    events: serviceEvents,
    futsal: serviceFutsal,
  },
  offers: {
    liveMusic: offerLiveMusic,
    biteCombo: offerBiteCombo,
  },
};