export type ProductCondition =
  | "NewCondition"
  | "RefurbishedCondition"
  | "UsedCondition";
export type ProductAvailability = "InStock" | "OutOfStock" | "PreOrder";

export interface Product {
  id: number;
  sku: string;
  name: string;
  brand: string;
  description: string;
  image: string[];
  category: string;
  color?: string;
  itemCondition: ProductCondition;
  price: number;
  priceCurrency: "EUR";
  availability: ProductAvailability;
  url?: string;
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
        "i"
      ).test(name)
    ) ??
    "Genérico"
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

const PRODUCT_DESCRIPTIONS: Record<number, string> = {
  1: "El iPhone 13 Pro Max reacondicionado (Grado A, 100% testado) ofrece una experiencia Apple de gama alta con pantalla Super Retina XDR de gran formato. Incluye batería con salud superior al 80%, garantía de 2 años y estuche de protección. Precio con IVA incluido. Envío rápido en España (24-48h). Forma de pago: Transferencia bancaria o tarjeta.",
  2: "El iPhone 14 Pro reacondicionado (Grado A, totalmente verificado) reúne diseño avanzado, Isla Dinámica y sistema de cámaras pro. Incluye batería optimizada (>80%), 2 años de garantía europea y cable de carga. IVA incluido. Envíos en España. Pago seguro por transferencia bancaria.",
  3: "El iPhone 15 reacondicionado (Grado A) destaca por su puerto USB-C, isla dinámica y cámara de 48 MP. Producto reacondicionado certificado con más del 80% de salud de batería, 2 años de garantía y IVA incluido. Envíos a toda España. Método de pago: Transferencia.",
  4: "El iPhone 15 Pro Max reacondicionado (Grado A) combina chasis de titanio, chip A17 Pro y pantalla amplia. Incluye batería revisada (>80%), 2 años de garantía legal y embalaje protector. Precio con IVA incluido. Envíos rápidos en España. Pago por transferencia bancaria.",
  5: "Este iPhone 16 reacondicionado (Grado A) incluye 128 GB de almacenamiento, acabado cian y funda transparente MagSafe original. Batería en óptimo estado (>85%), 2 años de garantía e IVA incluido. Envío disponible en España. Pago mediante transferencia bancaria.",
  6: "El iPhone 16 Pro Max reacondicionado (Grado A) ofrece el máximo rendimiento del ecosistema Apple con pantalla gigante y acabados premium. Batería revisada (>85%), 2 años de garantía y IVA incluido. Envío seguro en España. Pago por transferencia bancaria.",
  7: "El Google Pixel 11 Pro incluye 256 GB de almacenamiento, acabado en negro volcánico y funciones avanzadas de inteligencia artificial Gemini. Producto libre con más de 30 horas de autonomía anunciada. Garantía de 2 años, IVA incluido. Pago por transferencia bancaria.",
  8: "El Google Pixel 10 Pro XL combina una pantalla Super Actua de 6,8 pulgadas con triple cámara trasera e integración con Gemini. Smartphone Android libre, 2 años de garantía, IVA incluido. Envíos en España y pago mediante transferencia bancaria.",
  9: "Este MacBook Pro de 14,2 pulgadas incorpora el chip M5 (CPU de 10 núcleos, GPU de 10 núcleos) y 1 TB de SSD. Pantalla Liquid Retina XDR. Teclado en inglés. Producto nuevo con 3 años de garantía oficial, IVA incluido. Pago por transferencia bancaria.",
  10: "El Shark RGBeast Mini R502 es un ordenador de sobremesa gaming en formato compacto, optimizado para alto rendimiento en juegos y creación de contenido. Componentes de primera, 3 años de garantía, IVA incluido. Pago mediante transferencia bancaria.",
  11: "Los Apple AirPods Pro 3 ofrecen cancelación activa de ruido de alta fidelidad y estuche de carga MagSafe. Producto nuevo original con 3 años de garantía, IVA incluido. Envíos rápidos en España y pago por transferencia bancaria.",
  12: "Los auriculares Sony WH-1000XM5SA Edición Especial combinan conectividad Bluetooth, la mejor cancelación activa de ruido del mercado y estuche blando de transporte. Nuevos, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  13: "Apple Watch Series 9 (GPS + Cellular, 45 mm) reacondicionado en caja de aluminio blanco estrella con correa deportiva M/L. Batería revisada (>85%), 2 años de garantía, IVA incluido. Envíos a toda España y pago por transferencia bancaria.",
  14: "Los SHOKZ OpenFit Pro son auriculares inalámbricos deportivos de diseño abierto en color negro, ideales para mantener la alerta del entorno. Nuevos, 3 años de garantía, IVA incluido. Pago mediante transferencia bancaria.",
  15: "Los Realme Buds Clip utilizan un diseño ergonómico abierto tipo clip para una sujeción cómoda sin introducirse en el canal auditivo. Producto nuevo, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  16: "Los JBL Wave Beam 2 son auriculares Bluetooth inalámbricos con cancelación activa de ruido y hasta 40 horas de autonomía total con estuche. Nuevos, 3 años de garantía, IVA incluido. Pago mediante transferencia bancaria.",
  17: "Auriculares inalámbricos deportivos para iPhone con Bluetooth 5.4, diseño estéreo ergonómico y ganchos de sujeción seguros. Nuevos, 2 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  18: "Los Soundcore Space One de Anker son auriculares de diadema Bluetooth con cancelación activa de ruido adaptativa y gran autonomía. Nuevos, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  19: "Conjunto DJI Osmo Pocket 3 con cámara de bolsillo para vlogging y transmisor inalámbrico Mic Mini en negro obsidiana. Nuevo, 3 años de garantía, IVA incluido. Pago mediante transferencia bancaria.",
  20: "DJI Osmo Pocket 4 Essential Bundle: cámara compacta con sensor CMOS de 1 pulgada, 4K/240 fps y estabilizador de 3 ejes. Producto nuevo, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  21: "Consola Sony PlayStation 5 Edición Estándar (1 TB) con lector de discos Blu-ray 4K, SSD ultrarrápido y mando DualSense. Nueva, 3 años de garantía oficial, IVA incluido. Envío seguro y pago por transferencia bancaria.",
  22: "Playstation Portal: reproductor a distancia con pantalla LCD Full HD de 8 pulgadas para juego en streaming Wi-Fi desde tu PS5. Nuevo, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  23: "Nintendo Switch (OLED) en color blanco con pantalla táctil vibrante de 7 pulgadas, 64 GB de almacenamiento y base con puerto LAN. Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  24: "Teclado mecánico gaming The G-Lab Keyz Titanium Noir (65%), switches rojos y retroiluminación RGB personalizable en formato AZERTY (FR). Nuevo, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  25: "SSD externo portátil SanDisk Extreme de 1 TB con velocidades de lectura de hasta 1050 MB/s, interfaz USB-C NVMe y resistencia al polvo y agua IP55. Nuevo, 5 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  26: "Zapatillas deportivas para hombre PUMA Tazon 6 Fracture FM en diseño dinámico y suela amortiguada para entrenamientos y uso diario. Nuevas, devoluciones garantizadas, IVA incluido. Pago por transferencia bancaria.",
  27: "Zapatillas clásicas unisex Puma Smash V2 L de diseño versátil en piel sintética resistente para un uso urbano diario. Nuevas, devoluciones garantizadas, IVA incluido. Pago por transferencia bancaria.",
  28: "Zapatillas unisex Adidas VS Pace 2.0 de inspiración skate con diseño casual y bandas laterales icónicas. Nuevas, devoluciones garantizadas, IVA incluido. Pago por transferencia bancaria.",
  29: "Skechers Uno Stand on Air: zapatillas urbanas de moda con cámara de aire visible y plantilla amortiguadora Air-Cooled Memory Foam. Nuevas, devoluciones garantizadas, IVA incluido. Pago por transferencia bancaria.",
  30: "Skechers Uno-Night Shades: zapatillas deportivas con diseño moderno de colores llamativos y confort superior diario. Nuevas, devoluciones garantizadas, IVA incluido. Pago por transferencia bancaria.",
  31: "Kit de mancuernas ajustables de hasta 20 kg con discos intercambiables y cierre seguro para entrenamiento de fuerza en casa. Nuevas, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  32: "Bicicleta eléctrica URLIFE para adultos con neumáticos anchos de 16 pulgadas, motor eficiente y autonomía optimizada para ciudad. Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  33: "Bicicleta estática ZIPRO con resistencia magnética ajustable de 8 niveles, sensores de pulso y pantalla LCD multifunción. Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  34: "Bicicleta estática profesional Dskeuzeew para gimnasio en casa con resistencia regulable, pantalla LCD y portavasos integrado. Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  35: "Pista inflable de gimnasia UrbanLuxe Air Tumble Track de alta resistencia para acrobacias, volteretas y entrenamiento seguro. Nueva, 2 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  36: "Esterilla de yoga antideslizante PROIRON de grosor extragrueso (10mm/15mm) para máxima comodidad en fitness y suelo. Nueva, garantía de calidad, IVA incluido. Pago por transferencia bancaria.",
  37: "Balón medicinal tipo Slam Ball de Amazon Basics con superficie texturizada de gran agarre para entrenamientos de fuerza y alta intensidad. Nuevo, 1 año de garantía, IVA incluido. Pago por transferencia bancaria.",
  38: "Soporte organizador QIANBAIYI de 3 niveles para mancuernas, diseñado para optimizar el espacio en gimnasios domésticos. Nuevo, 2 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  39: "Sérum facial MIXA Booster de Hidratación Intensa 24H formulado para rellenar, iluminar y cuidar la barrera cutánea. Producto original precintado, IVA incluido. Pago por transferencia bancaria.",
  40: "Crema hidratante CeraVe para rostro y cuerpo con ceramidas esenciales y tecnología MVE para 48h de hidratación continua. Envase de uso diario, IVA incluido. Pago por transferencia bancaria.",
  41: "Cepillo moldeador y secador iónico 4 en 1 TYMO One-Step para secar, alisar, dar volumen y rizar con 3 niveles térmicos. Nuevo, 2 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  42: "Freidora de aire Ninja Foodi FlexDrawer de gran capacidad con doble zona independiente y separador extraíble para cocinar dos platos a la vez. Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  43: "Freidora de aire Cosori TurboBlaze de 6 cuartos (9 en 1) con motor DC de 5 velocidades, temperaturas de 90° a 450°F y bajo consumo. Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  44: "Cafetera de goteo programable Ninja para 12 tazas con selector de intensidad, placa calefactora regulable y depósito de 60 oz. Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  45: "Robot aspirador ECOVACS T50 Omni GEN2 con estación de vaciado automático multifunción y potencia de succión extrema de 21 000 Pa. Nuevo, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  46: "Aspiradora vertical sin cable Bissell PowerClean FurGuard de 280W con cepillo autolimpiante especializado en eliminar pelo de mascotas. Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  47: "Aspiradora escoba sin cable Dreame H15 Pro CarpetFlex para aspirado en seco/húmedo y fregado simultáneo con cepillos duales avanzados. Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  48: "Aspiradora escoba inalámbrica Roborock H60 Ultra con 210 AW de potencia, tubo flexible a 90°, filtración del 99,9% y 90 min de autonomía. Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  49: "Televisor inteligente HORION Roku TV de 40 pulgadas QLED FHD con más de 500 canales gratuitos, Dolby Audio y soporte AirPlay. Nuevo, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  50: "Mini frigorífico retro de 3.5 pies cúbicos con dos puertas separadas y compartimento congelador en elegante acabado azul. Nuevo, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  51: "Cámara de vigilancia exterior EZVIZ C8c 4K Wi-Fi con giro de 360°, seguimiento inteligente por IA, visión nocturna a color y audio bidireccional. Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  52: "Cámara de seguridad exterior MERCUSYS MC510 Wi-Fi 2K con cobertura de 360°, visión nocturna en color, certificación IP65 y sirena de alarma. Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  53: "Cámara IP interior TP-Link Tapo 1080P con visión nocturna, audio bidireccional, detección de movimiento y uso como vigilabebés o mascota. Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  54: "Placa de gas integrada SNDOAS de 4 quemadores con elegante superficie de cristal templado blanco y seguridad contra fugas. Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  55: "Placa mixta encastrable GASLAND GIH604BF de 60 cm con zonas de inducción y quemador wok de gas de alta potencia (5200 W). Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  56: "Tumbona / Chaise longue fijo Bali en color beige con tapicería de terciopelo de alta calidad y diseño contemporáneo. Nuevo, IVA incluido. Pago por transferencia bancaria.",
  57: "Conjunto de 6 sillas de comedor Smartue en tono beige con patas de madera maciza, respaldo ergonómico y asiento tapizado. Nuevas, IVA incluido. Pago por transferencia bancaria.",
  58: "Mampara de ducha rectangular Aurlane DUALIDAD con perfilería de aluminio negro mate, puerta corredera e hidromasaje (80x110x215 cm). Nueva, IVA incluido. Pago por transferencia bancaria.",
  60: "Amazon Echo Spot (2024) azul: despertador inteligente con asistente Alexa y pantalla esférica interactiva de 2,83 pulgadas. Nuevo, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  61: "Cafetera de cápsulas Nespresso Inissia YY1531FD roja con bomba de presión de 19 bares, sistema de ahorro energético y dos tamaños de taza programables. Nueva, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  62: "Monitor gaming Samsung Odyssey G5 OLED de 27 pulgadas con resolución QHD (2560x1440), 180 Hz, 0.03 ms y soporte HDR10/FreeSync. Nuevo, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  63: "Portátil Lenovo Yoga Slim 14ILL10 con procesador Intel Core Ultra 7 258V, 32 GB de RAM, SSD de 1 TB y pantalla táctil OLED 2.8K (Windows 11 Home). Teclado internacional. Nuevo, 3 años de garantía, IVA incluido. Pago por transferencia bancaria.",
  64: "Portátil ASUS Zenbook 14 OLED UM3406GA-QD013W con procesador AMD Ryzen AI 5 430, 16 GB de RAM, SSD de 512 GB y pantalla OLED Full HD+ (Windows 11 Home). Nuevo, 3 años de garantía, IVA incluido. Pago por transferencia bancaria."
};
const usedSkus = new Set<string>();

