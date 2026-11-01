import { SITE_URL, siteConfig } from "./siteConfig";

export type ProductCondition = "new" | "refurbished" | "used";
export type ProductAvailability = "InStock" | "OutOfStock" | "PreOrder";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  brand: string;
  model?: string;
  category: string;
  description: string;
  images: string[];
  color?: string;
  colorsAvailable?: string[];
  condition: ProductCondition;
  grade?: "A+" | "A" | "B";
  storage?: string;
  batteryHealth?: number | string;
  specs?: ProductSpec[];
  warrantyMonths: number;
  price: number;
  priceCurrency: "EUR";
  availability: ProductAvailability;
  gtin13?: string;
  mpn?: string;
  canonicalOf?: string;
}

export type ProductSeedEntry = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  color?: string;
  colorsAvailable?: string[];
  /** Salud de la batería: SOLO para productos reacondicionados/usados */
  batteryHealth?: number | string;
  /** Capacidad de almacenamiento real (ej: "128 GB", "1 TB"). NO usar para autonomía u otros datos */
  storage?: string;
  /** Características clave adicionales (autonomía, pantalla, tipo de interruptor…) */
  specs?: ProductSpec[];
  model?: string;
  brand?: string;
  grade?: "A+" | "A" | "B";
  warrantyMonths?: number;
  condition?: ProductCondition;
  images?: string[];
  /** Descripción propia (recomendado, mínimo ~150 caracteres, sin envío/pago/devoluciones) */
  description?: string;
  availability?: ProductAvailability;
  gtin13?: string;
  mpn?: string;
  canonicalOf?: string;
  slug?: string;
};

