"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { siteConfig } from "@/shared/config/site";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || pathname !== "/";

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-navy/90 py-5 shadow-lg backdrop-blur-md"
          : "bg-transparent py-8"
      }`}
    >
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="text-cream font-serif text-3xl tracking-wide md:text-4xl"
        >
          Highway<span className="text-gold"> Fusion</span>
        </Link>

        <nav className="hidden items-center gap-12 lg:flex">
          {siteConfig.nav.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="text-cream/90 hover:text-gold group relative text-base tracking-widest uppercase transition-colors"
              >
                {l.label}
                <span
                  className={`bg-gold absolute -bottom-1.5 left-0 h-px transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/rooms#reserve"
            className="border-gold text-gold hover:bg-gold hover:text-navy rounded-full border px-9 py-3 text-base tracking-widest uppercase transition-all duration-300"
          >
            Book Now
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="text-cream lg:hidden" aria-label="Open menu">
            <Menu size={36} />
          </SheetTrigger>
          <SheetContent side="right" className="border-gold/20 bg-navy text-cream">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav className="mt-16 flex flex-col gap-8 px-6">
              {siteConfig.nav.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`hover:text-gold font-serif text-4xl transition-colors ${
                    pathname === l.href ? "text-gold" : ""
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/rooms#reserve"
                onClick={() => setOpen(false)}
                className="bg-gold text-navy mt-4 rounded-full px-8 py-4 text-center text-base tracking-widest uppercase"
              >
                Book Now
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}