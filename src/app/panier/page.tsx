"use client";

import { useCart, type CartItem } from "@/context/CartContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckoutForm from "@/components/StripeCheckoutForm";
import { STORE } from "@/lib/store";

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

const formatEuro = (amount: number) =>
  amount.toLocaleString("es-ES", { style: "currency", currency: "EUR" });

export default function CartPage() {
  const { cart, clearCart, updateQuantity, removeFromCart } = useCart();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [currentOrderRef, setCurrentOrderRef] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Formulaire d'informations client
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    address: "",
    whatsapp: "",
    email: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank" | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [creatingPayment, setCreatingPayment] = useState(false);
  const [bankInfo, setBankInfo] = useState({ beneficiary: "", iban: "", bic: "" });
  const [bankInfoLoaded, setBankInfoLoaded] = useState(false);
  const [showEmailPromptPopup, setShowEmailPromptPopup] = useState(false);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const hasBankDetails = Boolean(
    bankInfo.beneficiary && bankInfo.iban && bankInfo.bic
  );
  const hasPaymentMethod = Boolean(stripePromise || (bankInfoLoaded && hasBankDetails));

  useEffect(() => {
    fetch("/api/bank-details")
      .then(async (res) => {
        if (!res.ok) throw new Error("No se pudieron cargar los datos bancarios.");
        return res.json();
      })
      .then((data) => {
        if (data && !data.error) {
          setBankInfo({
            beneficiary: data.beneficiary || "",
            iban: data.iban || "",
            bic: data.bic || "",
          });
        }
      })
      .catch((error) => console.error("Error cargando los datos bancarios:", error))
      .finally(() => setBankInfoLoaded(true));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const orderRef = crypto.randomUUID();
    setCurrentOrderRef(orderRef);

    const newOrder = {
      id: orderRef,
      items: cart.map((item: CartItem) => ({
        id: item.id,
        quantity: item.quantity,
      })),
      customerName: `${formData.firstName} ${formData.lastName}`.trim(),
      country: formData.country,
      city: formData.city,
      address: formData.address,
      whatsapp: formData.whatsapp,
      email: formData.email,
    };

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });

      if (response.ok) {
        setShowSuccessPopup(true);
      } else {
        const result = await response.json();
        setPaymentError(result.error || "No se pudo registrar el pedido.");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión. Inténtelo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProceedToPaymentType = () => {
    setPaymentError(null);
    setShowSuccessPopup(false);
    setShowPaymentModal(true);
  };

  const handleSelectPaymentMethod = async (method: "card" | "bank") => {
    setPaymentMethod(method);
    setPaymentError(null);

    if (method === "bank") {
      if (!bankInfo.beneficiary || !bankInfo.iban || !bankInfo.bic) {
        setPaymentError("La transferencia bancaria no está configurada.");
        return;
      }
      return;
    }
    if (!stripePromise) {
      setPaymentError("El pago con tarjeta no está configurado.");
      return;
    }

    setCreatingPayment(true);
    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map((item) => ({ id: item.id, quantity: item.quantity })),
          orderId: currentOrderRef,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.clientSecret) {
        setPaymentError(result.error || "No se pudo preparar el pago con tarjeta.");
        return;
      }
      setClientSecret(result.clientSecret);
    } catch (error) {
      console.error("Error preparando el pago:", error);
      setPaymentError("No se pudo preparar el pago. Inténtelo de nuevo.");
    } finally {
      setCreatingPayment(false);
    }
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    setShowEmailPromptPopup(true);
  };

  const handleFinalizeOrder = () => {
    setShowPaymentModal(false);
    if (typeof clearCart === "function") {
      clearCart();
    }
    router.push("/");
  };

  if (cart.length === 0 && !showPaymentModal && !showSuccessPopup) {
    return (
      <div className="cart-empty-container">
        <i className="fas fa-shopping-bag empty-icon"></i>
        <h2>Su carrito está vacío</h2>
        <p>Parece que aún no ha añadido ningún producto.</p>
        <Link href="/" className="btn-back-home">Continuar comprando</Link>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <h1 className="page-title">Mi Carrito ({cart.length})</h1>
      <div className="cart-content-wrapper">
        
        {/* Liste des produits */}
        <div className="cart-items-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item-card">
              <div className="cart-item-img-wrapper">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img"
                  width={100}
                  height={100}
                  sizes="100px"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="cart-item-details">
                <span className="cart-item-cat">{item.category}</span>
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-unit-price">Precio unitario: {formatEuro(item.price)}</p>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} type="button">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} type="button">+</button>
              </div>
              <div className="cart-item-actions">
                <p className="cart-item-subtotal">{formatEuro(item.price * item.quantity)}</p>
                <button onClick={() => removeFromCart(item.id)} className="btn-remove-item" type="button">
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Panneau latéral : Formulaire de livraison + Résumé */}
        <div className="cart-summary-card">
          <form onSubmit={handleCheckout}>
            <h3 className="checkout-section-title"><i className="fas fa-truck"></i> Datos de Envío</h3>
            
            <div className="form-grid">
              <div className="form-group">
                <label>Nombre *</label>
                <input type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange} placeholder="Juan" />
              </div>

              <div className="form-group">
                <label>Apellidos *</label>
                <input type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange} placeholder="Pérez" />
              </div>

              <div className="form-group">
                <label>País *</label>
                <input type="text" name="country" required value={formData.country} onChange={handleInputChange} placeholder="España" />
              </div>

              <div className="form-group">
                <label>Ciudad *</label>
                <input type="text" name="city" required value={formData.city} onChange={handleInputChange} placeholder="Madrid" />
              </div>

              <div className="form-group full-width">
                <label>Dirección exacta *</label>
                <input type="text" name="address" required value={formData.address} onChange={handleInputChange} placeholder="Calle y número" />
              </div>

              <div className="form-group">
                <label>WhatsApp / Teléfono *</label>
                <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleInputChange} placeholder="+34 600 000 000" />
              </div>

              <div className="form-group">
                <label>Correo electrónico *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="juan@ejemplo.com" />
              </div>
            </div>

            <h3 className="checkout-section-title" style={{ marginTop: "20px" }}><i className="fas fa-file-invoice"></i> Resumen del pedido</h3>
            <div className="summary-row"><span>Subtotal</span><span>{formatEuro(totalPrice)}</span></div>
            <div className="summary-row"><span>Envío</span><span className="free-shipping">Gratis</span></div>
            <div className="summary-divider"></div>
            <div className="summary-row total-row"><span>Total</span><span>{formatEuro(totalPrice)}</span></div>
            {paymentError && (
              <p role="alert" style={{ color: "#b42318", margin: "12px 0" }}>
                {paymentError}
              </p>
            )}
            
            {bankInfoLoaded && !hasPaymentMethod && (
              <p role="alert">No hay métodos de pago disponibles en este momento.</p>
            )}
            <button
              className="btn-checkout"
              type="submit"
              disabled={isSubmitting || !hasPaymentMethod}
            >
              {isSubmitting ? "Procesando..." : "Tramitar pedido"}
            </button>
          </form>
        </div>
      </div>

      {/* POPUPS DE MODAL */}
      {showSuccessPopup && (
        <div className="payment-modal-overlay" style={{ zIndex: 9999 }}>
          <div className="payment-modal-card" style={{ textAlign: "center", padding: "40px 30px" }}>
            <div style={{ fontSize: "50px", color: "#2ecc71", marginBottom: "20px" }}>
              <i className="fas fa-check-circle animate-bounce"></i>
            </div>
            <h2 style={{ fontSize: "24px", color: "#2c3e50", marginBottom: "10px" }}>¡Pedido Enviado con Éxito!</h2>
            <p style={{ color: "#7f8c8d", marginBottom: "25px", fontSize: "16px" }}>
              Su pedido <strong>#{currentOrderRef}</strong> ha sido guardado correctamente.
            </p>
            <button 
              onClick={handleProceedToPaymentType}
              className="btn-modal-confirm"
              style={{ background: "#2ecc71", border: "none", width: "100%" }}
              type="button"
            >
              Proceder al pago <i className="fas fa-arrow-right" style={{ marginLeft: "8px" }}></i>
            </button>
          </div>
        </div>
      )}

      {showPaymentModal && (
        <div className="payment-modal-overlay" style={{ zIndex: 9998 }}>
          <div className="payment-modal-card" style={{ maxWidth: "450px", padding: "20px" }}>
            <div className="payment-modal-header" style={{ marginBottom: "15px", textAlign: "center" }}>
              <h2 style={{ fontSize: "20px", marginBottom: "6px" }}>Método de Pago</h2>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.4" }}>
                  Seleccione cómo desea pagar su pedido <strong>#{currentOrderRef}</strong> por un total de <strong>{formatEuro(totalPrice)}</strong>.
              </p>
            </div>

            <div style={{ display: "flex", gap: "8px", marginBottom: "15px" }}>
              <button 
                  onClick={() => void handleSelectPaymentMethod("bank")}
                  disabled={!hasBankDetails}
                style={{ 
                  flex: 1, 
                  padding: "8px 10px", 
                  fontSize: "14px", 
                  borderRadius: "6px", 
                  border: "2px solid #0070f3", 
                  background: "#f0f7ff", 
                  cursor: "pointer", 
                  fontWeight: "bold" 
                }}
                type="button"
              >
                <i className="fas fa-university"></i> Transferencia
              </button>
              <button
                onClick={() => void handleSelectPaymentMethod("card")}
                style={{
                  flex: 1,
                  padding: "8px 10px",
                  fontSize: "14px",
                  borderRadius: "6px",
                  border: "2px solid #0070f3",
                  background: "#f0f7ff",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                type="button"
                disabled={creatingPayment || !stripePromise}
              >
                <i className="far fa-credit-card"></i> Tarjeta
              </button>
            </div>

            {paymentError && (
              <p role="alert" style={{ color: "#b42318", marginBottom: "12px" }}>
                {paymentError}
              </p>
            )}

            {paymentMethod === "card" && creatingPayment && <p>Preparando el pago...</p>}
            {paymentMethod === "card" && clientSecret && stripePromise && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <StripeCheckoutForm
                  orderId={currentOrderRef}
                  onSuccess={handlePaymentSuccess}
                />
              </Elements>
            )}

            {paymentMethod === "bank" && (
              <div>
                <div className="payment-modal-details" style={{ marginTop: "10px" }}>
                  <strong className="payment-method-title">Pago por transferencia bancaria</strong>
                  <p><strong>Beneficiario:</strong> {bankInfo.beneficiary}</p>
                  <p><strong>IBAN:</strong> {bankInfo.iban}</p>
                  <p><strong>SWIFT/BIC:</strong> {bankInfo.bic}</p>
                  <p className="payment-reference-row"><strong>Referencia:</strong> Pedido #{currentOrderRef}</p>
                </div>
                <div className="payment-modal-notice" style={{ margin: "15px 0" }}>
                  <i className="fas fa-info-circle"></i> 
                  El pedido quedará pendiente hasta verificar la transferencia. Envíe el justificante a{" "}
                  <strong>{STORE.email}</strong>.
                </div>
                <button onClick={handleFinalizeOrder} className="btn-modal-confirm" style={{ width: "100%" }} type="button">
                  Confirmar pedido pendiente de pago
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {showEmailPromptPopup && (
        <div className="payment-modal-overlay" style={{ zIndex: 9999 }}>
          <div className="payment-modal-card" style={{ textAlign: "center", padding: "40px 30px", maxWidth: "450px" }}>
            <div style={{ fontSize: "50px", color: "#0070f3", marginBottom: "20px" }}>
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <h2 style={{ fontSize: "22px", color: "#1a1a1a", marginBottom: "12px" }}>
              {paymentMethod === "bank" ? "Pedido registrado" : "Pago confirmado"}
            </h2>
            <p style={{ color: "#666", marginBottom: "25px", fontSize: "15px", lineHeight: "1.5" }}>
              {paymentMethod === "bank"
                ? <>El pedido <strong>#{currentOrderRef}</strong> queda pendiente hasta que se verifique la transferencia.</>
                : <>El pago del pedido <strong>#{currentOrderRef}</strong> se ha confirmado.</>}
            </p>
            
            {paymentMethod === "bank" && (
              <a
                href={`mailto:${STORE.email}?subject=${encodeURIComponent(`Justificante de transferencia - Pedido ${currentOrderRef}`)}`}
                className="btn-see-more"
                style={{ display: "inline-flex", width: "100%", marginBottom: "12px", textDecoration: "none", boxSizing: "border-box" }}
              >
                Enviar justificante por correo
              </a>
            )}

            <button
              onClick={handleFinalizeOrder}
              style={{ background: "none", border: "none", color: "#0070f3", cursor: "pointer", fontSize: "14px", fontWeight: "500", textDecoration: "underline" }}
              type="button"
            >
              Volver a la tienda
            </button>
          </div>
        </div>
      )}
    </div>
  );
}