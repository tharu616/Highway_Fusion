import Link from "next/link";
import { cn } from "@/shared/lib/utils";

type Variant =
  | "gold"
  | "navy"
  | "outline-light"
  | "outline-gold"
  | "outline-navy";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-navy hover:bg-cream hover:shadow-xl",
  navy: "bg-navy text-cream hover:bg-gold hover:text-navy hover:shadow-xl",
  "outline-light":
    "border border-cream/60 text-cream hover:border-gold hover:text-gold",
  "outline-gold": "border border-gold text-gold hover:bg-gold hover:text-navy",
  "outline-navy":
    "border border-navy/40 text-navy hover:border-gold hover:text-gold",
};

type PillButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function PillButton({
  href,
  children,
  variant = "gold",
  className,
  external,
}: PillButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300",
    variants[variant],
    className
  );

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}