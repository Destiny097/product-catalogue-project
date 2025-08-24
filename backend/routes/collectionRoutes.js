import express from "express";
import Collection from "../models/Collection.js";

const router = express.Router();

router.get("/",async(req,res)=>{
    const collection = await Collection.find();
    res.json(collection);
})

export default router;