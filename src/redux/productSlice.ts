import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authUser } from "../services/auth.service"
import { IState, IUser, Product } from "../types"

export const loginUser = createAsyncThunk("products/login", async ({username, password}: IUser)=>{
    const userLogged = await authUser({username, password})
    return userLogged
})

const initialState: IState = {
    product: [],
    loading: false,
    success: false,
    error: false
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.product.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder
        .addCase(loginUser.pending, (state, _action)=>{
                state.loading = true
            })
        .addCase(loginUser.fulfilled, (state, _action)=>{
                state.loading = false
                state.success = true
            })
        .addCase(loginUser.rejected, (state, _action)=>{
                //para probar este case debes setear mal URL de la API en authUser
                state.loading = false
                state.error = true
            })
    }
})

export const { addProduct } =  productSlice.actions

export default productSlice.reducer