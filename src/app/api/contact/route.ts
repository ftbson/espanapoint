import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (typeof body !== "object" || body === null) {
      return NextResponse.json({ error: "Formulario no válido" }, { status: 400 });
    }

    const { name, email, subject, message, privacy } = body as Record<string, unknown>;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      name.trim().length < 1 ||
      name.length > 120 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      email.length > 254 ||
      subject.trim().length < 1 ||
      subject.length > 160 ||
      message.trim().length < 1 ||
      message.length > 5000
    ) {
      return NextResponse.json({ error: "Revise los campos del formulario." }, { status: 400 });
    }

    if (privacy !== true) {
      return NextResponse.json(
        { error: "Debe aceptar la Política de Privacidad." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
      return NextResponse.json(
        { error: "El formulario de contacto no está configurado temporalmente." },
        { status: 503 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim().replace(/[\r\n]+/g, " ");
    const cleanMessage = message.trim();

    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: siteConfig.legal.email,
      replyTo: cleanEmail,
      subject: `Contacto web: ${cleanSubject}`,
      text: `Nombre: ${cleanName}\nEmail: ${cleanEmail}\nAsunto: ${cleanSubject}\n\n${cleanMessage}`,
      html: `<p><strong>Nombre:</strong> ${escapeHtml(cleanName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
        <p><strong>Asunto:</strong> ${escapeHtml(cleanSubject)}</p>
        <p>${escapeHtml(cleanMessage).replace(/\r?\n/g, "<br>")}</p>`,
    });

    if (result.error) {
      console.error("Resend rejected contact message:", result.error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Inténtelo de nuevo más tarde." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form request failed:", error);
    return NextResponse.json(
      { error: "No se pudo procesar el mensaje." },
      { status: 400 }
    );
  }
}