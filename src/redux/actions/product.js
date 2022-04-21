import store from "../store";
import axios from "axios";
import { GET_PRODUCTS,GET_CATEGORIES } from "../types";
const API_URL = 'https://fakestoreapi.com/products/';

export const getProducts = async () => {
    try {
        const res = await axios.get(`${API_URL}`);
        store.dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
        });
        
    } catch (error) {
        console.error(error)
    }
}
export const getCategories = async () => {
    try {
        const res = await axios.get(`${API_URL}categories`);
        store.dispatch({
            type: GET_CATEGORIES,
            payload: res.data,
        });
        
    } catch (error) {
        console.error(error)
    }
}