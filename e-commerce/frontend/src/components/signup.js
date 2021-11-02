import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { register } from "../redux/action/Auth";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import {registervalidate} from "../validation/validate";
import swal from "sweetalert";
const Newlogin = () => {
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

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
      </div>,
        <Container>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          role: "",
        }}
        validationSchema={registervalidate}
        onSubmit={(values) => {
          console.log(values.password, values.email);
          const packet = {
            name: values.name,
            email: values.email,
            password: values.password,
            role,
          };
          console.log(packet);
          dispatch(register(packet));
          history.push("/product");
        }}
      >
        {(formik) => (
          <div>
            <Form>
              <TextField label="name" name="name" type="name" />

              <TextField label="Email" name="email" type="email" />

              <TextField label="password" name="password" type="password" />

              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => setRole(e.target.value)}
              >
                <option selected>Open this select menu</option>
                <option value="user"> user</option>
                <option value="admin">admin</option>
              </select>

              <Button className="btn-primary" type="submit">
                register
              </Button>

              <h5>
                <Link to="/login">already have an account </Link>
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
