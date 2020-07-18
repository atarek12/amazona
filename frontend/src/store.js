import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'


// notice the usage of cookie
import Cookie from 'js-cookie'
const cartItems = Cookie.getJSON("cartItems") || [];

const userInfo = Cookie.getJSON("userInfo") || null;


const initialState = { cart: { cartItems, shipping: {}, payment: {} }, userSignin: { userInfo } };



const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store
