import { SET_USERNAME, ADD_MESSAGE } from "./Constatnts";

export const setUsername = (name) => {
    return{
        type: SET_USERNAME,
        payload: name
    }
}

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        payload: message
    }
}