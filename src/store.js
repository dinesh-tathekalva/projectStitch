import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import  reducers  from "./reducers/index";

const middleware = applyMiddleware
const store =  createStore(reducers, middleware(thunkMiddleware))

export default store;