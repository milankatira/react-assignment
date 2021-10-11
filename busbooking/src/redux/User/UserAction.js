import axios from 'axios'

import {
    USERS_REQUEST,
    USERS_SUCCESS,
    USERS_FAILURE,
    USERS_UPDATE,
    USERS_DELETE,
    USERS_ADD,
} from './UserTypes'
export const fetchUsersRequest = (data) => {
    return {
        type: USERS_REQUEST,
        payload:data
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
export const fetchUsersUpdate = (data) => {
    return {
        type: USERS_UPDATE,
        payload: data
    }
}

export const fetchUsersDelete = (user) => {
    return {
        type: USERS_DELETE,
        payload: user
    }
}

export const fetchUsersAdd = (user) => {
    return {
        type: USERS_ADD,
        payload: user
    }
}
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios
            .get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response)
                dispatch(fetchUsersSuccess(response.data))
            }
            )

            .catch(error => {
                dispatch(fetchUsersFailure(error.message))
            }
            )
            // .then(response => {
            //     dispatch(fetchUsersRequest(response.data))
            // }
            // )
        // .then(response =>{ dispatch (fetchUsersUpdate(response.data))})
    
}
}