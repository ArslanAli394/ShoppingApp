import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//components
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { shopSelectorCollection } from '../../redux/shop/shop.selector.js';

const CollectionOverview =({collections})=>{
        return (
            <div>
                {
                    collections.map(({id, ...otherCollectionProps})=>(
                        <CollectionPreview key={id}  {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    
}
const mapStateToProps = createStructuredSelector({
    collections: shopSelectorCollection
})
export default connect(mapStateToProps)(CollectionOverview);