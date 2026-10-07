"use client";

import { Suspense, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import { useCart } from "@/context/CartContext";
import { getProductUrl, PRODUCTS_DATA } from "@/lib/products";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const hasTrackedVisit = useRef(false);
  const searchQuery = searchParams.get("search")?.trim().toLowerCase() || "";
  const categoryQuery = searchParams.get("cat") || "";

  useEffect(() => {
    const trackVisit = () => {
      if (
        hasTrackedVisit.current ||
        localStorage.getItem("espanapoint_cookie_consent") !== "accepted"
      ) {
        return;
      }

      hasTrackedVisit.current = true;
      fetch("/api/visits", { method: "POST" }).catch((error) => {
        console.error("No se pudo registrar la visita:", error);
      });
    };

    trackVisit();
    window.addEventListener("espanapoint-cookie-consent", trackVisit);
    return () =>
      window.removeEventListener("espanapoint-cookie-consent", trackVisit);
  }, []);

  const categoryMapping: Record<string, string> = {
    electronique: "Dispositivos electrónicos",
    beaute: "Belleza y cuidado personal",
    maison: "Hogar",
    cuisine: "Cocina",
    sport: "Deporte / Fitness",
  };
  const targetCategory = categoryMapping[categoryQuery] || "";
  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery);
    const matchesCategory = !targetCategory || product.category === targetCategory;
    return matchesSearch && matchesCategory;
  });

  const buyNow = (product: (typeof PRODUCTS_DATA)[number]) => {
    addToCart(product);
    router.push("/panier");
  };

  return (
    <div>
      {!searchQuery && !categoryQuery && (
        <>
          <div className="featured-hero">
            <h1>Catálogo de productos Espanapoint</h1>
          </div>
          <Hero />
          <section className="features-section" aria-label="Información de compra">
            <div className="features-container">
              <article className="feature-card">
                <div className="feature-icon-wrapper icon-shipping" aria-hidden="true">
                  <i className="fas fa-list"></i>
                </div>
                <h2>Catálogo en línea</h2>
                <p>Consulta los artículos y sus precios en euros.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon-wrapper icon-security" aria-hidden="true">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <h2>Carrito de compra</h2>
                <p>Añade productos al carrito y revisa el pedido antes de continuar.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon-wrapper icon-support" aria-hidden="true">
                  <i className="fas fa-credit-card"></i>
                </div>
                <h2>Formas de pago</h2>
                <p>Consulta las opciones disponibles al tramitar el pedido.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon-wrapper icon-guarantee" aria-hidden="true">
                  <i className="fas fa-envelope"></i>
                </div>
                <h2>Contacto</h2>
                <p>Escríbenos o llámanos para consultar productos y pedidos.</p>
              </article>
            </div>
          </section>
        </>
      )}

      <section className="home-page-container" aria-labelledby="catalog-heading">
        <div className="featured-hero">
          <span className="featured-subtitle">Espanapoint</span>
          <h2 id="catalog-heading">
            {searchQuery || categoryQuery
              ? `Resultados de búsqueda (${filteredProducts.length})`
              : "Productos del catálogo"}
          </h2>
          {(searchQuery || categoryQuery) && (
            <button
              onClick={() => router.push("/")}
              className="btn-see-more"
              type="button"
            >
              Quitar filtros
            </button>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <article key={product.id} className="product-card">
                <Link href={getProductUrl(product)} className="product-card-link">
                  <div className="product-image-wrapper">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="product-img"
                      width={320}
                      height={320}
                      sizes="(max-width: 600px) 46vw, (max-width: 1000px) 30vw, 280px"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="product-info">
                    <span className="product-cat">{product.category}</span>
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">
                      {product.price.toLocaleString("es-ES", {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </p>
                  </div>
                </Link>
                <div className="product-card-actions">
                  <button
                    onClick={() => addToCart(product)}
                    className="btn-add-cart"
                    type="button"
                    aria-label={`Añadir ${product.name} al carrito`}
                  >
                    <i className="fas fa-shopping-basket" aria-hidden="true"></i>
                    <span>Añadir</span>
                  </button>
                  <button
                    onClick={() => buyNow(product)}
                    className="btn-buy-now"
                    type="button"
                  >
                    Comprar
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p role="status">No hay productos que coincidan con la búsqueda.</p>
        )}

        {filteredProducts.length > 0 && !searchQuery && !categoryQuery && (
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/produits" className="btn-see-more">
              Ver todo el catálogo
            </Link>
          </div>
        )}
      </section>

    <section className="help-section" aria-labelledby="help-title">
  <h2 id="help-title" className="help-title">¿Necesitas ayuda?</h2>
  <p className="help-text">
    Contacta con Espanapoint para consultar productos o pedidos.
  </p>
  <Link href="/contact" className="help-button">Contactar</Link>
</section>

    </div>
  );
}

export default function HomePageContent() {
  return (
    <Suspense fallback={<div role="status">Cargando catálogo...</div>}>
      <HomeContent />
    </Suspense>
  );
}
