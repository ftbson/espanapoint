import { notFound } from "next/navigation";
import { permanentRedirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ProductActions from "./ProductActions";
import "./product.css";
import { getProductJsonLd } from "@/lib/productSchema";
import { SITE_URL, siteConfig } from "@/lib/siteConfig";
import {
  getAvailabilityLabel,
  getProductBrand,
  getProductCanonicalUrl,
  getProductByRouteId,
  getProductDescription,
  getProductSlug,
  getProductUrl,
  getProductConditionLabel,
  PRODUCTS_DATA,
  toAbsoluteProductImage,
} from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({ id: getProductSlug(product) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductByRouteId(id);
  const image = product ? toAbsoluteProductImage(product.images[0]) : undefined;

  return product
    ? {
        title: product.name,
        description: getProductDescription(product).slice(0, 160),
        alternates: { canonical: getProductCanonicalUrl(product) },
        openGraph: {
          title: product.name,
          description: getProductDescription(product).slice(0, 160),
          url: getProductCanonicalUrl(product),
          type: "product" as "website",
          images: [{ url: image!, alt: product.name }],
        },
        twitter: {
          card: "summary_large_image",
          title: product.name,
          description: getProductDescription(product).slice(0, 160),
          images: [image!],
        },
      }
    : { title: "Producto no encontrado" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = getProductByRouteId(id);

  if (!product) {
    notFound();
  }

  const canonicalSlug = product.canonicalOf || getProductSlug(product);
  const canonicalPath = getProductUrl(product);
  if (id !== canonicalSlug) {
    permanentRedirect(canonicalPath);
  }

  const brand = getProductBrand(product);
  const description = getProductDescription(product);
  const productJsonLd = getProductJsonLd(product);

  if (
    process.env.NODE_ENV === "development" &&
    product.condition === "refurbished"
  ) {
    const siteHost = new URL(SITE_URL).host;
    for (const image of product.images) {
      if (image.startsWith("http") && new URL(image).host !== siteHost) {
        console.warn(
          `[Product ${product.slug}] External refurbished-product image: ${image}`,
        );
      }
    }
  }

  return (
    <article className="product-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Link href="/produits" className="product-detail-back">
        <i className="fas fa-arrow-left"></i> Ver todos los productos
      </Link>

      <div className="product-detail-image">
        {product.images.map((image, index) => (
          <Image
            key={`${image}-${index}`}
            src={image}
            alt={`${product.name}${product.images.length > 1 ? ` - imagen ${index + 1}` : ""}`}
            width={600}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>

      <div className="product-detail-info">
        <span className="product-detail-cat">{product.category}</span>

        <h1>{product.name}</h1>
        <p>Marca: {brand}</p>
        <p
          className={`product-availability product-availability-${product.availability.toLowerCase()}`}
        >
          {getAvailabilityLabel(product.availability)}
        </p>

        <p className="product-detail-price">
          {product.price.toLocaleString("es-ES", {
            style: "currency",
            currency: "EUR",
          })}
        </p>

        <section
          className="product-detail-description-section"
          aria-labelledby="product-description-heading"
        >
          <h2 id="product-description-heading">Descripción</h2>
          <p className="product-detail-description">{description}</p>
        </section>

        <p className="product-condition">{getProductConditionLabel(product)}</p>

        <section
          className="product-specifications"
          aria-labelledby="product-specifications-heading"
        >
          <h2 id="product-specifications-heading">Ficha técnica</h2>
          <dl>
            <div>
              <dt>Marca</dt>
              <dd>{brand}</dd>
            </div>
            <div>
              <dt>Modelo</dt>
              <dd>{product.model || "No especificado"}</dd>
            </div>
            <div>
              <dt>Capacidad</dt>
              <dd>{product.storage || "No especificada"}</dd>
            </div>
            <div>
              <dt>Estado</dt>
              <dd>{getProductConditionLabel(product)}</dd>
            </div>
            <div>
              <dt>Batería</dt>
              <dd>
                {product.batteryHealth === undefined
                  ? "No especificada"
                  : `${product.batteryHealth} %`}
              </dd>
            </div>
            <div>
              <dt>Garantía</dt>
              <dd>{product.warrantyMonths} meses</dd>
            </div>
            <div>
              <dt>Color</dt>
              <dd>{product.color || "No especificado"}</dd>
            </div>
          </dl>
        </section>

        <section
          className="product-shipping-info"
          aria-labelledby="shipping-returns-heading"
        >
          <h2 id="shipping-returns-heading">Envío y devoluciones</h2>
          <p>
            {siteConfig.shipping.label} ·{" "}
            {siteConfig.shipping.cost === 0
              ? "Envío gratuito"
              : `${siteConfig.shipping.cost.toFixed(2)} €`}
          </p>
          <p>{siteConfig.returns.label}</p>
        </section>

        <ProductActions product={product} />
      </div>
    </article>
  );
}
