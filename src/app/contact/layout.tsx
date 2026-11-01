import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Espanapoint por correo electrónico o teléfono para consultas sobre productos y pedidos.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contacto | Espanapoint",
    description:
      "Contacta con Espanapoint para consultas sobre productos y pedidos.",
    url: "/contact",
    siteName: "Espanapoint",
    locale: "es_ES",
    type: "website",
    images: ["/img/log.png"],
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}