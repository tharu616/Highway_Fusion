import Link from "next/link";
import { cacheLife } from "next/cache";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/shared/config/site";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="bg-card border-t">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-script text-primary text-3xl">Highway Fusion</p>
          <p className="text-muted-foreground mt-3 text-sm">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <p className="font-serif text-lg">Explore</p>
          <ul className="text-muted-foreground mt-3 space-y-2 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-serif text-lg">Visit Us</p>
          <ul className="text-muted-foreground mt-3 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="text-primary size-4" /> {siteConfig.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-primary size-4" />
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-primary size-4" /> {siteConfig.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="text-muted-foreground border-t py-5 text-center text-xs">
        © {year} Highway Fusion · Grand Highway Resort. All rights reserved.
      </div>
    </footer>
  );
}