const PRODUCT_SEED: ProductSeedEntry[] = [
  // ==========================================
  // DISPOSITIVOS ELECTRÓNICOS
  // ==========================================
  {
    id: 1,
    name: "iPhone 13 Pro Max (Reacondicionado)",
    price: 331.99,
    category: "Dispositivos electrónicos",
    image: "/img/apple-iphone-13-pro-max-1.jpg",
    images: [
      "/img/apple-iphone-13-pro-max-1.jpg",
      "/img/apple-iphone-13-pro-max-2.jpg",
      "/img/apple-iphone-13-pro-max-3.jpg",
    ],
    storage: "128 GB",
    color: "Negro",
    batteryHealth: 88,
    grade: "A",
  },
  {
    id: 2,
    name: "iPhone 14 Pro (Reacondicionado)",
    price: 421.99,
    category: "Dispositivos electrónicos",
    image: "/img/iphone-14-pro-1.jpg",
    images: ["/img/iphone-14-pro-2.jpg", "/img/iphone-14-pro-3.jpg"],
    storage: "128 GB",
    color: "Oro",
    batteryHealth: 95,
    grade: "A+",
  },
  {
    id: 3,
    name: "iPhone 15 (Reacondicionado)",
    price: 461.99,
    category: "Dispositivos electrónicos",
    image: "/img/iphone-15-768x768-1.jpg",
    images: [
      "/img/iphone-15-768x768-2.jpg",
      "/img/iphone-15-768x768-1.jpg",
      "/img/iPhone16.jpg",
    ],
    storage: "128 GB",
    color: "Negro",
    batteryHealth: 95,
    grade: "A+",
  },
  {
    id: 4,
    name: "iPhone 15 Pro Max (Reacondicionado)",
    price: 521.99,
    category: "Dispositivos electrónicos",
    image: "/img/iphone-15-pro-1.jpg",
    images: [
      "/img/iphone-15-pro-2.jpg",
      "/img/iphone-15-pro-3.jpg",
      "/img/iphone-15-pro-4.jpg",
    ],
    storage: "256 GB",
    color: "Negro",
    batteryHealth: 94,
    grade: "A+",
  },
  {
    id: 5,
    name: "iPhone 16 con funda transparente MagSafe (Reacondicionado)",
    model: "iPhone 16 con funda MagSafe",
    slug: "apple-iphone-16-128-gb-negro",
    price: 671.99,
    category: "Dispositivos electrónicos",
    image: "/img/iPhone16-1.jpg",
    images: ["/img/iPhone16-2.jpg", "/img/iPhone16-1.jpg"],
    storage: "128 GB",
    color: "Negro",
    batteryHealth: 100,
    grade: "A+",
  },
  {
    id: 6,
    name: "iPhone 16 Pro Max (Reacondicionado)",
    price: 691.99,
    category: "Dispositivos electrónicos",
    image: "/img/apple-iphone-16-pro-.jpg",
    images: [
      "/img/apple-iphone-16-pro-1.jpg",
      "/img/apple-iphone-16-pro-.jpg",
      "/img/apple-iphone-16-pro-2.jpg",
    ],
    storage: "256 GB",
    color: "Titanio negro",
    batteryHealth: 98,
    grade: "A+",
  },
  {
    id: 7,
    name: "Google Pixel 11 Pro - Smartphone Android libre, 256 GB, Negro volcánico, con Gemini",
    slug: "google-pixel-11-pro-smartphone-android",
    price: 1150.0,
    category: "Dispositivos electrónicos",
    image: "/img/GooglePixel11Pro.jpg",
    images: ["/img/GooglePixel11Pro-1.jpg", "/img/GooglePixel11Pro-2.jpg"],
    storage: "256 GB",
    color: "Negro volcánico",
    // batteryHealth supprimé : produit neuf
  },
  {
    id: 8,
    name: "Google Pixel 10 Pro XL – Smartphone Android libre, 6,8 pulgadas, triple cámara, con Gemini",
    slug: "google-pixel-10-pro-xl-smartphone",
    price: 929.0,
    category: "Dispositivos electrónicos",
    image: "/img/GooglePixel10ProXL.jpg",
    images: [
      "/img/GooglePixel10ProXL-1.jpg",
      "/img/GooglePixel10ProXL-2.jpg",
      "/img/GooglePixel10ProXL.jpg",
    ],
    storage: "256 GB",
    color: "Negro",
    // batteryHealth supprimé : produit neuf
  },
  {
    id: 9,
    name: "Apple MacBook Pro 14,2 pulgadas con chip M5, CPU 10 núcleos, GPU 10 núcleos, 1 TB, Plata (teclado inglés)",
    slug: "apple-macbook-pro-ordenador-portatil-con",
    price: 2199.0,
    category: "Dispositivos electrónicos",
    image: "/img/AppleMacBookPro-1.jpg",
    images: ["/img/AppleMacBookPro-1.jpg", "/img/AppleMacBookPro-2.jpg"],
    storage: "1 TB",
    color: "Plata",
  },
  {
    id: 10,
    name: "PC gaming Shark RGBeast Mini R502",
    price: 1299.0,
    category: "Dispositivos electrónicos",
    image: "/img/SharkRGBeastMiniR502.jpg",
    images: [
      "/img/SharkRGBeastMiniR502-1.jpg",
      "/img/SharkRGBeastMiniR502-2.jpg",
      "/img/SharkRGBeastMiniR502.jpg",
    ],
    storage: "1 TB",
    color: "Negro",
  },
  {
    id: 11,
    name: "Apple AirPods Pro 3 Auriculares Inalámbricos, Cancelación Activa de Ruido",
    price: 151.0,
    category: "Dispositivos electrónicos",
    image: "/img/AppleAirPodsPro3.jpg",
    images: ["/img/AppleAirPodsPro3-1.jpg", "/img/AppleAirPodsPro3.jpg"],
    color: "Blanco",
    // storage "95 %" supprimé (donnée erronée). Ajouter la spec d'autonomie officielle si disponible.
  },
  {
    id: 12,
    name: "Sony WH-1000XM5SA Edición Especial con estuche blando, Cancelación Activa de Ruido, Bluetooth, calidad de llamada clara",
    price: 211.0,
    category: "Dispositivos electrónicos",
    image: "/img/SonyWH-1000XM5SA.jpg",
    images: [
      "/img/SonyWH-1000XM5SA-1.jpg",
      "/img/SonyWH-1000XM5SA-2.jpg",
      "/img/SonyWH-1000XM5SA.jpg",
    ],
    color: "Negro",
    specs: [
      { label: "Autonomía", value: "Hasta 30 horas (con cancelación de ruido activa)" },
    ],
  },
  {
    id: 13,
    name: "Apple Watch Series 9 (GPS + Cellular, 45 MM) Caja de Aluminio Blanco Estrella con Correa Deportiva Blanco Estrella, M/L (Reacondicionado)",
    price: 371.0,
    category: "Dispositivos electrónicos",
    image: "/img/AppleWatchSeries9.jpg",
    images: [
      "/img/AppleWatchSeries9-1.jpg",
      "/img/AppleWatchSeries9.jpg",
      "/img/AppleWatchSeries9-2.jpg",
    ],
    color: "Blanco estrella",
    batteryHealth: 95,
    grade: "A+",
  },
  {
    id: 14,
    name: "SHOKZ OpenFit Pro Open Ear Auriculares Inalámbricos Negro",
    price: 271.0,
    category: "Dispositivos electrónicos",
    image: "/img/SHOKZOpenFitProOpen.jpg",
    images: ["/img/SHOKZOpenFitProOpen.jpg", "/img/SHOKZOpenFitProOpen-1.jpg"],
    color: "Negro",
    specs: [
      { label: "Autonomía", value: "Hasta 12 horas (50 horas con el estuche de carga)" },
    ],
  },
  {
    id: 15,
    name: "Realme Buds Clip",
    price: 71.99,
    category: "Dispositivos electrónicos",
    image: "/img/realme-buds-clip-2025-300x300.jpg",
    images: [
      "/img/realme-buds-clip-2025-300x300.jpg",
      "/img/realme-buds-clip-2025-300x300-1.jpg",
      "/img/realme-buds-clip-2025-300x300-2.jpg",
    ],
    color: "Negro",
    specs: [
      { label: "Autonomía", value: "Hasta 12 horas (hasta 48 horas con el estuche de carga)" },
    ],
    // batteryHealth supprimé : produit neuf
  },
  {
    id: 16,
    name: "JBL Wave Beam 2, Auriculares Inalámbricos Bluetooth, Cancelación de Ruido, 40 horas de autonomía",
    price: 51.99,
    category: "Dispositivos electrónicos",
    image: "/img/JBLWaveBeam2.jpg",
    images: ["/img/JBLWaveBeam2.jpg", "/img/JBLWaveBeam2-1.jpg"],
    color: "Azul",
    specs: [
      { label: "Autonomía", value: "Hasta 40 horas en total (con el estuche de carga)" },
    ],
  },
  {
    id: 18,
    // ⚠️ À VÉRIFIER : le titre dit Bose mais les images sont "SoundcoreSpaceOneCasque".
    name: "Auriculares con cancelación de ruido, con y sin cable, con micrófono Bose QuietComfort Ultra 2.ª generación - Negro",
    price: 220,
    category: "Dispositivos electrónicos",
    image: "/img/SoundcoreSpaceOneCasque.jpg",
    images: [
      "/img/SoundcoreSpaceOneCasque-2.jpg",
      "/img/SoundcoreSpaceOneCasque-1.jpg",
    ],
    color: "Negro",
    specs: [
      { label: "Autonomía", value: "Hasta 30 horas (con cancelación de ruido activa)" },
    ],
  },
  {
    id: 19,
    name: "DJI Osmo Pocket 3 + Transmisor Mic Mini (Negro Obsidiana), cámara para vlogging, micrófono inalámbrico",
    price: 401.0,
    category: "Dispositivos electrónicos",
    image: "/img/DJIOsmoPocket3.jpg",
    images: [
      "/img/DJIOsmoPocket3-2.jpg",
      "/img/DJIOsmoPocket3-1.jpg",
      "/img/DJIOsmoPocket3.jpg",
    ],
    color: "Negro obsidiana",
    specs: [
      { label: "Autonomía", value: "Hasta 166 minutos de grabación" },
      { label: "Ampliación", value: "Ranura microSD (hasta 1 TB, tarjeta no incluida)" },
    ],
  },
  {
    id: 20,
    name: "DJI Osmo Pocket 4 Essential Bundle, cámara de vlogging de bolsillo con gimbal | Sensor CMOS de 1 pulgada y 4K/240 fps, estabilización de 3 ejes",
    price: 471.0,
    category: "Dispositivos electrónicos",
    image: "/img/BundleEssentielDJIOsmoPocket4.jpg",
    images: [
      "/img/BundleEssentielDJIOsmoPocket4-2.jpg",
      "/img/BundleEssentielDJIOsmoPocket4-1.jpg",
      "/img/BundleEssentielDJIOsmoPocket4.jpg",
    ],
    color: "Negro",
    storage: "107 GB internos (ampliable con microSD hasta 1 TB)",
  },
  {
    id: 21,
    name: "Sony, Consola PlayStation 5 Edición Estándar 1 TB con lector Blu-ray 4K, SSD Ultrarrápido, Audio 3D",
    price: 481.99,
    category: "Dispositivos electrónicos",
    image: "/img/SonyConsolePlayStation5.jpg",
    images: [
      "/img/SonyConsolePlayStation5-2.jpg",
      "/img/SonyConsolePlayStation5-1.jpg",
      "/img/SonyConsolePlayStation5.jpg",
    ],
    color: "Blanco",
    storage: "1 TB",
  },
  {
    id: 22,
    name: 'Playstation Sony, Reproductor a Distancia Portal 5, Pantalla LCD Full HD de 8", Juegos en Streaming vía Wi-Fi',
    price: 211.0,
    category: "Dispositivos electrónicos",
    image: "/img/PlaystationSonyLecteur.jpg",
    images: [
      "/img/PlaystationSonyLecteur.jpg",
      "/img/PlaystationSonyLecteur-1.jpg",
      "/img/PlaystationSonyLecteur-2.jpg",
    ],
    color: "Blanco",
    specs: [{ label: "Pantalla", value: 'LCD Full HD 1080p de 8"' }],
  },
  {
    id: 23,
    name: "Nintendo Switch (OLED) Consola de Juegos Portátil de 17,8 cm, 64 GB, Pantalla Táctil, WiFi, Blanco",
    price: 201.0,
    category: "Dispositivos electrónicos",
    image: "/img/NintendoSwitch.jpg",
    images: [
      "/img/NintendoSwitch.jpg",
      "/img/NintendoSwitch-1.jpg",
      "/img/NintendoSwitch-2.jpg",
      "/img/NintendoSwitch-3.jpg",
    ],
    storage: "64 GB",
    color: "Blanco",
  },
  {
    id: 24,
    name: "The G-Lab Keyz Titanium Noir - Teclado gaming mecánico 65% RGB AZERTY FR | Con cable USB, formato 65%, interruptores mecánicos rojos, RGB 100% personalizable",
    price: 29.0,
    category: "Dispositivos electrónicos",
    image: "/img/TheG-LabKeyz.jpg",
    images: [
      "/img/TheG-LabKeyz.jpg",
      "/img/TheG-LabKeyz-1.jpg",
      "/img/TheG-LabKeyz-2.jpg",
      "/img/TheG-LabKeyz-3.jpg",
    ],
    color: "Negro",
    specs: [
      { label: "Tipo de interruptor", value: "Mecánicos rojos (lineales)" },
      { label: "Distribución", value: "AZERTY francés, formato 65 %" },
    ],
  },
  {
    id: 62,
    name: 'Samsung Odyssey G5 S27FG500SU Monitor Gaming OLED 27" 2.5K, 180 Hz, 0,03 ms, HDR10, Negro',
    slug: "samsung-oled-de-27-odyssey-g5",
    price: 351.99,
    category: "Dispositivos electrónicos",
    image: "/img/SamsungOLEDde27.jpg",
    images: [
      "/img/SamsungOLEDde27.jpg",
      "/img/SamsungOLEDde27-2.jpg",
      "/img/SamsungOLEDde27-1.jpg",
    ],
    color: "Negro",
  },
  {
    id: 63,
    // ⚠️ La référence "…AHFR" correspond probablement à un clavier français : vérifier et le préciser.
    name: 'Lenovo Yoga Slim 7 14ILL10 (83JX00AHFR), Intel Core Ultra 7 258V, 32 GB RAM, SSD 1 TB, OLED 14" 2.8K, Windows 11 Home',
    slug: "lenovo-yoga-slim-7-14ill10-83jx00ahfr",
    price: 1141.99,
    category: "Dispositivos electrónicos",
    image: "/img/LenovoYogaSlim7.jpg",
    images: [
      "/img/LenovoYogaSlim7.jpg",
      "/img/LenovoYogaSlim7-2.jpg",
      "/img/LenovoYogaSlim7-1.jpg",
    ],
    color: "Negro",
    storage: "1 TB",
    specs: [{ label: "Memoria RAM", value: "32 GB" }],
  },
  {
    id: 64,
    // ⚠️ "SSD de 16 GB" interprété comme 16 GB de RAM : à confirmer.
    name: 'ASUS Zenbook 14 OLED UM3406GA-QD013W, AMD Ryzen AI 5 430, 16 GB RAM, SSD 512 GB, OLED Full HD+ 14", Windows 11 Home',
    slug: "asus-zenbook-14-oled-um3406ga-qd013w",
    price: 999.99,
    category: "Dispositivos electrónicos",
    image: "/img/ASUSZenbook14.jpg",
    images: [
      "/img/ASUSZenbook14.jpg",
      "/img/ASUSZenbook14-2.jpg",
      "/img/ASUSZenbook14-1.jpg",
    ],
    color: "Negro",
    storage: "512 GB",
    specs: [{ label: "Memoria RAM", value: "16 GB" }],
  },

  // ==========================================
  // DEPORTE / FITNESS
  // ==========================================
  {
    id: 26,
    name: "PUMA Tazon 6 Fracture FM, Zapatillas para Hombre",
    price: 41.99,
    category: "Deporte / Fitness",
    image: "/img/PumaSmashV2LBasketsMixte-2.jpg",
    images: [
      "/img/PumaSmashV2LBasketsMixte-2.jpg",
      "/img/PumaSmashV2LBasketsMixte-3.jpg",
    ],
    color: "Negro",
  },
  {
    id: 27,
    name: "Puma Smash V2 L Zapatillas Unisex",
    price: 31.99,
    category: "Deporte / Fitness",
    image: "/img/PumaSmashV2.jpg",
    images: [
      "/img/PumaSmashV2.jpg",
      "/img/PumaSmashV2-1.jpg",
      "/img/PumaSmashV2-2.jpg",
    ],
    color: "Blanco",
  },
  {
    id: 28,
    name: "Adidas Unisex Zapatillas VS Pace 2.0",
    price: 36.99,
    category: "Deporte / Fitness",
    image: "/img/adidasUnisexChaussure.jpg",
    images: [
      "/img/adidasUnisexChaussure.jpg",
      "/img/adidasUnisexChaussure-1.jpg",
      "/img/adidasUnisexChaussure-2.jpg",
    ],
    color: "Blanco",
  },
  {
    id: 29,
    name: "Skechers Uno Stand on Air Zapatillas",
    price: 51.0,
    category: "Deporte / Fitness",
    image: "/img/SkechersUnoStandonAir.jpg",
    images: [
      "/img/SkechersUnoStandonAir.jpg",
      "/img/SkechersUnoStandonAir-1.jpg",
      "/img/SkechersUnoStandonAir-2.jpg",
    ],
    color: "Azul",
  },
  {
    id: 30,
    name: "Skechers Uno-Night Shades, Zapatillas",
    price: 56.99,
    category: "Deporte / Fitness",
    image: "/img/SkechersUno-NightShades.jpg",
    images: [
      "/img/SkechersUno-NightShades.jpg",
      "/img/SkechersUno-NightShades-1.jpg",
      "/img/SkechersUno-NightShades-2.jpg",
    ],
    color: "Blanco",
  },
  {
    id: 31,
    name: "Kit de Mancuernas Ajustables (20kg)",
    price: 47.0,
    category: "Deporte / Fitness",
    image: "/img/Halteres-reglables.jpg",
    images: ["/img/Halteres-reglables.jpg", "/img/Halteres-reglables-1.jpg"],
    color: "Negro",
  },
  {
    id: 32,
    name: "URLIFE Bicicleta Eléctrica para Adultos, Neumáticos Anchos de 16",
    price: 1201.0,
    category: "Deporte / Fitness",
    image: "/img/URLIFEVeloelectrique.jpg",
    images: [
      "/img/URLIFEVeloelectrique.jpg",
      "/img/URLIFEVeloelectrique-1.jpg",
      "/img/URLIFEVeloelectrique-2.jpg",
    ],
    color: "Blanco",
    // À COMPLÉTER avec les vraies données (puissance W, batterie Ah, autonomie km, poids,
    // marquage CE, EN 15194) puis ajouter une `description` et un titre avec l'unité (16").
  },
  {
    id: 33,
    name: "ZIPRO Bicicleta Estática para Adulto con Resistencia Magnética de 8 Niveles, Pantalla LCD",
    price: 111.0,
    category: "Deporte / Fitness",
    image: "/img/ZIPROVelo.jpg",
    images: ["/img/ZIPROVelo.jpg", "/img/ZIPROVelo-1.jpg"],
    color: "Negro",
  },
  {
    id: 34,
    name: "Dskeuzeew Bicicleta Estática Profesional para Gimnasio con Pantalla LCD y Portavasos",
    price: 241.0,
    category: "Deporte / Fitness",
    image: "/img/DskeuzeewVélo.jpg",
    images: [
      "/img/DskeuzeewVélo.jpg",
      "/img/DskeuzeewVélo-1.jpg",
      "/img/DskeuzeewVélo-2.jpg",
    ],
    color: "Negro",
  },
  {
    id: 35,
    name: "UrbanLuxe Colchoneta de Gimnasia Inflable Air Tumble Track para Volteretas y Acrobacias",
    price: 91.0,
    category: "Deporte / Fitness",
    image: "/img/TapisdeGymnastique.jpg",
    images: ["/img/TapisdeGymnastique.jpg", "/img/TapisdeGymnastique-1.jpg"],
    color: "Rosa",
  },
  {
    id: 36,
    name: "PROIRON Esterilla de Yoga Gruesa 10/15 mm, Antideslizante, para Fitness y Ejercicio",
    slug: "proiron-tapis-de-yoga-epais-10mm",
    price: 24.99,
    category: "Deporte / Fitness",
    image: "/img/PROIRONTapis.jpg",
    color: "Negro",
  },
  {
    id: 37,
    name: "Amazon Basics Balón Medicinal de Rebote (Slam Ball) para Ejercicio",
    slug: "amazon-basics-slam-medicine-balls-for",
    price: 20.99,
    category: "Deporte / Fitness",
    image: "/img/AmazonBasics.jpg",
    color: "Negro",
  },
  {
    id: 38,
    name: "QIANBAIYI Soporte para Mancuernas de 3 Posiciones, Compacto, para Gimnasio en Casa",
    slug: "qianbaiyi-support-d-halteres-a-3",
    price: 87.0,
    category: "Deporte / Fitness",
    image: "/img/QIANBAIYISupport.jpg",
    color: "Multicolor",
  },

  // ==========================================
  // BELLEZA Y CUIDADO PERSONAL
  // ==========================================
  {
    id: 39,
    name: "MIXA - Sérum Booster de Hidratación Intensa 24H - Rellena e Ilumina",
    price: 9.99,
    category: "Belleza y cuidado personal",
    image: "/img/MIXASérumBooste.jpg",
    color: "Blanco",
  },
  {
    id: 40,
    name: "CeraVe Crema Hidratante para Rostro y Cuerpo, Hidratación 48H",
    price: 18.99,
    category: "Belleza y cuidado personal",
    image: "/img/CeraVeBaume.jpg",
    color: "Blanco",
  },
  {
    id: 41,
    name: "Cepillo secador y moldeador TYMO - Secador y cepillo iónico «One-Step» para secar, alisar, rizar y dar volumen; 3 niveles de temperatura.",
    price: 48.0,
    category: "Belleza y cuidado personal",
    image: "/img/TYMOBrosse.jpg",
    color: "Negro",
  },

  // ==========================================
  // HOGAR & COCINA
  // ==========================================
  {
    id: 42,
    name: "Ninja Foodi FlexDrawer Freidora de Aire, Dual Zone Con Separador Extraíble",
    price: 151.0,
    category: "Cocina",
    image: "/img/NinjaFoodiFlexDrawerAir.jpg",
    color: "Gris",
  },
  // id 44 (Ninja cafetera "12 tazas / 60 onzas") : modèle probablement US 120 V → retiré.
  // Réactiver uniquement si c'est une version EU 230 V avec unités métriques.
  {
    id: 45,
    name: "ECOVACS T50 Omni GEN2 Robot Aspirador con Estación, Potencia de 21000 Pa",
    price: 271.0,
    category: "Hogar",
    image: "/img/ECOVACST50OmniGEN2Aspirateur.jpg",
    color: "Negro",
  },
  {
    id: 46,
    name: "Bissell PowerClean FurGuard 280W Aspiradora Inalámbrica con Cepillo Autolimpiante y Batería Extraíble",
    slug: "bissell-powerclean-furguard-280w-aspiradora-inal",
    price: 221.99,
    category: "Hogar",
    image: "/img/BissellPowerClean.jpg",
    color: "Negro",
  },
  {
    id: 47,
    name: "DREAME H15 Pro CarpetFlex aspiradora inalámbrica con mopa, aspiradora húmeda y seca con cepillos duales para pisos duros y alfombras",
    price: 361.99,
    category: "Hogar",
    image: "/img/DREAMEH15Pro.jpg",
    color: "Negro",
  },
  {
    id: 48,
    name: "Roborock H60 Ultra Aspiradora Escoba Inalámbrica, 210 AW, 90 min de autonomía, Tubo Plegable",
    slug: "aspiradora-escoba-inalambrica-roborock-h60-ultra",
    price: 129.0,
    category: "Hogar",
    image: "/img/roborockH60Ultra.jpg",
    images: ["/img/roborockH60Ultra.jpg", "/img/roborockH60Ultra-1.jpg"],
    color: "Negro",
  },
  {
    id: 49,
    name: "HORION Roku TV 40 QLED Smart FHD Televisión con Quantum Dot Color | Más de 500 canales en vivo gratis, Dolby Audio, compatible con Apple AirPlay",
    price: 179.0,
    category: "Hogar",
    image: "/img/TV4K.jpg",
    images: ["/img/TV4K.jpg", "/img/TV4K-1.jpg", "/img/TV4K-2.jpg"],
    color: "Azul",
  },
  // id 50 (mini refrigerador "3.5 pies cúbicos") : unités US, modèle probablement US → retiré.
  {
    id: 51,
    name: "EZVIZ C8c Cámara de Vigilancia 4K WiFi Exterior 360°, Seguimiento Automático, Visión Nocturna en Color",
    slug: "camara-de-vigilancia-ezviz-c8c-4k",
    price: 72.0,
    category: "Hogar",
    image: "/img/EZVIZC8c4K.jpg",
    images: [
      "/img/EZVIZC8c4K.jpg",
      "/img/EZVIZC8c4K-1.jpg",
      "/img/EZVIZC8c4K-2.jpg",
      "/img/EZVIZC8c4K-3.jpg",
    ],
    color: "Blanco",
  },
  {
    id: 52,
    name: "MERCUSYS MC510 Cámara WiFi Exterior 360° 2K, Visión Nocturna en Color, IP65, Alarma Sonora",
    slug: "camara-para-exteriores-wifi-360-mercusys",
    price: 28.0,
    category: "Hogar",
    image: "/img/MERCUSYS2K.jpg",
    images: [
      "/img/MERCUSYS2K.jpg",
      "/img/MERCUSYS2K-1.jpg",
      "/img/MERCUSYS2K-2.jpg",
    ],
    color: "Blanco",
  },
  {
    id: 53,
    name: "TP-Link Tapo Cámara de Seguridad Interior 1080P, Detección de Movimiento, Audio Bidireccional",
    slug: "tp-link-tapo-camara-de-seguridad",
    price: 9.0,
    category: "Hogar",
    image: "/img/TP-LinkTapo.jpg",
    images: [
      "/img/TP-LinkTapo.jpg",
      "/img/TP-LinkTapo-1.jpg",
      "/img/TP-LinkTapo-2.jpg",
    ],
    color: "Blanco",
  },
  {
    id: 55,
    name: "GASLAND GIH604BF Placa Mixta de Gas e Inducción 60 cm, Gas 5200 W con quemador wok",
    price: 341.99,
    category: "Cocina",
    image: "/img/GASLANDGIH604BF.jpg",
    images: [
      "/img/GASLANDGIH604BF.jpg",
      "/img/GASLANDGIH604BF-1.jpg",
      "/img/GASLANDGIH604BF-2.jpg",
    ],
    color: "Negro",
  },
  {
    id: 56,
    name: "Tumbona Bali de diseño cosmopolita - Beige. Chaise longue derecha - 1 plaza - tapicería de terciopelo - no convertible",
    price: 799.99,
    category: "Hogar",
    image: "/img/TumbonaBali.jpg",
    images: [
      "/img/TumbonaBali.jpg",
      "/img/TumbonaBali-1.jpg",
      "/img/TumbonaBali-2.jpg",
    ],
    color: "Beige",
  },
  {
    id: 57,
    name: "Juego de 6 Sillas de Comedor Smartue Beige, Patas de Madera Maciza, 81 × 56,4 × 52,6 cm",
    slug: "juego-de-6-sillas-de-comedor",
    price: 409.0,
    category: "Hogar",
    image: "/img/Juegode6sillas.jpg",
    images: [
      "/img/Juegode6sillas.jpg",
      "/img/Juegode6sillas-1.jpg",
      "/img/Juegode6sillas-2.jpg",
    ],
    color: "Beige",
  },
  {
    id: 58,
    name: "Aurlane DUALIDAD Mampara de Ducha Rectangular con Hidromasaje, Puerta Corredera, Aluminio Blanco Mate, 80 x 110 x 215 cm",
    slug: "aurlane-dualidad-mampara-de-ducha-rectangular",
    price: 599.0,
    category: "Hogar",
    image: "/img/AurlaneDUALIDAD.jpg",
    images: [
      "/img/AurlaneDUALIDAD.jpg",
      "/img/AurlaneDUALIDAD-1.jpg",
      "/img/AurlaneDUALIDAD-2.jpg",
    ],
    color: "Blanco",
  },
  {
    id: 60,
    name: "Amazon Echo Spot (modelo 2024) Despertador Inteligente con Alexa, Pantalla de 2,83 Pulgadas, Azul",
    slug: "asistente-virtual-amazon-alexa-echo-spot",
    price: 76.0,
    category: "Hogar",
    image: "/img/Asistentevirtual.jpg",
    images: ["/img/Asistentevirtual.jpg", "/img/Asistentevirtual-1.jpg"],
    color: "Azul",
  },
  {
    id: 61,
    name: "Nespresso Inissia YY1531FD Rojo Cafetera de cápsulas - 2 botones con parada automática - 19 bares - 0,7 L",
    price: 86.99,
    category: "Cocina",
    image: "/img/NespressoInissia.jpg",
    images: [
      "/img/NespressoInissia.jpg",
      "/img/NespressoInissia-2.jpg",
      "/img/NespressoInissia-1.jpg",
    ],
    color: "Rojo",
  },
];

