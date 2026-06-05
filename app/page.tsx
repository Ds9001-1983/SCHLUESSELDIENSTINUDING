import Link from "next/link";
import { Check, Star, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { SectionHeading } from "@/components/site/section-heading";
import { HeroBackground } from "@/components/site/hero-background";
import { PriceBadge } from "@/components/site/price-badge";
import { CallButton } from "@/components/site/call-button";
import { TrustBar } from "@/components/site/trust-bar";
import { ServiceGrid } from "@/components/site/service-grid";
import { USPGrid } from "@/components/site/usp-grid";
import { FaqSection } from "@/components/site/faq-section";
import { TestimonialMarquee } from "@/components/site/testimonials";
import { AreaPills } from "@/components/site/area-list";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { SplitReveal } from "@/components/anim/split-reveal";
import { Reveal } from "@/components/anim/reveal";
import { CountUp } from "@/components/anim/count-up";
import { Magnetic } from "@/components/anim/magnetic";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/seo/schema";
import { services, steps, faqs } from "@/lib/content";
import { business } from "@/lib/business";

const heroProofs = [
  "Festpreis-Garantie",
  "In Minuten vor Ort",
  "Über 90 % ohne Schaden",
  "5 Jahre Erfahrung",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-svh items-center overflow-hidden">
        <HeroBackground
          src="/images/hero.webp"
          alt="Schlüsseldienst Nuding öffnet eine Haustür in Bergisch Gladbach"
        />
        <Container className="relative z-10 pb-24 pt-32 lg:pt-36">
          <div className="max-w-2xl">
            <Eyebrow tone="light" className="mb-5">
              Schlüsseldienst Bergisch Gladbach · 24/7 Notdienst
            </Eyebrow>
            <h1 className="font-display text-[clamp(2.4rem,7vw,4.6rem)] font-bold leading-[1.03] text-white">
              <SplitReveal as="span" text="Tür zu, Kopf leer?" trigger="load" className="block" />
              <SplitReveal
                as="span"
                text="Wir machens fair."
                trigger="load"
                delay={0.28}
                className="block text-accent-glow"
              />
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
              Ihr Schlüsseldienst in Bergisch Gladbach, Köln &amp; Umgebung – Türöffnung zum
              Festpreis von {business.price.tueroeffnung} {business.price.currencySymbol}. Schnell,
              fair und rund um die Uhr für Sie da.
            </p>
            <div className="mt-7">
              <PriceBadge tone="light" />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton size="xl" />
              <Button asChild variant="outlineLight" size="xl">
                <Link href="/leistungen">
                  Unsere Leistungen
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-white/75">
              {heroProofs.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Check className="size-4 text-accent-glow" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ---------------- TRUSTBAR (überlappt Hero) ---------------- */}
      <Container className="relative z-20 -mt-12 sm:-mt-16">
        <TrustBar />
      </Container>

      {/* ---------------- NOTDIENST / URGENCY ---------------- */}
      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <Eyebrow>Ausgesperrt? Kein Stress.</Eyebrow>
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] font-semibold text-ink">
              Ein Anruf. Fairer Festpreis. Tür auf.
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-muted">
              Sie stehen vor der Tür und kommen nicht rein? Bleiben Sie ruhig. Rufen Sie uns an, wir
              nennen Ihnen direkt den Festpreis und sind meist innerhalb weniger Minuten bei Ihnen –
              in über 90 % der Fälle ganz ohne Beschädigung.
            </p>
            <CallButton className="self-start" />
          </div>
          <Reveal as="ol" stagger={0.1} className="grid gap-4 sm:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="flex flex-col gap-3 rounded-card border border-line bg-white p-6 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-white">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <span className="font-display text-4xl font-bold text-accent/20">{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ---------------- LEISTUNGEN-TEASER ---------------- */}
      <section className="bg-paper-dim py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Alles aus einer Hand"
              title="Unsere Leistungen"
              sub="Von der schnellen Türöffnung bis zum durchdachten Einbruchschutz – ein Ansprechpartner für alles rund um Tür und Schloss."
            />
            <Button asChild variant="outline" size="lg" className="shrink-0">
              <Link href="/leistungen">
                Alle Leistungen
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
          <ServiceGrid items={services.slice(0, 6)} className="mt-12" />
        </Container>
      </section>

      {/* ---------------- FESTPREIS-ANKER ---------------- */}
      <section className="py-20 lg:py-28">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>Festpreis-Garantie</Eyebrow>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
            />
            <p className="font-display text-[clamp(5rem,20vw,11rem)] font-bold leading-none tracking-tight text-ink">
              <CountUp to={business.price.tueroeffnung} suffix=" €" />
            </p>
          </div>
          <p className="max-w-xl text-xl leading-relaxed text-muted">
            Türöffnung zum Festpreis. Keine versteckten Kosten, keine bösen Überraschungen. Was wir
            am Telefon sagen, gilt.
          </p>
          <CallButton />
        </Container>
      </section>

      {/* ---------------- WARUM NUDING ---------------- */}
      <section className="bg-ink py-20 text-white lg:py-28">
        <Container>
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="Warum Schlüsseldienst Nuding"
            title="Ehrlich, schnell und fair"
            sub="Wir sind ein bodenständiger Betrieb aus Bergisch Gladbach – kein anonymer Großanbieter. Darauf können Sie sich verlassen."
          />
          <div className="mt-14">
            <USPGrid />
          </div>
        </Container>
      </section>

      {/* ---------------- BEWERTUNGEN ---------------- */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Top bewertet"
            title="Das sagen unsere Kundinnen und Kunden"
          />
        </Container>
        <div className="mt-12">
          <TestimonialMarquee />
        </div>
        <Container className="mt-10 flex justify-center">
          <a
            href={business.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink shadow-soft transition-colors hover:border-accent/40"
          >
            <Star className="size-4 fill-yellow-400 text-yellow-400" />
            Bewertungen auf Google ansehen
          </a>
        </Container>
      </section>

      {/* ---------------- EINSATZGEBIET ---------------- */}
      <section className="bg-paper-dim py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Einsatzgebiet"
              title="In Ihrer Nähe für Sie da"
              sub="Bergisch Gladbach, Köln, Leverkusen, Rösrath und das gesamte Umland. Finden Sie Ihren Ort – und falls er fehlt, fragen Sie einfach nach."
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton />
              <Button asChild variant="outline" size="lg">
                <Link href="/einsatzgebiet">
                  Ganzes Einsatzgebiet
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </div>
          <AreaPills />
        </Container>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Häufige Fragen" title="Gut zu wissen" />
            <p className="text-lg leading-relaxed text-muted">
              Sie haben eine Frage, die hier nicht steht? Rufen Sie uns einfach an – wir helfen
              Ihnen gern weiter.
            </p>
            <CallButton className="self-start" />
          </div>
          <FaqSection items={faqs} />
        </Container>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="bg-grid">
          <Container className="flex flex-col items-center gap-7 py-20 text-center lg:py-28">
            <p className="font-display text-[clamp(2rem,6vw,4rem)] font-bold leading-tight text-white">
              Tür zu, Kopf leer? <span className="text-accent-glow">Wir machens fair.</span>
            </p>
            <p className="max-w-lg text-lg text-white/70">
              24/7 erreichbar – ein Anruf genügt, und wir sind für Sie da.
            </p>
            <Magnetic>
              <CallButton size="xl" />
            </Magnetic>
          </Container>
        </div>
      </section>
    </>
  );
}
