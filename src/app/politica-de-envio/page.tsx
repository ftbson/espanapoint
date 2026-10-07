import { STORE } from "@/lib/store";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Envío",
  description:
    "Consulta la información disponible sobre costes, cobertura y plazos de envío de Espanapoint.",
  alternates: { canonical: "/politica-de-envio" },
};

export default function PoliticaEnvio() {
  return (
    <div
      className="legal-page-container"
      style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}
    >
      <h1>Política de Envío</h1>
      <p>Última actualización: octubre de 2026</p>

      <h2>Ámbito y cobertura</h2>
      <p>
        La tienda no valida actualmente las zonas de entrega en el formulario
        de compra. Confirme con atención al cliente que podemos entregar en su
        dirección antes de realizar el pedido.
      </p>

      <h2>Coste de envío</h2>
      <p>
        El carrito muestra actualmente el envío como gratuito y no calcula
        tarifas diferentes por zona o modalidad. No se aplicarán tarifas
        distintas a las mostradas durante el checkout. Si el resumen del pedido
        no coincide, no confirme la compra y contacte con nosotros.
      </p>

      <h2>Plazo y seguimiento</h2>
      <p>
        La web no publica un plazo de preparación o entrega confirmado ni
        confirma el envío automático de un número de seguimiento. Solicite esta
        información antes de comprar o contacte con nosotros para consultar un
        pedido.
      </p>

      <h2>Incidencias</h2>
      <p>
        Si recibe un paquete dañado o tiene una incidencia de entrega, contacte
        con <a href={`mailto:${STORE.email}`}>{STORE.email}</a> o llame al{" "}
        <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a>.
      </p>

      <h2>Contacto del vendedor</h2>
      <p>
        {STORE.name} · CIF: {STORE.cif}
        <br />
        {STORE.address.street}
        <br />
        {STORE.address.postalCode} {STORE.address.locality},{" "}
        {STORE.address.country}
        <br />
        <a href={`mailto:${STORE.email}`}>{STORE.email}</a>
      </p>
    </div>
  );
}
