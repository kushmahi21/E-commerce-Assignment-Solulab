import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./components/redux/ProductSlice";

export const store = configureStore({
    reducer:{
        products: ProductSlice
    }
})

