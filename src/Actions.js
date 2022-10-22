import { SET_USERNAME } from "./Constatnts";

export const setUsername = (name) => {
    return{
        type: SET_USERNAME,
        payload: name
    }
}