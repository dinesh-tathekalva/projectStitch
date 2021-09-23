import { ActionTypes } from "../action-types";

export const setData = (setData) => {
    return {
        type: ActionTypes.SET_DATA,
        payload: setData
    }
}
