"use client";

import Link from "next/link";
import Script from "next/script";
import { useState, useSyncExternalStore } from "react";

const CONSENT_KEY = "espanapoint_cookie_consent";
type ConsentState = "accepted" | "rejected" | "unset" | "loading";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function CookieConsent() {
  const [showSettings, setShowSettings] = useState(false);
  const consent = useSyncExternalStore(
    (listener) => {
      window.addEventListener("espanapoint-cookie-consent", listener);
      window.addEventListener("storage", listener);
      return () => {
        window.removeEventListener("espanapoint-cookie-consent", listener);
        window.removeEventListener("storage", listener);
      };
    },
    (): ConsentState => {
      const saved = localStorage.getItem(CONSENT_KEY);
      return saved === "accepted" || saved === "rejected" ? saved : "unset";
    },
    (): ConsentState => "loading"
  );

  const chooseConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem(CONSENT_KEY, choice);
    window.gtag?.("consent", "update", {
      ad_storage: choice === "accepted" ? "granted" : "denied",
      ad_user_data: choice === "accepted" ? "granted" : "denied",
      ad_personalization: choice === "accepted" ? "granted" : "denied",
      analytics_storage: choice === "accepted" ? "granted" : "denied",
    });
    window.dispatchEvent(new Event("espanapoint-cookie-consent"));
    setShowSettings(false);
  };

  return (
    <>
      {(consent === "accepted" || consent === "rejected") && (
        <button
          type="button"
          onClick={() => setShowSettings(true)}
          style={{
            position: "fixed",
            zIndex: 1099,
            right: "16px",
            bottom: "16px",
            padding: "10px 16px",
            backgroundColor: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#333";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#111";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Cookies
        </button>
      )}

      {(consent === "unset" || showSettings) && (
        <aside
          role="dialog"
          aria-label="Preferencias de cookies"
          style={{
            position: "fixed",
            zIndex: 1100,
            inset: "auto 16px 16px",
            maxWidth: "760px",
            margin: "0 auto",
            padding: "20px",
            borderRadius: "12px",
            background: "#fff",
            boxShadow: "0 6px 20px rgba(0,0,0,.18)",
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1.5,
          }}
        >
          <p style={{ marginBottom: "16px", color: "#333", fontSize: "0.95rem" }}>
            Usamos almacenamiento local para recordar el carrito y su preferencia. 
            Con su permiso, también activamos etiquetas de Google y estadísticas de visitas. 
            Puede aceptar o rechazar esas funciones opcionales. Lea la{" "}
            <Link href="/politica-de-cookies" style={{ color: "#0070f3", textDecoration: "underline" }}>
              Política de Cookies
            </Link>.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <button
              type="button"
              onClick={() => chooseConsent("rejected")}
              style={{
                flex: "1",
                padding: "10px 14px",
                backgroundColor: "#f44336",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d32f2f")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f44336")}
            >
              Rechazar opcionales
            </button>
            <button
              type="button"
              onClick={() => chooseConsent("accepted")}
              style={{
                flex: "1",
                padding: "10px 14px",
                backgroundColor: "#4caf50",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#388e3c")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4caf50")}
            >
              Aceptar opcionales
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
