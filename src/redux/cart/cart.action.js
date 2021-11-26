import cartType from "./cart.types"

export const cartHidden = ()=>{
    return{
        type:cartType.SET_HIDDEN_CART
    }
}
export const addItem = item =>{
    console.log(item)
    return {
        type:cartType.ADD_ITEM,
        payload: item
    }
}