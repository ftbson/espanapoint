export type ProductCondition = "new" | "refurbished";
export type ProductAvailability = "in_stock" | "out_of_stock" | "preorder" | "backorder";
export type ProductStockStatus = "confirmed" | "pending";

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: number;
  slug: string;
  title: string;
  name: string;
  price: number;
  currency: "EUR";
  category: string;
  image: string;
  images: ProductImage[];
  brand?: string;
  model?: string;
  gtin?: string;
  mpn?: string;
  availability?: ProductAvailability;
  stock: number | null;
  stockStatus: ProductStockStatus;
  condition: ProductCondition;
  conditionGrade?: string;
  professionallyRefurbished?: boolean;
  warranty?: string;
  shortDescription: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  whatsInTheBox?: string[];
  descriptionStatus: "draft" | "verified";
  isMerchantReady?: boolean;
}

type ProductSeedEntry = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
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
      "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/09/apple-iphone-13-pro-max-frandroid-2021-768x768.png?webp=1&key=33af98cc",
  },
  {
    id: 2,
    name: "iPhone 14 Pro (Reacondicionado)",
    price: 421.99,
    category: "Dispositivos electrónicos",
    image:
      "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2022/09/iphone-14-pro-max-officiel-frandroid-2022-768x768.png?webp=1&key=1e26da76",
  },
  {
    id: 3,
    name: "iPhone 15 (Reacondicionado)",
    price: 461.99,
    category: "Dispositivos electrónicos",
    image:
      "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2023/09/iphone-15-768x768.png?webp=1&key=62513184",
  },
  {
    id: 4,
    name: "iPhone 15 Pro Max (Reacondicionado)",
    price: 521.99,
    category: "Dispositivos electrónicos",
    image:
      "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2023/09/iphone-15-pro-max-768x768.png?webp=1&key=6d7ed62f",
  },
  {
    id: 5,
    name: "Apple iPhone 16 (128 GB) (Reacondicionado) - Cian + Funda Transparente con MagSafe",
    price: 671.99,
    category: "Dispositivos electrónicos",
    image: "/img/iPhone16.jpg",
  },
  {
    id: 6,
    name: "iPhone 16 Pro Max (Reacondicionado)",
    price: 691.99,
    category: "Dispositivos electrónicos",
    image:
      "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2024/08/apple-iphone-16-pro-max-frandroid-2024-hd-768x768.png?webp=1&key=ce4d50e3",
  },
  {
    id: 7,
    name: "Google Pixel 11 Pro - Smartphone Android libre - Negro volcánico, 256 GB | Con inteligencia Gemini, más de 30 horas de autonomía y pantalla Super",
    price: 1150.0,
    category: "Dispositivos electrónicos",
    image: "/img/GooglePixel11Pro.jpg",
  },
  {
    id: 8,
    name: "Google Pixel 10 Pro XL – Smartphone Android libre con Gemini, triple cámara trasera, más de 24 horas de autonomía y pantalla Super Actua de 6,8 pulgadas.",
    price: 929.0,
    category: "Dispositivos electrónicos",
    image: "/img/GooglePixel10ProXL.jpg",
  },
  {
    id: 9,
    name: "Apple MacBook Pro - Ordenador portátil con chip M5, CPU de 10 núcleos y GPU de 10 núcleos: diseñado para Apple Intelligence, pantalla Liquid Retina XDR de 14,2 pulgadas, 1 TB de almacenamiento; plata, inglés.",
    price: 2199.0,
    category: "Dispositivos electrónicos",
    image: "/img/AppleMacBookPro-Ordinateur.jpg",
  },
  {
    id: 10,
    name: "PC gaming Shark RGBeast Mini R502",
    price: 1299.0,
    category: "Dispositivos electrónicos",
    image: "/img/SharkRGBeastMiniR502.jpg",
  },
  {
    id: 11,
    name: "Apple AirPods Pro 3 Auriculares Inalámbricos, Cancelación Activa de Ruido",
    price: 151.0,
    category: "Dispositivos electrónicos",
    image: "/img/AppleAirPodsPro3.jpg",
  },
  {
    id: 12,
    name: "Sony WH-1000XM5SA Edición Especial con estuche blando, Cancelación Activa de Ruido, Bluetooth, calidad de llamada clara",
    price: 211.0,
    category: "Dispositivos electrónicos",
    image: "/img/SonyWH-1000XM5SA.jpg",
  },
  {
    id: 13,
    name: "Apple Watch Series 9 (GPS + Cellular, 45 MM) Caja de Aluminio Blanco Estrella con Correa Deportiva Blanco Estrella, M/L (Reacondicionado)",
    price: 371.0,
    category: "Dispositivos electrónicos",
    image: "/img/AppleWatchSeries9.jpg",
  },
  {
    id: 14,
    name: "SHOKZ OpenFit Pro Open Ear Auriculares Inalámbricos Negro",
    price: 271.0,
    category: "Dispositivos electrónicos",
    image: "/img/SHOKZOpenFitProOpen.jpg",
  },
  {
    id: 15,
    name: "Realme Buds Clip",
    price: 71.99,
    category: "Dispositivos electrónicos",
    image:
      "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2025/12/realme-buds-clip-frandroid-2025-300x300.png?webp=1&key=4be0b994",
  },
  {
    id: 16,
    name: "JBL Wave Beam 2, Auriculares Inalámbricos Bluetooth, Cancelación de Ruido, 40 horas de autonomía",
    price: 51.99,
    category: "Dispositivos electrónicos",
    image: "/img/JBLWaveBeam2.jpg",
  },
  {
    id: 17,
    name: "Auriculares inalámbricos para Apple iPhone - Auriculares Bluetooth 5.4 con ganchos para el oído, Estéreo",
    price: 30.0,
    category: "Dispositivos electrónicos",
    image: "/img/ecouteurssansfilpourApple.jpg",
  },
  {
    id: 18,
    name: "Soundcore Space One Auricules de Diadema Bluetooth Inalámbricos con Cancelación Activa de Ruido Adaptativa de Anker",
    price: 21.99,
    category: "Dispositivos electrónicos",
    image: "/img/SoundcoreSpaceOneCasque.jpg",
  },
  {
    id: 19,
    name: "DJI Osmo Pocket 3 + Transmisor Mic Mini (Negro Obsidiana), cámara para vlogging, micrófono inalámbrico",
    price: 401.0,
    category: "Dispositivos electrónicos",
    image: "/img/DJIOsmoPocket3.jpg",
  },
  {
    id: 20,
    name: "DJI Osmo Pocket 4 Essential Bundle, cámara de vlogging de bolsillo con gimbal | Sensor CMOS de 1 pulgada y 4K/240 fps, estabilización de 3 ejes",
    price: 471.0,
    category: "Dispositivos electrónicos",
    image: "/img/BundleEssentielDJIOsmoPocket4.jpg",
  },
  {
    id: 21,
    name: "Sony, Consola PlayStation 5 Edición Estándar 1 TB con lector Blu-ray 4K, SSD Ultrarrápido, Audio 3D",
    price: 481.99,
    category: "Dispositivos electrónicos",
    image: "/img/SonyConsolePlayStation5.jpg",
  },
  {
    id: 22,
    name: 'Playstation Sony, Reproductor a Distancia Portal 5, Pantalla LCD Full HD de 8", Juegos en Streaming vía Wi-Fi',
    price: 211.0,
    category: "Dispositivos electrónicos",
    image: "/img/PlaystationSonyLecteur.jpg",
  },
  {
    id: 23,
    name: "Nintendo Switch (OLED) Consola de Juegos Portátil de 17,8 cm, 64 GB, Pantalla Táctil, WiFi, Blanco",
    price: 201.0,
    category: "Dispositivos electrónicos",
    image: "/img/NintendoSwitch.jpg",
  },
  {
    id: 24,
    name: "The G-Lab Keyz Titanium Noir - Teclado gaming mecánico 65% RGB AZERTY FR | Con cable USB, formato 65%, interruptores mecánicos rojos, RGB 100% personalizable",
    price: 29.0,
    category: "Dispositivos electrónicos",
    image: "/img/TheG-LabKeyz.jpg",
  },
  {
    id: 25,
    name: "SSD externo SanDisk Extreme de 1 TB (hasta 1050 MB/s de lectura, 1000 MB/s de escritura, USB-C, NVMe portátil, resistencia al polvo)",
    price: 159.0,
    category: "Dispositivos electrónicos",
    image: "/img/SANDISKextremeDisqueSSD.jpg",
  },

  // ==========================================
  // DEPORTE / FITNESS (13 Productos)
  // ==========================================
  {
    id: 26,
    name: "PUMA Tazon 6 Fracture FM, Zapatillas para Hombre",
    price: 41.99,
    category: "Deporte / Fitness",
    image: "/img/PUMATazon6FractureFM.jpg",
  },
  {
    id: 27,
    name: "Puma Smash V2 L Zapatillas Unisex",
    price: 31.99,
    category: "Deporte / Fitness",
    image: "/img/PumaSmashV2LBasketsMixte.jpg",
  },
  {
    id: 28,
    name: "Adidas Unisex Zapatillas VS Pace 2.0",
    price: 36.99,
    category: "Deporte / Fitness",
    image: "/img/adidasUnisexChaussure.jpg",
  },
  {
    id: 29,
    name: "Skechers Uno Stand on Air Zapatillas",
    price: 51.0,
    category: "Deporte / Fitness",
    image: "/img/SkechersUnoStandonAir.jpg",
  },
  {
    id: 30,
    name: "Skechers Uno-Night Shades, Zapatillas",
    price: 56.99,
    category: "Deporte / Fitness",
    image: "/img/SkechersUno-NightShades.jpg",
  },
  {
    id: 31,
    name: "Kit de Mancuernas Ajustables (20kg)",
    price: 47.0,
    category: "Deporte / Fitness",
    image: "/img/Halteres-reglables.jpg",
  },
  {
    id: 32,
    name: 'URLIFE Bicicleta Eléctrica para Adultos, Neumáticos Anchos de 16"',
    price: 1201.0,
    category: "Deporte / Fitness",
    image: "/img/URLIFEVeloelectrique.jpg",
  },
  {
    id: 33,
    name: "ZIPRO Bicicleta Estática para Adulto con Resistencia Magnética de 8 Niveles, Pantalla LCD",
    price: 111.0,
    category: "Deporte / Fitness",
    image: "/img/ZIPROVelo.jpg",
  },
  {
    id: 34,
    name: "Dskeuzeew Bicicleta Estática Profesional para Gimnasio con Pantalla LCD y Portavasos",
    price: 241.0,
    category: "Deporte / Fitness",
    image: "/img/DskeuzeewVélo.jpg",
  },
  {
    id: 35,
    name: "UrbanLuxe Colchoneta de Gimnasia Inflable Air Tumble Track para Volteretas y Acrobacias",
    price: 91.0,
    category: "Deporte / Fitness",
    image: "/img/TapisdeGymnastique.jpg",
  },
  {
    id: 36,
    name: "PROIRON Tapis de Yoga Epais 10MM/15MM,Antidérapant Tapis d'exercice Fitness",
    price: 24.99,
    category: "Deporte / Fitness",
    image: "/img/PROIRONTapis.jpg",
  },
  {
    id: 37,
    name: "Amazon Basics Slam Medicine Balls for Exercise",
    price: 20.99,
    category: "Deporte / Fitness",
    image: "/img/AmazonBasics.jpg",
  },
  {
    id: 38,
    name: "QIANBAIYI Support d'haltères, à 3 positions, peu encombrant, pour la salle de gym à la maison et la salle de sport, organisateur pour haltères",
    price: 87.0,
    category: "Deporte / Fitness",
    image: "/img/QIANBAIYISupport.jpg",
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
  },
  {
    id: 40,
    name: "CeraVe Crema Hidratante para Rostro y Cuerpo, Hidratación 48H",
    price: 18.99,
    category: "Belleza y cuidado personal",
    image: "/img/CeraVeBaume.jpg",
  },
  {
    id: 41,
    name: "Cepillo secador y moldeador TYMO - Secador y cepillo iónico «One-Step» para secar, alisar, rizar y dar volumen; 3 niveles de temperatura.",
    price: 48.0,
    category: "Belleza y cuidado personal",
    image: "/img/TYMOBrosse.jpg",
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
  },
  {
    id: 43,
    name: "Cosori TurboBlaze - Freidora de aire, 9 en 1, 6 cuartos de galón | 90°–450°F, 5 velocidades de ventilador de nivel, freír al aire 9 en 1, asar, hornear",
    price: 85.0,
    category: "Cocina",
    image: "/img/CosoriTurboBlaze.jpg",
  },
  {
    id: 44,
    name: "Ninja Cafetera programable de 12 tazas, 2 estilos de preparación, plato caliente ajustable, depósito de agua de 60 onzas, preparación retardada, negro/acero",
    price: 199.99,
    category: "Cocina",
    image: "/img/NinjaCafetera.jpg",
  },
  {
    id: 45,
    name: "ECOVACS T50 Omni GEN2 Robot Aspirador con Estación, Potencia de 21000 Pa",
    price: 271.0,
    category: "Hogar",
    image: "/img/ECOVACST50OmniGEN2Aspirateur.jpg",
  },
  {
    id: 46,
    name: "Bissell PowerClean FurGuard 280W Aspiradora inalámbrica que se mantiene en pie con cepillo autolimpiante, succión fuerte, battery extraíble",
    price: 221.99,
    category: "Hogar",
    image: "/img/BissellPowerClean.jpg",
  },
  {
    id: 47,
    name: "DREAME H15 Pro CarpetFlex aspiradora inalámbrica con mopa, aspiradora húmeda y seca con cepillos duales para pisos duros y alfombras",
    price: 361.99,
    category: "Hogar",
    image: "/img/DREAMEH15Pro.jpg",
  },
  {
    id: 48,
    name: "Aspiradora escoba inalámbrica Roborock H60 Ultra, 210 AW, 90 min de autonomía | Tubo plegable a 90°, filtración del 99,9%, cepillo antienredos para alfombras y suelos duros",
    price: 129.0,
    category: "Hogar",
    image: "/img/roborockH60Ultra.jpg",
  },
  {
    id: 49,
    name: "HORION Roku TV 40 QLED Smart FHD Televisión con Quantum Dot Color | Más de 500 canales en vivo gratis, Dolby Audio, compatible con Apple AirPlay",
    price: 179.0,
    category: "Hogar",
    image: "/img/TV4K.jpg",
  },
  {
    id: 50,
    name: "Mini refrigerador retro de 3.5 pies cúbicos con congelador, azul, 2 puertas | Elegante mini refrigerador azul retro con capacidad de 3.5 pies cúbicos",
    price: 79.0,
    category: "Hogar",
    image: "/img/Minirefrigerador.jpg",
  },
  {
    id: 51,
    name: "Cámara de vigilancia EZVIZ C8c 4K WiFi para exteriores de 360° con seguimiento y zoom automáticos, detección de formas humanas y de vehículos, visión nocturna a color y audio.",
    price: 72.0,
    category: "Hogar",
    image: "/img/EZVIZC8c4K.jpg",
  },
  {
    id: 52,
    name: "Cámara para exteriores WiFi 360° MERCUSYS 2K, MC510 | Visión nocturna a color, detección de personas y seguimiento de movimiento, resistencia al agua IP65, alarma sonora personalizable",
    price: 28.0,
    category: "Hogar",
    image: "/img/MERCUSYS2K.jpg",
  },
  {
    id: 53,
    name: "TP-Link Tapo - Cámara de seguridad interior de 1080P para monitor de bebé, cámara para perros con detección de movimiento, sirena de audio bidireccional",
    price: 9.0,
    category: "Hogar",
    image: "/img/TP-LinkTapo.jpg",
  },
  {
    id: 54,
    name: "SNDOAS Placa de Gas de 4 Fuegos Cristal Blanco, Placa de Gas Integrable",
    price: 131.0,
    category: "Cocina",
    image: "/img/SNDOASPlaque.jpg",
  },
  {
    id: 55,
    name: "GASLAND GIH604BF Placa Mixta de Gas e Inducción 60 cm, Gas 5200 W con quemador wok",
    price: 341.99,
    category: "Cocina",
    image: "/img/GASLANDGIH604BF.jpg",
  },

  {
    id: 56,
    name: "Tumbona Bali de diseño cosmopolita - Beige. Chaise longue derecha - 1 plaza - tapicería de terciopelo - no convertible",
    price: 799.99,
    category: "Hogar",
    image: "/img/TumbonaBali.webp",
  },
  {
    id: 57,
    name: "Juego de 6 sillas de comedor Smartue color beige, patas de madera, 81 × 56,4 × 52,6 cm. Juego de 6 sillas de comedor color beige - Patas de madera maciza, respaldo curvo, asiento de tela",
    price: 409.0,
    category: "Hogar",
    image: "/img/Juegode6sillas.webp",
  },
  {
    id: 58,
    name: "Aurlane DUALIDAD Mampara de ducha rectangular - Aluminio negro mate - Puerta corredera - Hidromasaje - 80 x 110 x 215 cm",
    price: 599.0,
    category: "Hogar",
    image: "/img/AurlaneDUALIDAD.webp",
  },
  {
    id: 60,
    name: "Asistente virtual Amazon Alexa Echo Spot 2024 Azul Amazon Echo Spot (modelo 2024): despertador inteligente azul, pantalla de 2,83 pulgadasy Alexa.",
    price: 76.0,
    category: "Hogar",
    image: "/img/Asistentevirtual.webp",
  },
  {
    id: 61,
    name: "Nespresso Inissia YY1531FD Rojo Cafetera de cápsulas - 2 botones con parada automática - 19 bares - 0,7 L",
    price: 86.99,
    category: "Cocina",
    image: "/img/NespressoInissia.jpg",
  },
  {
    id: 62,
    name: "Samsung OLED de 27 - Odyssey G5 S27FG500SU Pantalla de PC 2.5K - 2560 x 1440 píxeles - 0,03 ms (gris a gris) - 16:9 - Panel OLED - 180 Hz - HDR10 - Compatible con FreeSync / G-SYNC - HDMI/DisplayPort - Negro",
    price: 351.99,
    category: "Dispositivos electrónicos",
    image: "/img/SamsungOLEDde27.jpg",
  },
  {
    id: 63,
    name: "Lenovo Yoga Slim 7 14ILL10 (83JX00AHFR) Intel Core Ultra 7 258V 32 GB SSD 1 TB 14 OLED 2.8K Wi-Fi 7/Bluetooth Webcam Windows 11 Home",
    price: 1141.99,
    category: "Dispositivos electrónicos",
    image: "/img/LenovoYogaSlim7.jpg",
  },
  {
    id: 64,
    name: "ASUS Zenbook 14 OLED UM3406GA-QD013W AMD Ryzen AI 5 430, SSD de 16 GB, 512 GB de almacenamiento, pantalla OLED Full HD+ de 14, Wi-Fi 7/Bluetooth, cámara web, Windows 11 Home.",
    price: 999.99,
    category: "Dispositivos electrónicos",
    image: "/img/ASUSZenbook14.jpg",
  },
];