const BRANDS = [
  "Amazon Basics",
  "HORION",
  "EZVIZ",
  "Amazon",
  "Apple",
  "Google",
  "Sony",
  "Bose",
  "Samsung",
  "Ninja",
  "Lenovo",
  "ASUS",
  "DJI",
  "Puma",
  "Adidas",
  "Skechers",
  "JBL",
  "Realme",
  "CeraVe",
  "MIXA",
  "TYMO",
  "Nintendo",
  "Nespresso",
  "TP-Link",
  "Bissell",
  "Dreame",
  "Roborock",
  "ECOVACS",
  "GASLAND",
  "Shark",
  "MERCUSYS",
  "QIANBAIYI",
  "URLIFE",
  "ZIPRO",
  "Aurlane",
  "Smartue",
  "UrbanLuxe",
  "Dskeuzeew",
  "PROIRON",
  "The G-Lab",
  "SHOKZ",
  "Soundcore",
  "Anker",
  "PlayStation",
];

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function detectBrand(name: string): string {
  if (/\biphone\b/i.test(name)) return "Apple";
  return (
    BRANDS.find((brand) =>
      new RegExp(
        `(?:^|[^a-z0-9])${escapeRegExp(brand)}(?:$|[^a-z0-9])`,
        "i",
      ).test(name),
    ) ?? "Genérico"
  );
}

