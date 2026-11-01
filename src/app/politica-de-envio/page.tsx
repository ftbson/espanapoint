import Link from "next/link";
import type { Metadata } from "next";
import { STORE } from "@/lib/store";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: { absolute: "Política de Envío | Espanapoint" },
  description: `${siteConfig.shipping.label}. Coste: ${Number(
    siteConfig.shipping.cost
  ).toFixed(2)} €. Entregas en península y Baleares.`,
  alternates: { canonical: "/politica-de-envio" },
  openGraph: {
    title: "Política de Envío | Espanapoint",
    description: `${siteConfig.shipping.label}. Entregas en península y Baleares.`,
    url: "/politica-de-envio",
    siteName: "Espanapoint",
    locale: "es_ES",
    type: "website",
    images: ["/img/log.png"],
  },
};

export default function PoliticaEnvio() {
  const { shipping, legal } = siteConfig;
  const cost = Number(shipping.cost);

  return (
    <main
      className="legal-page-container"
      style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}
    >
      <h1>Política de Envío</h1>
      <p>
        <em>Última actualización: octubre de 2026</em>
      </p>

      <h2>1. Ámbito y cobertura</h2>
      <p>
        Los pedidos se envían desde España a clientes ubicados en territorio
        español. La cobertura incluye la península y las Islas Baleares.
        Actualmente no realizamos envíos a Canarias, Ceuta ni Melilla.
      </p>

      <h2>2. Coste de envío</h2>
      <p>
        El coste del envío es{" "}
        <strong>
          {cost === 0 ? "0 € (envío gratuito)" : `${cost.toFixed(2)} €`}
        </strong>{" "}
        para entregas en{" "}
        {shipping.country === "ES"
          ? "España peninsular y Baleares"
          : shipping.country}
        . No se aplicarán gastos adicionales salvo que se indique expresamente
        en el pedido.
      </p>

      <h2>3. Plazo de entrega</h2>
      <p>
        {shipping.label}. La preparación estimada es de{" "}
        <strong>
          {shipping.handlingMinDays}–{shipping.handlingMaxDays} días
        </strong>{" "}
        y el tránsito de{" "}
        <strong>
          {shipping.transitMinDays}–{shipping.transitMaxDays} días
        </strong>
        .
      </p>
      <p>
        Los productos voluminosos o pesados (por ejemplo, bicicletas, muebles,
        televisores o grandes electrodomésticos) pueden requerir un plazo
        adicional y una entrega concertada con el transportista. Te
        informaremos de cualquier variación del plazo antes de la confirmación
        del pedido.
      </p>
      <p>
        El transportista y la referencia de seguimiento se envían por correo
        electrónico cuando el pedido sale de nuestro almacén. Si se produce una
        incidencia, contacta con{" "}
        <a href={`mailto:${legal.email}`}>{legal.email}</a> o por teléfono al{" "}
        <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a>.
      </p>

      <h2>4. Recepción e incidencias</h2>
      <p>
        Te recomendamos comprobar el estado del paquete en el momento de la
        entrega y, si presenta daños evidentes, indicarlo al transportista.
      </p>
      <p>
        Si el paquete llega dañado, incompleto o con retraso relevante, debes
        comunicarnos la incidencia con la mayor brevedad posible y facilitar el
        número de pedido y la evidencia disponible (por ejemplo, fotografías).
        Revisaremos la entrega con el transportista y procederemos según la
        normativa aplicable. Consulta también nuestra{" "}
        <Link href="/politica-de-devoluciones">
          Política de Devoluciones y Reembolsos
        </Link>
        .
      </p>

      <h2>5. Datos del vendedor</h2>
      <p>
        {legal.companyName} · CIF/NIF: {legal.taxId}
        <br />
        {STORE.address.street}
        <br />
        {STORE.address.postalCode} {STORE.address.locality},{" "}
        {STORE.address.country}
        <br />
        <a href={`mailto:${legal.email}`}>{legal.email}</a>
        <br />
        <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a>
      </p>
    </main>
  );
}