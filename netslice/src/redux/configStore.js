import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from "./module/userReducer";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(userReducer, composeWithDevTools(enhancer));

export default store;
