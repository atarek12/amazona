import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {};        // must be an object

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



/**
 * - this is how we create a store
 * const store = createStore(rootReducer , initialState , anyEnhancer);
 *
 * rootReducer is a dummy reducer made because the store must have at least one reducer --> index.js
 *
 * -middle ware is just an enhance function that take a thunk in its parameters
        applyMiddleware function will inject the dispatch and the getState functions
        as parameters into the redux-thunk middleware.
        Now you can dispatch the resultant action objects to your store which contains reducers


        redux-thunk lets the action creators invert control by dispatching functions.
        They would receive dispatch as an argument and may call it asynchronously. Such functions are called thunks.
        Another example of middleware is redux-promise.
        It lets you dispatch a Promise async action, and dispatches a normal action when the Promise resolves.


        The dispatch function is responsible for sending actions to one or many reducer functions for state changes.


*  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
this line is written to enable the extenstion of redux in google chrome
 */