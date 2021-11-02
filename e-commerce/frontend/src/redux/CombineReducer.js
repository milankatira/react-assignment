import { combineReducers } from "redux";
import { Authreducer } from "./reducer/Auth";
import { Productreducer } from "./reducer/Product";
import { Cartreducer } from "./reducer/cart";
const combine = combineReducers({
  auth: Authreducer,
  product: Productreducer,
  cart: Cartreducer,
});

export default combine;
