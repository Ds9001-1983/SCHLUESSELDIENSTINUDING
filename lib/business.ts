/* ==================================================================
   SINGLE SOURCE OF TRUTH — Geschäftsdaten Schlüsseldienst Nuding
   Quelle: Notion-Brief PROT-21 (verbindlich für Preis/Telefon).
   Jede Telefonnummer/Adresse im UI + JSON-LD stammt aus dieser Datei
   → NAP kann nicht auseinanderlaufen.
   ================================================================== */

// TODO-DOMAIN: finale Produktiv-Domain. Prototyp läuft auf Vercel-Preview.
export const SITE_URL = "https://www.schluesseldienst-nuding.de";

export const business = {
  name: "Schlüsseldienst Nuding",
  legalName: "Schlüsseldienst Anton Nuding",
  owner: "Anton Nuding",
  slogan: "Tür zu, Kopf leer? Wir machens fair!",

  phone: {
    display: "0176 64423341",
    e164: "+4917664423341",
    href: "tel:+4917664423341",
  },

  // WhatsApp: sekundär, per Flag aktivierbar (Datenschutz-Hinweis ergänzt).
  whatsappEnabled: true,
  whatsapp: {
    number: "4917664423341",
    href: "https://wa.me/4917664423341",
  },

  email: "email@antonnuding.de",

  address: {
    street: "Falltorstraße 7a",
    postalCode: "51429",
    city: "Bergisch Gladbach",
    region: "Nordrhein-Westfalen",
    country: "DE",
  },

  // Ungefähre Koordinaten Bergisch Gladbach. TODO-GEO: exakte Adresse geocoden.
  geo: { lat: 50.9856, lng: 7.1327 },

  hours: "24/7",
  experienceYears: 5,

  price: {
    tueroeffnung: 50,
    currency: "EUR",
    currencySymbol: "€",
  },

  googleReviewUrl: "https://g.page/r/CQNGERHkBa-CEAE/review",

  // TODO-REAL-REVIEW: echte Google-Werte vor Launch eintragen, dann isPlaceholder=false.
  rating: {
    value: 4.9,
    count: 50,
    isPlaceholder: true,
  },

  serviceAreaShort: "Bergisch Gladbach, Köln, Leverkusen, Rösrath und Umgebung",
} as const;

/** Vollständige Anschrift einzeilig (Footer, Impressum). */
export const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.city}`;