function slugifyProductName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .split("-")
    .slice(0, 6)
    .join("-")
    .slice(0, 48)
    .replace(/-+$/g, "");
}

function getModel(name: string, brand: string): string | undefined {
  const model = name
    .replace(new RegExp(`^${escapeRegExp(brand)}\\s*`, "i"), "")
    .replace(/\s*\(Reacondicionado\)/gi, "")
    .trim();
  // Un titre long n'est pas un modèle : on l'affiche seulement s'il est court
  return model.length <= 45 ? model : undefined;
}

function getStorage(name: string): string | undefined {
  const match = name.match(/\b(\d+(?:[.,]\d+)?\s?(?:GB|TB))\b/i);
  return match?.[1].replace(/\s+/g, " ");
}

function detectColor(name: string): string | undefined {
  const colorPatterns: [RegExp, string][] = [
    [/\bnegro volc[aá]nico\b/i, "Negro volcánico"],
    [/\bnegro obsidiana\b/i, "Negro obsidiana"],
    [/\bnegro espacial\b/i, "Negro espacial"],
    [/\bgris espacial\b|\bgris sid[eé]ral\b/i, "Gris espacial"],
    [/\bblanco estrella\b/i, "Blanco estrella"],
    [/\btitanio natural\b/i, "Titanio natural"],
    [/\btitanio negro\b/i, "Titanio negro"],
    [/\bnegro\b|\bblack\b/i, "Negro"],
    [/\bblanco\b|\bwhite\b/i, "Blanco"],
    [/\bplata\b|\bsilver\b/i, "Plata"],
    [/\boro\b|\bgold\b/i, "Oro"],
    [/\bazul\b|\bblue\b/i, "Azul"],
    [/\brojo\b|\bred\b/i, "Rojo"],
    [/\bverde\b|\bgreen\b/i, "Verde"],
    [/\brosa\b|\bpink\b/i, "Rosa"],
    [/\bgris\b|\bgrey\b|\bgray\b/i, "Gris"],
  ];
  for (const [pattern, label] of colorPatterns) {
    if (pattern.test(name)) return label;
  }
  return undefined;
}

