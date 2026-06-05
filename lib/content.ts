/* ==================================================================
   Marketing-Content (Single Source of Truth für Texte).
   Quelle: Notion-Brief PROT-21 + Leistungsumfang der bestehenden Seite.
   Icons als String-Key (siehe components/ui/icon.tsx).
   ================================================================== */

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "tueroeffnung",
    title: "Türöffnung",
    short: "Zugefallen oder abgeschlossen? Wir öffnen schnell – zum Festpreis von 50 €.",
    long: "Ob die Tür einfach zugefallen ist oder abgeschlossen wurde: Wir öffnen Ihre Tür schnell und in über 90 % der Fälle ganz ohne Beschädigung. Mit Spezialwerkzeug statt roher Gewalt – und zum garantierten Festpreis von 50 €.",
    icon: "DoorOpen",
    image: "/images/services/tueroeffnung.webp",
  },
  {
    slug: "schlosswechsel",
    title: "Schlossaustausch & -wechsel",
    short: "Schlüssel verloren oder Schloss defekt? Wir tauschen fachgerecht aus.",
    long: "Schlüssel verloren, eingezogen oder das Schloss defekt? Wir tauschen Schließzylinder und Schlösser fachgerecht aus – mit geprüfter Markenqualität und passend zu Ihrer Sicherheitsstufe.",
    icon: "KeyRound",
    image: "/images/services/schlosswechsel.webp",
  },
  {
    slug: "schlossreparatur",
    title: "Schlossreparatur",
    short: "Klemmt der Schlüssel oder hakt das Schloss? Oft reicht eine Reparatur.",
    long: "Hakt das Schloss oder klemmt der Schlüssel? Häufig ist kein teurer Austausch nötig – wir reparieren und warten Ihr Schloss, damit es wieder zuverlässig läuft.",
    icon: "Wrench",
    image: "/images/services/schlossreparatur.webp",
  },
  {
    slug: "sicherheitsberatung",
    title: "Sicherheitsberatung",
    short: "Ehrliche Beratung, wie Sie Ihr Zuhause wirklich sicherer machen.",
    long: "Wir schauen uns Ihre Situation an und sagen ehrlich, was wirklich sinnvoll ist – und was nicht. Keine Verkaufsmasche, sondern eine bodenständige Empfehlung für mehr Sicherheit.",
    icon: "ShieldCheck",
    image: "/images/services/sicherheitsberatung.webp",
  },
  {
    slug: "einbruchschutz",
    title: "Panzerriegel & Einbruchschutz",
    short: "Mechanischer Schutz gegen ungebetene Gäste – fachgerecht montiert.",
    long: "Panzerriegel, Querriegel und gehärtete Sicherheitsbeschläge: Mechanischer Einbruchschutz hält Einbrecher auf – und hält oft schon vom Versuch ab. Wir beraten und montieren fachgerecht.",
    icon: "ShieldPlus",
    image: "/images/services/einbruchschutz.webp",
  },
  {
    slug: "panikstangen",
    title: "Panikstangen & Notausgänge",
    short: "Geprüfte Notausgangsbeschläge für Gewerbe – sicher raus im Ernstfall.",
    long: "Für Gewerbe und öffentliche Gebäude: Panikstangen und Notausgangsbeschläge sorgen dafür, dass im Ernstfall jeder schnell und sicher nach draußen kommt – montiert und geprüft nach Norm.",
    icon: "LogOut",
    image: "/images/services/panikstangen.webp",
  },
  {
    slug: "tresoroeffnung",
    title: "Tresoröffnung",
    short: "Tresor zu, Code vergessen? Wir öffnen Wertschränke schonend.",
    long: "Code vergessen oder Schloss defekt? Wir öffnen Tresore und Wertschränke fachgerecht und so schonend wie möglich – diskret und zuverlässig.",
    icon: "Vault",
    image: "/images/services/tresoroeffnung.webp",
  },
  {
    slug: "einbruchschaeden",
    title: "Schlösser nach Einbruch",
    short: "Nach einem Einbruch bringen wir Tür und Schloss schnell wieder sicher.",
    long: "Ein Einbruch ist Stress genug. Wir kommen schnell, sichern Tür und Schloss und bringen alles wieder in einen sicheren Zustand – damit Sie sich zu Hause wieder sicher fühlen.",
    icon: "Hammer",
    image: "/images/services/einbruchschaeden.webp",
  },
  {
    slug: "gewerbe",
    title: "Mehrfamilienhäuser & Gewerbe",
    short: "Schließanlagen & Service für Hausverwaltung, Vermieter und Gewerbe.",
    long: "Schließanlagen, Generalschlüssel-Systeme und schneller Service für Hausverwaltungen, Vermieter und Gewerbe – alles aus einer Hand und mit einem festen Ansprechpartner.",
    icon: "Building2",
    image: "/images/services/gewerbe.webp",
  },
];

