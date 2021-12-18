import SHOP_DATA from "./shop.data.js"
const INITIAL_STATE ={
    collection : SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE,action )=>{
    switch (action.payload) {
        default:
            return state;
    }
}
export default shopReducer;