import express from  "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/productRoutes.js";
import collectionRoutes from "./routes/collectionRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth",authRoutes);
app.use("/api/products",productRoutes);
app.use("/api/collections",collectionRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/users",userRoutes);
app.use("/api/orders",orderRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDB connected")).catch(err=> console.log(err));

app.get("/",(req,res)=>{
    res.send("API is Running");
});

const port =process.env.PORT;
app.listen(port,()=>console.log(`Server running on ${port}`));