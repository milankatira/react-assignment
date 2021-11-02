import * as Types from "../constant/Constant";
import * as Url from "../../api/api_call";
import { GetproductRequest } from "./Product";
import swal from "sweetalert";
export const AddToCart = (data) => {
  return {
    type: Types.ADD_TO_CART,
    payload: data,
  };
};

export const getcart = (data) => {
    return {
      type: Types.CART_ITEM,
      payload: data,
    };
  };

export const cart = (params) => {
    return (dispatch) => {
  //    dispatch(GetproductRequest());
      Url.cart().then((result) => {
        dispatch(getcart(result.data.product));
        // console.log(result.data.product)
      });
    };
  };
  
  
  export const Add_to_cart = (data) => {
    return (dispatch) => {
      Url.Addtocart(data).then((data) => {
        if (data.error) {
          swal({
            title: "Error",
            text: data.error.message,
            icon: "error",
            button: "ok",
          });
        } else {
          swal({
            title: "Success",
            text: "product added succesfull",
            icon: "success",
            button: "ok",
          });
        }
      });
  
      dispatch(AddToCart(data));
    };
  };