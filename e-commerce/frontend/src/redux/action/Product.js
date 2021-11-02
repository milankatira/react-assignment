import * as Types from "../constant/Constant";
import * as Url from "../../api/api_call";
import swal from "sweetalert";
import { Loading } from "./loading";
import { AddToCart } from "./Cart";
export const Getproduct = (data) => {
  return {
    type: Types.GET_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const GetproductRequest = () => {
  return {
    type: Types.GET_PRODUCT_REQUEST,
  };
};
export const Getproduct_Byid = (data) => {
  return {
    type: Types.GET_PRODUCTBY_ID_SUCCESS,
    payload: data,
  };
};

export const AddProduct = (data) => {
  return {
    type: Types.ADD_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const Deleteproduct = (data) => {
  return {
    type: Types.DETETE_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const Editproduct = (data) => {
  return {
    type: Types.EDIT_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const product = (params) => {
  return (dispatch) => {
    dispatch(GetproductRequest());
    Url.product().then((result) => {
      dispatch(Getproduct(result.data.product));
    });
  };
};

export const AddNewProduct = (data) => {
  return (dispatch) => {
    Url.addproduct(data).then((data) => {
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

    dispatch(AddProduct(data));
  };
};




export const Updateproduct = (data) => {
  return (dispatch) => {
    Url.updateProduct()
    .then((data) => {
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

    dispatch(Editproduct(data));
  };
};