export type Usp = { icon: string; title: string; text: string };

export const usps: Usp[] = [
  {
    icon: "ShieldCheck",
    title: "Festpreis-Garantie",
    text: "Was wir am Telefon sagen, gilt. Keine versteckten Kosten – versprochen.",
  },
  {
    icon: "Clock",
    title: "24h-Notdienst",
    text: "Rund um die Uhr erreichbar – auch nachts, am Wochenende und an Feiertagen.",
  },
  {
    icon: "Wrench",
    title: "Alles aus einer Hand",
    text: "Von der Türöffnung bis zum Einbruchschutz – ein Ansprechpartner für alles.",
  },
  {
    icon: "BadgeEuro",
    title: "Faire Preise",
    text: "Bodenständig und ehrlich kalkuliert. Ein Schlüsseldienst, dem Sie vertrauen können.",
  },
  {
    icon: "Star",
    title: "Top bewertet",
    text: "Viele zufriedene Kundinnen und Kunden in Bergisch Gladbach, Köln und Umgebung.",
  },
  {
    icon: "Award",
    title: "5 Jahre Erfahrung",
    text: "Routiniert an Tür und Schloss – seit über 5 Jahren in der Region für Sie da.",
  },
];

export type TrustItem = {
  icon: string;
  value: string;
  label: string;
  countTo?: number;
  prefix?: string;
  suffix?: string;
};

export const trustItems: TrustItem[] = [
  { icon: "BadgeEuro", value: "50 €", label: "Festpreis Türöffnung", countTo: 50, suffix: " €" },
  { icon: "Clock", value: "24/7", label: "Notdienst erreichbar" },
  { icon: "Award", value: "5 Jahre", label: "Erfahrung", countTo: 5, suffix: " Jahre" },
  { icon: "Star", value: "Top", label: "bewertet auf Google" },
];

export type Step = { icon: string; title: string; text: string };

export const steps: Step[] = [
  { icon: "Phone", title: "Anrufen", text: "Sie rufen an und schildern kurz, was los ist." },
  { icon: "BadgeEuro", title: "Festpreis", text: "Wir nennen Ihnen direkt den fairen Festpreis." },
  { icon: "DoorOpen", title: "Tür auf", text: "Wir kommen schnell und öffnen Ihre Tür." },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Was kostet eine Türöffnung?",
    a: "Eine normale Türöffnung kostet bei uns 50 € zum Festpreis. Was wir am Telefon vereinbaren, gilt – ohne versteckte Zusatzkosten.",
  },
  {
    q: "Sind Sie auch nachts und am Wochenende erreichbar?",
    a: "Ja. Unser Notdienst ist 24/7 für Sie da – nachts, am Wochenende und an Feiertagen.",
  },
  {
    q: "Beschädigen Sie meine Tür?",
    a: "In über 90 % der Fälle öffnen wir Ihre Tür ganz ohne Beschädigung. Wir arbeiten mit speziellem Werkzeug, nicht mit roher Gewalt.",
  },
  {
    q: "Wie schnell sind Sie bei mir?",
    a: "In Bergisch Gladbach und Umgebung sind wir meist innerhalb weniger Minuten bei Ihnen. In Köln und im Umland je nach Verkehr etwas länger.",
  },
  {
    q: "Wie kann ich bezahlen?",
    a: "Sie zahlen bequem direkt vor Ort. Den Preis kennen Sie vorher – garantiert.",
  },
  {
    q: "Welche Gebiete bedienen Sie?",
    a: "Bergisch Gladbach, Köln, Leverkusen, Rösrath und das gesamte Umland. Fragen Sie einfach nach Ihrem Ort.",
  },
];

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  isPlaceholder?: boolean;
};

