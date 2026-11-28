import { cn } from "@/shared/lib/utils";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-gold text-sm tracking-[0.3em] uppercase">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-4 font-serif text-4xl md:text-5xl",
          light ? "text-cream" : "text-navy"
        )}
      >
        {title}
      </h2>
      <div
        className={cn("bg-gold mt-6 h-px w-20", align === "center" && "mx-auto")}
      />
      {description && (
        <p
          className={cn(
            "mt-6 text-lg",
            light ? "text-cream/75" : "text-navy/70"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}