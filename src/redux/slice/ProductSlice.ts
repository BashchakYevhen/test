import { createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../interfaces/iProduct"
import { productQuery } from "../operation/operation"

export interface IProductState {  
    product: IProduct[];
    isLoading: boolean
    totalPage: number
}

const initialState: IProductState  = {
    product: [],
    isLoading: false,
    totalPage: 0
}


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(productQuery.fulfilled, (state, action) => {
            state.product = action.payload.data
            state.totalPage = action.payload.total_pages
})
    }
})
export const productReducer = productSlice.reducer