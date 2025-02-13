import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../store/productsSlice";

const store = configureStore({
    reducer:{
        productsName: ProductsReducer,
    },
});
export default store;