/**
 * Description produit : uniquement des informations sur le produit.
 * AUCUNE mention d'envoi, de retours ni de paiement (réservés aux pages légales).
 * Recommandé : renseigner `description` dans chaque entrée avec un texte propre.
 */
export function buildDescription(product: Product): string {
  if (product.description && product.description.trim() !== "") {
    return product.description;
  }

  const clauses: string[] = [`${product.name}.`];
  clauses.push(`Marca: ${product.brand}.`);

  if (product.condition === "refurbished") {
    clauses.push(
      `Producto reacondicionado y revisado por Espanapoint${
        product.grade ? `, estado estético Grado ${product.grade}` : ""
      }.`,
    );
  } else if (product.condition === "used") {
    clauses.push("Producto usado.");
  } else {
    clauses.push("Producto nuevo.");
  }

  if (product.color) clauses.push(`Color: ${product.color}.`);
  if (product.storage) clauses.push(`Almacenamiento: ${product.storage}.`);

  for (const spec of product.specs ?? []) {
    clauses.push(`${spec.label}: ${spec.value}.`);
  }

  if (
    product.condition !== "new" &&
    product.batteryHealth !== undefined &&
    product.batteryHealth !== ""
  ) {
    const text =
      typeof product.batteryHealth === "number"
        ? `${product.batteryHealth} %`
        : String(product.batteryHealth).trim();
    clauses.push(
      text.includes("%")
        ? `Salud de la batería: ${text}.`
        : `Batería: ${text}.`,
    );
  }

  if (product.warrantyMonths > 0) {
    clauses.push(`Garantía de ${product.warrantyMonths} meses.`);
  }

  return clauses.join(" ");
}

