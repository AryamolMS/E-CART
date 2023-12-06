import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./Slice/wishlistSlice";
import  cartSlice  from "./Slice/cartSlice";

export const store=configureStore({
    reducer:{
        wislistReducer:wishlistSlice,
        cartReducer:cartSlice
    }
})


