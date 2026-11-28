"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Landmark } from "lucide-react";
import { images } from "@/shared/assets/images";
import { PillButton } from "@/shared/ui/pill-button";

export function DiscoverGalle() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 py-24"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 -top-[15%] -z-10 h-[130%]"
      >
        <Image
          src={images.galle}
          alt="Galle Fort, Sri Lanka"
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="from-navy/80 via-navy/70 to-navy/85 absolute inset-0 -z-10 bg-linear-to-b" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl text-center"
      >
        <div className="border-gold/50 bg-navy/50 text-gold mx-auto mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs tracking-widest uppercase backdrop-blur-md">
          <Landmark className="size-4" /> UNESCO World Heritage Site
        </div>
        <h2 className="text-cream font-serif text-4xl leading-tight md:text-6xl">
          Discover Galle with GHR
        </h2>
        <div className="bg-gold mx-auto mt-6 h-px w-20" />
        <p className="text-cream/90 mt-8 text-lg leading-relaxed md:text-xl">
          Galle, a coastal gem on the southwestern tip of Sri Lanka, entices
          visitors with a captivating blend of history, culture, and natural
          beauty. The city’s crown jewel is Galle Fort, a UNESCO World Heritage
          Site exuding colonial charm through its cobblestone streets,
          centuries-old ramparts, and enchanting Dutch architecture.
        </p>
        <PillButton href="/locations" variant="gold" className="mt-10">
          Explore Locations
        </PillButton>
      </motion.div>
    </section>
  );
}