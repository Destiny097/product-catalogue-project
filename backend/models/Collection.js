import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    id:Number,
    title:String,
    image:String
});

export default mongoose.model("Collection",collectionSchema);