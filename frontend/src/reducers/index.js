import { combineReducers } from 'redux'

// import all reducers
import * as productReducer from './productReducer'
import * as userReducer from './userReducer'
import { cartReducer } from './cartReducer'
import * as orderReducer from './orderReducer'


// compine them
export default combineReducers({

    refreshPage: productReducer.pageRefreshReducer,

    productList: productReducer.productListReducer,
    productSave: productReducer.productSaveReducer,
    productDelete: productReducer.productDeleteReducer,
    productReviewSave: productReducer.productReviewSaveReducer,
    productDetails: productReducer.productDetailsReducer,

    cart: cartReducer,

    userSignin: userReducer.userSigninReducer,
    userRegister: userReducer.userRegisterReducer,
    userUpdate: userReducer.userUpdateReducer,

    myOrderList: orderReducer.myOrderListReducer,
    orderCreate: orderReducer.orderCreateReducer,
    orderDetails: orderReducer.orderDetailsReducer,
    orderPay: orderReducer.orderPayReducer,
    orderList: orderReducer.orderListReducer,
    orderDelete: orderReducer.orderDeleteReducer
})
