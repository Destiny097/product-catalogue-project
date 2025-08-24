import express from "express";
import Product from "../models/Product.js";
import Collection from "../models/Collection.js";
const router = express.Router();

router.get("/products", async(req,res)=>{
    const products =await Product.find();
    res.json(products);
});

router.get("/products/:id", async(req,res)=>{
    const products = await Product.findById(req.params.id);
    res.json(product);
});

router.get("/collections", async(req,res)=>{
    const collections =await Collection.find();
    res.json(collections);
});

export default router;