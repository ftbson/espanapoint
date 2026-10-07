// src/components/Footer.tsx
import Link from "next/link";
import { STORE } from "@/lib/store";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Colonne 1 : Entreprise et adresse complète */}
        <div className="footer-col">
          <h3>{STORE.name}</h3>
          <p className="footer-company-info">
            {STORE.address.street}<br />
            {STORE.address.postalCode} {STORE.address.locality}, {STORE.address.country}
          </p>
          <p className="footer-contact-info">
            <strong>Teléfono:</strong> <a href={`tel:${STORE.phoneLink}`}>{STORE.phone}</a><br />
            <strong>Email:</strong> <a href={`mailto:${STORE.email}`}>{STORE.email}</a><br />
            <strong>CIF:</strong> {STORE.cif}
          </p>
        </div>

        {/* Colonne 2 : Politiques légales */}
        <div className="footer-col">
          <h4>Políticas Legales</h4>
          <ul className="footer-links-list">
            <li>
              <Link href="/politica-de-devoluciones">
                Política de Devoluciones y Reembolso
              </Link>
            </li>
            <li>
              <Link href="/politica-de-envio">
                Política de Envío
              </Link>
            </li>
            <li>
              <Link href="/cgv">
                Términos y Condiciones (CGV)
              </Link>
            </li>
            <li>
              <Link href="/politica-de-privacidad">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/politica-de-cookies">
                Política de Cookies
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Support & Contact */}
        <div className="footer-col">
          <h4>Atención al Cliente</h4>
          <ul className="footer-links-list">
            <li>
              <Link href="/contact">
                Contáctenos
              </Link>
            </li>
            <li>
              <span>Horario: Lun–Vie 8:00–19:00; sábado 9:00–17:00</span>
            </li>
            <li>
              <Link href="/politica-de-envio">Información de envío</Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>Copyright {currentYear} — <strong>{STORE.name}</strong>. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}