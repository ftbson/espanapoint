import type { Metadata } from "next";
import { STORE } from "@/lib/store";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Aviso Legal | Espanapoint",
  description:
    "Información legal, datos del titular y condiciones de uso del sitio web de Espanapoint.",
  alternates: { canonical: "/aviso-legal" },
  openGraph: {
    title: "Aviso Legal | Espanapoint",
    description: "Información legal y datos de contacto de Espanapoint.",
    url: "/aviso-legal",
    siteName: "Espanapoint",
    locale: "es_ES",
    type: "website",
  },
};

export default function AvisoLegalPage() {
  const { companyName, taxId, email } = siteConfig.legal;
  const registroMercantil = (
    siteConfig.legal as { registroMercantil?: string }
  ).registroMercantil;

  return (
    <main
      className="legal-page-container"
      style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}
    >
      <h1>Aviso Legal</h1>

      <h2>1. Datos del titular</h2>
      <p>
        En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSI-CE), se informa de los
        siguientes datos:
      </p>
      <p>
        Razón social: {companyName}
        <br />
        NIF/CIF: {taxId}
        <br />
        Domicilio: {STORE.address.street}, {STORE.address.postalCode}{" "}
        {STORE.address.locality}, {STORE.address.country}
        <br />
        Teléfono: <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a>
        <br />
        Correo electrónico: <a href={`mailto:${email}`}>{email}</a>
        {registroMercantil && (
          <>
            <br />
            Datos registrales: {registroMercantil}
          </>
        )}
      </p>

      <h2>2. Objeto y condiciones de uso</h2>
      <p>
        Este sitio web tiene por objeto la venta online de productos. El acceso
        y uso del sitio implica la aceptación de este Aviso Legal. El usuario
        se compromete a hacer un uso lícito del sitio y a no realizar
        actividades que puedan dañar su funcionamiento.
      </p>

      <h2>3. Propiedad intelectual</h2>
      <p>
        Los contenidos del sitio (textos, imágenes, logotipos, diseño) son
        titularidad de {companyName} o de sus legítimos propietarios, y no
        pueden reproducirse sin autorización. Las marcas de terceros mostradas
        pertenecen a sus respectivos titulares.
      </p>

      <h2>4. Responsabilidad</h2>
      <p>
        {companyName} procura que la información del sitio sea exacta y esté
        actualizada, pero no garantiza la ausencia de errores y se reserva el
        derecho de modificar los contenidos sin previo aviso. No se hace
        responsable del contenido de sitios web de terceros enlazados.
      </p>

      <h2>5. Legislación aplicable</h2>
      <p>
        Este Aviso Legal se rige por la legislación española. Para cualquier
        controversia con consumidores serán competentes los tribunales de su
        domicilio.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Para consultas sobre el sitio o sus productos, escriba a{" "}
        <a href={`mailto:${email}`}>{email}</a> o llame al{" "}
        <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a>.
      </p>
    </main>
  );
}