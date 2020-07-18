import Axios from "axios";
import Cookie from 'js-cookie';
import * as actions from './types'

export const update = ({ userId, name, email, password }) => async (dispatch, getState) => {
    const { userSignin: { userInfo } } = getState();
    dispatch({ type: actions.USER_UPDATE_REQUEST, payload: { userId, name, email, password } });
    try {
        const { data } = await Axios.put("/api/users/" + userId,
            { name, email, password }, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token
            }
        });
        dispatch({ type: actions.USER_UPDATE_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: actions.USER_UPDATE_FAIL, payload: error.message });
    }
}

export const signin = (email, password) => async (dispatch) => {
    dispatch({
        type: actions.USER_SIGNIN_REQUEST,
        payload: { email, password }
    });
    try {
        const { data } = await Axios.post("/api/users/signin", { email, password });
        dispatch({ type: actions.USER_SIGNIN_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: actions.USER_SIGNIN_FAIL, payload: error.message });
    }
}

export const register = (name, email, password) => async (dispatch) => {
    dispatch({ type: actions.USER_REGISTER_REQUEST, payload: { name, email, password } });
    try {
        const { data } = await Axios.post("/api/users/register", { name, email, password });
        dispatch({ type: actions.USER_REGISTER_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: actions.USER_REGISTER_FAIL, payload: error.message });
    }
}

export const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: actions.USER_LOGOUT })
}
