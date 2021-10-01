//import axios from 'axios'

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypes'

//book ticket
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

//book ticket success
export const fetchUsersSuccess = status => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: status
  }
}

//book ticket error
export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
     dispatch(fetchUsersRequest())
     
     
  // axios
  //   .get('https://jsonplaceholder.typicode.com/users')
  //   .then(response => {
  //     // response.data is the users
  //     const users = response.data
  //     dispatch(fetchUsersSuccess(users))
  //   })
  //   .catch(error => {
  //     // error.message is the error message
  //     dispatch(fetchUsersFailure(error.message))
  //   })
  
  
  
  
  }
}