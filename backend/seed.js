import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import Collection from "./models/Collection.js";

dotenv.config();

// Sample collections
const collections = [
  {
    title: "Blouses",
    image: "/assets/hero.jpg",
  },
  {
    title: "Pants",
    image: "/assets/suit.png",
  },
  {
    title: "Dresses",
    image: "/assets/brown_dress.png",
  },
  {
    title: "Outerwear",
    image: "/assets/overcoat.png",
  },
];

// Sample products
const products = [
  {
    name: "Tailored Stretch",
    subtitle: "Turn It Up Pants",
    price: 180,
    image: "/assets/casual.png",
    description:
      "Designed for comfort and movement, these tailored pants blend structure with stretch for all-day wear.",
    colors: ["#000000", "#CBD5E0", "#718096"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "55% Cotton, 40% Nylon, 5% Elastane",
    care: "Machine wash cold with like colors. Hang to dry. Iron low if needed.",
    shipping:
      "Free shipping on U.S. orders over $100. International shipping available at checkout.",
    material:
      "Crafted with a high-stretch weave that holds its shape while allowing natural movement.",
    tags: ["Wrinkle Resistant", "Breathable", "Flexible Fit"],
  },
  {
    name: "Technical Silk",
    subtitle: "Make A Splash",
    price: 120,
    image: "/assets/green_dress.png",
    description:
      "A lightweight dress inspired by silk, engineered to resist wrinkles and maintain a polished look.",
    colors: ["#A0AEC0", "#9ACD32", "#000000"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "70% Polyester, 25% Rayon, 5% Spandex",
    care: "Gentle cycle, lay flat to dry. Avoid bleach.",
    shipping:
      "Free shipping on domestic orders. Easy returns within 30 days.",
    material:
      "Smooth and fluid technical fabric that drapes effortlessly without clinging.",
    tags: ["Lightweight", "Wrinkle Free", "Travel Friendly"],
  },
  {
    name: "Cool Weave",
    subtitle: "Anywhere Dress",
    price: 210,
    image: "/assets/black_dress.png",
    description:
      "Made with breathable fibers, this dress keeps you cool in warmer climates while maintaining elegance.",
    colors: ["#9370DB", "#98FB98", "#6B8E23"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "60% Linen, 35% Viscose, 5% Elastane",
    care: "Hand wash cold or dry clean for best results.",
    shipping:
      "Ships within 2–3 business days. Returns accepted within 20 days of delivery.",
    material:
      "Open-weave design allows maximum airflow while providing structure and durability.",
    tags: ["Breathable", "Summer Essential", "Soft Touch"],
  },
  {
    name: "Business Casual",
    subtitle: "Structured Suit",
    price: 250,
    image: "/assets/suit.png",
    description:
      "A modern slim-fit suit that combines sharp tailoring with lightweight comfort for office or events.",
    colors: ["#9370DB", "#98FB98", "#6B8E23"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "65% Wool, 30% Polyester, 5% Elastane",
    care: "Dry clean only to maintain shape and quality.",
    shipping:
      "Free express shipping within the U.S. International shipping calculated at checkout.",
    material:
      "Blended wool with stretch for flexibility, designed for all-day wear without discomfort.",
    tags: ["Tailored Fit", "Stretch Fabric", "Formal Ready"],
  },
  {
    name: "Formal",
    subtitle: "Evening Dress",
    price: 300,
    image: "/assets/brown_dress.png",
    description:
      "An elegant evening gown crafted with smooth textures and timeless style, perfect for special occasions.",
    colors: ["#9370DB", "#98FB98", "#6B8E23"],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "80% Satin, 15% Nylon, 5% Spandex",
    care: "Dry clean recommended. Do not bleach or tumble dry.",
    shipping:
      "Complimentary gift packaging included. Free returns within 14 days.",
    material:
      "Soft satin finish with subtle stretch for a graceful fit and luxurious feel.",
    tags: ["Luxury Fabric", "Elegant Design", "Special Occasion"],
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    
    await Product.deleteMany();
    await Collection.deleteMany();

    
    await Collection.insertMany(collections);
    await Product.insertMany(products);

    console.log("✅ Database seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedData();
