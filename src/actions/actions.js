import { ActionTypes } from "../action-types";

export const setData = (setData) => {
    return {
        type: ActionTypes.SET_DATA,
        payload: setData
    }
}

export const selectData = (selectedData) => {
    return {
        type: ActionTypes.SELECT_DATA,
        payload: selectedData
    }
}

export const updateData = (updatedData) => {
    return {
        type: ActionTypes.UPDATE_DATA,
        payload: updatedData
    }
}

export const deleteData = (deletedData) => {
    return {
        type: ActionTypes.DELETE_DATA,
        payload: deletedData
    }
}