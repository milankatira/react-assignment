import axios from "axios";

import * as Api from "../constant/api_url";

axios.defaults.withCredentials = true;

//TODO AUTH CALL
export const loginUser = (packet) => axios.post(Api.login_url, packet);

export const registerUser = (packet) => axios.post(Api.signup_url, packet);

//TODO USER CALL
export const product = () => axios.get(Api.product_url);

//TODO ADMIN CALL
export const getProductbyId = (id) => axios.get(Api.product_byid_url, id);

export const deleteproduct = (id) => axios.delete(Api.product_delete_url, id);

export const addproduct = (packet) => axios.post(Api.product_add_url, packet);

export const updateProduct = (packet) =>
  axios.put(Api.product_update_url, packet);

export const Addtocart = (packet) => axios.post(Api.cart_app_url, packet);


export const cart=()=>axios.get(Api.cart_add_url)