import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos destacados",
  description: "Consulta la selección de productos destacados de Espanapoint.",
  alternates: { canonical: "/vedette" },
};

export default function FeaturedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
