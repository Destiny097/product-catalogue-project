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
    colors: ["#000000", "#CBD5E0", "#718096"],
  },
  {
    name: "Technical Silk",
    subtitle: "Make A Splash",
    price: 120,
    image: "/assets/green_dress.png",
    colors: ["#A0AEC0", "#9ACD32", "#000000"],
  },
  {
    name: "Cool Weave",
    subtitle: "Anywhere Dress",
    price: 210,
    image: "/assets/black_dress.png",
    colors: ["#9370DB", "#98FB98", "#6B8E23"],
  },
  {
    name: "Business Causal",
    subtitle: "Anywhere Dress",
    price: 210,
    image: "/assets/suit.png",
    colors: ["#9370DB", "#98FB98", "#6B8E23"],
  },
  {
    name: "Formal",
    subtitle: "Formal Dress",
    price: 210,
    image: "/assets/brown_dress.png",
    colors: ["#9370DB", "#98FB98", "#6B8E23"],
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
