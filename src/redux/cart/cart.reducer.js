import cartType from "./cart.types";
import {addItemToCart} from './cart.util';

const INTIAL_STATE = {
    hidden:true,
    cartItems:[]
}

const cartReducer = (state= INTIAL_STATE,action)=>{
    switch (action.type) {
        case cartType.SET_HIDDEN_CART:
            return {
                ...state,
                hidden:!state.hidden
            }
        case cartType.ADD_ITEM:
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        default:
            return state
    }
} 
export default cartReducer;