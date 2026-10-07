import { STORE } from "@/lib/store";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Devoluciones y Reembolsos",
  description:
    "Consulta cómo solicitar una devolución o reembolso en Espanapoint.",
  alternates: { canonical: "/politica-de-devoluciones" },
};

export default function PoliticaDevoluciones() {
  return (
    <div className="legal-page-container" style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Política de Devoluciones y Reembolsos</h1>
      <p><em>Última actualización: octubre de 2026</em></p>

      <h2>1. Derecho de Desistimiento (14 días)</h2>
      <p>
        De acuerdo con la legislación aplicable, dispone de un plazo de{" "}
        <strong>14 días naturales</strong> desde la recepción del producto para
        ejercer el derecho de desistimiento, salvo las excepciones legales.
      </p>

      <h2>2. Condiciones para efectuar una devolución</h2>
      <p>
        Para iniciar una devolución, contacte con nosotros y siga las
        instrucciones que se le faciliten. Los derechos legales no dependen de
        conservar el embalaje original.
      </p>
      <ul>
        <li>Incluya el producto y los accesorios recibidos, cuando corresponda.</li>
        <li>El cliente puede responder de la disminución de valor causada por una manipulación distinta a la necesaria para comprobar la naturaleza, características y funcionamiento del producto, conforme a la normativa aplicable.</li>
        <li>En dispositivos electrónicos, elimine sus datos personales y desvincule sus cuentas antes de devolverlos.</li>
      </ul>

      <h2>3. Procedimiento de Devolución</h2>
      <p>Para iniciar un proceso de devolución, siga estos pasos:</p>
      <ol>
        <li>Contacte con nuestro servicio de atención al cliente en <strong>{STORE.email}</strong> o llamando al <strong>{STORE.phone}</strong>.</li>
        <li>Indique su número de pedido y el motivo de la devolución.</li>
        <li>Nuestro equipo le facilitará las instrucciones detalladas y la etiqueta/dirección de envío para la devolución.</li>
      </ol>

      <h2>4. Gastos de Envío para Devoluciones</h2>
      <p>
        Si el producto es defectuoso o el pedido no coincide con lo contratado,
        contacte con nosotros para recibir instrucciones. En caso de
        desistimiento, los gastos directos de devolución corresponden al
        consumidor solo cuando así lo permita la normativa y se haya informado
        previamente de ello.
      </p>

      <h2>5. Reembolsos</h2>
      <p>
        El reembolso se realizará mediante el mismo medio de pago y dentro del
        plazo previsto por la normativa aplicable. La gestión se iniciará de
        acuerdo con las instrucciones comunicadas por atención al cliente.
      </p>

      <h2>6. Dirección de Devolución</h2>
      <p>
        <strong>{STORE.name} - Departamento de Devoluciones</strong><br />
        {STORE.address.street}<br />
        {STORE.address.postalCode} {STORE.address.locality}, {STORE.address.country}
        <br />
        CIF: {STORE.cif}
      </p>
    </div>
  );
}