import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: Number,
    name:String,
    subtitle:String,
    price:String,
    image:String,
    colors:[String]
});

export default mongoose.model("Product",productSchema);