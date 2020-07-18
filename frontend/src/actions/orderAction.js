import Axios from "axios";
import * as actions from './types'

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: actions.ORDER_CREATE_REQUEST, payload: order });
        const { userSignin: { userInfo } } = getState();
        const { data: { data: newOrder } } = await Axios.post("/api/orders", order, {
            headers: {
                Authorization: ' Bearer ' + userInfo.token
            }
        });
        dispatch({ type: actions.ORDER_CREATE_SUCCESS, payload: newOrder });
    } catch (error) {
        dispatch({ type: actions.ORDER_CREATE_FAIL, payload: error.message });
    }
}

export const listMyOrders = () => async (dispatch, getState) => {
    try {
        dispatch({ type: actions.MY_ORDER_LIST_REQUEST });
        const { userSignin: { userInfo } } = getState();
        const { data } = await Axios.get("/api/orders/mine", {
            headers:
                { Authorization: 'Bearer ' + userInfo.token }
        });
        dispatch({ type: actions.MY_ORDER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actions.MY_ORDER_LIST_FAIL, payload: error.message });
    }
}

export const listOrders = () => async (dispatch, getState) => {

    try {
        dispatch({ type: actions.ORDER_LIST_REQUEST });
        const { userSignin: { userInfo } } = getState();
        const { data } = await Axios.get("/api/orders", {
            headers:
                { Authorization: 'Bearer ' + userInfo.token }
        });
        dispatch({ type: actions.ORDER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actions.ORDER_LIST_FAIL, payload: error.message });
    }
}

export const detailsOrder = (orderId) => async (dispatch, getState) => {
    try {
        dispatch({ type: actions.ORDER_DETAILS_REQUEST, payload: orderId });
        const { userSignin: { userInfo } } = getState();
        const { data } = await Axios.get("/api/orders/" + orderId, {
            headers:
                { Authorization: 'Bearer ' + userInfo.token }
        });
        dispatch({ type: actions.ORDER_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actions.ORDER_DETAILS_FAIL, payload: error.message });
    }
}

export const payOrder = (order, paymentResult) => async (dispatch, getState) => {
    try {
        dispatch({ type: actions.ORDER_PAY_REQUEST, payload: paymentResult });
        const { userSignin: { userInfo } } = getState();
        const { data } = await Axios.put("/api/orders/" + order._id + "/pay", paymentResult, {
            headers:
                { Authorization: 'Bearer ' + userInfo.token }
        });
        dispatch({ type: actions.ORDER_PAY_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actions.ORDER_PAY_FAIL, payload: error.message });
    }
}

export const deleteOrder = (orderId) => async (dispatch, getState) => {
    try {
        dispatch({ type: actions.ORDER_DELETE_REQUEST, payload: orderId });
        const { userSignin: { userInfo } } = getState();
        const { data } = await Axios.delete("/api/orders/" + orderId, {
            headers:
                { Authorization: 'Bearer ' + userInfo.token }
        });
        dispatch({ type: actions.ORDER_DELETE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actions.ORDER_DELETE_FAIL, payload: error.message });
    }
}
