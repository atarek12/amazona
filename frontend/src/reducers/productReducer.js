import * as actions from '../actions/types'


// define initial state
const initialState = {
    products: []
}

export function pageRefreshReducer(state = false, action) {
    switch (action.type) {
        case actions.REFRESH_PAGE:
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export function productListReducer(state = initialState, action) {
    switch (action.type) {
        case actions.PRODUCT_LIST_REQUEST:
            return { loading: true };
        case actions.PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case actions.PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

//(state = { product: { reviews: [] } }, action)
export function productDetailsReducer(state = { loading: true, product: { reviews: [] } }, action) {
    switch (action.type) {
        case actions.PRODUCT_DETAILS_REQUEST:
            return { loading: true };
        case actions.PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case actions.PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}


export function productDeleteReducer(state = { product: {} }, action) {
    switch (action.type) {
        case actions.PRODUCT_DELETE_REQUEST:
            return { loading: true };
        case actions.PRODUCT_DELETE_SUCCESS:
            return { loading: false, product: action.payload, success: true };
        case actions.PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}


export function productSaveReducer(state = { product: {} }, action) {
    switch (action.type) {
        case actions.PRODUCT_SAVE_REQUEST:
            return { loading: true };
        case actions.PRODUCT_SAVE_SUCCESS:
            return { loading: false, success: true, product: action.payload };
        case actions.PRODUCT_SAVE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}


export function productReviewSaveReducer(state = {}, action) {
    switch (action.type) {
        case actions.PRODUCT_REVIEW_SAVE_REQUEST:
            return { loading: true };
        case actions.PRODUCT_REVIEW_SAVE_SUCCESS:
            return { loading: false, review: action.payload, success: true };
        case actions.PRODUCT_REVIEW_SAVE_FAIL:
            return { loading: false, errror: action.payload };
        case actions.PRODUCT_REVIEW_SAVE_RESET:
            return {};
        default:
            return state;
    }
}
