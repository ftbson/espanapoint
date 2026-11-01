import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import ProductActions from "./ProductActions";
import ProductGallery from "@/components/ProductGallery";
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

/** Coupe à la limite d'un mot, sans casser la phrase en plein milieu. */
function truncate(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 100 ? lastSpace : max).trim()}…`;
}

function formatBattery(value: unknown): string | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value === "number") return `${value} %`;
  const text = String(value).trim();
  if (text.includes("%")) return text;
  return /^\d+$/.test(text) ? `${text} %` : text;
}

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
  if (!product) return { title: "Producto no encontrado" };

  const image = toAbsoluteProductImage(product.images[0]);
  const description = truncate(getProductDescription(product));

  return {
    title: product.name,
    description,
    alternates: { canonical: getProductCanonicalUrl(product) },
    openGraph: {
      title: product.name,
      description,
      url: getProductCanonicalUrl(product),
      siteName: "Espanapoint",
      locale: "es_ES",
      type: "website",
      images: image ? [{ url: image, alt: product.name }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description,
      images: image ? [image] : undefined,
    },
  };
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
  if (id !== canonicalSlug) {
    permanentRedirect(getProductUrl(product));
  }

  const brand = getProductBrand(product);
  const hasRealBrand = brand !== "Genérico";
  const description = getProductDescription(product);
  const productJsonLd = getProductJsonLd(product);
  const battery = formatBattery(product.batteryHealth);
  const shippingCost = Number(siteConfig.shipping.cost);
  const isUsedElectronics =
    product.category === "Dispositivos electrónicos" &&
    (product.condition === "refurbished" || product.condition === "used");

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
        <i className="fas fa-arrow-left" aria-hidden="true"></i> Ver todos los
        productos
      </Link>

      <ProductGallery images={product.images} name={product.name} />

      <div className="product-detail-info">
        <span className="product-detail-cat">{product.category}</span>

        <h1>{product.name}</h1>
        {hasRealBrand && <p>Marca: {brand}</p>}
        <p
          className={`product-availability product-availability-${product.availability.toLowerCase()}`}
        >
          {getAvailabilityLabel(product.availability)}
        </p>

        <p className="product-detail-price">
          {product.price.toLocaleString("es-ES", {
            style: "currency",
            currency: "EUR",
          })}{" "}
          <span className="product-vat">IVA incluido</span>
        </p>

        <section
          className="product-detail-description-section"
          aria-labelledby="product-description-heading"
        >
          <h2 id="product-description-heading">Descripción</h2>
          <p className="product-detail-description">{description}</p>
        </section>

        <section
          className="product-specifications"
          aria-labelledby="product-specifications-heading"
        >
          <h2 id="product-specifications-heading">Ficha técnica</h2>
          <dl>
            {hasRealBrand && (
              <div>
                <dt>Marca</dt>
                <dd>{brand}</dd>
              </div>
            )}
            {product.model && (
              <div>
                <dt>Modelo</dt>
                <dd>{product.model}</dd>
              </div>
            )}
            {product.mpn && (
              <div>
                <dt>Referencia del fabricante</dt>
                <dd>{product.mpn}</dd>
              </div>
            )}
            {product.gtin13 && (
              <div>
                <dt>EAN</dt>
                <dd>{product.gtin13}</dd>
              </div>
            )}
            {product.storage && (
              <div>
                <dt>Almacenamiento</dt>
                <dd>{product.storage}</dd>
              </div>
            )}
            {product.specs?.map((spec) => (
              <div key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
            <div>
              <dt>Estado</dt>
              <dd>{getProductConditionLabel(product)}</dd>
            </div>
            {battery ? (
              <div>
                <dt>Batería</dt>
                <dd>{battery}</dd>
              </div>
            ) : isUsedElectronics ? (
              <div>
                <dt>Batería</dt>
                <dd>Consultar</dd>
              </div>
            ) : null}
            <div>
              <dt>Garantía</dt>
              <dd>{product.warrantyMonths} meses</dd>
            </div>
            {product.color && (
              <div>
                <dt>Color</dt>
                <dd>{product.color}</dd>
              </div>
            )}
          </dl>
        </section>

        <section
          className="product-shipping-info"
          aria-labelledby="shipping-returns-heading"
        >
          <h2 id="shipping-returns-heading">Envío y devoluciones</h2>
          <p>
            {siteConfig.shipping.label} ·{" "}
            {shippingCost === 0
              ? "Envío gratuito"
              : `${shippingCost.toFixed(2)} € IVA incluido`}
          </p>
          <p>{siteConfig.returns.label}</p>
          <p>
            Consulta la{" "}
            <Link href="/politica-de-devoluciones">política de devoluciones</Link>{" "}
            y la <Link href="/politica-de-envio">política de envío</Link>.
          </p>
        </section>

        <ProductActions product={product} />
      </div>
    </article>
  );
}