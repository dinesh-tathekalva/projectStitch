import { combineReducers } from "redux";
import { projectReducer } from "./reducer";

const reducers = combineReducers ({
    projectRedc: projectReducer,
})

export default reducers;