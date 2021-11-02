import React, { useContext,useEffect } from "react";
import { UserContext } from "../App";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "../App.css";
import { useHistory } from "react-router-dom";


const Navbar = () => {


  const { state, dispatch } = useContext(UserContext);
  const history=useHistory();

  const Routing = () => {
    if (state) {
      return [
        <Link
          className="nav-link"
          exact
          to="/addproduct"
          activeClassName="active"
        >
          add product
        </Link>,
        <Link
          className="nav-link"
          exact
          to="/product/delete"
          activeClassName="active"
        >
          Admin panel
        </Link>,
        
        
        <Link
          className="nav-link"
          exact
          to="/product"
          activeClassName="active"
        >
          products
        </Link>,

        <Logout>
          <Button
            className="button-logout"
            variant="outline-danger"
            onClick={() => {
              localStorage.clear();
              swal({
                title: "Success",
                text: "logout succesfull",
                icon: "success",
                button: "ok",
              });
      
              dispatch({ type: "USER",payload:false });
              history.push("/newlogin");
            }}
          >
            logout
          </Button>
        </Logout>,
      
      ];
    } else {
      return [
        <Link
          className="nav-link"
          exact
          to="/newlogin"
          activeClassName="active"
        >
          login
        </Link>,

        <Link
          className="nav-link"
          exact
          to="/newsignup"
          activeClassName="active"
        >
          Signup
        </Link>,
      ];
    }
  };
  
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link exact to="/">
            <a className="navbar-brand">Navbar</a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">{Routing()}</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

const Logout = styled.li``;
