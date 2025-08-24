import axios from "axios";

const API = axios.create({
    baseURL : "http://localhost:5000/api",
})

export const getProducts = () => API.get("/products");
export const getProductById = () => API.get(`/products/${id}`);
export const getCollections = () => API.get(`/collections`);