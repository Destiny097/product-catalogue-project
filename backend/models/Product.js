import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: Number,
    name:String,
    subtitle:String,
    description:String,
    sizes:[String],
    fabric:String,
    care:String,
    shipping:String,
    price:String,
    image:String,
    material:String,
    tags:[String],
    colors:[String]
});

export default mongoose.model("Product",productSchema);