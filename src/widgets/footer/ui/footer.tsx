import Link from "next/link";
import { cacheLife } from "next/cache";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/shared/config/site";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl">
            Highway<span className="text-gold"> Fusion</span>
          </p>
          <p className="text-gold mt-1 text-xs tracking-[0.3em] uppercase">
            Grand Highway Resort
          </p>
          <p className="text-cream/70 mt-5 max-w-sm text-sm leading-relaxed">
            {siteConfig.footerTagline}
          </p>
        </div>

        <div>
          <p className="font-serif text-xl">Explore</p>
          <div className="bg-gold mt-3 h-px w-10" />
          <ul className="text-cream/70 mt-5 space-y-3 text-sm">
            {siteConfig.footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-serif text-xl">Visit Us</p>
          <div className="bg-gold mt-3 h-px w-10" />
          <ul className="text-cream/70 mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="text-gold mt-0.5 size-4 shrink-0" />
              <span>
                {siteConfig.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-gold size-4 shrink-0" />
              <a
                href={siteConfig.phoneHref}
                className="hover:text-gold transition-colors"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-gold size-4 shrink-0" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-gold transition-colors"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-cream/10 text-cream/50 border-t py-6 text-center text-xs">
        © {year} Highway Fusion · Grand Highway Resort. All rights reserved.
      </div>
    </footer>
  );
}