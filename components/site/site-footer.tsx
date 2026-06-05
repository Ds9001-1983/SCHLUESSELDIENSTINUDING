import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { Logo } from "./logo";
import { CallButton } from "./call-button";
import { business, fullAddress } from "@/lib/business";
import { services } from "@/lib/content";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/einsatzgebiet", label: "Einsatzgebiet" },
  { href: "/schluesseldienst-bergisch-gladbach", label: "Bergisch Gladbach" },
  { href: "/schluesseldienst-koeln", label: "Köln" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-ink text-white">
      <div className="bg-grid">
        <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            {/* Marke + NAP */}
            <div className="flex flex-col gap-5">
              <Logo tone="light" />
              <p className="max-w-xs font-display text-lg text-white/85">
                „{business.slogan}“
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-white/70">
                <li>
                  <a
                    href={business.phone.href}
                    data-call-cta
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-accent-glow"
                  >
                    <Phone className="size-4 text-accent" />
                    {business.phone.display}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${business.email}`}
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-accent-glow"
                  >
                    <Mail className="size-4 text-accent" />
                    {business.email}
                  </a>
                </li>
                <li className="inline-flex items-center gap-2.5">
                  <MapPin className="size-4 text-accent" />
                  {fullAddress}
                </li>
                <li className="inline-flex items-center gap-2.5">
                  <Clock className="size-4 text-accent" />
                  24/7 Notdienst
                </li>
              </ul>
            </div>

            {/* Leistungen */}
            <nav className="flex flex-col gap-3" aria-label="Leistungen">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
                Leistungen
              </h2>
              <ul className="flex flex-col gap-2 text-sm text-white/70">
                {services.slice(0, 6).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/leistungen#${s.slug}`}
                      className="transition-colors hover:text-accent-glow"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Navigation */}
            <nav className="flex flex-col gap-3" aria-label="Seiten">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
                Navigation
              </h2>
              <ul className="flex flex-col gap-2 text-sm text-white/70">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-accent-glow">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA + Google */}
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
                Ausgesperrt?
              </h2>
              <p className="text-sm text-white/70">
                Ein Anruf genügt – Festpreis {business.price.tueroeffnung} {business.price.currencySymbol}, in
                Minuten vor Ort.
              </p>
              <CallButton className="w-full" />
              <a
                href={business.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-accent-glow"
              >
                <Star className="size-4 fill-current text-yellow-400" />
                Bewerten Sie uns auf Google
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {/* Jahr bewusst statisch im Prototyp */}2026 {business.name} · {fullAddress}
            </p>
            <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Rechtliches">
              <Link href="/impressum" className="transition-colors hover:text-white">
                Impressum
              </Link>
              <Link href="/datenschutz" className="transition-colors hover:text-white">
                Datenschutz
              </Link>
              <Link href="/kontakt" className="transition-colors hover:text-white">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* SUPERBRAND-Credit (Pflicht) */}
          <p className="mt-8 text-center text-sm text-white/45">
            Made with <span className="text-brand-green">❤️</span> by{" "}
            <a
              href="https://superbrand.marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/20 underline-offset-2 transition-colors hover:text-brand-green"
            >
              SUPERBRAND.marketing
            </a>{" "}
            – Dein Superheld für deine Werbung.
          </p>
        </div>
      </div>
    </footer>
  );
}
