"use client";

import { useState } from "react";
import { STORE } from "@/lib/store";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) {
        setFormStatus(result.error || "No se pudo enviar el mensaje.");
        return;
      }
      setFormStatus("Su mensaje se ha enviado correctamente.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error enviando el mensaje de contacto:", error);
      setFormStatus("No se pudo conectar con el servidor. Inténtelo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormStatus("");
  };

  return (
    <div className="contact-page-container">
      <div className="featured-hero">
        <span className="featured-subtitle">Contáctenos</span>
        <h1>¿Tiene alguna pregunta? Estamos aquí para ayudarle</h1>
        <p>Contacte con nosotros por correo electrónico o teléfono para consultas sobre productos y pedidos.</p>
      </div>

      <div className="contact-content-grid">
        <div className="contact-form-card">
          <h2>Envíenos un mensaje</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre completo</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Su nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="nombre@ejemplo.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Asunto de su mensaje"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Su mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarle?"
              ></textarea>
            </div>

            {formStatus && (
              <p role={formStatus.startsWith("Su mensaje") ? "status" : "alert"}>
                {formStatus}
              </p>
            )}

              <button type="submit" className="btn-send-message">
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
          </form>
        </div>

        <div className="contact-info-column">
          <div className="info-status-card">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-text">
                <h3>Teléfono</h3>
                <a href={`tel:${STORE.phoneLink}`} className="info-link">
                      {STORE.phone}
                </a>
                <p>Horario: lunes a viernes, 8:00–19:00; sábado, 9:00–17:00.</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="far fa-envelope"></i>
              </div>
              <div className="info-text">
                <h3>Soporte por Email</h3>
                <a href={`mailto:${STORE.email}`} className="info-link">
                  {STORE.email}
                </a>
                <p>También puede usar el formulario para preparar un mensaje de correo.</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-text">
                <h3>Nuestra Sede Social</h3>
                <p className="info-address">
                  {STORE.address.street}<br />
                  {STORE.address.postalCode} {STORE.address.locality}, {STORE.address.country}
                </p>
                <p className="info-cif"><strong>CIF:</strong> {STORE.cif}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="far fa-clock"></i>
              </div>
              <div className="info-text">
                <h3>Horario de atención</h3>
                <p>Lunes - Viernes: 8:00 - 19:00</p>
                <p>Sábado: 9:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}