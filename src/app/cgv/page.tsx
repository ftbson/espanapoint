import Link from "next/link";
import type { Metadata } from "next";
import { STORE } from "@/lib/store";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Condiciones Generales de Venta | Espanapoint",
  description: `Condiciones de compra, ${siteConfig.shipping.label}, devolución en 14 días naturales y garantía legal de Espanapoint.`,
  alternates: { canonical: "/cgv" },
  openGraph: {
    title: "Condiciones Generales de Venta | Espanapoint",
    description:
      "Condiciones de compra, envío, devoluciones y garantías de Espanapoint.",
    url: "/cgv",
    siteName: "Espanapoint",
    locale: "es_ES",
    type: "website",
  },
};

export default function CGV() {
  const { shipping, warranty, paymentLabel, legal } = siteConfig;
  const cost = Number(shipping.cost);

  return (
    <main className="cgv-container">
      <header className="cgv-header">
        <h1 className="cgv-title">Condiciones Generales de Venta</h1>
        <p className="cgv-subtitle">Última actualización: octubre de 2026</p>
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
            <strong>{legal.companyName}</strong> · CIF/NIF:{" "}
            <strong>{legal.taxId}</strong> · {STORE.address.street},{" "}
            {STORE.address.postalCode} {STORE.address.locality},{" "}
            {STORE.address.country}. · Contacto:{" "}
            <a href={`mailto:${legal.email}`}>{legal.email}</a> ·{" "}
            <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a>.
          </p>
        </section>

        <section className="cgv-section">
          <h2>2. Precios, IVA e información comercial</h2>
          <p>
            Los precios se muestran en euros y incluyen el IVA. El precio final
            de cada producto es el que aparece publicado en la ficha y en el
            carrito. {shipping.label}, con coste de{" "}
            <strong>{cost === 0 ? "0 €" : `${cost.toFixed(2)} €`}</strong> para
            entregas en España peninsular y Baleares.
          </p>
          <p>
            La disponibilidad real del producto se comunica en la ficha y en el
            checkout. Si el stock no está disponible o queda agotado, el pedido
            no podrá tramitarse y se reembolsará cualquier importe abonado.
          </p>
        </section>

        <section className="cgv-section">
          <h2>3. Pedidos y confirmación</h2>
          <p>
            El pedido se realiza por medio del carrito de la web. Antes de
            confirmar la compra, el cliente debe aceptar expresamente las
            presentes CGV y la{" "}
            <Link href="/politica-de-privacidad">Política de Privacidad</Link>.
          </p>
          <p>
            Una vez confirmado el pedido, se envía la confirmación por correo
            electrónico y se procede al pago.
          </p>
        </section>

        <section className="cgv-section">
          <h2>4. Pago</h2>
          <p>
            {paymentLabel}. En caso de transferencia bancaria, el pedido se
            considera pendiente hasta que el ingreso sea verificado.
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
            Las entregas se realizan en la península y en las Islas Baleares.
            No realizamos envíos a Canarias, Ceuta ni Melilla. Consulta la{" "}
            <Link href="/politica-de-envio">Política de Envío</Link> para más
            detalles.
          </p>
        </section>

        <section className="cgv-section">
          <h2>6. Derecho de desistimiento y devoluciones</h2>
          <p>
            El cliente dispone de <strong>14 días naturales</strong> desde la
            recepción del producto para desistir de la compra, sin necesidad de
            justificación, de acuerdo con la normativa vigente. Los gastos
            directos de devolución corren a cargo del cliente, y no se aplica
            ningún otro cargo ni gasto de gestión. El reembolso será íntegro.
          </p>
          <p>
            El procedimiento y la dirección de devolución se especifican en la{" "}
            <Link href="/politica-de-devoluciones">
              Política de Devoluciones
            </Link>
            . Los derechos legales por producto defectuoso o error del vendedor
            se mantienen.
          </p>
          <p>
            <strong>Modelo de formulario de desistimiento</strong> (rellenar y
            enviar solo si desea desistir del contrato):
          </p>
          <ul>
            <li>A la atención de: {legal.companyName}, {STORE.address.street}, {STORE.address.postalCode} {STORE.address.locality}, {legal.email}</li>
            <li>Por la presente le comunico que desisto de mi contrato de venta del siguiente bien: ____________</li>
            <li>Pedido el / recibido el: ____________</li>
            <li>Nombre del consumidor: ____________</li>
            <li>Domicilio del consumidor: ____________</li>
            <li>Fecha y firma (solo si se presenta en papel): ____________</li>
          </ul>
        </section>

        <section className="cgv-section">
          <h2>7. Garantía</h2>
          <p>
            Los productos nuevos cuentan con la garantía legal de{" "}
            {warranty.newMonths} meses, y los productos reacondicionados con{" "}
            {warranty.refurbishedMonths} meses, sin perjuicio de los derechos
            legales aplicables al consumidor.
          </p>
          <p>
            Para cualquier incidencia, el cliente puede contactarnos a través de{" "}
            <a href={`mailto:${legal.email}`}>{legal.email}</a> o por teléfono
            al <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a>.
          </p>
        </section>

        <section className="cgv-section">
          <h2>8. Atención al cliente y reclamaciones</h2>
          <p>
            Cualquier duda, incidencia o reclamación puede dirigirse a{" "}
            <a href={`mailto:${legal.email}`}>{legal.email}</a>, por teléfono
            al <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a> o mediante
            el <Link href="/contact">formulario de contacto</Link>, en el
            horario indicado en la web. Nos comprometemos a responder en el
            menor plazo posible.
          </p>
          <p>
            El consumidor también puede acudir a los organismos de consumo de
            su Comunidad Autónoma o a los servicios de resolución alternativa
            de litigios disponibles.
          </p>
        </section>

        <section className="cgv-section">
          <h2>9. Ley aplicable</h2>
          <p>
            Las presentes condiciones se rigen por la legislación española. Si
            el cliente es consumidor, serán competentes los tribunales de su
            domicilio, conforme a la normativa de protección de consumidores.
          </p>
        </section>
      </div>
    </main>
  );
}