import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,  // e.g. https://ecommerceassignment-seven.vercel.app
});

// Get all products
export const getProducts = () => API.get("/api/products");

// Get product by id
export const getProductById = (id) => API.get(`/api/products/${id}`);

// Get all collections
export const getCollections = () => API.get("/api/collections");
