import { SITE_URL, siteConfig } from "./siteConfig";

export type ProductCondition = "new" | "refurbished" | "used";
export type ProductAvailability = "InStock" | "OutOfStock" | "PreOrder";

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
  /** Color del producto (ej: "Negro", "Azul Sierra", "Blanco Estrella") */
  color?: string;
  /** Colores disponibles adicionales si aplica */
  colorsAvailable?: string[];
  /** Salud o capacidad de la batería (ej: 88, 100, "95%", "85-100%", "Excelente") */
  batteryHealth?: number | string;
  /** Alias conveniente para batteryHealth (ej: battery: "100%" o battery: 88) */
  battery?: number | string;
  /** Capacidad de almacenamiento (ej: "128 GB", "256 GB", "1 TB") */
  storage?: string;
  /** Modelo del producto si se quiere forzar un texto específico */
  model?: string;
  /** Marca del producto si se quiere forzar una marca específica */
  brand?: string;
  /** Grado estético para reacondicionados: "A+" | "A" | "B" */
  grade?: "A+" | "A" | "B";
  /** Meses de garantía */
  warrantyMonths?: number;
  /** Estado del producto: "new" | "refurbished" | "used" */
  condition?: ProductCondition;
  /** Lista de imágenes (hasta 3 imágenes diferentes por producto) */
  images?: string[];
  /** Descripción personalizada (si no se especifica, se generará automáticamente) */
  description?: string;
  /** Disponibilidad del producto */
  availability?: ProductAvailability;
  /** Código GTIN/EAN */
  gtin13?: string;
  /** Número de pieza del fabricante */
  mpn?: string;
  /** Ruta canónica / slug alternativo si aplica */
  canonicalOf?: string;
  /** Slug personalizado opcional */
  slug?: string;
};

