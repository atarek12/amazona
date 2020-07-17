import { combineReducers } from 'redux'

// import all reducers
import postReducer from './postReducer'


// compine them
export default combineReducers({
    todos: postReducer
})


/*
 step 3
 this is the rootReducer
 in postReducer.js --> it return a state
 but what if we have multible states ?
 we compine them here --> so we can pass them later by currying in our components
 */