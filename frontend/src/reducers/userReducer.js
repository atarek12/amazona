import * as actions from '../actions/types'


function userSigninReducer(state = {}, action) {
    switch (action.type) {
        case actions.USER_SIGNIN_REQUEST:

            return { loading: true };
        case actions.USER_SIGNIN_SUCCESS:

            return { loading: false, userInfo: action.payload };
        case actions.USER_SIGNIN_FAIL:

            return { loading: false, error: action.payload };
        case actions.USER_LOGOUT:
            return {};
        default: return state;
    }
}

function userUpdateReducer(state = {}, action) {
    switch (action.type) {
        case actions.USER_UPDATE_REQUEST:
            return { loading: true };
        case actions.USER_UPDATE_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case actions.USER_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function userRegisterReducer(state = {}, action) {
    switch (action.type) {
        case actions.USER_REGISTER_REQUEST:
            return { loading: true };
        case actions.USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case actions.USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}
export {
    userSigninReducer, userRegisterReducer, userUpdateReducer
}