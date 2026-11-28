"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { Reveal } from "@/shared/ui/reveal";

const stats = [
  { value: 3, label: "Room Types" },
  { value: 6, label: "Services & Experiences" },
  { value: 1, label: "UNESCO Heritage Fort Nearby" },
];

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        node.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>0</span>;
}

export function StatsBand() {
  return (
    <section className="bg-secondary border-border border-y py-16">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 text-center sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.12}>
            <p className="text-gold font-serif text-6xl md:text-7xl">
              <Counter to={s.value} />
            </p>
            <div className="bg-gold mx-auto mt-4 h-px w-12" />
            <p className="text-navy/70 mt-4 text-sm tracking-widest uppercase">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}