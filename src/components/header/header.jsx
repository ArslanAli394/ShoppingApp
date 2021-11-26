import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assests/crown.svg.svg";
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon'

//auth
import {auth} from '../../firebase/firebase.util';
import CartDropdown from '../cart-dropdown/cart-dropdown';


const Header =({currentUser,cartHidden})=>{
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div class='flex justify-between items-center  py-4 md:justify-start md:space-x-10'>
             <div class='flex justify-start lg:w-0 lg:flex-1'>
                 <Link to='/'><Logo/></Link>
             </div>
             <div class='flex justify-end lg:w-0 lg:flex-1'>
                 <Link to='/shop' class='px-2'><span class='text-xl'>Shop</span></Link>
                 <Link><span class='text-xl px-2'>Contact</span></Link>
                 {
                     currentUser ?
                     <div style={{cursor:'pointer'}} onClick={()=> auth.signOut()}>
                          <Link
                   to="#"
                   className=" flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                 >
                   SignOut
                 </Link>
                    </div>:
                     <Link
                     to="signIn"
                     className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                   >
                     Sign In
                   </Link>
                 }
                 <CartIcon/>
                 
             </div>


        </div>
        {
          cartHidden?null:
          <CartDropdown/>   
        }      
        </div>
    )
}

const mapStateToProps = state =>({
    currentUser: state.user.currentUser,
    cartHidden: state.cart.hidden
})
export default connect(mapStateToProps)(Header);





//  <Popover className="relative bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"></div>
//             <div>
//                 <Link to='/'><Logo/></Link>
//             </div>
//             <div>
//             <p className="mt-6 text-center text-base font-medium text-gray-500">
//                   {/* Existing customer?{' '} */}
//                   <Link href="/shop" className="text-indigo-600 hover:text-indigo-500">
//                     Shop
//                   </Link>
//                 </p>
//                 <p className="mt-6 text-center text-base font-medium text-gray-500">
//                   {/* Existing customer?{' '} */}
//                   <Link href="#" className="text-indigo-600 hover:text-indigo-500">
//                     Contact
//                   </Link>
//                 </p>
//                 <a
//                   href="#"
//                   className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//                 >
//                   Sign up
//                 </a>
//                 <p className="mt-6 text-center text-base font-medium text-gray-500">
//                   Existing customer?{' '}
//                   <a href="#" className="text-indigo-600 hover:text-indigo-500">
//                     Sign in
//                   </a>
//                 </p>
//               </div>
//         </div>
//         </div>
//        </Popover>