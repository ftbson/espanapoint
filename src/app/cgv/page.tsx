import React from 'react';
import { STORE } from "@/lib/store";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Condiciones Generales de Venta",
  description:
    "Consulta las condiciones de compra, pago, envío, devoluciones y garantías de Espanapoint.",
  alternates: { canonical: "/cgv" },
};

export default function CGV() {
  return (
    <div className="cgv-container">
      <header className="cgv-header">
        <h1 className="cgv-title">Condiciones Generales de Venta</h1>
        <p className="cgv-subtitle">
          Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
        </p>
      </header>

      <div className="cgv-content">
        <section className="cgv-section">
          <h2>1. Objeto y Ámbito de Aplicación</h2>
          <p>
            Las presentes Condiciones Generales de Venta (en adelante, &quot;CGV&quot;) regulan la compraventa de productos a través de <strong>Espanapoint</strong>. Al realizar un pedido en nuestra plataforma, el usuario acepta los términos aquí expuestos.
          </p>
          <p>
            Nombre comercial: <strong>{STORE.name}</strong>. CIF: <strong>{STORE.cif}</strong>.
            Dirección: {STORE.address.street}, {STORE.address.postalCode} {STORE.address.locality}, {STORE.address.country}.
            Contacto: <a href={`mailto:${STORE.email}`}>{STORE.email}</a> · {STORE.phone}.
          </p>
        </section>

        <section className="cgv-section">
          <h2>2. Productos y Precios</h2>
          <p>
            Todos los productos mostrados en la tienda <strong>Espanapoint</strong> están sujetos a disponibilidad. Nos reservamos el derecho de modificar la oferta de productos y los precios en cualquier momento sin previo aviso.
          </p>
          <p>
            Los precios se muestran en euros. La inclusión de impuestos no se especifica actualmente en las fichas. El carrito muestra el envío como gratuito y no calcula tarifas por zona o modalidad. Consulte la <a href="/politica-de-envio">Política de Envío</a> y confirme cualquier duda antes de comprar.
          </p>
        </section>

        <section className="cgv-section">
          <h2>3. Pedidos y Confirmación</h2>
          <p>
            Para realizar un pedido, el cliente debe seleccionar los productos deseados, proporcionar los datos solicitados y elegir un método de pago. El pedido se registra antes de completarse el pago; los pedidos por transferencia quedan pendientes hasta su verificación.
          </p>
        </section>

        <section className="cgv-section">
          <h2>4. Métodos de Pago</h2>
          <p>
            El checkout ofrece pago con tarjeta mediante Stripe o transferencia bancaria cuando los datos bancarios están configurados. La transferencia queda pendiente de verificación.
          </p>
        </section>

        <section className="cgv-section">
          <h2>5. Envíos y Entregas</h2>
          <p>
            El sitio no publica actualmente un plazo de entrega confirmado. Consulte la <a href="/politica-de-envio">Política de Envío</a> y confirme cobertura y plazo antes de realizar el pedido.
          </p>
        </section>

        <section className="cgv-section">
          <h2>6. Derecho de Desistimiento y Devoluciones</h2>
          <p>
            El cliente dispone de un plazo legal de <strong>14 días naturales</strong> desde la recepción del producto para ejercer el derecho de desistimiento, sujeto a las excepciones y condiciones previstas por la legislación aplicable. Consulte la <a href="/politica-de-devoluciones">Política de Devoluciones</a>.
          </p>
          <p>
            Para gestionar una devolución, el usuario deberá ponerse en contacto con el equipo de soporte de <strong>Espanapoint</strong> a través de los canales oficiales habilitados en la web.
          </p>
        </section>

        <section className="cgv-section">
          <h2>7. Garantía y Atención al Cliente</h2>
          <p>
            Los derechos de garantía aplicables dependen del producto y de la normativa vigente. Confirme las condiciones específicas del artículo antes de realizar el pedido. Para cualquier consulta, contacte con <strong>{STORE.name}</strong>.
          </p>
        </section>

        <section className="cgv-section">
          <h2>8. Ley Aplicable y Jurisdicción</h2>
          <p>
            Las presentes condiciones se rigen por la legislación vigente en España. En caso de controversia o disputa, las partes se someterán a los juzgados y tribunales competentes establecidos por la normativa aplicable.
          </p>
        </section>
      </div>
    </div>
  );
}