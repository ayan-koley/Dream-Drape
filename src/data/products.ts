export type Product = {
  id: number;
  title: string;
  description: string;
  price?: number;
  image: string;
  affiliateLink: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Elegant Buddha Decor for a Peaceful Home",
    description: "Transform your home into a peaceful sanctuary with this beautifully crafted Buddha statue.",
    image: "https://ik.imagekit.io/d3nbxq5gj/Dream%20Drape/god_1.png",
    affiliateLink: "https://amzn.to/4ncL8xE",
    category: "Home Decors",
  },
  {
    id: 2,
    title: "Luxury Buddha Statue for Positive Vibes at Home",
    description: "Elevate your home decor with this premium Buddha statue featuring rich blue and gold accents. A perfect blend of spirituality and luxury.",
    image: "https://ik.imagekit.io/d3nbxq5gj/Dream%20Drape/god_2.png",
    affiliateLink: "https://amzn.to/4d4kjaa",
    category: "Home Decors",
  }
];

export const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];