import { GET_PRODUCTS,GET_CATEGORIES } from "../types";

const initialState = {
    products: [],
    categories: [],
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
            case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        default:
            return state;
    }
};

export default productsReducer;