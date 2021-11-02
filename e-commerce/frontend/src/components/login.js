import React from "react";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import "../App.css";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { login } from "../redux/action/Auth";
import { loginvalidate } from "../validation/validate";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";

const Newlogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
  <>
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
              <div className="navbar-nav">
                <Link
                  className="nav-link"
                  exact
                  to="/addproduct"
                  activeClassName="active"
                >
                  add product
                </Link>
                ,
                <Link
                  className="nav-link"
                  exact
                  to="/product/delete"
                  activeClassName="active"
                >
                  Admin panel
                </Link>
                ,
                <Link
                  className="nav-link"
                  exact
                  to="/product"
                  activeClassName="active"
                >
                  products
                </Link>
                ,
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

                      dispatch({ type: "USER", payload: false });
                      history.push("/newlogin");
                    }}
                  >
                    logout
                  </Button>
                </Logout>
                ,
                <Link
                  className="nav-link"
                  exact
                  to="/newlogin"
                  activeClassName="active"
                >
                  login
                </Link>
                ,
                <Link
                  className="nav-link"
                  exact
                  to="/newsignup"
                  activeClassName="active"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Container>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginvalidate}
          onSubmit={(values) => {
            const packet = {
              email: values.email,
              password: values.password
            }
            dispatch(login(packet))
          }}
        >
          {(formik) => (
            <div>
              <Form>
                <TextField label="Email" name="email" type="email" />
                <TextField label="password" name="password" type="password" />
                <Button className="btn-primary" type="submit">
                  login
                </Button>

                <h5>
                  <Link to="/signup">Don`t have an account </Link>
                </h5>
              </Form>
            </div>
          )}
        </Formik>
      </Container>
      </>
  );
};

export default Newlogin;

const Container = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: centre;
  margin: 20px auto;
  height: 600px;
  Button {
    margin-top: 10px;
  }

  h5 {
    text-decoration: none;
  }
`;
const Logout = styled.li``;
