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
  1: "El iPhone 13 Pro Max reacondicionado ofrece una experiencia Apple en un formato de gran pantalla, ideal para consultar contenido, comunicarse y organizar el día a día. Una opción para quien busca un iPhone de gama alta reacondicionado a un precio más accesible.",
  2: "El iPhone 14 Pro reacondicionado reúne el diseño y las funciones de un smartphone Apple de gama alta en un formato cómodo para el uso diario. Permite gestionar llamadas, aplicaciones, fotos y contenido desde el ecosistema iOS, con la ventaja de elegir un producto reacondicionado.",
  3: "El iPhone 15 reacondicionado es un smartphone Apple pensado para la comunicación, la fotografía y el entretenimiento cotidiano. Su formato versátil facilita llevarlo contigo y acceder a las aplicaciones y servicios del ecosistema iOS.",
  4: "El iPhone 15 Pro Max reacondicionado combina un formato de pantalla amplia con la experiencia de un smartphone Apple de gama alta. Es una alternativa reacondicionada para disfrutar de aplicaciones, contenido y funciones de iOS en el día a día.",
  5: "Este iPhone 16 reacondicionado incluye 128 GB de almacenamiento, acabado cian y una funda transparente compatible con MagSafe. Una combinación lista para el uso diario, con espacio para aplicaciones y archivos y accesorios pensados para integrarse con el sistema MagSafe.",
  6: "El iPhone 16 Pro Max reacondicionado ofrece la experiencia de un smartphone Apple de gama alta en un formato amplio. Está preparado para acompañar la comunicación, el entretenimiento y las tareas cotidianas dentro del ecosistema iOS.",
  7: "El Google Pixel 11 Pro incluye 256 GB de almacenamiento y funciones de inteligencia Gemini, según la ficha del producto. Se presenta en negro volcánico y destaca una autonomía anunciada de más de 30 horas y una pantalla Super, para quienes buscan un teléfono Android actual con herramientas de IA.",
  8: "El Google Pixel 10 Pro XL combina una pantalla Super Actua de 6,8 pulgadas con una cámara trasera triple. La ficha anuncia más de 24 horas de autonomía e integración con Gemini, en un smartphone Android libre diseñado para fotografía, comunicación y entretenimiento.",
  9: "Este MacBook Pro de 14,2 pulgadas incorpora el chip M5 con CPU de 10 núcleos y GPU de 10 núcleos, además de 1 TB de almacenamiento. Su pantalla Liquid Retina XDR y su configuración están pensadas para trabajar con aplicaciones exigentes, crear contenido y gestionar proyectos. El teclado de esta versión está indicado en inglés.",
  10: "El Shark RGBeast Mini R502 es un PC gaming de sobremesa pensado para montar una estación de juego en casa. Su formato Mini ayuda a mantener una configuración compacta; consulta la configuración de componentes y las conexiones disponibles antes de elegir los periféricos.",
  11: "Los Apple AirPods Pro 3 son auriculares inalámbricos con cancelación activa de ruido para escuchar música, podcasts y llamadas con menos ruido ambiental. Su formato portátil facilita utilizarlos durante los desplazamientos y con dispositivos Apple compatibles.",
  12: "Los Sony WH-1000XM5SA combinan conectividad Bluetooth, cancelación activa de ruido y funciones para mantener llamadas claras. Esta edición especial incluye un estuche blando, práctico para guardar y transportar los auriculares entre usos.",
  13: "Este Apple Watch Series 9 reacondicionado incorpora GPS y conectividad Cellular en una caja de aluminio de 45 mm color blanco estrella, acompañada de una correa deportiva a juego en talla M/L. Permite llevar funciones del Apple Watch en la muñeca y mantener la conexión también fuera del alcance inmediato del teléfono, según la configuración de red.",
  14: "Los SHOKZ OpenFit Pro son auriculares inalámbricos de diseño abierto en color negro. Su formato permite escuchar audio sin aislar completamente los oídos del entorno, una alternativa para quienes prefieren mantener mayor conciencia de lo que ocurre a su alrededor.",
  15: "Los Realme Buds Clip utilizan un diseño abierto tipo clip para sujetarse alrededor de la oreja sin introducirse en el canal auditivo. Son una opción inalámbrica para escuchar audio durante actividades cotidianas manteniendo una experiencia de uso ligera y abierta.",
  16: "Los JBL Wave Beam 2 son auriculares Bluetooth inalámbricos con cancelación de ruido y hasta 40 horas de autonomía anunciada. Su formato compacto resulta adecuado para música, llamadas y podcasts tanto en casa como durante los desplazamientos.",
  17: "Estos auriculares inalámbricos para iPhone incorporan Bluetooth 5.4, diseño estéreo y ganchos para ayudar a mantenerlos sujetos en la oreja. Una propuesta práctica para escuchar audio y atender llamadas mientras te mueves.",
  18: "Los Soundcore Space One de Anker son auriculares Bluetooth de diadema con cancelación activa de ruido adaptativa. Permiten escuchar música y contenido con una reducción del ruido ambiental que se ajusta al entorno, según las características anunciadas.",
  19: "El conjunto DJI Osmo Pocket 3 incluye una cámara de bolsillo para vlogging y el transmisor inalámbrico Mic Mini, en acabado negro obsidiana. Reúne captura de imagen y audio en un equipo compacto pensado para grabar contenido en movimiento.",
  20: "El DJI Osmo Pocket 4 Essential Bundle es una cámara de bolsillo para vlogging con sensor CMOS de 1 pulgada, grabación anunciada en 4K a 240 fps y estabilización mecánica de 3 ejes. Su formato compacto facilita llevarla para grabar escenas y contenido en movimiento.",
  21: "La PlayStation 5 Edición Estándar incluye 1 TB de almacenamiento, lector Blu-ray 4K, SSD de alta velocidad y audio 3D. Permite jugar títulos de PS5 y reproducir películas Blu-ray compatibles en una misma consola.",
  22: "El reproductor a distancia PlayStation Portal incorpora una pantalla LCD Full HD de 8 pulgadas para jugar por streaming a través de Wi-Fi. Está pensado para transmitir juegos desde una consola PS5 compatible; no sustituye a la consola ni funciona como una consola independiente.",
  23: "La Nintendo Switch OLED ofrece una pantalla táctil de 17,8 cm, 64 GB de almacenamiento y conexión Wi-Fi, en color blanco. Su formato portátil permite jugar fuera de casa y disfrutar de los títulos compatibles de Nintendo Switch.",
  24: "El teclado mecánico The G-Lab Keyz Titanium Noir tiene formato compacto del 65 %, distribución francesa AZERTY y conexión USB con cable. Sus interruptores rojos y la iluminación RGB personalizable permiten adaptar la sensación de escritura y el aspecto de la configuración gaming.",
  25: "El SSD externo SanDisk Extreme ofrece 1 TB de almacenamiento portátil mediante USB-C y tecnología NVMe. La velocidad anunciada alcanza hasta 1050 MB/s en lectura y 1000 MB/s en escritura; su resistencia al polvo lo hace adecuado para transportar archivos entre distintos espacios de trabajo.",
  26: "Las PUMA Tazon 6 Fracture FM son zapatillas para hombre con un diseño deportivo pensado para completar conjuntos de entrenamiento o de uso diario. Su estilo dinámico combina fácilmente con ropa deportiva y casual.",
  27: "Las Puma Smash V2 L son zapatillas de estilo clásico para mujer o hombre. Su diseño sencillo y versátil permite utilizarlas a diario y combinarlas con prendas informales.",
  28: "Las Adidas VS Pace 2.0 son zapatillas unisex de inspiración deportiva y diseño urbano. Una opción versátil para completar un conjunto casual y acompañarte en las actividades cotidianas.",
  29: "Las Skechers Uno Stand on Air combinan un diseño urbano reconocible con una suela de aspecto acolchado. Son zapatillas pensadas para el uso diario, tanto para caminar como para completar un conjunto informal.",
  30: "Las Skechers Uno-Night Shades ofrecen un estilo deportivo urbano para el día a día. Su diseño permite combinarlas con ropa casual y utilizarlas en distintas actividades cotidianas.",
  31: "Este kit de mancuernas ajustables de hasta 20 kg permite variar la carga para adaptar los ejercicios de fuerza a la rutina. El formato ajustable ayuda a organizar el entrenamiento en casa sin necesitar una mancuerna fija para cada peso.",
  32: "La bicicleta eléctrica URLIFE para adultos incorpora neumáticos anchos de 16 pulgadas y está diseñada para desplazamientos y paseos. Antes de utilizarla, revisa las indicaciones del fabricante sobre talla, autonomía, carga y normativa aplicable.",
  33: "La bicicleta estática ZIPRO ofrece resistencia magnética con 8 niveles y una pantalla LCD para consultar los datos de la sesión. Permite realizar ejercicio cardiovascular en casa y ajustar la intensidad según el entrenamiento.",
  34: "La bicicleta estática Dskeuzeew está pensada para entrenar en casa e incorpora una pantalla LCD y un portavasos. Su configuración permite realizar sesiones de ciclismo indoor y mantener a mano una bebida durante el ejercicio.",
  35: "La pista inflable UrbanLuxe Air Tumble Track está destinada a ejercicios de gimnasia, volteretas y acrobacias. Su superficie acolchada ofrece un espacio de práctica que se puede inflar y guardar cuando no se utiliza; úsala sobre una base adecuada y siguiendo las medidas de seguridad.",
  36: "La esterilla de yoga PROIRON está disponible en grosores anunciados de 10 o 15 mm y cuenta con superficie antideslizante. El acolchado adicional está pensado para ejercicios de suelo, estiramientos y sesiones de fitness; confirma el grosor seleccionado al realizar el pedido.",
  37: "El balón medicinal Slam de Amazon Basics está diseñado para ejercicios de fuerza y acondicionamiento físico. Puede incorporarse a rutinas de lanzamiento y movimientos funcionales, eligiendo un peso adecuado para el nivel de entrenamiento.",
  38: "Este soporte QIANBAIYI para mancuernas ofrece tres posiciones de almacenamiento en una estructura pensada para ahorrar espacio. Ayuda a mantener el material de entrenamiento ordenado tanto en un gimnasio doméstico como en una sala de ejercicio.",
  39: "El sérum MIXA Booster de Hidratación Intensa está formulado para aportar hidratación durante 24 horas, con un efecto de piel más rellena y luminosa según su descripción. Su formato de sérum permite incorporarlo a la rutina facial antes de la crema habitual.",
  40: "La crema hidratante CeraVe está indicada para rostro y cuerpo y anuncia hasta 48 horas de hidratación. Su uso versátil permite incorporarla a la rutina diaria de cuidado de la piel; consulta el envase para revisar ingredientes e instrucciones.",
  41: "El cepillo secador y moldeador TYMO One-Step reúne funciones de secado, alisado, rizado y aporte de volumen en una sola herramienta. Su tecnología iónica y sus tres niveles de temperatura permiten adaptar el peinado a distintas necesidades.",
  42: "La freidora de aire Ninja Foodi FlexDrawer cuenta con dos zonas de cocción y un separador extraíble. Permite preparar alimentos por separado o aprovechar el espacio de cocción de forma flexible, según la configuración elegida.",
  43: "La Cosori TurboBlaze es una freidora de aire de 6 cuartos con 9 funciones anunciadas, cinco velocidades de ventilador y temperaturas de 90 a 450 °F. La ficha menciona opciones para freír con aire, asar y hornear, facilitando distintas preparaciones en un mismo aparato.",
  44: "La cafetera programable Ninja prepara hasta 12 tazas y ofrece dos estilos de preparación. Incluye un depósito de 60 onzas, una placa caliente ajustable y programación retardada para organizar el café con antelación.",
  45: "El robot aspirador ECOVACS T50 Omni GEN2 se suministra con estación y anuncia una potencia de succión de 21 000 Pa. Está concebido para automatizar la limpieza del hogar; consulta las especificaciones completas de la estación para conocer sus funciones y requisitos.",
  46: "La aspiradora inalámbrica Bissell PowerClean FurGuard ofrece 280 W, batería extraíble y un cepillo autolimpiante. Su diseño vertical permite guardarla de pie y está pensado para recoger suciedad y pelo de mascotas con una succión potente, según la ficha.",
  47: "La Dreame H15 Pro CarpetFlex es una aspiradora inalámbrica para limpieza en seco y húmedo que incorpora mopa y dos cepillos. Está diseñada para limpiar suelos duros y alfombras; revisa las instrucciones del fabricante para seleccionar el modo apropiado para cada superficie.",
  48: "La aspiradora escoba inalámbrica Roborock H60 Ultra anuncia 210 AW de potencia y hasta 90 minutos de autonomía. Incluye un tubo plegable a 90 grados, filtración anunciada del 99,9 % y un cepillo antienredos para alfombras y suelos duros.",
  49: "El televisor HORION Roku TV de 40 pulgadas combina panel QLED, resolución Full HD y plataforma Smart TV Roku. La ficha indica más de 500 canales en directo gratuitos, Dolby Audio y compatibilidad con Apple AirPlay.",
  50: "Este mini refrigerador retro azul ofrece una capacidad de 3,5 pies cúbicos y configuración de dos puertas con congelador. Su diseño compacto está pensado para espacios reducidos donde se necesita refrigeración y un compartimento congelador.",
  51: "La cámara exterior EZVIZ C8c ofrece resolución 4K, conexión Wi-Fi y cobertura panorámica de 360 grados. La ficha incluye seguimiento y zoom automáticos, detección de personas y vehículos, visión nocturna en color y audio.",
  52: "La cámara exterior MERCUSYS MC510 ofrece resolución 2K, conexión Wi-Fi y visión de 360 grados. Incluye visión nocturna en color, detección de personas, seguimiento de movimiento, protección IP65 y alarma sonora personalizable.",
  53: "La cámara interior TP-Link Tapo graba en 1080p y puede utilizarse para vigilar una habitación, un bebé o una mascota. Incorpora detección de movimiento, comunicación de audio bidireccional y sirena para alertas.",
  54: "La placa SNDOAS de gas integrable dispone de cuatro fuegos y una superficie de cristal blanco. Su formato está pensado para instalarse en la encimera de la cocina; comprueba las dimensiones de encastre y los requisitos de instalación antes del montaje.",
  55: "La placa mixta GASLAND GIH604BF de 60 cm combina gas e inducción e incluye un quemador wok de gas con potencia indicada de 5200 W. Su configuración mixta permite elegir entre ambos tipos de cocción; verifica las conexiones y condiciones de instalación necesarias.",
  56: "La tumbona Bali en color beige ofrece una plaza, orientación derecha y tapicería de terciopelo. Es un chaise longue fijo, no convertible, pensado para crear un rincón de descanso con un diseño cosmopolita.",
  57: "Este juego Smartue incluye seis sillas de comedor beige con patas de madera maciza, respaldo curvo y asiento de tela. Cada silla mide 81 × 56,4 × 52,6 cm, según la ficha, para ayudar a comprobar el espacio disponible alrededor de la mesa.",
  58: "La mampara de ducha rectangular Aurlane DUALIDAD combina aluminio negro mate, puerta corredera y una función de hidromasaje anunciada. Sus dimensiones indicadas son 80 × 110 × 215 cm; confirma el espacio, el sentido de instalación y las conexiones necesarias antes de la compra.",
  60: "El Amazon Echo Spot 2024 en color azul funciona como despertador inteligente con Alexa e incorpora una pantalla de 2,83 pulgadas. Permite consultar información y utilizar funciones compatibles de Alexa desde la mesilla de noche.",
  61: "La cafetera de cápsulas Nespresso Inissia YY1531FD en color rojo incorpora dos botones con parada automática, una bomba de 19 bares y un depósito de agua de 0,7 litros. Su manejo sencillo permite preparar café en formato de cápsula y detener la extracción automáticamente.",
  62: "El monitor Samsung Odyssey G5 OLED de 27 pulgadas ofrece resolución QHD de 2560 × 1440, frecuencia de 180 Hz y respuesta anunciada de 0,03 ms. Incluye HDR10, compatibilidad con FreeSync y G-SYNC, formato 16:9 y conexiones HDMI y DisplayPort.",
  63: "El Lenovo Yoga Slim 7 14ILL10 combina un procesador Intel Core Ultra 7 258V con 32 GB de memoria y SSD de 1 TB. Su pantalla OLED de 14 pulgadas y resolución 2.8K se acompaña de Wi-Fi 7, Bluetooth, cámara web y Windows 11 Home.",
  64: "El ASUS Zenbook 14 OLED UM3406GA-QD013W incorpora un procesador AMD Ryzen AI 5 430, 16 GB de memoria y SSD de 512 GB. Cuenta con pantalla OLED Full HD+ de 14 pulgadas, Wi-Fi 7, Bluetooth, cámara web y Windows 11 Home.",
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
