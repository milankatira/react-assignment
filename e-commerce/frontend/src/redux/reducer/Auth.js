import * as Types from "../constant/Constant";

const initialState = {
  signUp: { data: null, error: null, loading: false },
  Login: { data: null, error: null, loading: false },
};

export const Authreducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.REGISTER_SUCCESS:
      return { ...state, signUp: { data: action.payload, error: null } };

    case Types.REGISTER_FAILURE:
      return { ...state, signUp: { data: null, error: action.payload } };


    case Types.LOGIN_SUCCESS:
      return { ...state, Login: { data: action.payload, error: null } };

    case Types.LOGIN_FAILURE:
      return { ...state, Login: { data: null, error: null } };

    default:
      return state;
  }
};
