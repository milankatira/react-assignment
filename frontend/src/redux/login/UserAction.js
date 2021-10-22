import {
  USERS_LOGIN,
} from "./UserTypes";

export const login = (isLogin) => {
  return {
    type: USERS_LOGIN,
    payload: isLogin,
  };
};
