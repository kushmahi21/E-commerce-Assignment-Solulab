import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {product: []}
const ProductSlice = createSlice({
    name : "Product",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled,(state,action) => {
            state.product=action.payload
        })
        
    }
})

export const fetchProduct = createAsyncThunk("prodcut/fetchProdcut", async () => {
    const res = await axios.get("https://api.escuelajs.co/api/v1/products")
    return res?.data;
})

export default ProductSlice.reducer



