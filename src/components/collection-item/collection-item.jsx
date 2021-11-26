import React from 'react';
import CustomButton from '../custom-button/cutom-button';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({ item,addItem }) => {
    const {name, price,imageUrl} = item
    return (
        <div class='flex-col w-1/5 h-80 relative group m-auto align-items-center '>
            <div
                class='w-full h-72'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
            </div>
            <div class='invisible group-hover:visible absolute w-full h-1/18 top-60  py-2 bg-gray-400 text-white text-center'
             >
                <CustomButton onClick={()=>addItem(item)}>Add To Cart</CustomButton>
            </div>

            <div class='w-full h-8 flex justify-between'>
                <span class='text-lg text-purple-600 bold'>{name}</span>
                <span class='text-lg text-purple-600 bold'>{price}</span>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    addItem : item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);