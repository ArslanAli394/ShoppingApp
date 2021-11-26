import React from 'react';

import CollectionItem from '../collection-item/collection-item';

const CollectionPreview =({title,items})=>{
    return(
        <div class='mx-6 my-6'>
            <h2 class="text-purple-600 font-bold">{title.toUpperCase()}</h2>
            <div class='flex'>
                {
                    items.filter((item,idx)=>idx<4)
                    .map((item)=>(
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}
export default CollectionPreview;