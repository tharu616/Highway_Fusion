"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { offers, OfferCard } from "@/entities/offer";
import { cn } from "@/shared/lib/utils";

const AUTOPLAY_MS = 6000;
const TOUCH_PAUSE_MS = 4000;

export function OffersSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const touchTimerRef = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const total = offers.length;

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, total - 1));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  }

  function onScroll() {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  }

  useEffect(() => {
    if (total < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || pausedRef.current || document.hidden) return;
      const current = Math.round(track.scrollLeft / track.clientWidth);
      const next = current + 1 >= total ? 0 : current + 1;
      track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [total]);

  useEffect(() => {
    return () => {
      if (touchTimerRef.current) window.clearTimeout(touchTimerRef.current);
    };
  }, []);

  function pause() {
    pausedRef.current = true;
  }
  function resume() {
    pausedRef.current = false;
  }
  function onTouchStart() {
    pause();
    if (touchTimerRef.current) window.clearTimeout(touchTimerRef.current);
  }
  function onTouchEnd() {
    touchTimerRef.current = window.setTimeout(resume, TOUCH_PAUSE_MS);
  }

  if (total === 0) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Offers and events"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {offers.map((offer, i) => (
          <div
            key={offer.id}
            className="w-full shrink-0 snap-center px-2 py-6"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${total}`}
          >
            <OfferCard offer={offer} reverse={i % 2 === 1} />
          </div>
        ))}
      </div>

      {total > 1 && (
        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Previous offer"
            className="border-navy/30 text-navy hover:bg-navy hover:text-gold flex size-12 items-center justify-center rounded-full border transition-colors disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex items-center gap-4">
            <span className="text-navy/60 font-serif text-lg tabular-nums">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              {offers.map((o, i) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to offer ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === active ? "bg-gold w-8" : "bg-navy/25 w-2"
                  )}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => goTo(active + 1)}
            disabled={active === total - 1}
            aria-label="Next offer"
            className="border-navy/30 text-navy hover:bg-navy hover:text-gold flex size-12 items-center justify-center rounded-full border transition-colors disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </div>
  );
}