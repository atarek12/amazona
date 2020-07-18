import * as actions from './types'
import axios from 'axios'

export const pageRefresh = (bool) => (dispatch) => {
    dispatch({
        type: actions.REFRESH_PAGE,
        payload: bool
    });
}

export const listProducts = (category) => async (dispatch) => {
    let data = {};
    try {
        dispatch({
            type: actions.PRODUCT_LIST_REQUEST,
        });

        if (category) {
            data = await axios.get(`/api/products?category=${category}`)
        }
        else {
            data = await axios.get('/api/products');
        }


        dispatch({
            type: actions.PRODUCT_LIST_SUCCESS,
            payload: data.data
        });

    }
    catch (error) {
        dispatch({
            type: actions.PRODUCT_LIST_FAIL,
            payload: error.message
        });
    }
}


export const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({
            type: actions.PRODUCT_DETAILS_REQUEST,
            payload: productId
        })

        const { data } = await axios.get('/api/products/' + productId);

        dispatch({
            type: actions.PRODUCT_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actions.PRODUCT_DETAILS_FAIL,
            payload: error.message
        });
    }

}


export const saveProductReview = (productId, review) => async (dispatch, getState) => {
    try {
        const {
            userSignin: {
                userInfo: { token },
            },
        } = getState();
        dispatch({ type: actions.PRODUCT_REVIEW_SAVE_REQUEST, payload: review });
        const { data } = await axios.post(
            `/api/products/${productId}/reviews`,
            review,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            }
        );
        dispatch({ type: actions.PRODUCT_REVIEW_SAVE_SUCCESS, payload: data });
    } catch (error) {
        // report error
        dispatch({ type: actions.PRODUCT_REVIEW_SAVE_FAIL, payload: error.message });
    }
};


export const deleteProdcut = (productId) => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfo },
        } = getState();
        dispatch({ type: actions.PRODUCT_DELETE_REQUEST, payload: productId });
        const { data } = await axios.delete('/api/products/' + productId, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token,
            },
        });
        dispatch({ type: actions.PRODUCT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: actions.PRODUCT_DELETE_FAIL, payload: error.message });
    }
};


export const saveProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({ type: actions.PRODUCT_SAVE_REQUEST, payload: product });
        const {
            userSignin: { userInfo },
        } = getState();
        if (!product._id) {
            const { data } = await axios.post('/api/products', product, {
                headers: {
                    Authorization: 'Bearer ' + userInfo.token,
                },
            });
            dispatch({ type: actions.PRODUCT_SAVE_SUCCESS, payload: data });
        } else {
            const { data } = await axios.put(
                '/api/products/' + product._id,
                product,
                {
                    headers: {
                        Authorization: 'Bearer ' + userInfo.token,
                    },
                }
            );
            dispatch({ type: actions.PRODUCT_SAVE_SUCCESS, payload: data });
        }
    } catch (error) {
        dispatch({ type: actions.PRODUCT_SAVE_FAIL, payload: error.message });
    }
};

