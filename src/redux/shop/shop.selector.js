import { createSelector } from "reselect";

//input selector 
const shopSelector = state => state.shop;

//output selector

const shopSelectorCollection = createSelector(
    [shopSelector],
    shop => shop.collection
)

export {
    shopSelectorCollection
}