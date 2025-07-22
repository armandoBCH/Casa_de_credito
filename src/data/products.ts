// Define a type for a product
export type Product = {
  id: number;
  name: string;
  category: "Muebles" | "Electrónicos" | "Electrodomésticos";
  price: number;
  originalPrice?: number;
  installmentPrice: number;
  installments: number;
  image: string;
  images: string[];
  discount: number;
  isPromoted: boolean;
  shortDescription: string;
  longDescription: string;
  specs: { [key: string]: string };
  rating: number;
  reviewCount: number;
};

// Image URLs
const sofaImage = "/assets/product-sofa.jpg";
const tvImage = "/assets/product-tv.jpg";
const appliancesImage = "/assets/product-appliances.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Juego de Living Moderno 3+2+1",
    category: "Muebles",
    price: 89999,
    originalPrice: 112499,
    installmentPrice: 15000,
    installments: 6,
    image: sofaImage,
    images: [sofaImage, "https://images.unsplash.com/photo-1540574163024-5735f3032c85?w=500", "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500"],
    discount: 20,
    isPromoted: true,
    shortDescription: "Renová tu living con este juego de sillones de diseño contemporáneo y máximo confort. Tapizado en tela de alta resistencia.",
    longDescription: "Este completo juego de living es la solución perfecta para amoblar tu espacio con estilo y funcionalidad. Incluye un sofá de 3 cuerpos, uno de 2 cuerpos y un sillón individual, todos tapizados en una resistente tela de chenille que es suave al tacto y fácil de limpiar. La estructura de madera maciza garantiza durabilidad y estabilidad, mientras que los almohadones de espuma de alta densidad ofrecen un confort inigualable.",
    specs: {
      "Material": "Tela Chenille y Madera Maciza",
      "Sofá 3 Cuerpos": "200cm x 90cm x 85cm",
      "Sofá 2 Cuerpos": "160cm x 90cm x 85cm",
      "Sillón 1 Cuerpo": "90cm x 90cm x 85cm",
      "Garantía": "12 meses"
    },
    rating: 4.8,
    reviewCount: 32,
  },
  {
    id: 2,
    name: "Smart TV 55'' 4K Ultra HD Samsung",
    category: "Electrónicos",
    price: 129999,
    originalPrice: 152940,
    installmentPrice: 21667,
    installments: 6,
    image: tvImage,
    images: [tvImage, "https://images.unsplash.com/photo-1593784917033-2c264fac358d?w=500", "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=500"],
    discount: 15,
    isPromoted: false,
    shortDescription: "Viví una experiencia visual inmersiva con colores vibrantes y detalles nítidos gracias a la tecnología 4K UHD.",
    longDescription: "El Smart TV Samsung de 55 pulgadas redefine la forma en que ves televisión. Con su resolución 4K Ultra HD, cada imagen cobra vida con un nivel de detalle cuatro veces superior al Full HD. El procesador Crystal 4K optimiza el color y el contraste para una experiencia visual sorprendente. Accedé a todas tus aplicaciones favoritas como Netflix, YouTube y más, directamente desde el intuitivo sistema operativo Tizen.",
    specs: {
      "Resolución": "3840 x 2160 (4K UHD)",
      "Tamaño de Pantalla": "55 pulgadas",
      "Sistema Operativo": "Tizen",
      "Conectividad": "3 HDMI, 2 USB, Wi-Fi, Bluetooth",
      "Sonido": "20W con Dolby Digital Plus"
    },
    rating: 4.9,
    reviewCount: 58,
  },
  {
    id: 3,
    name: "Combo Cocina Completa Acero Inoxidable",
    category: "Electrodomésticos",
    price: 199999,
    originalPrice: 266665,
    installmentPrice: 33333,
    installments: 6,
    image: appliancesImage,
    images: [appliancesImage, "https://images.unsplash.com/photo-1604323133276-c45681d4315a?w=500"],
    discount: 25,
    isPromoted: true,
    shortDescription: "Equipá tu cocina con este combo de alta gama en acero inoxidable. Incluye heladera, cocina y microondas.",
    longDescription: "Transformá tu cocina en un espacio moderno y funcional con este combo de electrodomésticos de acero inoxidable. Incluye una heladera No Frost con freezer, una cocina a gas con 4 hornallas y horno, y un microondas digital. Todos los productos cuentan con la última tecnología para garantizar eficiencia energética y un rendimiento superior, facilitando tus tareas diarias en la cocina.",
    specs: {
      "Heladera": "320L No Frost, Eficiencia Energética A+",
      "Cocina": "4 hornallas, encendido electrónico, horno con grill",
      "Microondas": "23L, 800W de potencia, panel digital",
      "Material": "Acero Inoxidable",
      "Garantía": "12 meses en todos los productos"
    },
    rating: 4.7,
    reviewCount: 21,
  },
  {
    id: 4,
    name: "Comedor 6 Sillas Moderno",
    category: "Muebles",
    price: 65999,
    originalPrice: 73332,
    installmentPrice: 11000,
    installments: 6,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    discount: 10,
    isPromoted: false,
    shortDescription: "Juego de comedor con mesa de vidrio y 6 sillas tapizadas, ideal para reuniones familiares y cenas con amigos.",
    longDescription: "Este elegante juego de comedor combina diseño moderno y comodidad. La mesa cuenta con una resistente tapa de vidrio templado y una base de madera maciza. Las seis sillas, ergonómicamente diseñadas, están tapizadas en un tejido duradero y acolchado para mayor confort durante largas sobremesas.",
    specs: {
      "Material Mesa": "Vidrio templado y madera",
      "Material Sillas": "Madera y tapizado de tela",
      "Dimensiones Mesa": "160cm x 90cm",
      "Cantidad de Sillas": "6",
      "Garantía": "12 meses"
    },
    rating: 4.6,
    reviewCount: 15,
  },
  {
    id: 5,
    name: "Notebook Gamer 15.6'' RTX",
    category: "Electrónicos",
    price: 299999,
    installmentPrice: 50000,
    installments: 6,
    image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    discount: 0,
    isPromoted: true,
    shortDescription: "Potencia extrema para tus juegos y tareas de alta demanda con procesador de última generación y gráficos NVIDIA RTX.",
    longDescription: "Llevá tu experiencia de gaming al siguiente nivel con esta notebook de alto rendimiento. Equipada con un procesador Intel Core i7, 16GB de RAM y una tarjeta gráfica NVIDIA GeForce RTX, está diseñada para correr los últimos títulos con fluidez y en alta calidad. Su pantalla de 144Hz te dará la ventaja competitiva que necesitás.",
    specs: {
      "Procesador": "Intel Core i7 12th Gen",
      "Memoria RAM": "16GB DDR5",
      "Almacenamiento": "512GB SSD NVMe",
      "Tarjeta Gráfica": "NVIDIA GeForce RTX 3060",
      "Pantalla": "15.6'' Full HD 144Hz"
    },
    rating: 4.9,
    reviewCount: 45,
  },
  {
    id: 6,
    name: "Heladera No Frost 364L",
    category: "Electrodomésticos",
    price: 189999,
    originalPrice: 231706,
    installmentPrice: 31667,
    installments: 6,
    image: "https://images.unsplash.com/photo-1616453398788-b76015525950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1616453398788-b76015525950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    discount: 18,
    isPromoted: false,
    shortDescription: "Gran capacidad y tecnología No Frost para mantener tus alimentos frescos por más tiempo sin preocuparte por la escarcha.",
    longDescription: "Esta heladera combina un diseño elegante con una gran capacidad de almacenamiento de 364 litros. La tecnología No Frost evita la formación de hielo y escarcha, facilitando la limpieza y mejorando la conservación de los alimentos. Cuenta con estantes de vidrio templado ajustables y un cajón especial para frutas y verduras.",
    specs: {
      "Capacidad": "364 Litros",
      "Tecnología": "No Frost",
      "Eficiencia Energética": "A+",
      "Dimensiones": "175cm x 60cm x 65cm",
      "Garantía": "12 meses"
    },
    rating: 4.7,
    reviewCount: 28,
  },
];