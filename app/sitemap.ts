import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/business";

// Bewusst nur die 8 echten Seiten – KEINE ~30 Standort-URLs (Doorway-Vermeidung).
const routes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/leistungen", priority: 0.8, changeFrequency: "monthly" },
  { path: "/schluesseldienst-bergisch-gladbach", priority: 0.9, changeFrequency: "monthly" },
  { path: "/schluesseldienst-koeln", priority: 0.9, changeFrequency: "monthly" },
  { path: "/einsatzgebiet", priority: 0.7, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.6, changeFrequency: "yearly" },
  { path: "/impressum", priority: 0.2, changeFrequency: "yearly" },
  { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
