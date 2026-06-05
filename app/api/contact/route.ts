import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  telefon: z.string().min(5),
  email: z.string().email().optional().or(z.literal("")),
  anliegen: z.string().min(1),
  nachricht: z.string().optional(),
  datenschutz: z.literal(true),
  website: z.string().optional(), // Honeypot
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // Honeypot ausgefüllt → Bot: still „erfolgreich" beantworten, nichts tun.
    if (data.website && data.website.length > 0) {
      return NextResponse.json({ ok: true });
    }

    // TODO-MAIL: Echten Mailversand an business.email einbauen
    // (z. B. Resend oder SMTP/Nodemailer). Im Prototyp nur Logging.
    console.log("[Kontaktanfrage]", {
      name: data.name,
      telefon: data.telefon,
      email: data.email,
      anliegen: data.anliegen,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Eingabe." }, { status: 400 });
  }
}