const PRODUCT_SEED: ProductSeedEntry[] = [
  // ==========================================
  // DISPOSITIVOS ELECTRÓNICOS & VIDEOJUEGOS (24 Productos)
  // ==========================================
  {
    id: 1,
    name: "iPhone 13 Pro Max (Reacondicionado)",
    price: 331.99,
    category: "Dispositivos electrónicos",
    image:
      "/img/apple-iphone-13-pro-max-1.avif",
    images: [
      "/img/apple-iphone-13-pro-max-1.avif",
      "/img/apple-iphone-13-pro-max-2.avif",
      "/img/apple-iphone-13-pro-max-3.avif",
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
    image:
      "/img/iphone-14-pro-1.avif",
    images: [
      "/img/iphone-14-pro-2.avif",
      "/img/iphone-14-pro-3.avif",
    ],
    storage: "128 GB",
    color: "marrón",
    batteryHealth: 95,
    grade: "A+",
  },
  {
    id: 3,
    name: "iPhone 15 (Reacondicionado)",
    price: 461.99,
    category: "Dispositivos electrónicos",
    image:
      "/img/iphone-15-768x768-1.avif",
    images: [
      "/img/iphone-15-768x768-2.avif",
      "/img/iphone-15-768x768-1.avif",
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
    image:
      "/img/iphone-15-pro-1.avif",
    images: [
      "/img/iphone-15-pro-2.avif",
      "/img/iphone-15-pro-3.avif", 
      "/img/iphone-15-pro-4.avif",
    ],
    storage: "256 GB",
    color: "Negro",
    batteryHealth: 94,
    grade: "A+",
  },
  {
    id: 5,
    name: "Apple iPhone 16 (128 GB) (Reacondicionado) - Negro + Funda Transparente con MagSafe",
    price: 671.99,
    category: "Dispositivos electrónicos",
    image: "/img/iPhone16-1.avif",
    images: [
      "/img/iPhone16-2.avif",
      "/img/iPhone16-3.avif",
    ],
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
    image:
      "/img/apple-iphone-16-pro-.avif",
    images: [
      "/img/apple-iphone-16-pro-1.avif",
      "/img/apple-iphone-16-pro-.avif",
      "/img/apple-iphone-16-pro-2.avif",
    ],
    storage: "256 GB",
    color: "Titanio Negro",
    batteryHealth: 98,
    grade: "A+",
  },
  {
    id: 7,
    name: "Google Pixel 11 Pro - Smartphone Android libre - Negro volcánico, 256 GB | Con inteligencia Gemini, más de 30 horas de autonomía y pantalla Super",
    price: 1150.0,
    category: "Dispositivos electrónicos",
    image: "/img/GooglePixel11Pro.avif",
    images: [
      "/img/GooglePixel11Pro-1.avif",
      "/img/GooglePixel11Pro-2.avif",
    ],
    storage: "256 GB",
    color: "Negro",
    batteryHealth: 94,
  },
  { 
    id: 8,
    name: "Google Pixel 10 Pro XL – Smartphone Android libre con Gemini, triple cámara trasera, más de 24 horas de autonomía y pantalla Super Actua de 6,8 pulgadas.",
    price: 929.0,
    category: "Dispositivos electrónicos",
    image: "/img/GooglePixel10ProXL.avif",
    images: [
      "/img/GooglePixel10ProXL-1.avif",
      "/img/GooglePixel10ProXL-2.avif",
      "/img/GooglePixel10ProXL.avif",
    ],
    storage: "256 GB",
    color: "Negro",
    batteryHealth: 94,
  },
  {
    id: 9,
    name: "Apple MacBook Pro - Ordenador portátil con chip M5, CPU de 10 núcleos y GPU de 10 núcleos: diseñado para Apple Intelligence, pantalla Liquid Retina XDR de 14,2 pulgadas, 1 TB de almacenamiento; plata, inglés.",
    price: 2199.0,
    category: "Dispositivos electrónicos",
    image: "/img/AppleMacBookPro.avif",
    images: [
      "/img/AppleMacBookPro.avif",
      "/img/AppleMacBookPro-1.avif",
      "/img/AppleMacBookPro-2.avif",

    ],
    color: "Blanco",
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
    storage: "1 T",
    color: "Negro",
  },
  {
    id: 11,
    name: "Apple AirPods Pro 3 Auriculares Inalámbricos, Cancelación Activa de Ruido",
    price: 151.0,
    category: "Dispositivos electrónicos",
    image: "/img/AppleAirPodsPro3.jpg",
    images: [
      "/img/AppleAirPodsPro3-1.jpg",
      "/img/AppleAirPodsPro3.jpg",
    ],
    storage: "95 % ",
    color: "Blanco",
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
    storage: "Hasta 30 horas (con cancelación de ruido activa)",
    color : "Negro",
    
  },
  {
    id: 13,
    name: "Apple Watch Series 9 (GPS + Cellular, 45 MM) Caja de Aluminio Blanco Estrella con Correa Deportiva Blanco Estrella, M/L (Reacondicionado)",
    price: 371.0,
    category: "Dispositivos electrónicos",
    image: "/img/AppleWatchSeries9.avif",
     images: [
      "/img/AppleWatchSeries9-1.avif",
      "/img/AppleWatchSeries9.avif",
      "/img/AppleWatchSeries9-2.avif",
    ],
    color: "Blanco Estrella",   // au lieu de "Negro" (contredit le titre)
batteryHealth: 95,
grade: "A+",
  },

  {
    id: 14,
    name: "SHOKZ OpenFit Pro Open Ear Auriculares Inalámbricos Negro",
    price: 271.0,
    category: "Dispositivos electrónicos",
    image: "/img/SHOKZOpenFitProOpen.jpg",
    images: [
      "/img/SHOKZOpenFitProOpen.jpg",
      "/img/SHOKZOpenFitProOpen-1.jpg",
    ],
    color : "Negro",
      storage: "Hasta 12 horas (50 horas con el estuche de carga)",
  },
  {
    id: 15,
    name: "Realme Buds Clip",
    price: 71.99,
    category: "Dispositivos electrónicos",
    image:
      "/img/realme-buds-clip-2025-300x300.jpg",
    images: [
      "/img/realme-buds-clip-2025-300x300.jpg",
      "/img/realme-buds-clip-2025-300x300-1.jpg",
      "/img/realme-buds-clip-2025-300x300-2.jpg",
    ],
    batteryHealth: 90,
    storage: "Hasta 12 horas (hasta 48 horas con el estuche de carga)",
    color : "Negro",
  },





  
  {
    id: 16,
    name: "JBL Wave Beam 2, Auriculares Inalámbricos Bluetooth, Cancelación de Ruido, 40 horas de autonomía",
    price: 51.99,
    category: "Dispositivos electrónicos",
    image: "/img/JBLWaveBeam2.jpg",
    images: [
      "/img/JBLWaveBeam2.jpg",
      "/img/JBLWaveBeam2-1.jpg",
    ],
     color: "Azur",
       storage: "Hasta 40 horas en total (con el estuche de carga)",
  },
  // {
  //   id: 17,
  //   name: "Auriculares inalámbricos para Apple iPhone - Auriculares Bluetooth 5.4 con ganchos para el oído, Estéreo",
  //   price: 30.0,
  //   category: "Dispositivos electrónicos",
  //   image: "/img/ecouteurssansfilpourApple.jpg",
  //    color: "Negro", 
  //    storage: "64 GB",
  // },
  {
    id: 18,
    name: "Auriculares con cancelación de ruido, con y sin cable, con micrófono Bose QuietComfort Ultra 2.ª generación - Negro",
    price: 220,
    category: "Dispositivos electrónicos",
    image: "/img/SoundcoreSpaceOneCasque.avif",
    images: [
      "/img/SoundcoreSpaceOneCasque-2.avif",
      "/img/SoundcoreSpaceOneCasque-1.avif",
    ],
     color: "Negro",
     storage: "Hasta 30 horas (con cancelación de ruido activa)",
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
    color: "Negro",
storage: "Ranura microSD (hasta 1 TB, tarjeta no incluida)",
battery: "Hasta 166 minutos de grabación",

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
     storage: "Pantalla LCD Full HD 1080p de 8",
    color: "Blanco",
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
       storage: "Interruptores mecánicos rojos (lineales)",
    color: "Negro",
  },
  {
    id: 25,
    name: "SSD externo SanDisk Extreme de 1 TB (hasta 1050 MB/s de lectura, 1000 MB/s de escritura, USB-C, NVMe portátil, resistencia al polvo)",
    price: 159.0,
    category: "Dispositivos electrónicos",
    image: "/img/SANDISKextremeDisqueSSD.jpg",
    images: [
      "/img/SANDISKextremeDisqueSSD.jpg",
      "/img/SANDISKextremeDisqueSSD-1.jpg",
      "/img/SANDISKextremeDisqueSSD-2.jpg",
    ],
    color: "Negro",
    storage: "1 TB",
  },

  // ==========================================
  // DEPORTE / FITNESS (13 Productos)
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
    images: [
      "/img/Halteres-reglables.jpg",
      "/img/Halteres-reglables-1.jpg",
    ],
    color: "Negro",
  },
  {
    id: 32,
    name: 'URLIFE Bicicleta Eléctrica para Adultos, Neumáticos Anchos de 16',
    price: 1201.0,
    category: "Deporte / Fitness",
    image: "/img/URLIFEVeloelectrique.jpg",
    images: [
      "/img/URLIFEVeloelectrique.jpg",
      "/img/URLIFEVeloelectrique-1.jpg",
      "/img/URLIFEVeloelectrique-2.jpg",
    ],
    color: "Blanco",
  },
  {
    id: 33,
    name: "ZIPRO Bicicleta Estática para Adulto con Resistencia Magnética de 8 Niveles, Pantalla LCD",
    price: 111.0,
    category: "Deporte / Fitness",
    image: "/img/ZIPROVelo.jpg",
    images: [
      "/img/ZIPROVelo.jpg",
      "/img/ZIPROVelo-1.jpg",
    ],
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
    images: [
      "/img/TapisdeGymnastique.jpg",
      "/img/TapisdeGymnastique-1.jpg",
    ],
    color: "Rosa",
  },
  {
    id: 36,
    name: "PROIRON Tapis de Yoga Epais 10MM/15MM,Antidérapant Tapis d'exercice Fitness",
    price: 24.99,
    category: "Deporte / Fitness",
    image: "/img/PROIRONTapis.jpg",
    color: "Negro",
  },
  {
    id: 37,
    name: "Amazon Basics Slam Medicine Balls for Exercise",
    price: 20.99,
    category: "Deporte / Fitness",
    image: "/img/AmazonBasics.jpg",
    color: "Negro",
  },
  {
    id: 38,
    name: "QIANBAIYI Support d'haltères, à 3 positions, peu encombrant, pour la salle de gym à la maison et la salle de sport, organisateur pour haltères",
    price: 87.0,
    category: "Deporte / Fitness",
    image: "/img/QIANBAIYISupport.jpg",
    color: "Multicolor",
  },

  // ==========================================
  // BELLEZA Y CUIDADO PERSONAL (3 Productos)
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
  // HOGAR & COCINA (14 Productos)
  // ==========================================
  {
    id: 42,
    name: "Ninja Foodi FlexDrawer Freidora de Aire, Dual Zone Con Separador Extraíble",
    price: 151.0,
    category: "Cocina",
    image: "/img/NinjaFoodiFlexDrawerAir.jpg",
    color: "Gris",
  },
  {
    id: 43,
    name: "Cosori TurboBlaze - Freidora de aire, 9 en 1, 6 cuartos de galón | 90°–450°F, 5 velocidades de ventilador de nivel, freír al aire 9 en 1, asar, hornear",
    price: 85.0,
    category: "Cocina",
    image: "/img/CosoriTurboBlaze.jpg",
    color: "Negro",
  },
  {
    id: 44,
    name: "Ninja Cafetera programable de 12 tazas, 2 estilos de preparación, plato caliente ajustable, depósito de agua de 60 onzas, preparación retardada, negro/acero",
    price: 199.99,
    category: "Cocina",
    image: "/img/NinjaCafetera.jpg",
    color: "Negro",
  },
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
    name: "Bissell PowerClean FurGuard 280W Aspiradora inalámbrica que se mantiene en pie con cepillo autolimpiante, succión fuerte, battery extraíble",
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
    name: "Aspiradora escoba inalámbrica Roborock H60 Ultra, 210 AW, 90 min de autonomía | Tubo plegable a 90°, filtración del 99,9%, cepillo antienredos para alfombras y suelos duros",
    price: 129.0,
    category: "Hogar",
    image: "/img/roborockH60Ultra.jpg",
    images: [
      "/img/roborockH60Ultra.jpg",
      "/img/roborockH60Ultra-1.jpg",
    ],
    color: "Negro",
  },



  {
    id: 49,
    name: "HORION Roku TV 40 QLED Smart FHD Televisión con Quantum Dot Color | Más de 500 canales en vivo gratis, Dolby Audio, compatible con Apple AirPlay",
    price: 179.0,
    category: "Hogar",
    image: "/img/TV4K.jpg",
    images: [
      "/img/TV4K.jpg",
      "/img/TV4K-1.jpg",
      "/img/TV4K-2.jpg", 
    ],
    color: "azul",
  },
  {
    id: 50,
    name: "Mini refrigerador retro de 3.5 pies cúbicos con congelador, azul, 2 puertas | Elegante mini refrigerador azul retro con capacidad de 3.5 pies cúbicos",
    price: 79.0,
    category: "Hogar",
    image: "/img/Minirefrigerador.jpg",
    images: [
      "/img/Minirefrigerador.jpg",
      "/img/Minirefrigerador-1.jpg",
      "/img/Minirefrigerador-3.jpg", 
    ],
    color: "azul",
  },
  {
    id: 51,
    name: "Cámara de vigilancia EZVIZ C8c 4K WiFi para exteriores de 360° con seguimiento y zoom automáticos, detección de formas humanas y de vehículos, visión nocturna a color y audio.",
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
    name: "Cámara para exteriores WiFi 360° MERCUSYS 2K, MC510 | Visión nocturna a color, detección de personas y seguimiento de movimiento, resistencia al agua IP65, alarma sonora personalizable",
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
    name: "TP-Link Tapo - Cámara de seguridad interior de 1080P para monitor de bebé, cámara para perros con detección de movimiento, sirena de audio bidireccional",
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
    id: 54,
    name: "SNDOAS Placa de Gas de 4 Fuegos Cristal Blanco, Placa de Gas Integrable",
    price: 131.0,
    category: "Cocina",
    image: "/img/SNDOASPlaque.jpg", 
    images: [
      "/img/SNDOASPlaque.jpg",
      "/img/SNDOASPlaque-1.jpg",
      "/img/SNDOASPlaque-2.jpg", 
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
    color: "Black",
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
    name: "Juego de 6 sillas de comedor Smartue color beige, patas de madera, 81 × 56,4 × 52,6 cm. Juego de 6 sillas de comedor color beige - Patas de madera maciza, respaldo curvo, asiento de tela",
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
    name: "Aurlane DUALIDAD Mampara de ducha rectangular - Aluminio Blanco mate - Puerta corredera - Hidromasaje - 80 x 110 x 215 cm",
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
    name: "Asistente virtual Amazon Alexa Echo Spot 2024 Azul Amazon Echo Spot (modelo 2024): despertador inteligente azul, pantalla de 2,83 pulgadasy Alexa.",
    price: 76.0,
    category: "Hogar",
    image: "/img/Asistentevirtual.jpg",
     images: [
      "/img/Asistentevirtual.jpg",
      "/img/Asistentevirtual-1.jpg",
    ],
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
    color: "Negro",
  },
  {
    id: 62,
    name: "Samsung OLED de 27 - Odyssey G5 S27FG500SU Pantalla de PC 2.5K - 2560 x 1440 píxeles - 0,03 ms (gris a gris) - 16:9 - Panel OLED - 180 Hz - HDR10 - Compatible con FreeSync / G-SYNC - HDMI/DisplayPort - Negro",
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
    name: "Lenovo Yoga Slim 7 14ILL10 (83JX00AHFR), Intel Core Ultra 7 258V, 32 GB de RAM, SSD de 1 TB, pantalla OLED de 14\" (2.8K), Wi-Fi 7/Bluetooth, cámara web, Windows 11 Home",
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
  },
  {
    id: 64,
    name: "ASUS Zenbook 14 OLED UM3406GA-QD013W AMD Ryzen AI 5 430, SSD de 16 GB, 512 GB de almacenamiento, pantalla OLED Full HD+ de 14, Wi-Fi 7/Bluetooth, cámara web, Windows 11 Home.",
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
  },
];

function detectBrand(name: string): string {
  const brands = [
    "Amazon Basics",
    "HORION",
    "EZVIZ",
    "Amazon",
    "Apple",
    "Google",
    "Sony",
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
    "Cosori",
    "TP-Link",
    "Bissell",
    "Dreame",
    "Roborock",
    "ECOVACS",
    "GASLAND",
    "SanDisk",
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
    "SNDOAS",
    "Anker",
    "PlayStation",
  ];

  if (/\biphone\b/i.test(name)) return "Apple";
  return (
    brands.find((brand) =>
      new RegExp(
        `(?:^|[^a-z0-9])${brand.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:$|[^a-z0-9])`,
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

const usedSlugs = new Set<string>();

function getModel(name: string, brand: string): string {
  return name
    .replace(
      new RegExp(`^${brand.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*`, "i"),
      "",
    )
    .replace(/\s*\(Reacondicionado\)/gi, "")
    .trim();
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
    [/\bblanco estrella\b|\bblanc stellaire\b/i, "Blanco estrella"],
    [/\btitanio natural\b/i, "Titanio natural"],
    [/\btitanio negro\b/i, "Titanio negro"],
    [/\btitanio blanco\b/i, "Titanio blanco"],
    [/\btitanio azul\b/i, "Titanio azul"],
    [/\bazul sierra\b/i, "Azul sierra"],
    [/\bazul pac[ií]fico\b/i, "Azul pacífico"],
    [/\bazul medianoche\b/i, "Azul medianoche"],
    [/\bverde alpino\b/i, "Verde alpino"],
    [/\boro rosa\b/i, "Oro rosa"],
    [/\bnegro\b|\bnoir\b|\bblack\b/i, "Negro"],
    [/\bblanco\b|\bblanc\b|\bwhite\b/i, "Blanco"],
    [/\bplata\b|\bsilver\b/i, "Plata"],
    [/\boro\b|\bgold\b/i, "Oro"],
    [/\bazul\b|\bbleu\b|\bblue\b/i, "Azul"],
    [/\brojo\b|\bred\b|\brouge\b/i, "Rojo"],
    [/\bverde\b|\bgreen\b|\bvert\b/i, "Verde"],
    [/\brosa\b|\bpink\b|\brose\b/i, "Rosa"],
    [/\bcian\b|\bcyan\b/i, "Cian"],
    [/\bamari(?:llo|lla)\b|\byellow\b|\bjaune\b/i, "Amarillo"],
    [/\bmorado\b|\bp[uú]rpura\b|\bpurple\b|\bviolet\b/i, "Morado"],
    [/\bnaranja\b|\borange\b/i, "Naranja"],
    [/\bgri(?:s|ses)\b|\bgrey\b|\bgray\b/i, "Gris"],
  ];

  for (const [pattern, label] of colorPatterns) {
    if (pattern.test(name)) {
      return label;
    }
  }
  return undefined;
}

export function buildDescription(product: Product): string {
  if (product.description && product.description.trim() !== "") {
    return product.description;
  }

  const clauses: string[] = [];
  const productModel = product.model || product.name;

  if (product.condition === "refurbished") {
    const details = [
      product.storage,
      product.grade ? `estado Grado ${product.grade}` : undefined,
    ]
      .filter(Boolean)
      .join(", ");
    clauses.push(
      `${productModel} reacondicionado por Espanapoint${details ? `, ${details}` : ""}.`,
    );
  } else {
    clauses.push(`${productModel}.`);
  }

  if (product.color) {
    clauses.push(`Color: ${product.color}.`);
  }

  if (product.batteryHealth !== undefined && product.batteryHealth !== "") {
    const batteryText =
      typeof product.batteryHealth === "number"
        ? `${product.batteryHealth} %`
        : String(product.batteryHealth).trim();
    clauses.push(
      batteryText.includes("%")
        ? `Batería con ${batteryText} de capacidad.`
        : `Batería: ${batteryText}.`,
    );
  }
  if (product.warrantyMonths > 0) {
    clauses.push(
      `Incluye garantía por escrito de ${product.warrantyMonths} meses.`,
    );
  }

  clauses.push(
    siteConfig.shipping.label,
    siteConfig.returns.label,
    siteConfig.paymentLabel,
  );
  return clauses.join(" ");
}

export const PRODUCTS_DATA: Product[] = PRODUCT_SEED.map((entry) => {
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

  // Preserve historical slug structure unless a custom slug is specified
  const nameForSlug = isRefurbishedIPhone
    ? `Apple ${model}${getStorage(entry.name) ? ` ${getStorage(entry.name)}` : ""} Reacondicionado – Garantía ${warrantyMonths} meses`
    : entry.name;
  const name = isRefurbishedIPhone
    ? `Apple ${model}${storage ? ` ${storage}` : ""} Reacondicionado – Garantía ${warrantyMonths} meses`
    : entry.name;
  const baseSlug = entry.slug || slugifyProductName(nameForSlug) || `producto-${entry.id}`;
  let slug = baseSlug;
  let collisionIndex = 1;
  while (usedSlugs.has(slug)) {
    slug = `${baseSlug}-${entry.id}${collisionIndex === 1 ? "" : `-${collisionIndex}`}`;
    collisionIndex += 1;
  }
  usedSlugs.add(slug);

  // Supporte jusqu'à 3 images différentes par produit
  const rawImages: string[] = [];
  if (entry.images && Array.isArray(entry.images) && entry.images.length > 0) {
    rawImages.push(...entry.images);
  } else if (entry.image) {
    rawImages.push(entry.image);
  }
  const uniqueImages: string[] = [];
  for (const img of rawImages) {
    if (img && typeof img === "string" && !uniqueImages.includes(img)) {
      uniqueImages.push(img);
    }
    if (uniqueImages.length >= 3) break;
  }
  const images = uniqueImages.length > 0 ? uniqueImages : [entry.image || "/img/log.png"];
  const color = entry.color ?? detectColor(entry.name);
  const batteryHealth = entry.batteryHealth ?? entry.battery;

  const product: Product = {
    id: entry.id,
    slug,
    name,
    brand,
    model,
    category: entry.category,
    description: "",
    images,
    color,
    colorsAvailable: entry.colorsAvailable,
    condition,
    grade: entry.grade,
    storage,
    batteryHealth,
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
