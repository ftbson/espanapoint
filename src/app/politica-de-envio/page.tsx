import { STORE } from "@/lib/store";
import type { Metadata } from "next";
import {
  DELIVERY_DAYS,
  DELIVERY_TEXT,
  SHIPPING_COST,
  SHIPPING_COUNTRY,
  SHIPPING_TEXT,
} from "@/lib/store-config";

export const metadata: Metadata = {
  title: "Política de Envío",
  description:
    "Envío gratuito a España, entrega en máximo 3 días desde la confirmación del pedido y información legal de Espanapoint.",
  alternates: { canonical: "/politica-de-envio" },
};

export default function PoliticaEnvio() {
  const shippingCost: number = SHIPPING_COST;

  return (
    <div
      className="legal-page-container"
      style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}
    >
      <h1>Política de Envío</h1>
      <p>Última actualización: octubre de 2026</p>

      <h2>1. Ámbito y cobertura</h2>
      <p>
        Los pedidos se envían desde España a clientes ubicados en territorio español. En este momento, la cobertura principal es la península y las Islas Baleares; Canarias, Ceuta y Melilla se gestionan según disponibilidad y condiciones específicas del transporte y se informarán antes de la confirmación del pedido. TODO: confirmar cobertura exacta en los destinos no asumidos por la política general.
      </p>

      <h2>2. Coste de envío</h2>
      <p>
        {SHIPPING_TEXT} El coste del envío en la web es <strong>{shippingCost === 0 ? "0 €" : `${shippingCost.toFixed(2)} €`}</strong> para entregas en {SHIPPING_COUNTRY === "ES" ? "España" : SHIPPING_COUNTRY}. No se aplicarán gastos adicionales salvo que se indique expresamente en el pedido.
      </p>

      <h2>3. Plazo de entrega</h2>
      <p>
        {DELIVERY_TEXT} La preparación del pedido se realiza en el plazo habitual de atención comercial y, una vez confirmada la compra, la entrega se estima en un máximo de <strong>{DELIVERY_DAYS} días laborables</strong>.
      </p>
      <p>
        El transportista y la referencia de seguimiento se envían por correo electrónico cuando el pedido sale de nuestro almacén. Si se produce una incidencia, contacta con <a href={`mailto:${STORE.email}`}>{STORE.email}</a> o por teléfono <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a>.
      </p>

      <h2>4. Incidencias y reclamaciones</h2>
      <p>
        Si el paquete llega dañado, incompleto o con retraso relevante, el cliente debe comunicarnos la incidencia con la mayor brevedad posible y facilitar los datos del pedido y la evidencia disponible. En estos casos, revisaremos la entrega con el transportista y procederemos según la normativa aplicable.
      </p>

      <h2>5. Datos del vendedor</h2>
      <p>
        {STORE.name} · CIF/NIF: {STORE.cif}
        <br />
        {STORE.address.street}
        <br />
        {STORE.address.postalCode} {STORE.address.locality}, {STORE.address.country}
        <br />
        <a href={`mailto:${STORE.email}`}>{STORE.email}</a>
        <br />
        <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a>
      </p>
    </div>
  );
}
