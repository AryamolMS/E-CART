import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],//since this state has to store more than one item
    reducers:{
        //actions
        //function to add items/state to wishlist array state
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        //function to remove items from wishlist
        removeFromWishlist:(state,action)=>{
           return state.filter(item=>item.id!==action.payload)
        }
    }
})

export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions
export default wishlistSlice.reducer