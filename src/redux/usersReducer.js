import { types } from "./types";

const initialState = {
    users: [],
    userAdditionalInfo: {}
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.USERS:
            return { 
                ...state,
                users: action.payload };
        case types.SINGLE_USER:
            return {
                ...state,
                userAdditionalInfo: {
                    ...state.userAdditionalInfo,
                    [action.payload.id]: action.payload,
                },
            };
        default:
            return state;
    }
}
