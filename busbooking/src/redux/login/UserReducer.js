import {
    USERS_LOGIN,
  } from "./UserTypes";

const initialState = {
    username:"admin@gmail.com",
    password:"admin123",
    isLogin: false
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case USERS_LOGIN:
        return { ...state, isLogin:action.payload };
      default:
        return state;
    }
  };
  
  export default loginReducer;