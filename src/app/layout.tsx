import type { Metadata } from "next";
import { Inter, Playfair_Display, Kaushan_Script } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/shared/providers/lenis-provider";
import { Toaster } from "@/shared/ui/sonner";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { siteConfig } from "@/shared/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${kaushan.variable}`}
    >
      <body>
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster richColors position="top-center" />
        </LenisProvider>
      </body>
    </html>
  );
}