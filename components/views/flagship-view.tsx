import { MapPin } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceGrid } from "@/components/site/service-grid";
import { PriceBadge } from "@/components/site/price-badge";
import { CallButton } from "@/components/site/call-button";
import { FaqSection } from "@/components/site/faq-section";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/anim/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { services, type FlagshipPage } from "@/lib/content";

/** Gemeinsames Layout der Flagship-Standortseiten (echter, ortswahrer Content). */
export function FlagshipView({ page }: { page: FlagshipPage }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: page.title, path: `/${page.slug}` },
          ]),
          faqSchema(page.faqs),
        ]}
      />

      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        sub={page.intro[0]}
        breadcrumb={[{ name: "Startseite", href: "/" }, { name: page.city }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <PriceBadge tone="light" />
          <CallButton />
        </div>
      </PageHero>

      {/* Intro + lokale Punkte */}
      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="flex flex-col gap-5">
            {page.intro.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}
            <CallButton className="mt-2 self-start" />
          </div>
          <Reveal stagger={0.1} className="flex flex-col gap-4">
            {page.localPoints.map((pt) => (
              <div
                key={pt.title}
                className="flex gap-4 rounded-card border border-line bg-white p-6 shadow-soft"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-deep">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{pt.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{pt.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Stadtteile */}
      <section className="bg-paper-dim py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Stadtteile & Umgebung"
            title={`Schnell in ganz ${page.city}`}
            sub={`Wir sind in diesen Stadtteilen von ${page.city} und drumherum schnell für Sie da:`}
          />
          <Reveal as="ul" stagger={0.03} className="mt-10 flex flex-wrap gap-2.5">
            {page.districts.map((d) => (
              <li key={d}>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-ink/80">
                  <MapPin className="size-3.5 text-accent" />
                  {d}
                </span>
              </li>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Leistungen */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Leistungen"
            title={`Ihr Schlüsseldienst in ${page.city}`}
            sub="Alles rund um Tür und Schloss – schnell, fair und zum Festpreis."
          />
          <ServiceGrid items={services.slice(0, 6)} className="mt-12" />
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-paper-dim py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Häufige Fragen" title={`Schlüsseldienst ${page.city}`} />
            <CallButton className="self-start" />
          </div>
          <FaqSection items={page.faqs} />
        </Container>
      </section>

      <CtaBand title={`Schlüsseldienst ${page.city} gesucht? Wir machens fair.`} />
    </>
  );
}