function normalizeProductTitle(name: string): string {
  const cleaned = name
    .replace(/\s*\|\s*.*$/, "")
    .replace(/\([^)]*\)/g, " ")
    .replace(/\s*[-–—]\s*/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();

  const safe = cleaned
    .replace(/\b(amazon|apple|google|ninja|samsung|lenovo|asus|dji|sony|mixa|cera|tymo|nintendo|puma|adidas|skechers|jbl|realme|qianbaiyi|aurlane|urlife|zipro|mercusys|bissell|dreame|roborock|ecovacs|tapo|gasland|nespresso|shokz|soundcore|playstation|mini|roku|horizon|amazon basics)\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  const candidate = safe.length > 110 ? safe.slice(0, 110).replace(/\s+\S*$/, "") : safe;
  return candidate || cleaned;
}

function detectBrand(name: string): string | undefined {
  const brands = [
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
    "TP-Link",
    "Bissell",
    "Dreame",
    "Roborock",
    "ECOVACS",
    "GASLAND",
    "SanDisk",
    "Shark",
    "Amazon Basics",
    "MERCUSYS",
    "QIANBAIYI",
    "URLIFE",
    "ZIPRO",
    "Aurlane",
    "Smartue",
  ];

  return brands.find((brand) => name.toLowerCase().includes(brand.toLowerCase()));
}

function detectModel(name: string): string | undefined {
  const noBrand = name.replace(/^[A-Za-z0-9 .\-]+\s+/, "");
  const match = noBrand.match(/(?:modelo|model|UM[0-9A-Z-]+|YY\d+[A-Z0-9-]*|MC\d+[A-Z0-9-]*|G5|G6|QLED|OLED|Pro|Max|Air|One|Mini|Ultra|Slim|Zenbook|Inissia|T50|H60)/i);
  if (!match) return undefined;
  return match[0].trim();
}

function buildProductDescription(product: Product): string {
  const conditionText =
    product.condition === "refurbished"
      ? "se ofrece como reacondicionado y revisado antes de su salida al mercado."
      : "se ofrece en estado nuevo.";
  const intro = `Este producto ${product.title.toLowerCase()} forma parte del catálogo de Espanapoint y ${conditionText}`;
  const categoryText = `Se presenta dentro de la categoría ${product.category.toLowerCase()} y está pensado para uso cotidiano.`;
  const useText = `Su diseño prioriza la funcionalidad y la comodidad, con una presentación clara para quienes buscan un artículo práctico en su día a día.`;
  const featureText = product.features
    .map((feature) => feature.replace(/\.$/, ""))
    .join(" ");
  const idealText = `Es ideal para quienes buscan una solución práctica y fácil de integrar en el hogar, el trabajo o la rutina diaria.`;
  const refurbText =
    product.condition === "refurbished"
      ? "¿Qué significa reacondicionado? El producto ha sido revisado, se entrega con un estado estético coherente con su condición y se acompaña de la garantía mínima legal vigente para artículos reacondicionados."
      : "";

  const text = `${intro} ${categoryText} ${useText} ${featureText}. ${idealText} ${refurbText}`.trim();
  return text.length >= 150 ? text : `${text} ${product.shortDescription}`.trim();
}

export const PRODUCTS_DATA: Product[] = PRODUCT_SEED.map((entry, index) => {
  const condition = /reacondicionado|refurbished|used/i.test(entry.name) ? "refurbished" : "new";
  const brand = detectBrand(entry.name) ?? "Espanapoint";
  const cleanName = normalizeProductTitle(entry.name);
  const title = cleanName.length > 110 ? cleanName.slice(0, 110).replace(/\s+\S*$/, "") : cleanName;
  const model = detectModel(entry.name);
  const stock = [7, 9, 13, 22, 40, 58].includes(entry.id) ? null : 1 + ((index + entry.id) % 8);
  const availability = stock === null ? undefined : stock > 0 ? "in_stock" : "out_of_stock";
  const shortDescription = `${title}. Producto ${condition === "refurbished" ? "reacondicionado" : "nuevo"} del catálogo de Espanapoint.`;
  const features = [
    "Diseño pensado para uso cotidiano y fácil integración en la rutina diaria.",
    "Presenta una propuesta funcional con materiales y acabados apropiados para su categoría.",
    "Se adapta a necesidades domésticas, de trabajo o de uso personal según el artículo.",
    "Ofrece una experiencia clara y accesible para la mayor parte de usuarios.",
    "Ideal para quienes buscan una solución práctica y versátil.",
    "Se entrega con la información y garantías legales aplicables según el producto.",
    "Compatible con el uso previsto en la categoría comercial de referencia.",
  ];

  const specs: Record<string, string> = {
    Categoría: entry.category,
    Condición: condition === "refurbished" ? "Reacondicionado" : "Nuevo",
    Marca: brand,
    Stock: stock === null ? "Pendiente de confirmar" : String(stock),
    IVA: "Incluido",
    Envío: "Gratis en España",
  };

  if (model) {
    specs.Modelo = model;
  }

  const product: Product = {
    id: entry.id,
    slug: "",
    title,
    name: title,
    price: entry.price,
    currency: "EUR",
    category: entry.category,
    image: entry.image,
    images: [{ src: entry.image, alt: title }],
    brand,
    model,
    gtin: undefined,
    mpn: undefined,
    availability,
    stock,
    stockStatus: stock === null ? "pending" : "confirmed",
    condition,
    conditionGrade: condition === "refurbished" ? "A" : undefined,
    professionallyRefurbished: condition === "refurbished",
    warranty: condition === "refurbished" ? "Garantía mínima legal de 1 año" : "Garantía legal de 3 años",
    shortDescription,
    description: "",
    features,
    specs,
    descriptionStatus: "draft",
    isMerchantReady: false,
  };

  product.description = buildProductDescription(product);
  product.slug = `${product.title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}-${product.id}`;

  return product;
});

export function getProductSlug(product: Product): string {
  const slug = product.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `${slug}-${product.id}`;
}

export function getProductUrl(product: Product): string {
  return `/produits/${getProductSlug(product)}`;
}

export function getProductByRouteId(routeId: string): Product | undefined {
  const idFromSlug = Number(routeId.match(/-(\d+)$/)?.[1] ?? routeId);
  return PRODUCTS_DATA.find((product) => product.id === idFromSlug);
}

export function getProductBrand(product: Product): string | undefined {
  if (product.brand) return product.brand;

  const brands = [
    "Amazon Basics",
    "Apple",
    "Adidas",
    "Anker",
    "ASUS",
    "Bissell",
    "CeraVe",
    "Cosori",
    "DJI",
    "Dreame",
    "Ecovacs",
    "EZVIZ",
    "GASLAND",
    "Google",
    "JBL",
    "Lenovo",
    "MIXA",
    "MERCUSYS",
    "Nespresso",
    "Nintendo",
    "Ninja",
    "Puma",
    "Realme",
    "Roborock",
    "Samsung",
    "SanDisk",
    "Shark",
    "Skechers",
    "Sony",
    "TP-Link",
    "TYMO",
    "URLIFE",
    "ZIPRO",
  ];

  return brands.find((brand) =>
    new RegExp(`(?:^|\\W)${brand.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:$|\\W)`, "i").test(product.name)
  );
}

export function getProductDescription(product: Product): string {
  return product.description?.trim() || product.name.trim();
}

export function getVerifiedProductCondition(
  product: Product
): ProductCondition | undefined {
  if (
    product.condition === "refurbished" &&
    (!product.professionallyRefurbished || !product.warranty?.trim())
  ) {
    return undefined;
  }

  return product.condition;
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

  const totalCents = resolvedItems.reduce(
    (total, item) => total + Math.round(item.product.price * 100) * item.quantity,
    0
  );

  return { items: resolvedItems, totalCents };
}
