export const addItemToCart = (cartItems,cartAddItem)=>{
    const existingCart = cartItems.find(
        cartItem=> cartItem.id === cartAddItem.id
        )
    if(existingCart){
        return cartItems.map(
            cartItem=> cartItem.id === cartAddItem.id ?
            {...cartItem,quantity:cartItem.quantity+1}:cartItem
        )
    }
    return [...cartItems,{...cartAddItem,quantity:1}]
}