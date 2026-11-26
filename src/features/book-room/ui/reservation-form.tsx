"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { rooms } from "@/entities/room";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Textarea } from "@/shared/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { reservationSchema, type ReservationInput } from "../model/schema";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-destructive mt-1 text-xs">{message}</p>;
}

export function ReservationForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationInput>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      roomId: "",
      guests: "",
      checkIn: "",
      checkOut: "",
      notes: "",
    },
  });

  async function onSubmit(values: ReservationInput) {
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message ?? "Something went wrong");
      toast.success("Request sent! We will contact you soon.");
      reset();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card grid gap-5 rounded-2xl border p-6 md:grid-cols-2 md:p-8"
      noValidate
    >
      <div>
        <Label htmlFor="fullName">Full name</Label>
        <Input id="fullName" className="mt-2" {...register("fullName")} />
        <FieldError message={errors.fullName?.message} />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          className="mt-2"
          {...register("email")}
        />
        <FieldError message={errors.email?.message} />
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" className="mt-2" {...register("phone")} />
        <FieldError message={errors.phone?.message} />
      </div>

      <div>
        <Label htmlFor="roomId">Room type</Label>
        <Controller
          name="roomId"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="roomId" className="mt-2 w-full">
                <SelectValue placeholder="Select a room" />
              </SelectTrigger>
              <SelectContent>
                {rooms.map((r) => (
                  <SelectItem key={r.id} value={r.id}>
                    {r.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FieldError message={errors.roomId?.message} />
      </div>

      <div>
        <Label htmlFor="checkIn">Check-in</Label>
        <Input
          id="checkIn"
          type="date"
          className="mt-2 [color-scheme:dark]"
          {...register("checkIn")}
        />
        <FieldError message={errors.checkIn?.message} />
      </div>

      <div>
        <Label htmlFor="checkOut">Check-out</Label>
        <Input
          id="checkOut"
          type="date"
          className="mt-2 [color-scheme:dark]"
          {...register("checkOut")}
        />
        <FieldError message={errors.checkOut?.message} />
      </div>

      <div className="md:col-span-2">
        <Label htmlFor="guests">Guests</Label>
        <Controller
          name="guests"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="guests" className="mt-2 w-full">
                <SelectValue placeholder="Number of guests" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <SelectItem key={n} value={String(n)}>
                    {n} {n === 1 ? "guest" : "guests"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FieldError message={errors.guests?.message} />
      </div>

      <div className="md:col-span-2">
        <Label htmlFor="notes">Special requests (optional)</Label>
        <Textarea
          id="notes"
          rows={4}
          className="mt-2"
          {...register("notes")}
        />
        <FieldError message={errors.notes?.message} />
      </div>

      <div className="md:col-span-2">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
          {isSubmitting ? "Sending..." : "Send Reservation Request"}
        </Button>
      </div>
    </form>
  );
}