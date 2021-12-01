import React from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItems, selectCartItemTotal } from '../../redux/cart/cart.selector';
import CheckOutItem from '../../components/checkout-item/checkout-item';

const CheckOutPage=({cartItems, total}) => {
    return (
        <div class='flex justify-center'>
        <div class='w-1/2'>
              <div class="flex items-center justify-between">
            <h3 class="text-2xl font-medium text-gray-700">Your cart</h3>
            <button class="text-gray-600 focus:outline-none">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        <hr class="my-3"/>
            {
                cartItems.length>0?
                cartItems.map(cartItem=>(
                    <CheckOutItem key={cartItem.id} item={cartItem}/>
                )):
                <span class='text-purple-600'>Your Checkout Page is Empty.</span>
            }
        <div class="mt-8">
            <h2 class="flex items-center justify-center text-purple-600">
               TOTAL: &nbsp;{total}
            </h2>
        </div>
        <button class="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <span>Chechout</span>
            <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>

        </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartItemTotal

})
export default connect(mapStateToProps)(CheckOutPage)
