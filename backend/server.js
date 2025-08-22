import express from  "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth",authRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDB connected")).catch(err=> console.log(err));

app.get("/",(req,res)=>{
    res.send("API is Running");
});

const port =process.env.PORT;
app.listen(port,()=>console.log(`Server running on ${port}`));