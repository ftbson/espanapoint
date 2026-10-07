import React from 'react';
import { STORE } from "@/lib/store";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Información sobre el tratamiento de datos personales y los derechos de los usuarios de Espanapoint.",
  alternates: { canonical: "/politica-de-privacidad" },
};

export default function PoliticaPrivacidad() {
  return (
    <div className="cgv-container">
      <header className="cgv-header">
        <h1 className="cgv-title">Política de Privacidad</h1>
        <p className="cgv-subtitle">
          Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
        </p>
      </header>

      <div className="cgv-content">
        <section className="cgv-section">
          <h2>1. Responsable del Tratamiento de Datos</h2>
          <p>
            En <strong>ESPANAPOINT</strong> nos tomamos muy en serio la protección de sus datos personales. De conformidad con el Reglamento General de Protección de Datos (RGPD) y las leyes locales aplicables, le informamos que sus datos serán tratados de forma transparente, confidencial y segura.
          </p>
          <p>
            Nombre comercial: <strong>{STORE.name}</strong>. CIF: <strong>{STORE.cif}</strong>.
            Dirección: {STORE.address.street}, {STORE.address.postalCode} {STORE.address.locality}, {STORE.address.country}.
            Contacto: <a href={`mailto:${STORE.email}`}>{STORE.email}</a>.
          </p>
        </section>

        <section className="cgv-section">
          <h2>2. Información que Recopilamos</h2>
          <p>
            Recopilamos la información personal imprescindible para prestarle nuestros servicios. Esto incluye:
          </p>
          <ul>
            <li><strong>Datos de contacto e identificación:</strong> nombre, apellidos, dirección de correo electrónico, teléfono y dirección de envío/facturación.</li>
            <li><strong>Información de pago:</strong> los pagos con tarjeta se procesan mediante Stripe; esta tienda no guarda los datos completos de la tarjeta.</li>
            <li><strong>Datos de navegación:</strong> si acepta las funciones opcionales, el sitio registra una visita y el código de país proporcionado por la plataforma de alojamiento, cuando está disponible.</li>
          </ul>
        </section>

        <section className="cgv-section">
          <h2>3. Finalidad del Tratamiento</h2>
          <p>Utilizamos sus datos personales con los siguientes fines:</p>
          <ul>
            <li>Procesar, enviar y hacer el seguimiento de sus pedidos.</li>
            <li>Gestionar las devoluciones, garantías y atención al cliente.</li>
            <li>Enviar comunicaciones operativas relacionadas con sus compras.</li>
            <li>Mejorar la experiencia de usuario y la seguridad de la plataforma.</li>
          </ul>
        </section>

        <section className="cgv-section">
          <h2>4. Legitimación para el Tratamiento</h2>
          <p>
            La base legal para el tratamiento de sus datos es la ejecución del contrato de compraventa al adquirir nuestros productos, así como el consentimiento explícito otorgado al utilizar nuestras herramientas y formularios.
          </p>
        </section>

        <section className="cgv-section">
          <h2>5. Conservación de los Datos</h2>
          <p>
            Los datos se conservarán durante el tiempo necesario para atender el pedido y cumplir las obligaciones legales aplicables. La duración concreta depende de cada obligación legal.
          </p>
        </section>

        <section className="cgv-section">
          <h2>6. Cesión de Datos a Terceros</h2>
          <p>
            No vendemos ni alquilamos sus datos personales a terceros. Sus datos únicamente se compartirán con proveedores de servicios esenciales para el funcionamiento de la tienda, tales como:
          </p>
          <ul>
            <li>Stripe para procesar los pagos con tarjeta.</li>
            <li>Turso para almacenar pedidos y datos asociados.</li>
            <li>Resend para recibir y enviar mensajes de contacto y avisos de pedidos, cuando el servicio esté configurado.</li>
            <li>Google, si acepta las etiquetas publicitarias opcionales.</li>
            <li>Proveedores de alojamiento y servicios tecnológicos necesarios para operar el sitio.</li>
          </ul>
        </section>

        <section className="cgv-section">
          <h2>7. Sus Derechos (ARCO / RGPD)</h2>
          <p>Tiene derecho a acceder, rectificar, suprimir y limitar el tratamiento de sus datos personales, así como a oponerse al tratamiento o solicitar la portabilidad de los mismos.</p>
          <p>
            Para ejercer cualquiera de estos derechos, escriba a <a href={`mailto:${STORE.email}`}>{STORE.email}</a>.
          </p>
        </section>

        <section className="cgv-section">
          <h2>8. Uso de Cookies</h2>
          <p>
            El carrito y la preferencia de cookies se guardan en el almacenamiento local del navegador. Las etiquetas publicitarias de Google y el registro estadístico de visitas solo se activan si acepta las cookies opcionales en el aviso de cookies. Consulte la <a href="/politica-de-cookies">Política de Cookies</a>.
          </p>
        </section>
      </div>
    </div>
  );
}