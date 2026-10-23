import { STORE } from "@/lib/store";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Política de Devoluciones y Reembolsos | Espanapoint",
  description:
    "Dispones de 14 días naturales para devolver tu pedido sin justificación. Consulta cómo solicitar tu devolución y reembolso en Espanapoint.",
  alternates: { canonical: "/politica-de-devoluciones" },
  openGraph: {
    title: "Política de Devoluciones y Reembolsos | Espanapoint",
    description:
      "Devolución en 14 días naturales. Reembolso íntegro del precio pagado.",
    url: "/politica-de-devoluciones",
    siteName: "Espanapoint",
    locale: "es_ES",
    type: "website",
  },
};

export default function PoliticaDevoluciones() {
  const { legal } = siteConfig;

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
        Tienes derecho a desistir de tu compra en un plazo de{" "}
        <strong>14 días naturales</strong> desde la recepción del producto, sin
        necesidad de justificación, salvo las excepciones legales previstas en
        la normativa vigente (por ejemplo, productos precintados que no sean
        aptos para su devolución por razones de higiene o protección de la
        salud y que hayan sido desprecintados tras la entrega).
      </p>

      <h2>2. Cómo ejercer el derecho</h2>
      <p>
        Para iniciar la devolución, comunica tu decisión de desistir mediante
        un correo a <a href={`mailto:${STORE.email}`}>{STORE.email}</a> o por
        teléfono al <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a>,
        indicando tu número de pedido. Después deberás devolver el producto en
        un plazo máximo de 14 días naturales desde esa comunicación.
      </p>
      <ul>
        <li>
          El producto debe devolverse con el embalaje y los accesorios
          originales, si existen.
        </li>
        <li>
          Si el producto ha sido manipulado más allá de lo necesario para
          comprobar su naturaleza, características y funcionamiento, podrás
          responder de la disminución de valor del bien.
        </li>
        <li>
          En dispositivos electrónicos, te recomendamos borrar tus datos
          personales y desvincular tus cuentas antes de devolverlos.
        </li>
      </ul>

      <h2>3. Gastos de devolución</h2>
      <p>
        Los gastos directos de devolución del producto corren a cargo del
        cliente. En productos voluminosos (por ejemplo, bicicletas), te
        informaremos del coste estimado de la devolución antes de que la
        solicites. No aplicamos ningún otro cargo ni gasto de gestión. Si el
        producto es defectuoso, no conforme o hubo un error por nuestra parte,
        los gastos de devolución serán siempre a nuestro cargo.
      </p>

      <h2>4. Reembolso</h2>
      <p>
        Reembolsaremos el <strong>importe íntegro</strong> pagado, incluidos
        los gastos de envío estándar iniciales, mediante el mismo medio de pago
        utilizado en la compra, en un plazo máximo de{" "}
        <strong>14 días naturales</strong> desde que tengamos constancia de tu
        decisión de desistir. Podremos retener el reembolso hasta recibir el
        producto o hasta que acredites haberlo enviado, lo que ocurra primero.
      </p>

      <h2>5. Productos defectuosos y garantía legal</h2>
      <p>
        Si el artículo presenta un defecto o falta de conformidad, puedes
        reclamar su reparación, sustitución, rebaja del precio o resolución del
        contrato conforme a la normativa vigente. La garantía legal de 3 años
        para productos nuevos se aplica con independencia del derecho de
        desistimiento.
      </p>

      <h2>6. Dirección de devolución</h2>
      <p>
        <strong>{STORE.name} – Devoluciones</strong>
        <br />
        {STORE.address.street}
        <br />
        {STORE.address.postalCode} {STORE.address.locality},{" "}
        {STORE.address.country}
        {legal.taxId && (
          <>
            <br />
            CIF/NIF: {legal.taxId}
          </>
        )}
      </p>
    </div>
  );
}