function buildProducts(): Product[] {
  const usedSlugs = new Set<string>();

  return PRODUCT_SEED.map((entry) => {
    const brand = entry.brand ?? detectBrand(entry.name);
    const condition: ProductCondition =
      entry.condition ??
      (/reacondicionado/i.test(entry.name)
        ? "refurbished"
        : /\busad[oa]s?\b|\bused\b/i.test(entry.name)
          ? "used"
          : "new");
    const model = entry.model ?? getModel(entry.name, brand);
    const storage = entry.storage ?? getStorage(entry.name);
    const warrantyMonths =
      entry.warrantyMonths ??
      (condition === "refurbished"
        ? siteConfig.warranty.refurbishedMonths
        : condition === "used"
          ? siteConfig.warranty.usedMonths
          : siteConfig.warranty.newMonths);
    const isRefurbishedIPhone =
      condition === "refurbished" && /\biphone\b/i.test(entry.name);

    const iphoneName = isRefurbishedIPhone
      ? `Apple ${model ?? entry.name}${storage ? ` ${storage}` : ""} Reacondicionado – Garantía ${warrantyMonths} meses`
      : entry.name;
    const name = iphoneName;
    const baseSlug =
      entry.slug || slugifyProductName(iphoneName) || `producto-${entry.id}`;

    let slug = baseSlug;
    let collisionIndex = 1;
    while (usedSlugs.has(slug)) {
      slug = `${baseSlug}-${entry.id}${collisionIndex === 1 ? "" : `-${collisionIndex}`}`;
      collisionIndex += 1;
    }
    usedSlugs.add(slug);

    const rawImages: string[] =
      entry.images && entry.images.length > 0
        ? [...entry.images]
        : entry.image
          ? [entry.image]
          : [];
    const uniqueImages: string[] = [];
    for (const img of rawImages) {
      if (img && !uniqueImages.includes(img)) uniqueImages.push(img);
      if (uniqueImages.length >= 3) break;
    }
    const images =
      uniqueImages.length > 0 ? uniqueImages : [entry.image || "/img/log.png"];

    const product: Product = {
      id: entry.id,
      slug,
      name,
      brand,
      model,
      category: entry.category,
      description: "",
      images,
      color: entry.color ?? detectColor(entry.name),
      colorsAvailable: entry.colorsAvailable,
      condition,
      grade: entry.grade,
      storage,
      // La santé de batterie n'a de sens que pour le reconditionné / l'occasion
      batteryHealth: condition === "new" ? undefined : entry.batteryHealth,
      specs: entry.specs,
      warrantyMonths,
      price: entry.price,
      priceCurrency: "EUR",
      availability: entry.availability ?? "InStock",
      gtin13: entry.gtin13,
      mpn: entry.mpn,
      canonicalOf: entry.canonicalOf,
    };

    product.description = entry.description || buildDescription(product);
    return product;
  });
}

