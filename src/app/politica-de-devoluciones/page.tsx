import { STORE } from "@/lib/store";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Política de Devoluciones y Reembolsos",
  description: `${siteConfig.returns.label}. Procedimientos de devolución y reembolso de Espanapoint.`,
  alternates: { canonical: "/politica-de-devoluciones" },
};

export default function PoliticaDevoluciones() {
  const { returns, legal } = siteConfig;

  return (
    <div
      className="legal-page-container"
      style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}
    >
      <h1>Política de Devoluciones y Reembolsos</h1>
      <p>
        <em>Última actualización: octubre de 2026</em>
      </p>

      <h2>1. Derecho de desistimiento</h2>
      <p>
        {returns.label} desde la recepción del producto, sin necesidad de
        justificarlo, salvo las excepciones legales previstas en la normativa
        vigente.
      </p>

      <h2>2. Cómo ejercer el derecho</h2>
      <p>
        Para iniciar la devolución, el cliente debe contactar con nuestro
        servicio de atención al cliente en{" "}
        <a href={`mailto:${STORE.email}`}>{STORE.email}</a> o mediante teléfono{" "}
        <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a>. Debe indicar el
        número de pedido y el motivo de la devolución.
      </p>
      <ul>
        <li>
          El producto debe devolverse en condiciones razonables y con el
          embalaje y accesorios originales, si existen.
        </li>
        <li>
          Si el producto ya ha sido usado más allá de lo necesario para
          comprobar su naturaleza, características y funcionamiento, el cliente
          puede responder de la disminución de valor del bien.
        </li>
        <li>
          Si es un dispositivo electrónico, se recomienda borrar datos
          personales y desvincular cuentas antes de devolverlo.
        </li>
      </ul>

      <h2>3. Gastos de devolución</h2>
      <p>
        {returns.label}. Los derechos legales por producto defectuoso o error
        del vendedor se mantienen.
      </p>

      <h2>4. Reembolso</h2>
      <p>
        El reembolso se realizará mediante el mismo medio de pago que se utilizó
        para la compra, en un plazo máximo de{" "}
        <strong>{returns.days} días</strong> desde la recepción del bien o la
        confirmación de la devolución, siempre que se cumplan las condiciones
        legales y la información pactada en esta política.
      </p>

      <h2>5. Productos defectuosos y garantía legal</h2>
      <p>
        Si el artículo presenta un defecto, error de entrega o falta de
        conformidad, el cliente puede reclamar la reparación, sustitución o
        devolución conforme a la normativa vigente. La garantía legal se aplica
        con independencia del derecho de desistimiento.
      </p>

      <h2>6. Dirección de devolución</h2>
      <p>
        <strong>{STORE.name} – Devoluciones</strong>
        <br />
        {STORE.address.street}
        <br />
        {STORE.address.postalCode} {STORE.address.locality},{" "}
        {STORE.address.country}
        <br />
        CIF/NIF: {legal.taxId || "B73940157"}
      </p>
    </div>
  );
}
