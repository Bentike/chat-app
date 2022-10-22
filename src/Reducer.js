import { SET_USERNAME } from "./Constatnts"

const defalutState = {
    username: "bentike"
}

export const usernameReducer = (state = defalutState, action) => {
    switch(action.type){
        case SET_USERNAME:
            return Object.assign({}, defalutState, {username: action.payload});
        default:
            return state;    
    }
}