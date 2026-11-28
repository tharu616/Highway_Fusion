"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bath, BedDouble, Wifi } from "lucide-react";
import type { Room } from "../model/rooms";

export function RoomCard({ room, index }: { room: Room; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="bg-card group overflow-hidden rounded-2xl shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="bg-navy/80 text-gold absolute top-4 left-4 rounded-full px-3 py-1 text-xs tracking-widest uppercase backdrop-blur">
          {room.pricePerNight.toLocaleString("en-US")} LKR/BB
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-2xl">{room.name}</h3>
        <div className="text-navy/60 mt-3 flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1">
            <BedDouble size={14} className="text-gold" /> {room.beds} Bed
          </span>
          <span className="flex items-center gap-1">
            <Bath size={14} className="text-gold" /> {room.baths} Bath
          </span>
          {room.wifi && (
            <span className="flex items-center gap-1">
              <Wifi size={14} className="text-gold" /> Wifi
            </span>
          )}
        </div>
        <p className="text-navy/70 mt-4 text-sm leading-relaxed">
          {room.description}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-gold">
            {room.pricePerNight.toLocaleString("en-US")}{" "}
            <span className="text-navy/50 text-xs">LKR / BB</span>
          </p>
          <Link
            href="/rooms#reserve"
            className="relative text-sm tracking-widest uppercase"
          >
            Reserve
            <span className="bg-gold absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}