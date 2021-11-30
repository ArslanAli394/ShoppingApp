import React from 'react'
import CartItem from '../cart-item/cart-item'
import CustomButton from '../custom-button/cutom-button'
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector';

const CartDropdown=({cartItems})=> {
    return (
        <div class="absolute right-0 m-auto bg-gray-400 rounded-b border-t-0 z-10">
                <div class="shadow-xl w-64">
                    {
                       cartItems.map(cartItem=>(
                           <CartItem key={cartItem.id} item={cartItem}/>
                       ))
                    }
            <div class="p-4 justify-center flex">
        <CustomButton class="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition">Go To Checkout</CustomButton>
                    </div>
                </div>
            </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})
export default connect(mapStateToProps,null)(CartDropdown)
