import type { Metadata } from "next";
import { STORE } from "@/lib/store";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Información sobre el almacenamiento local y las etiquetas opcionales utilizadas en Espanapoint.",
  alternates: { canonical: "/politica-de-cookies" },
};

export default function PoliticaDeCookies() {
  return (
    <main className="legal-page-container" style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Política de Cookies</h1>
      <p>Última actualización: octubre de 2026</p>

      <h2>Almacenamiento necesario para la tienda</h2>
      <p>
        El carrito se guarda en el almacenamiento local del navegador para
        conservar los artículos entre páginas. La elección sobre cookies
        opcionales también se guarda allí. Estos datos no son cookies HTTP.
      </p>

      <h2>Funciones opcionales</h2>
      <p>
        Si acepta las funciones opcionales, el sitio carga la etiqueta de
        Google Ads (AW-17389379161) y registra una estadística de visita con el
        país informado por la plataforma de alojamiento, cuando está
        disponible. Si las rechaza, no se activan esas funciones. La etiqueta
        puede implicar el uso de tecnologías de Google; consulte la
        información de privacidad de Google para conocer sus tratamientos y
        plazos.
      </p>

      <h2>Cómo cambiar su elección</h2>
      <p>
        Puede borrar el almacenamiento local desde la configuración del
        navegador. La elección volverá a solicitarse en una visita posterior.
      </p>

      <h2>Responsable y contacto</h2>
      <p>
        {STORE.name} · CIF: {STORE.cif}
        <br />
        {STORE.address.street}, {STORE.address.postalCode}{" "}
        {STORE.address.locality}, {STORE.address.country}
        <br />
        <a href={`mailto:${STORE.email}`}>{STORE.email}</a>
      </p>
    </main>
  );
}
