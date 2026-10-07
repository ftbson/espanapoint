"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { getProductUrl, PRODUCTS_DATA } from "@/lib/products";

const FEATURED_PRODUCT_IDS = [
  5, 4, 7, 21, 23, 11, 12, 32, 29, 31, 42, 45, 47, 40, 41,
];
const featuredProducts = FEATURED_PRODUCT_IDS.flatMap((id) => {
  const product = PRODUCTS_DATA.find((entry) => entry.id === id);
  return product ? [product] : [];
});

export default function FeaturedPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuyNow = (product: (typeof featuredProducts)[number]) => {
    addToCart(product);
    router.push("/panier");
  };

  return (
    <section className="home-page-container">
      <div className="featured-hero">
        <span className="featured-subtitle">Espanapoint</span>
        <h1>Productos destacados</h1>
        <p>Una selección de productos del catálogo de Espanapoint.</p>
      </div>

      <div className="products-grid">
        {featuredProducts.map((product) => (
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
                onClick={() => handleBuyNow(product)}
                className="btn-buy-now"
                type="button"
              >
                Comprar
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
