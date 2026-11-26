"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/shared/ui/button";
import { siteConfig } from "@/shared/config/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#1b2a5a_0%,#0b1226_60%)]" />
      <div className="bg-primary/20 absolute top-1/3 left-1/2 -z-10 size-[28rem] -translate-x-1/2 rounded-full blur-[120px]" />

      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-primary text-sm tracking-[0.4em] uppercase"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-script text-primary mt-6 text-6xl leading-tight md:text-8xl"
        >
          Highway Fusion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg"
        >
          Fine dining and cozy stays at Grand Highway Resort, Galle. Reserve a
          room or order your food for pickup.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="/rooms#reserve">Reserve a Room</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/menu">Order Food</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}