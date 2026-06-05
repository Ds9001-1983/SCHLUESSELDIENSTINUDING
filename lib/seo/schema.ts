import { business, SITE_URL } from "@/lib/business";
import { serviceCities, serviceDistricts } from "@/lib/locations";
import { services, type Faq } from "@/lib/content";

const BUSINESS_ID = `${SITE_URL}/#business`;

/**
 * Globales LocalBusiness (Locksmith). Das areaServed listet ALLE Städte und
 * Stadtteile – dieser Mechanismus ersetzt die ~30 Doorway-Unterseiten.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": BUSINESS_ID,
    name: business.name,
    alternateName: business.legalName,
    image: `${SITE_URL}/opengraph-image`,
    url: `${SITE_URL}/`,
    telephone: business.phone.e164,
    email: business.email,
    priceRange: "€€",
    founder: business.owner,
    slogan: business.slogan,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [business.googleReviewUrl],
    areaServed: [
      ...serviceCities.map((name) => ({ "@type": "City", name })),
      ...serviceDistricts.map((name) => ({ "@type": "AdministrativeArea", name })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Schlüsseldienst-Leistungen",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title },
        ...(s.slug === "tueroeffnung"
          ? {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: String(business.price.tueroeffnung),
                priceCurrency: business.price.currency,
                description: "Festpreis Türöffnung – keine versteckten Kosten",
              },
            }
          : {}),
      })),
    },
    // TODO-REAL-REVIEW: aggregateRating erst mit ECHTEN Google-Zahlen ergänzen
    // (Googles Review-Snippet-Policy verbietet erfundene Bewertungen).
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
