import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description:
    "Explora el catálogo de productos de Espanapoint y consulta la información disponible para cada artículo.",
  alternates: { canonical: "/produits" },
  openGraph: {
    title: "Catálogo de productos | Espanapoint",
    description:
      "Catálogo de productos de Espanapoint con información de cada artículo.",
    url: "/produits",
    siteName: "Espanapoint",
    locale: "es_ES",
    type: "website",
    images: ["/img/log.png"],
  },
};

export default function ProductsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}