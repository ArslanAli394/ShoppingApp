import React from 'react'
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon }  from '../../assests/shopping-bag.svg.svg';
import {cartHidden} from '../../redux/cart/cart.action';


const CartIcon =({cartHiddenSection})=>{
    return <div class="w-1/5 h-1/5 relative flex align-items-center justify-center cursor-pointer" onClick={cartHiddenSection}>
    <ShoppingIcon class="w-1/4 h-1/4"/>
    <span class="absolute py-1"> 0 </span>
</div> 

}

const mapDispatchToProps = dispatch=>({
    cartHiddenSection: ()=>dispatch(cartHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon);


    