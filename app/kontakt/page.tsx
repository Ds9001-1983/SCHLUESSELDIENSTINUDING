import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";
import { CallButton } from "@/components/site/call-button";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { ContactForm } from "@/components/site/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { business, fullAddress } from "@/lib/business";

export const metadata: Metadata = {
  title: "Kontakt – Schlüsseldienst Nuding, Bergisch Gladbach",
  description:
    "Schlüsseldienst Nuding, Falltorstraße 7a, 51429 Bergisch Gladbach. 24/7 erreichbar unter 0176 64423341 oder per Kontaktformular. Schnell, fair, zum Festpreis.",
  alternates: { canonical: "/kontakt" },
};

const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${fullAddress}`,
)}`;

export default function KontaktPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Kontakt", path: "/kontakt" },
        ])}
      />

      <PageHero
        eyebrow="Kontakt"
        title="So erreichen Sie uns"
        sub="Am schnellsten geht es telefonisch – wir sind rund um die Uhr für Sie da. Sie möchten lieber schreiben? Nutzen Sie das Formular, wir melden uns zügig zurück."
        breadcrumb={[{ name: "Startseite", href: "/" }, { name: "Kontakt" }]}
      >
        <CallButton size="lg" />
      </PageHero>

      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Telefon primär */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5 rounded-card border border-line bg-white p-7 shadow-soft">
              <div className="flex flex-col gap-1">
                <h2 className="font-display text-2xl font-semibold text-ink">Direkt anrufen</h2>
                <p className="text-muted">
                  Im Notfall am besten sofort anrufen – Festpreis, schnelle Anfahrt, 24/7.
                </p>
              </div>
              <a
                href={business.phone.href}
                data-call-cta
                className="inline-flex items-center gap-3 font-display text-3xl font-bold text-ink transition-colors hover:text-accent-deep"
              >
                <Phone className="size-7 text-accent" />
                {business.phone.display}
              </a>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CallButton showNumber={false} />
                <WhatsAppButton />
              </div>
            </div>

            <ul className="flex flex-col gap-4">
              <ContactRow icon={<Mail className="size-5" />} label="E-Mail">
                <a
                  href={`mailto:${business.email}`}
                  className="transition-colors hover:text-accent-deep"
                >
                  {business.email}
                </a>
              </ContactRow>
              <ContactRow icon={<MapPin className="size-5" />} label="Adresse">
                {fullAddress}
              </ContactRow>
              <ContactRow icon={<Clock className="size-5" />} label="Erreichbarkeit">
                24/7 Notdienst – auch nachts, am Wochenende und an Feiertagen
              </ContactRow>
            </ul>

            {/* Privacy-freundliche Karte (lädt Google Maps erst bei Klick) */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-44 flex-col justify-end overflow-hidden rounded-card border border-line bg-ink bg-grid p-6 text-white"
            >
              <span className="absolute right-6 top-6 grid size-11 place-items-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:scale-110">
                <MapPin className="size-5" />
              </span>
              <span className="font-display text-lg font-semibold">{business.name}</span>
              <span className="text-white/70">{fullAddress}</span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-glow">
                <Navigation className="size-4" />
                Route planen
              </span>
            </a>
          </div>

          {/* Formular sekundär */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h2 className="font-display text-2xl font-semibold text-ink">Schreiben Sie uns</h2>
              <p className="text-muted">
                Kein Notfall? Hinterlassen Sie uns eine Nachricht – wir rufen Sie zurück.
              </p>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-deep">
        {icon}
      </span>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-muted">{label}</span>
        <span className="text-ink">{children}</span>
      </div>
    </li>
  );
}
