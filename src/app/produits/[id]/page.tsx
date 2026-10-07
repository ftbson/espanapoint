import { notFound } from "next/navigation";
import { permanentRedirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ProductActions from "./ProductActions";
import "./product.css";
import {
  getProductBrand,
  getProductByRouteId,
  getProductDescription,
  getProductSlug,
  getProductUrl,
  getVerifiedProductCondition,
  PRODUCTS_DATA,
} from "@/lib/products";
import { STORE } from "@/lib/store";

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
          images: [{ url: product.image, alt: product.name }],
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
  const condition = getVerifiedProductCondition(product);
  const description = getProductDescription(product);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description,
    image: product.image.startsWith("http")
      ? product.image
      : `${STORE.website}${product.image}`,
    category: product.category,
    ...(brand ? { brand: { "@type": "Brand", name: brand } } : {}),
    ...(product.model ? { model: product.model } : {}),
    ...(product.gtin ? { gtin: product.gtin } : {}),
    ...(product.mpn ? { mpn: product.mpn } : {}),
    offers: {
      "@type": "Offer",
      url: `${STORE.website}${canonicalPath}`,
      priceCurrency: "EUR",
      price: product.price.toFixed(2),
      ...(product.availability
        ? {
            availability: `https://schema.org/${{
              in_stock: "InStock",
              out_of_stock: "OutOfStock",
              preorder: "PreOrder",
              backorder: "BackOrder",
            }[product.availability]}`,
          }
        : {}),
      ...(condition
        ? {
            itemCondition: `https://schema.org/${{
              new: "NewCondition",
              used: "UsedCondition",
              refurbished: "RefurbishedCondition",
            }[condition]}`,
          }
        : {}),
    },
  };

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
          src={product.image}
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
        {brand && <p>Marca: {brand}</p>}
        {product.model && <p>Modelo: {product.model}</p>}

        <p className="product-detail-price">
          {product.price.toLocaleString("es-ES", {
            style: "currency",
            currency: "EUR",
          })}
        </p>

        <p className="product-detail-description">{description}</p>

        {product.name.toLowerCase().includes("reacondicionado") && (
          <p className="product-condition">Reacondicionado</p>
        )}

        <ProductActions product={product} />
      </div>
    </article>
  );
}
