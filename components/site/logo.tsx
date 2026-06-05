import Link from "next/link";
import { KeyRound } from "lucide-react";
import { cn } from "@/lib/utils";

/** Text-Wortmarke (kein Bild-Logo vorhanden). Türkis-Key-Mark + „Nuding". */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <Link
      href="/"
      aria-label="Schlüsseldienst Nuding – zur Startseite"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-xl bg-accent text-white shadow-sm transition-transform duration-300 group-hover:-rotate-6"
      >
        <KeyRound className="size-4.5" strokeWidth={2} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.15rem] font-bold tracking-tight",
            isLight ? "text-white" : "text-ink",
          )}
        >
          Nuding
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-medium uppercase tracking-[0.22em]",
            isLight ? "text-white/55" : "text-muted",
          )}
        >
          Schlüsseldienst
        </span>
      </span>
    </Link>
  );
}
