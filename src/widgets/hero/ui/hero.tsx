"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/shared/assets/images";
import { PillButton } from "@/shared/ui/pill-button";

const words = "Highway Fusion".split(" ");

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      >
        <Image
          src={images.hero}
          alt="Grand Highway Resort, Galle"
          fill
          placeholder="blur"
          sizes="100vw"
          loading="eager"
          className="object-cover"
        />
      </motion.div>
      <div className="from-navy/70 via-navy/40 to-navy/80 absolute inset-0 bg-linear-to-b" />

      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gold text-sm tracking-[0.4em] uppercase"
        >
          Galle · Sri Lanka
        </motion.p>

        <h1 className="text-cream mx-auto mt-6 max-w-4xl font-serif text-6xl leading-tight md:text-8xl lg:text-9xl">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                className={`inline-block pr-4 ${i === words.length - 1 ? "text-gold" : ""}`}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.5 + i * 0.12,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-cream/80 mx-auto mt-6 max-w-xl text-lg"
        >
          Where global flavors meet local inspiration, at Grand Highway Resort.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <PillButton href="/rooms#reserve" variant="gold">
            Book Your Stay
          </PillButton>
          <PillButton href="/menu" variant="outline-light">
            Order Food
          </PillButton>
        </motion.div>
      </div>

      <motion.div
        className="bg-gold/70 absolute bottom-8 left-1/2 h-12 w-px -translate-x-1/2"
        animate={{ scaleY: [0, 1, 0], originY: 0 }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </section>
  );
}