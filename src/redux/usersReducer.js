import { types } from "./types";

const initialState ={
    inputValue: '',
    users: []
}

export default function usersReducer(state = initialState, action){
    switch(action.type){
        case types.INPUT_VALUE:
            return {...state, inputValue: action.payload}
        case types.ADD_USER:
            return { users: [...state.users, action.payload]}
        case types.DELETE_USERS:
            return {inputValue: '', users: []}
        default: return state
    }
}