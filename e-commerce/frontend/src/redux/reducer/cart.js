import * as Types from "../constant/Constant";

export const initialState = {
  product: [],
  error: "",
  loading: false,
};

export const Cartreducer = (state = initialState, action) => {
  switch (action.type) {
    // case Types.ADD_TO_CART:
    //   return {
    //     // product: action.payload,
    //   };

    case Types.CART_ITEM:
      return {
        product: action.payload,
        loading:false,
      };
    default:
      return state;
  }
};
