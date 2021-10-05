import {
    USERS_REQUEST,
    USERS_SUCCESS,
    USERS_FAILURE
} from './UserTypes'

const initialState = {
    users: [],
    error: ''
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_REQUEST:
            return {
                ...state,
            }
        case USERS_SUCCESS:
            return {
                users: action.payload,
            }
        case USERS_FAILURE:
            return {
                error: action.payload
            }
        default: return state
    }
}

export default Reducer