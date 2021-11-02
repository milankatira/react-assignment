import {
    USERS_REQUEST,
    USERS_SUCCESS,
    USERS_FAILURE,
    USERS_UPDATE,
    USERS_DELETE,
    USERS_ADD,
} from './UserTypes'

export const initialState = {
    users: [],
    error: '',
    loading: false,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
            
        case USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        case USERS_UPDATE:
            return  {
                loading: false,
                users: action.payload,
                error: ''
            }
            
        case USERS_DELETE:
            return  {
                loading: false,
                users: action.payload,
                error: ''
            }
        case USERS_ADD:
            return  {
                loading: false,
                users: action.payload,
                error: ''
            }
        default: return state
    }
}

export default Reducer