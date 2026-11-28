const items = [
  "Rooms & Apartments",
  "Highway Fusion Dining",
  "Weddings",
  "Events & Parties",
  "Futsal Court",
  "Tours & Experiences",
];

export function MarqueeStrip() {
  const row = [...items, ...items];

  return (
    <section
      aria-hidden="true"
      className="bg-gold text-navy overflow-hidden py-5"
    >
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {row.map((text, i) => (
          <span key={i} className="flex items-center gap-12 pr-12 font-serif text-2xl">
            {text}
            <span className="text-navy/60 text-base">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}