import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";
import { ServiceGrid } from "@/components/site/service-grid";
import { PriceBadge } from "@/components/site/price-badge";
import { CallButton } from "@/components/site/call-button";
import { SectionHeading } from "@/components/site/section-heading";
import { FaqSection } from "@/components/site/faq-section";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/anim/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { services, faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leistungen – Türöffnung, Schlossaustausch & Einbruchschutz",
  description:
    "Türöffnung zum Festpreis 50 €, Schlossaustausch, Schlossreparatur, Einbruchschutz, Tresoröffnung und 24/7 Notdienst vom Schlüsseldienst Nuding in Bergisch Gladbach & Köln.",
  alternates: { canonical: "/leistungen" },
};

const privat = [
  "Türöffnung zum Festpreis von 50 €",
  "Schlosswechsel nach Schlüsselverlust",
  "Einbruchschutz fürs Zuhause",
  "Ehrliche Sicherheitsberatung",
];

const gewerbe = [
  "Schließanlagen für Mehrfamilienhäuser",
  "Service für Hausverwaltung & Vermieter",
  "Panikstangen & Notausgänge nach Norm",
  "Fester Ansprechpartner, schnelle Reaktion",
];

export default function LeistungenPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Leistungen", path: "/leistungen" },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Alles aus einer Hand"
        title="Unsere Leistungen"
        sub="Von der schnellen Türöffnung bis zum durchdachten Einbruchschutz – rund um Tür und Schloss sind wir Ihr zuverlässiger Partner in Bergisch Gladbach, Köln und Umgebung."
        breadcrumb={[{ name: "Startseite", href: "/" }, { name: "Leistungen" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <PriceBadge tone="light" />
          <CallButton />
        </div>
      </PageHero>

      {/* Alle Leistungen */}
      <section className="py-20 lg:py-28">
        <Container>
          <ServiceGrid items={services} />
        </Container>
      </section>

      {/* Privat vs. Gewerbe */}
      <section className="bg-paper-dim py-20 lg:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Für wen?"
            title="Privat und Gewerbe"
            sub="Ob zugefallene Wohnungstür oder Schließanlage fürs Mehrfamilienhaus – wir sind für beide da."
          />
          <Reveal stagger={0.1} className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              { title: "Für Privatkundinnen & -kunden", items: privat },
              { title: "Für Gewerbe & Hausverwaltung", items: gewerbe },
            ].map((col) => (
              <div
                key={col.title}
                className="flex flex-col gap-5 rounded-card border border-line bg-white p-8 shadow-soft"
              >
                <h3 className="font-display text-2xl font-semibold text-ink">{col.title}</h3>
                <ul className="flex flex-col gap-3">
                  {col.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-ink/80">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent/10 text-accent-deep">
                        <Check className="size-3.5" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
                <CallButton className="mt-2 self-start" size="md" />
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Häufige Fragen" title="Gut zu wissen" />
            <p className="text-lg leading-relaxed text-muted">
              Noch Fragen zu einer Leistung oder zum Festpreis? Rufen Sie uns an, wir beraten Sie
              ehrlich.
            </p>
            <CallButton className="self-start" />
          </div>
          <FaqSection items={faqs} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
