import { ActionTypes } from "../action-types";


const initialState = {
   data : [],
}

export const projectReducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case ActionTypes.SET_DATA:
            return {...state, data: payload};
        case ActionTypes.DELETE_DATA:
            return {};
        default:
            return state;

    }
}