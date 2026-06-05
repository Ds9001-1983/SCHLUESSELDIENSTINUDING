import type { Metadata, Viewport } from "next";
import "./globals.css";
import { clash, general } from "@/lib/fonts";
import { business, SITE_URL } from "@/lib/business";
import { localBusinessSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { StickyCallBar } from "@/components/site/sticky-call-bar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Schlüsseldienst Bergisch Gladbach – Türöffnung 50 € · 24/7 Notdienst",
    template: "%s · Schlüsseldienst Nuding",
  },
  description:
    "Schlüsseldienst Nuding: Türöffnung zum Festpreis von 50 €, 24/7 Notdienst in Bergisch Gladbach, Köln, Leverkusen & Umgebung. Fair, schnell, top bewertet. Jetzt anrufen: 0176 64423341.",
  applicationName: business.name,
  authors: [{ name: business.owner }],
  alternates: { canonical: "/" },
  keywords: [
    "Schlüsseldienst Bergisch Gladbach",
    "Schlüsseldienst Köln",
    "Türöffnung",
    "Notdienst",
    "Schlüsseldienst Leverkusen",
    "Schlüsseldienst Nuding",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: business.name,
    title: "Schlüsseldienst Bergisch Gladbach – Türöffnung 50 € · 24/7 Notdienst",
    description:
      "Türöffnung zum Festpreis von 50 €, 24/7 Notdienst in Bergisch Gladbach, Köln & Umgebung. Fair und schnell vor Ort.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Schlüsseldienst Bergisch Gladbach – Türöffnung 50 €",
    description: "24/7 Notdienst, Festpreis 50 €, fair und schnell. Jetzt anrufen.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0f12",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${clash.variable} ${general.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={localBusinessSchema()} />
        <SmoothScroll>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <StickyCallBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
