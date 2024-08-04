import { applyMiddleware, createStore } from "redux";
import { thunk } from 'redux-thunk'
import reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import Counter from "../components/Counter";
import counterReducers from "./reducers/counterReducers";
import userReducer from "./reducers/userReducer";
import counterSlice  from "./counterSlice"
// import counterReducers from "./reducers/counterReducers";

// const enhancer = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__  
// 1 reducer
//  const store = createStore(counterReducers , enhancer(applyMiddleware(thunk)))
// multi reducer
//  const store = createStore( reducers , enhancer(applyMiddleware(thunk)))

const store = configureStore({
    reducer:{
        counter : counterSlice,
        // user: userReducer
    }
})
 

export default store;