import type { Metadata } from "next";
import { FlagshipView } from "@/components/views/flagship-view";
import { flagshipBergischGladbach as page } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  alternates: { canonical: `/${page.slug}` },
};

export default function Page() {
  return <FlagshipView page={page} />;
}
