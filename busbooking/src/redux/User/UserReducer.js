import {
    USERS_REQUEST,
    USERS_SUCCESS,
    USERS_FAILURE,
    USERS_UPDATE,
} from './UserTypes'

export const initialState = [{
    users: [],
    error: '',
    data: '',
}]

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_REQUEST:
            return [
                ...state,
            ]
        case USERS_SUCCESS:
            return [
                ...action.payload
            ]
        case USERS_FAILURE:
            return [
            ...action.payload
            ]
        case USERS_UPDATE:
            return [
            ...action.payload
            ]
        default: return state
    }
}

export default Reducer