// TODO-REAL-REVIEW: durch echte Google-Bewertungen ersetzen.
export const testimonials: Testimonial[] = [
  {
    name: "Sabine M.",
    location: "Bergisch Gladbach",
    quote:
      "Innerhalb von 15 Minuten da und die Tür war ohne einen Kratzer wieder auf. Fairer Festpreis, genau wie am Telefon gesagt.",
    isPlaceholder: true,
  },
  {
    name: "Thomas K.",
    location: "Köln",
    quote:
      "Nachts ausgesperrt, sofort jemanden erreicht und super freundlich. Schnell, ehrlich, absolut empfehlenswert.",
    isPlaceholder: true,
  },
  {
    name: "Hausverwaltung R.",
    location: "Leverkusen",
    quote:
      "Neue Schließanlage fürs Mehrfamilienhaus – unkompliziert, zuverlässig und zum vereinbarten Preis. Gerne wieder.",
    isPlaceholder: true,
  },
];

/* ---------------- Flagship-Standortseiten (echter, ortswahrer Content) ---------------- */

export type FlagshipPage = {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string[];
  localPoints: { title: string; text: string }[];
  districts: string[];
  faqs: Faq[];
};

export const flagshipBergischGladbach: FlagshipPage = {
  slug: "schluesseldienst-bergisch-gladbach",
  city: "Bergisch Gladbach",
  metaTitle: "Schlüsseldienst Bergisch Gladbach – Türöffnung 50 € · 24/7 Notdienst",
  metaDescription:
    "Ihr Schlüsseldienst in Bergisch Gladbach (Bensberg, Refrath, Paffrath, Heidkamp …). Türöffnung zum Festpreis von 50 €, in Minuten vor Ort. ☎ 0176 64423341.",
  eyebrow: "Ihr Schlüsseldienst vor Ort",
  title: "Schlüsseldienst Bergisch Gladbach",
  intro: [
    "Bergisch Gladbach ist unser Zuhause. Unser Standort liegt mitten in der Stadt – deshalb sind wir bei einer Türöffnung in der Regel innerhalb weniger Minuten bei Ihnen, egal ob in der Innenstadt, in Bensberg oder in Refrath.",
    "Ausgesperrt? Kein Stress. Ein Anruf, ein fairer Festpreis von 50 €, und die Tür ist wieder auf – in über 90 % der Fälle ganz ohne Beschädigung.",
  ],
  localPoints: [
    {
      title: "Wir sind von hier",
      text: "Als ortsansässiger Betrieb kennen wir Bergisch Gladbach und die typischen Türen und Schlösser in Alt- und Neubau genau.",
    },
    {
      title: "Schnell in allen Stadtteilen",
      text: "Von der Stadtmitte über Schloss Bensberg bis Refrath und Schildgen – kurze Wege bedeuten kurze Wartezeit.",
    },
    {
      title: "24/7 Notdienst",
      text: "Auch nachts, am Wochenende und an Feiertagen erreichbar. Wenn Sie vor der Tür stehen, sind wir dran.",
    },
  ],
  districts: [
    "Bensberg",
    "Refrath",
    "Paffrath",
    "Schildgen",
    "Heidkamp",
    "Frankenforst",
    "Hebborn",
    "Gronau",
  ],
  faqs: [
    {
      q: "Wie schnell sind Sie in Bergisch Gladbach bei mir?",
      a: "Da unser Standort in Bergisch Gladbach ist, sind wir meist innerhalb weniger Minuten vor Ort – in Bensberg, Refrath, Paffrath und den übrigen Stadtteilen.",
    },
    {
      q: "Was kostet die Türöffnung in Bergisch Gladbach?",
      a: "50 € zum Festpreis. Den Preis nennen wir Ihnen am Telefon, und genau der gilt dann auch.",
    },
    {
      q: "Kommen Sie auch nachts nach Schildgen oder Bensberg?",
      a: "Ja, unser Notdienst ist rund um die Uhr in ganz Bergisch Gladbach für Sie da – auch nachts und am Wochenende.",
    },
  ],
};

