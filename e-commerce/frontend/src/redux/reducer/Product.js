import * as Types from "../constant/Constant";

export const initialState = {
  product: [],
  error: "",
  loading: false,
};

export const Productreducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        error: "",
      };
    case Types.GET_PRODUCT_FAILURE:
      return {
        loading: false,
        product: [],
        error: action.payload,
      };

    case Types.GET_PRODUCT_REQUEST:
      return {
      ...state,
        loading: true,
      };
    default:
      return state;
  }
};
