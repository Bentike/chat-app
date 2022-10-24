import { ADD_MESSAGE, SET_USERNAME } from "./Constatnts"

const defalutState = {
    username: "",
    messages: []
}

export const usernameReducer = (state = defalutState, action) => {
    switch(action.type){
        case SET_USERNAME:
            return Object.assign({}, state, {username: action.payload});
        case ADD_MESSAGE:
            return Object.assign({}, state, {messages: [...state.messages, action.payload]});    
        default:
            return state;    
    }
}