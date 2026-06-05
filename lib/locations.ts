/* ==================================================================
   Einsatzgebiet — EINE Datenquelle für /einsatzgebiet, Teaser und das
   schema.org areaServed. Ersetzt die ~30 Doorway-Unterseiten der alten
   Seite: alle Orte werden als strukturierte Daten + eine reiche Seite
   abgedeckt, ohne dünne Einzel-URLs.
   ================================================================== */

export type LocationGroup = {
  title: string;
  intro: string;
  places: string[];
};

export const locationGroups: LocationGroup[] = [
  {
    title: "Bergisch Gladbach & Stadtteile",
    intro:
      "Unser Zuhause. Von hier sind wir in der Regel innerhalb weniger Minuten bei Ihnen.",
    places: [
      "Bergisch Gladbach",
      "Bensberg",
      "Refrath",
      "Paffrath",
      "Schildgen",
      "Heidkamp",
      "Frankenforst",
      "Hebborn",
      "Gronau",
    ],
  },
  {
    title: "Köln & Veedel",
    intro:
      "Unser größter Markt. Schnelle Anfahrt über A4 und die Rheinbrücken in die Kölner Veedel.",
    places: ["Köln", "Deutz", "Mülheim", "Nippes", "Sülz", "Kalk", "Dellbrück", "Weiden"],
  },
  {
    title: "Leverkusen & Umgebung",
    intro: "Opladen, Schlebusch, Wiesdorf – auch in Leverkusen schnell für Sie da.",
    places: ["Leverkusen", "Opladen", "Schlebusch", "Wiesdorf"],
  },
  {
    title: "Umland im Rheinland",
    intro: "Rund um Bergisch Gladbach und Köln – fragen Sie einfach nach Ihrem Ort.",
    places: [
      "Rösrath",
      "Overath",
      "Lohmar",
      "Hennef",
      "Niederkassel",
      "Burscheid",
      "Wermelskirchen",
      "Leichlingen",
      "Langenfeld",
      "Pulheim",
      "Hürth",
    ],
  },
];

/* --- Für schema.org areaServed: Städte (City) vs. Stadtteile (AdministrativeArea) --- */

export const serviceCities: string[] = [
  "Bergisch Gladbach",
  "Köln",
  "Leverkusen",
  "Rösrath",
  "Overath",
  "Lohmar",
  "Hennef",
  "Niederkassel",
  "Burscheid",
  "Wermelskirchen",
  "Leichlingen",
  "Langenfeld",
  "Pulheim",
  "Hürth",
];

export const serviceDistricts: string[] = [
  "Bensberg",
  "Refrath",
  "Paffrath",
  "Schildgen",
  "Heidkamp",
  "Frankenforst",
  "Hebborn",
  "Gronau",
  "Deutz",
  "Mülheim",
  "Nippes",
  "Sülz",
  "Kalk",
  "Dellbrück",
  "Weiden",
  "Opladen",
  "Schlebusch",
  "Wiesdorf",
];
