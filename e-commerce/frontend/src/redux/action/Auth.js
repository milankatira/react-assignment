import { loginUser, registerUser } from "../../api/api_call";
import swal from "sweetalert";
import * as Types from "../constant/Constant";
import { Loading } from "./loading";
export const LoginSuccess = (data) => {
  return {
    type: Types.LOGIN_SUCCESS,
    payload: data,
  };
};

export const LoginFailure = (error) => {
  return {
    type: Types.LOGIN_FAILURE,
    payload: error,
  };
};

export const RegisterSuccess = (data) => {
  return {
    type: Types.REGISTER_SUCCESS,
    payload: data,
  };
};

export const RegisterFailure = (data) => {
  return {
    type: Types.REGISTER_FAILURE,
    payload: data,
  };
};

export const register = (param) => {
  return (dispatch) => {
    dispatch(Loading())
    registerUser(param)
      .then((res) => {
        if (res) {
          swal({
            title: "Success",
            text: "login succesfull",
            icon: "success",
            button: "ok",
          });
        }
        dispatch(RegisterSuccess(res.data));
      })

      .catch((err) => {
        if (err) {
          swal({
            title: "Error",
            text: err.message,
            icon: "error",
            button: "ok",
          });
        } else {
          dispatch(RegisterFailure(err));
        }
      });
  };
};

export const login = (packet) => {

  return (dispatch) => {

    loginUser(packet)
      .then((res) => {
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        swal({
          title: "Success",
          text: "login succesfull",
          icon: "success",
          button: "ok",
        });
        dispatch(LoginSuccess(res.data));
      })
      .catch((err) => {
        if (err) {
          swal({
            title: "Error",
            text: err.message,
            icon: "error",
            button: "ok",
          });
        } else {
          dispatch(LoginFailure(err.message));
        }
      });
  };
};
