import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";
import { CallButton } from "@/components/site/call-button";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/anim/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { locationGroups } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Einsatzgebiet – Bergisch Gladbach, Köln, Leverkusen & Umgebung",
  description:
    "Unser Einsatzgebiet: Bergisch Gladbach, Köln, Leverkusen, Rösrath, Lohmar und das gesamte Umland. Finden Sie Ihren Ort – wir sind schnell und zum Festpreis vor Ort.",
  alternates: { canonical: "/einsatzgebiet" },
};

const groupLinks: Record<string, { href: string; label: string }> = {
  "Bergisch Gladbach & Stadtteile": {
    href: "/schluesseldienst-bergisch-gladbach",
    label: "Schlüsseldienst Bergisch Gladbach",
  },
  "Köln & Veedel": {
    href: "/schluesseldienst-koeln",
    label: "Schlüsseldienst Köln",
  },
};

export default function EinsatzgebietPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Einsatzgebiet", path: "/einsatzgebiet" },
        ])}
      />

      <PageHero
        eyebrow="Einsatzgebiet"
        title="In Ihrer Nähe für Sie da"
        sub="Bergisch Gladbach, Köln, Leverkusen, Rösrath und das gesamte Umland im Rheinland. Finden Sie Ihren Ort – und falls er nicht dabei ist, rufen Sie einfach an."
        breadcrumb={[{ name: "Startseite", href: "/" }, { name: "Einsatzgebiet" }]}
      >
        <CallButton />
      </PageHero>

      <section className="py-20 lg:py-28">
        <Container className="flex flex-col gap-12">
          {locationGroups.map((g) => {
            const link = groupLinks[g.title];
            return (
              <div
                key={g.title}
                className="grid gap-6 border-b border-line pb-12 last:border-0 last:pb-0 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-12"
              >
                <div className="flex flex-col gap-3">
                  <h2 className="font-display text-2xl font-semibold text-ink">{g.title}</h2>
                  <p className="leading-relaxed text-muted">{g.intro}</p>
                  {link ? (
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-deep transition-colors hover:text-accent"
                    >
                      {link.label}
                      <ArrowRight className="size-4" />
                    </Link>
                  ) : null}
                </div>
                <Reveal as="ul" stagger={0.025} className="flex flex-wrap gap-2.5">
                  {g.places.map((p) => (
                    <li key={p}>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-ink/80 transition-colors hover:border-accent/40 hover:text-ink">
                        <MapPin className="size-3.5 text-accent" />
                        {p}
                      </span>
                    </li>
                  ))}
                </Reveal>
              </div>
            );
          })}
        </Container>
      </section>

      <CtaBand title="Ihr Ort dabei? Dann rufen Sie an." />
    </>
  );
}
