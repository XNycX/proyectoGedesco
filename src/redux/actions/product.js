import store from "../store";
import axios from "axios";
import { GET_PRODUCTS } from "../types";
const API_URL = 'https://fakestoreapi.com';

export const getProducts = async () => {
    try {
        const res = await axios.get(`${API_URL}/products`);
        store.dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
        });
        
    } catch (error) {
        console.error(error)
    }
}