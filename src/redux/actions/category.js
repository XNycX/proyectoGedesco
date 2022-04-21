import store from "../store";
import axios from "axios";
import { GET_CATEGORIES } from "../types";
const API_URL = 'https://fakestoreapi.com/';

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