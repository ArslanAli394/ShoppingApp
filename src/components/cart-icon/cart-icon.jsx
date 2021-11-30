import React from 'react'
import { connect } from 'react-redux';
// use for multiple ouput selector without passing state bcz it auto get higher state
import { createStructuredSelector } from 'reselect'; 

import { ReactComponent as ShoppingIcon }  from '../../assests/shopping-bag.svg.svg';
import {cartHidden} from '../../redux/cart/cart.action';
import { selectCartItemCount } from '../../redux/cart/cart.selector';


const CartIcon =({cartHiddenSection,itemCount})=>{
    return <div class="w-1/5 h-1/5 relative flex align-items-center justify-center cursor-pointer" onClick={cartHiddenSection}>
    <ShoppingIcon class="w-1/4 h-1/4"/>
    <span class="absolute py-1"> {itemCount} </span>
</div> 

}
const mapStateToProps = createStructuredSelector({
      itemCount:selectCartItemCount
})
const mapDispatchToProps = dispatch=>({
    cartHiddenSection: ()=>dispatch(cartHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);


    