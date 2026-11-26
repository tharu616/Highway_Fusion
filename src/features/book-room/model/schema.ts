import { z } from "zod";

function todayLocal() {
  const n = new Date();
  const m = String(n.getMonth() + 1).padStart(2, "0");
  const d = String(n.getDate()).padStart(2, "0");
  return `${n.getFullYear()}-${m}-${d}`;
}

export const reservationSchema = z
  .object({
    fullName: z.string().min(2, "Please enter your full name"),
    email: z.email("Please enter a valid email"),
    phone: z
      .string()
      .regex(/^\+?[\d\s-]{7,15}$/, "Please enter a valid phone number"),
    roomId: z.string().min(1, "Please select a room"),
    guests: z.string().min(1, "Select number of guests"),
    checkIn: z.string().min(1, "Select check-in date"),
    checkOut: z.string().min(1, "Select check-out date"),
    notes: z.string().max(500, "Maximum 500 characters").optional(),
  })
  .refine((d) => !d.checkIn || d.checkIn >= todayLocal(), {
    message: "Check-in cannot be in the past",
    path: ["checkIn"],
  })
  .refine((d) => !d.checkIn || !d.checkOut || d.checkOut > d.checkIn, {
    message: "Check-out must be after check-in",
    path: ["checkOut"],
  });

export type ReservationInput = z.infer<typeof reservationSchema>;