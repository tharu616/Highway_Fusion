"use client";

import { motion } from "framer-motion";
import { BedDouble, Users } from "lucide-react";
import type { Room } from "../model/rooms";
import { Badge } from "@/shared/ui/badge";

export function RoomCard({ room, index }: { room: Room; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="bg-card overflow-hidden rounded-2xl border"
    >
      <div className="from-accent to-secondary flex h-48 items-center justify-center bg-gradient-to-br">
        <BedDouble className="text-primary/70 size-14" />
      </div>
      <div className="space-y-4 p-6">
        <h3 className="font-serif text-2xl">{room.name}</h3>
        <p className="text-muted-foreground text-sm">{room.description}</p>
        <div className="flex flex-wrap gap-2">
          {room.features.map((f) => (
            <Badge key={f} variant="secondary">
              {f}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between border-t pt-4">
          <span className="text-muted-foreground flex items-center gap-1 text-sm">
            <Users className="size-4" /> Up to {room.maxGuests}
          </span>
          <span className="text-primary font-semibold">
            LKR {room.pricePerNight.toLocaleString("en-US")}
            <span className="text-muted-foreground text-xs font-normal">
              {" "}
              / night
            </span>
          </span>
        </div>
      </div>
    </motion.article>
  );
}