export const PRODUCTS_DATA: Product[] = PRODUCT_SEED.map((entry) => {
  const baseSku = slugifyProductName(entry.name) || `producto-${entry.id}`;
  let sku = baseSku;
  if (usedSkus.has(sku)) {
    sku = `${baseSku}-${entry.id}`;
    while (usedSkus.has(sku)) {
      sku = `${baseSku}-${entry.id}-${usedSkus.size}`;
    }
  }
  usedSkus.add(sku);

  const condition: ProductCondition = /reacondicionado/i.test(entry.name)
    ? "RefurbishedCondition"
    : /\busad[oa]s?\b|\bused\b/i.test(entry.name)
      ? "UsedCondition"
      : "NewCondition";

  const description = PRODUCT_DESCRIPTIONS[entry.id];
  if (!description) {
    throw new Error(`Missing product description for product ${entry.id}`);
  }

  return {
    id: entry.id,
    sku,
    name: entry.name,
    brand: detectBrand(entry.name),
    description,
    image: [entry.image],
    category: entry.category,
    itemCondition: condition,
    price: entry.price,
    priceCurrency: "EUR",
    availability: "InStock",
  };
});

export function getProductSlug(product: Product): string {
  return product.sku;
}

export function getProductUrl(product: Product): string {
  return product.url ?? `/produits/${getProductSlug(product)}`;
}

export function getProductByRouteId(routeId: string): Product | undefined {
  const idFromLegacySlug = Number(routeId.match(/-(\d+)$/)?.[1]);
  return PRODUCTS_DATA.find(
    (product) =>
      product.sku === routeId ||
      product.id === Number(routeId) ||
      (Number.isInteger(idFromLegacySlug) && product.id === idFromLegacySlug)
  );
}

export function getProductBrand(product: Product): string {
  return product.brand;
}

export function getProductDescription(product: Product): string {
  return product.description;
}

export function getVerifiedProductCondition(
  product: Product
): "new" | "refurbished" | "used" {
  switch (product.itemCondition) {
    case "RefurbishedCondition":  
      return "refurbished";
    case "UsedCondition":
      return "used";
    default:
      return "new";
  }
}

export function getAvailabilityLabel(availability: ProductAvailability): string {
  switch (availability) {
    case "InStock":
      return "En stock";
    case "OutOfStock":
      return "Agotado";
    case "PreOrder":
      return "Preventa";
  }
}

export function getProductConditionLabel(condition: ProductCondition): string {
  switch (condition) {
    case "RefurbishedCondition":
      return "Reacondicionado";
    case "UsedCondition":
      return "Usado";
    default:
      return "Nuevo";
  }
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
