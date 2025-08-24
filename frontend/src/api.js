import axios from "axios";

const API = axios.create({
    baseURL : `${import.meta.env.VITE_API_BASEURL}/api`,
})

export const getProducts = () => API.get("/products");
export const getProductById = () => API.get(`/products/${id}`);
export const getCollections = () => API.get(`/collections`);