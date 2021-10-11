import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const listProductsRequest = () => {
    return (dispatch) => {
        return callApi('products',null).then(res => {
            dispatch(listProducts(res.data))
        });
    }
}

export const listProducts = (products) => {
    return {
        type: Types.LIST_PRODUCTS,
        products
    }
    
}

export const deleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`,'DELETE',null).then(res => {
            dispatch(deleteProduct(id))
        })
    }
}

export const deleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const addProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products`,'POST',product).then(res => {
            dispatch(addProduct(res.data))
        })
    }
}

export const addProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const editProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(editProduct(res.data))
        })
    }
}

export const editProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const updateProductRequest = (product, id) => {
    return (dispatch) => {
        return callApi(`products/${id}`,'PUT', product).then(res => {
            dispatch(updateProduct(product,id))
        })
    }
}

export const updateProduct = (product,id) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product,
        id    
    }
}