import PrivateRoute from "./PrivateRoute";
import GlobalRoute from "./GlobalRoute";
import NewLogin from "../components/login";
import Newsignup from "../components/signup";
import Addproduct from "../components/admin/Addproduct";
import Product from "../components/user/Product";
import Deleteproduct from "../components/admin/Deleteproduct";
import Editproduct from "../components/admin/Editproduct";

import { Switch } from "react-router-dom";
import Cart from "../components/user/Cart";
import Addtocart from "../components/user/Addtocart";
const Routes = () => {

  
    return (
    <>
      <Switch>
        <PrivateRoute exact path="/">
          <Product />
        </PrivateRoute>
        
        <PrivateRoute exact path="/addproduct">
          <Addproduct />
        </PrivateRoute>
        
        <PrivateRoute exact path="/product/delete">
          <Deleteproduct />
        </PrivateRoute>
        
        <PrivateRoute exact path="/product/edit/:id">
          <Editproduct />
        </PrivateRoute>
        
        <GlobalRoute exact path="/newlogin">
          <NewLogin/>
        </GlobalRoute>
        
        <GlobalRoute exact path="/newsignup">
          <Newsignup />
        </GlobalRoute>
        
        <PrivateRoute exact path="/product">
          <Product />
        </PrivateRoute>
                
        <PrivateRoute exact path="/cart">
          <Cart />
        </PrivateRoute>
        
        <PrivateRoute exact path="/cart/addtocart">
          <Addtocart />
        </PrivateRoute>
        
      </Switch>
      </>
    );
  };
  
  export default Routes;
  
