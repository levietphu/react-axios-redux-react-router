import * as Types from '../constants/ActionTypes';

var initialState = [];
var  finIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
           result = index; 
        }
    });
    return result;
}

const myReducer = (state=initialState, action) => {
    var index = -1;
    var {id} = action;
    switch (action.type) {
        case Types.LIST_PRODUCTS:
            state= action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index=finIndex(state, id);
            if (index!==-1) {
                state.splice(index,1);
            }
            return [...state];
        case Types.UPDATE_PRODUCT:
            index=finIndex(state, id);
            if(index!==-1){
                state[index] = action.product;
            }
            return [...state]
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state]
        default:
            return [...state];
    }
}

export default myReducer;