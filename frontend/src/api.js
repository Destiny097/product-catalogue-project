import axios from "axios";

const API = axios.create({
    baseURL : `${import.meta.env.VITE_API_BASEURL}/api`,
})

export const getProducts = () => API.get("/api/products");
export const getProductById = () => API.get(`/api/products/${id}`);
export const getCollections = () => API.get(`/api/collections`);