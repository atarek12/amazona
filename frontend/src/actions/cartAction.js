import Axios from "axios";
import Cookie from "js-cookie";
import * as actions from './types'


export const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const { data } = await Axios.get("/api/products/" + productId);
        dispatch({
            type: actions.CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        });

        //store the state in the cookie
        const { cart: { cartItems } } = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));

    } catch (error) {

    }
}


export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: actions.CART_REMOVE_ITEM, payload: productId });

    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}


export const saveShipping = (data) => (dispatch) => {
    dispatch({ type: actions.CART_SAVE_SHIPPING, payload: data });
}


export const savePayment = (data) => (dispatch) => {
    dispatch({ type: actions.CART_SAVE_PAYMENT, payload: data });
}