export const flagshipKoeln: FlagshipPage = {
  slug: "schluesseldienst-koeln",
  city: "Köln",
  metaTitle: "Schlüsseldienst Köln – 24/7 Notdienst & Türöffnung zum Festpreis",
  metaDescription:
    "Schlüsseldienst für Köln (Deutz, Mülheim, Nippes, Sülz, Kalk …). Schnelle Türöffnung, faire Festpreise, rund um die Uhr. Jetzt anrufen: 0176 64423341.",
  eyebrow: "Schnell in den Kölner Veedeln",
  title: "Schlüsseldienst Köln",
  intro: [
    "Köln ist unser größter Markt. Von Bergisch Gladbach aus erreichen wir die rechtsrheinischen Veedel über die A4 und die Rheinbrücken zügig – Deutz, Mülheim, Kalk und Dellbrück liegen quasi vor der Haustür.",
    "Egal ob enges Altbau-Schloss in Sülz oder Nippes oder die zugefallene Wohnungstür in Deutz: Wir öffnen schnell, fair und zum Festpreis – Tag und Nacht.",
  ],
  localPoints: [
    {
      title: "Ehrliche Anfahrt",
      text: "Wir sagen Ihnen am Telefon realistisch, wie schnell wir je nach Veedel und Verkehr bei Ihnen sein können.",
    },
    {
      title: "Altbau bis Neubau",
      text: "Von verwinkelten Altbau-Zylindern in Sülz und Nippes bis zu modernen Schließsystemen in Deutz – wir kennen die Kölner Türen.",
    },
    {
      title: "24/7 Notdienst",
      text: "Auch mitten in der Nacht erreichbar. Ein Anruf genügt, und wir machen uns auf den Weg.",
    },
  ],
  districts: ["Deutz", "Mülheim", "Nippes", "Sülz", "Kalk", "Dellbrück", "Weiden"],
  faqs: [
    {
      q: "Wie schnell sind Sie in Köln vor Ort?",
      a: "Das hängt vom Veedel und vom Verkehr ab. Die rechtsrheinischen Stadtteile wie Deutz, Mülheim und Kalk erreichen wir von Bergisch Gladbach aus besonders zügig. Wir nennen Ihnen am Telefon eine ehrliche Einschätzung.",
    },
    {
      q: "Was kostet eine Türöffnung in Köln?",
      a: "Auch in Köln gilt unser fairer Festpreis. Den genauen Preis nennen wir Ihnen vorab am Telefon – ohne versteckte Kosten.",
    },
    {
      q: "Sind Sie in Köln auch nachts erreichbar?",
      a: "Ja. Unser Notdienst ist 24/7 für die Kölner Veedel da – nachts, am Wochenende und an Feiertagen.",
    },
  ],
};

export const flagshipPages: FlagshipPage[] = [flagshipBergischGladbach, flagshipKoeln];
