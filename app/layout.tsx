import type { Metadata } from "next";
import { Playfair_Display, Oswald, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IconSprite from "@/components/IconSprite";
import ToastHost from "@/components/ToastHost";
import Overlays from "@/components/Overlays";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  style: ["normal", "italic"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "PPC Marketplace™ — A Patriot's Pet Care Company",
    template: "%s — PPC Marketplace™",
  },
  description:
    "Trusted finds for pets and their people: merchandise, pet gear, digital resources, and professional education from PPC Consulting, LLC.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${oswald.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <IconSprite />
          <a className="skip" href="#main">
            Skip to main content
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <ToastHost />
          <Overlays />
        </CartProvider>
      </body>
    </html>
  );
}