export const PRODUCTS_DATA: Product[] = buildProducts();

export function getProductSlug(product: Product): string {
  return product.slug;
}

export function getProductUrl(product: Product): string {
  const canonicalSlug = product.canonicalOf || product.slug;
  return `/produits/${canonicalSlug}`;
}

export function getProductCanonicalUrl(product: Product): string {
  return `${SITE_URL}${getProductUrl(product)}`;
}

export function getProductByRouteId(routeId: string): Product | undefined {
  const idFromLegacySlug = Number(routeId.match(/-(\d+)$/)?.[1]);
  return PRODUCTS_DATA.find(
    (product) =>
      product.slug === routeId ||
      product.id === Number(routeId) ||
      (Number.isInteger(idFromLegacySlug) && product.id === idFromLegacySlug),
  );
}

export function getProductBrand(product: Product): string {
  return product.brand;
}

export function getProductDescription(product: Product): string {
  return buildDescription(product);
}

export function getVerifiedProductCondition(
  product: Product,
): ProductCondition {
  return product.condition;
}

export function getAvailabilityLabel(
  availability: ProductAvailability,
): string {
  switch (availability) {
    case "InStock":
      return "En stock";
    case "OutOfStock":
      return "Agotado";
    case "PreOrder":
      return "Preventa";
  }
}

