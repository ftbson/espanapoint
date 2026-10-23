import React from "react";
import { STORE } from "@/lib/store";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Condiciones Generales de Venta",
  description: `Condiciones de compra, ${siteConfig.shipping.label}, ${siteConfig.returns.label} y garantías de Espanapoint.`,
  alternates: { canonical: "/cgv" },
};

export default function CGV() {
  const { shipping, returns, warranty, paymentLabel, legal } = siteConfig;

  return (
    <div className="cgv-container">
      <header className="cgv-header">
        <h1 className="cgv-title">Condiciones Generales de Venta</h1>
        <p className="cgv-subtitle">
          Última actualización:{" "}
          {new Date().toLocaleDateString("es-ES", {
            month: "long",
            year: "numeric",
          })}
        </p>
      </header>

      <div className="cgv-content">
        <section className="cgv-section">
          <h2>1. Objeto y ámbito de aplicación</h2>
          <p>
            Las presentes Condiciones Generales de Venta (CGV) regulan la
            compraventa de productos a través de <strong>{STORE.name}</strong>.
            Al realizar un pedido, el cliente acepta estas condiciones y la
            información comercial visible en la tienda, incluida la política de
            envío y devoluciones.
          </p>
          <p>
            <strong>
              {legal.companyName || "Espana Point "}
            </strong>{" "}
            · CIF/NIF:{" "}
            <strong>{legal.taxId || "B73940157"}</strong> ·{" "}
            {STORE.address.street}, {STORE.address.postalCode}{" "}
            {STORE.address.locality}, {STORE.address.country}. · Contacto:{" "}
            <a href={`mailto:${legal.email}`}>{legal.email}</a> ·{" "}
            <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a>.
          </p>
        </section>

        <section className="cgv-section">
          <h2>2. Precios, IVA e información comercial</h2>
          <p>
            Los precios se muestran en euros y incluyen el IVA. El precio final
            de cada producto es el que aparece publicado en la ficha y en el
            carrito. {shipping.label} con coste{" "}
            <strong>
              {shipping.cost === 0 ? "0 €" : `${shipping.cost.toFixed(2)} €`}
            </strong>{" "}
            para entregas en{" "}
            {shipping.country === "ES" ? "España" : shipping.country}.
          </p>
          <p>
            La disponibilidad real del producto se comunica en la ficha y en el
            checkout. Si el stock no está disponible o queda agotado, el pedido
            no podrá tramitarse.
          </p>
        </section>

        <section className="cgv-section">
          <h2>3. Pedidos y confirmación</h2>
          <p>
            El pedido se realiza por medio del carrito de la web. Antes de
            confirmar la compra, el cliente debe aceptar expresamente las
            presentes CGV y la{" "}
            <a href="/politica-de-privacidad">Política de Privacidad</a>.
          </p>
          <p>
            Una vez confirmado el pedido, se genera la confirmación y se procede
            al pago. Los productos pendientes de confirmación por falta de stock
            no se pueden vender ni reservar sin validación previa.
          </p>
        </section>

        <section className="cgv-section">
          <h2>4. Pago</h2>
          <p>
            {paymentLabel}. En caso de transferencia, la compra se considera
            pendiente hasta que el ingreso sea verificado.
          </p>
        </section>

        <section className="cgv-section">
          <h2>5. Envío y entrega</h2>
          <p>
            {shipping.label}. La preparación se realiza en{" "}
            {shipping.handlingMinDays}–{shipping.handlingMaxDays} días y el
            tránsito estimado es de {shipping.transitMinDays}–
            {shipping.transitMaxDays} días. El transportista y el número de
            seguimiento se facilitarán por correo electrónico cuando el pedido
            se ponga en tránsito.
          </p>
          <p>
            Las entregas se realizan en la península y en las Islas Baleares
            salvo indicación expresa de la zona o de los términos de transporte
            aplicables; cualquier excepción se comunica antes de la confirmación
            del pedido. Consulte la{" "}
            <a href="/politica-de-envio">Política de Envío</a> para más
            detalles.
          </p>
        </section>

        <section className="cgv-section">
          <h2>6. Derecho de desistimiento y devoluciones</h2>
          <p>
            {returns.label} desde la recepción del producto, sin necesidad de
            justificarlo, de acuerdo con la normativa vigente.
          </p>
          <p>
            {returns.label}. El procedimiento para devolver un producto y la
            dirección de devolución se especifican en la{" "}
            <a href="/politica-de-devoluciones">Política de Devoluciones</a>.
            Los derechos legales por defecto o error del vendedor se mantienen.
          </p>
        </section>

        <section className="cgv-section">
          <h2>7. Garantía</h2>
          <p>
            La garantía indicada para cada producto es de {warranty.newMonths}{" "}
            meses para productos nuevos y {warranty.refurbishedMonths} meses
            para productos reacondicionados, sin perjuicio de los derechos
            legales aplicables.
          </p>
          <p>
            Para cualquier incidencia, el cliente puede contactarnos a través de{" "}
            <a href={`mailto:${STORE.email}`}>{STORE.email}</a> o por teléfono{" "}
            <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a>.
          </p>
        </section>

        <section className="cgv-section">
          <h2>8. Atención al cliente y servicio de reclamaciones</h2>
          <p>
            Cualquier duda, incidencia o consulta puede resolverse a través del
            formulario de contacto o por teléfono en el horario indicado. La
            dirección de contacto del vendedor y la información legal están
            disponibles en la web.
          </p>
          <p>
            Si el cliente desea presentar una reclamación fuera de la vía
            extrajudicial, puede hacerlo en la plataforma de resolución de
            conflictos de la Unión Europea:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .
          </p>
        </section>

        <section className="cgv-section">
          <h2>9. Ley aplicable</h2>
          <p>
            Las presentes condiciones se rigen por la legislación española y, en
            su caso, por el marco normativo aplicable a la venta online de
            bienes. Cualquier conflicto se resolverá conforme a la legislación
            vigente en España.
          </p>
        </section>
      </div>
    </div>
  );
}
