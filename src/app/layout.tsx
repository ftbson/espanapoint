import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://espanapoint.es"),

  title: {
    default: "Espanapoint | Catálogo online",
    template: "%s | Espanapoint",
  },
  verification: {
    // google: "02EsY9lsHx9uIWWofpJSWyW4yn0bAPTutopuIkN2QNo",
  },

  description:
    "Consulta el catálogo de Espanapoint, revisa la información disponible de cada producto y tramita tu pedido online.",

  authors: [
    {
      name: "Espanapoint",
      url: "https://espanapoint.es",
    },
  ],

  creator: "Espanapoint",

  publisher: "Espanapoint",

  category: "E-commerce",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Espanapoint | Catálogo online",
    description:
      "Consulta el catálogo de Espanapoint y la información disponible de cada producto.",
    url: "https://espanapoint.es",
    siteName: "Espanapoint",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/img/log.png",
        width: 512,
        height: 512,
        alt: "Espanapoint",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Espanapoint | Catálogo online",
    description:
      "Consulta el catálogo y la información disponible de los productos de Espanapoint.",
    images: ["/img/log.png"],
  },

  icons: {
    icon: "/img/log.png",
    shortcut: "/img/log.png",
    apple: "/img/log.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

      </head>

      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </CartProvider>
      </body>
    </html>
  );
}