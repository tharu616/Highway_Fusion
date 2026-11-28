import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/shared/providers/lenis-provider";
import { Toaster } from "@/shared/ui/sonner";
import { ScrollProgress } from "@/shared/ui/scroll-progress";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { siteConfig } from "@/shared/config/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Grand Highway Resort, Galle`,
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
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-cream text-navy font-sans antialiased">
        <LenisProvider>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster richColors position="top-center" />
        </LenisProvider>
      </body>
    </html>
  );
}