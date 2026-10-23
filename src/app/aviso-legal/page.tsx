import type { Metadata } from "next";
import { STORE } from "@/lib/store";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Información legal y datos de contacto de Espanapoint.",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  const { companyName, taxId, email } = siteConfig.legal;

  return (
    <main
      className="legal-page-container"
      style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}
    >
      <h1>Aviso Legal</h1>
      <h2>Datos del titular</h2>
      <p>
        Razón social: {companyName || "Espana Point"}
        <br />
        NIF/CIF: {taxId || "B73940157"}
        <br />
        Domicilio: {STORE.address.street}, {STORE.address.postalCode}{" "}
        {STORE.address.locality}, {STORE.address.country}
        <br />
        Correo electrónico: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <h2>Contacto</h2>
      <p>
        Para consultas sobre el sitio o sus productos, escriba a{" "}
        <a href={`mailto:${email}`}>{email}</a> o llame al{" "}
        <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a>.
      </p>
    </main>
  );
}
