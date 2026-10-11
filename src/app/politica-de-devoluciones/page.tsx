import { STORE } from "@/lib/store";
import type { Metadata } from "next";
import {
  REFUND_DAYS,
  RETURN_DAYS,
  RETURN_FEES_PAYER,
} from "@/lib/store-config";

export const metadata: Metadata = {
  title: "Política de Devoluciones y Reembolsos",
  description:
    "Plazo de desistimiento de 14 días, procedimientos de devolución, reembolso y condiciones de compra de Espanapoint.",
  alternates: { canonical: "/politica-de-devoluciones" },
};

export default function PoliticaDevoluciones() {
  return (
    <div className="legal-page-container" style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Política de Devoluciones y Reembolsos</h1>
      <p><em>Última actualización: octubre de 2026</em></p>

      <h2>1. Derecho de desistimiento</h2>
      <p>
        El cliente puede ejercer el derecho de desistimiento en un plazo de <strong>{RETURN_DAYS} días naturales</strong> desde la recepción del producto, sin necesidad de justificarlo, salvo las excepciones legales previstas en la normativa vigente.
      </p>

      <h2>2. Cómo ejercer el derecho</h2>
      <p>
        Para iniciar la devolución, el cliente debe contactar con nuestro servicio de atención al cliente en <a href={`mailto:${STORE.email}`}>{STORE.email}</a> o mediante teléfono <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a>. Debe indicar el número de pedido y el motivo de la devolución.
      </p>
      <ul>
        <li>El producto debe devolverse en condiciones razonables y con el embalaje y accesorios originales, si existen.</li>
        <li>Si el producto ya ha sido usado más allá de lo necesario para comprobar su naturaleza, características y funcionamiento, el cliente puede responder de la disminución de valor del bien.</li>
        <li>Si es un dispositivo electrónico, se recomienda borrar datos personales y desvincular cuentas antes de devolverlo.</li>
      </ul>

      <h2>3. Gastos de devolución</h2>
      <p>
        En el caso de desistimiento, los gastos directos de devolución corren a cargo del consumidor, salvo que el producto esté defectuoso o haya sido enviado incorrectamente por el vendedor. Si existe un defecto o un error del vendedor, los gastos de devolución los asumimos nosotros.
      </p>

      <h2>4. Reembolso</h2>
      <p>
        El reembolso se realizará mediante el mismo medio de pago que se utilizó para la compra, en un plazo máximo de <strong>{REFUND_DAYS} días</strong> desde la recepción del bien o la confirmación de la devolución, siempre que se cumplan las condiciones legales y la información pactada en esta política.
      </p>

      <h2>5. Productos defectuosos y garantía legal</h2>
      <p>
        Si el artículo presenta un defecto, error de entrega o falta de conformidad, el cliente puede reclamar la reparación, sustitución o devolución conforme a la normativa vigente. La garantía legal se aplica con independencia del derecho de desistimiento.
      </p>

      <h2>6. Dirección de devolución</h2>
      <p>
        <strong>{STORE.name} – Devoluciones</strong><br />
        {STORE.address.street}<br />
        {STORE.address.postalCode} {STORE.address.locality}, {STORE.address.country}
        <br />
        CIF/NIF: {STORE.cif}
      </p>
    </div>
  );
}