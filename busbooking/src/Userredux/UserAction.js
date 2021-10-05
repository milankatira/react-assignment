import axios from 'axios'

import {
    USERS_REQUEST,
    USERS_SUCCESS,
    USERS_FAILURE,
} from './UserTypes'

export const fetchUsersRequest = () => {
    return {
        type: USERS_REQUEST
    }
}

export const fetchUsersSuccess = (apidata) => {
    return {
        type: USERS_SUCCESS,
        payload: apidata,
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios
            .get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                dispatch(fetchUsersSuccess(response.data))
            }
            )

            .catch(error => {
                dispatch(fetchUsersFailure(error = error.message))
            }
            )
    }
}

