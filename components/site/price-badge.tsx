import { BadgeEuro } from "lucide-react";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

/** „Türöffnung zum Festpreis 50 €" – auf jeder Seite wiederverwendet. */
export function PriceBadge({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-medium",
        tone === "light"
          ? "border-white/20 bg-white/5 text-white"
          : "border-accent/30 bg-accent/5 text-accent-deep",
        className,
      )}
    >
      <BadgeEuro className="size-4 shrink-0" />
      Türöffnung zum Festpreis
      <span className="font-display text-base font-bold">
        {business.price.tueroeffnung} {business.price.currencySymbol}
      </span>
    </span>
  );
}
