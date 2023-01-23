import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../types"

const initialState: Product[] = []

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.push(action.payload)
        }
    }
})

export const { addProduct } =  productSlice.actions

export default productSlice.reducer