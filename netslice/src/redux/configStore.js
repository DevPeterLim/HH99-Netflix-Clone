import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from "./module/userReducer";
import { combineReducers } from "redux";
import detailReducer from "./module/detailReducer";
import searchReducer from './module/searchReducer'

const rootReducer = combineReducers({
    userReducer,
    detailReducer,
    searchReducer,
})

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
