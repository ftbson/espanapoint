import { notFound } from "next/navigation";
import { permanentRedirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ProductActions from "./ProductActions";
import "./product.css";
import { getProductJsonLd } from "@/lib/productSchema";
import {
  getAvailabilityLabel,
  getProductBrand,
  getProductByRouteId,
  getProductDescription,
  getProductSlug,
  getProductUrl,
  getProductConditionLabel,
  PRODUCTS_DATA,
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

  return product
    ? {
        title: product.name,
        description: getProductDescription(product).slice(0, 160),
        alternates: { canonical: getProductUrl(product) },
        openGraph: {
          title: product.name,
          description: getProductDescription(product).slice(0, 160),
          url: getProductUrl(product),
          type: "website",
          images: [{ url: product.image[0], alt: product.name }],
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

  const canonicalPath = getProductUrl(product);
  if (id !== getProductSlug(product)) {
    permanentRedirect(canonicalPath);
  }

  const brand = getProductBrand(product);
  const description = getProductDescription(product);
  const productJsonLd = getProductJsonLd(product);

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
        <Image
          src={product.image[0]}
          alt={product.name}
          width={600}
          height={600}
          sizes="(max-width: 768px) 100vw, 50vw"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="product-detail-info">
        <span className="product-detail-cat">{product.category}</span>

        <h1>{product.name}</h1>
        <p>Marca: {brand}</p>
        <p className={`product-availability product-availability-${product.availability.toLowerCase()}`}>
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

        <p className="product-condition">
          {getProductConditionLabel(product.itemCondition)}
        </p>

        <ProductActions product={product} />
      </div>
    </article>
  );
}
