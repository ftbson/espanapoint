import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description:
    "Explora el catálogo de productos de Espanapoint y consulta la información disponible para cada artículo.",
  alternates: { canonical: "/produits" },
};

export default function ProductsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
