import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../store/productsSlice";

const store = configureStore({
    reducer:{
        products: ProductsReducer,
    },
});
export default store;