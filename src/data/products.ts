export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  affiliateLink: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones",
    description: "Immersive sound with adaptive noise cancellation and 30h battery.",
    price: 299.0,
    image: "https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-600,h-600",
    affiliateLink: "https://www.amazon.com/dp/B0863TXGM3?tag=youraffid-20",
    category: "Audio",
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    description: "Track workouts, heart rate, sleep & notifications on a vivid AMOLED display.",
    price: 179.0,
    image: "https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-600,h-600",
    affiliateLink: "https://www.amazon.com/dp/B09G9FPHY6?tag=youraffid-20",
    category: "Wearables",
  },
  {
    id: 3,
    title: "4K Action Camera",
    description: "Rugged waterproof 4K60 camera with stabilization for any adventure.",
    price: 249.0,
    image: "https://ik.imagekit.io/demo/img/image2.jpeg?tr=w-600,h-600",
    affiliateLink: "https://www.amazon.com/dp/B08DK4TBHP?tag=youraffid-20",
    category: "Cameras",
  },
  {
    id: 4,
    title: "Portable Bluetooth Speaker",
    description: "Bold 360° sound, IP67 waterproof, 24-hour playtime.",
    price: 89.0,
    image: "https://ik.imagekit.io/demo/img/image3.jpeg?tr=w-600,h-600",
    affiliateLink: "https://www.amazon.com/dp/B07QK2SPP7?tag=youraffid-20",
    category: "Audio",
  },
  {
    id: 5,
    title: "Mechanical Gaming Keyboard",
    description: "Hot-swappable switches with per-key RGB and aluminum frame.",
    price: 139.0,
    image: "https://ik.imagekit.io/demo/img/image5.jpeg?tr=w-600,h-600",
    affiliateLink: "https://www.amazon.com/dp/B08DHQQ8YK?tag=youraffid-20",
    category: "Accessories",
  },
  {
    id: 6,
    title: "Ergonomic Wireless Mouse",
    description: "Silent clicks, precise tracking, and a sculpted comfort grip.",
    price: 49.0,
    image: "https://ik.imagekit.io/demo/img/image6.jpeg?tr=w-600,h-600",
    affiliateLink: "https://www.amazon.com/dp/B07S395RWD?tag=youraffid-20",
    category: "Accessories",
  },
  {
    id: 7,
    title: "Ultra-Slim Laptop Stand",
    description: "Foldable aluminum stand with adjustable angles for all laptops.",
    price: 39.0,
    image: "https://ik.imagekit.io/demo/img/image7.jpeg?tr=w-600,h-600",
    affiliateLink: "https://www.amazon.com/dp/B07D74DT3M?tag=youraffid-20",
    category: "Accessories",
  },
  {
    id: 8,
    title: "Smart Home Hub",
    description: "Voice control, automation routines, and seamless device integration.",
    price: 129.0,
    image: "https://ik.imagekit.io/demo/img/image8.jpeg?tr=w-600,h-600",
    affiliateLink: "https://www.amazon.com/dp/B084DWG2VQ?tag=youraffid-20",
    category: "Smart Home",
  },
];

export const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];