export function getProductConditionLabel(product: Product): string {
  if (product.condition === "refurbished") {
    return `Reacondicionado${product.grade ? ` – Grado ${product.grade}` : ""}`;
  }
  return product.condition === "used" ? "Usado" : "Nuevo";
}

export function toAbsoluteProductImage(image: string): string {
  return image.startsWith("http") ? image : `${SITE_URL}${image}`;
}

export function resolveCheckoutItems(items: unknown) {
  if (!Array.isArray(items) || items.length === 0 || items.length > 100) {
    return undefined;
  }

  const resolvedItems: Array<{ product: Product; quantity: number }> = [];

  for (const item of items) {
    if (
      typeof item !== "object" ||
      item === null ||
      !("id" in item) ||
      !("quantity" in item) ||
      typeof item.id !== "number" ||
      !Number.isInteger(item.id) ||
      typeof item.quantity !== "number" ||
      !Number.isInteger(item.quantity) ||
      item.quantity < 1 ||
      item.quantity > 99
    ) {
      return undefined;
    }

    const product = PRODUCTS_DATA.find((entry) => entry.id === item.id);
    if (!product) return undefined;

    resolvedItems.push({ product, quantity: item.quantity });
  }

  const totalCents =
    resolvedItems.reduce(
      (total, item) =>
        total + Math.round(item.product.price * 100) * item.quantity,
      0,
    ) + Math.round(siteConfig.shipping.cost * 100);

  return { items: resolvedItems, totalCents };
}