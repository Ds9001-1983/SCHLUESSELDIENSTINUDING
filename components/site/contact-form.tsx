"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/site/call-button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen an."),
  telefon: z.string().min(5, "Bitte geben Sie eine Nummer an, unter der wir Sie erreichen."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail an.").optional().or(z.literal("")),
  anliegen: z.string().min(1, "Bitte wählen Sie ein Anliegen."),
  nachricht: z.string().optional(),
  datenschutz: z
    .boolean()
    .refine((v) => v === true, { message: "Bitte stimmen Sie der Datenschutzerklärung zu." }),
  // Honeypot – muss leer bleiben.
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

const anliegenOptions = [
  "Türöffnung",
  "Schlosswechsel / Schlossreparatur",
  "Einbruchschutz / Panzerriegel",
  "Tresoröffnung",
  "Gewerbe / Hausverwaltung",
  "Sonstiges",
];

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { anliegen: "" },
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-card border border-accent/30 bg-accent/5 p-8">
        <span className="grid size-12 place-items-center rounded-full bg-accent text-white">
          <Check className="size-6" />
        </span>
        <h3 className="font-display text-xl font-semibold text-ink">Vielen Dank!</h3>
        <p className="text-muted">
          Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen. Sie haben es
          eilig? Rufen Sie uns einfach direkt an:
        </p>
        <CallButton />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 rounded-card border border-line bg-white p-7 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message} required>
          <input
            type="text"
            autoComplete="name"
            placeholder="Ihr Name"
            className={cn(fieldBase, errors.name ? "border-red-400" : "border-line focus:border-accent")}
            {...register("name")}
          />
        </Field>
        <Field label="Telefon" error={errors.telefon?.message} required>
          <input
            type="tel"
            autoComplete="tel"
            placeholder="Ihre Telefonnummer"
            className={cn(
              fieldBase,
              errors.telefon ? "border-red-400" : "border-line focus:border-accent",
            )}
            {...register("telefon")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="E-Mail (optional)" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            placeholder="ihre@email.de"
            className={cn(
              fieldBase,
              errors.email ? "border-red-400" : "border-line focus:border-accent",
            )}
            {...register("email")}
          />
        </Field>
        <Field label="Anliegen" error={errors.anliegen?.message} required>
          <select
            className={cn(
              fieldBase,
              "appearance-none",
              errors.anliegen ? "border-red-400" : "border-line focus:border-accent",
            )}
            defaultValue=""
            {...register("anliegen")}
          >
            <option value="" disabled>
              Bitte wählen …
            </option>
            {anliegenOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Nachricht (optional)" error={errors.nachricht?.message}>
        <textarea
          rows={4}
          placeholder="Worum geht es? Schildern Sie kurz Ihre Situation."
          className={cn(fieldBase, "resize-none border-line focus:border-accent")}
          {...register("nachricht")}
        />
      </Field>

      {/* Honeypot (für Menschen unsichtbar) */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        {...register("website")}
      />

      <label className="flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          className="mt-1 size-4 shrink-0 accent-accent"
          {...register("datenschutz")}
        />
        <span>
          Ich habe die{" "}
          <Link href="/datenschutz" className="text-accent-deep underline underline-offset-2">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung der Anfrage
          einverstanden.
        </span>
      </label>
      {errors.datenschutz ? (
        <p className="-mt-2 text-sm text-red-500">{errors.datenschutz.message}</p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-red-500">
          Da ist leider etwas schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an.
        </p>
      ) : null}

      <Button type="submit" size="lg" variant="dark" disabled={status === "loading"} className="mt-1">
        {status === "loading" ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Wird gesendet …
          </>
        ) : (
          "Anfrage senden"
        )}
      </Button>
      <p className="text-center text-sm text-muted">
        Im Notfall geht’s am schnellsten telefonisch – wir sind 24/7 erreichbar.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-signal"> *</span> : null}
      </span>
      {children}
      {error ? <span className="text-sm text-red-500">{error}</span> : null}
    </label>
  );
}
