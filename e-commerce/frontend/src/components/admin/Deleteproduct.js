import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { deleteproduct, getProduct, getProductbyId } from "./service/api_call";
import swal from "sweetalert";
import { useDispatch ,useSelector} from "react-redux";
import { product } from "../../redux/action/Product";

const Product = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(product());
  }, []);
  
  
  const productData = useSelector((state) => state.product);
  const Deteleproduct = (id) => {
    deleteproduct(id);
    swal({
      title: "Success",
      text: "product delete succesfull",
      icon: "success",
      button: "ok",
    });
    getProduct();
  };

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
      ,
      <Box>
        {productData.product.map((item) => {
          return (
            <Container>
              <Card className="card" style={{ width: "18rem" }}>
                <img src={item.photo} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">{item.price}</p>
                  <p className="card-text">{item.items}</p>
                  <ButtonController>
                    <Button
                      className="btn-danger"
                      onClick={() => {
                        Deteleproduct(item._id);
                      }}
                    >
                      delete
                    </Button>
                    <Link to={`/product/edit/${item._id}`}>
                      <Button className="btn-dark">edit</Button>
                    </Link>
                  </ButtonController>
                </div>
              </Card>
            </Container>
          );
        })}
      </Box>
    </>
  );
};

export default Product;

const Container = styled.div`
  max-width: 60%;
  margin: 10px 10px;
  padding: 10px 10px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  box-shadow: 0 0 1.5px #111;
  display: flex;
  border: 2px solid black;
  transition: all 0.1s ease-in;
  :hover {
    box-shadow: 0 0 10px #111;
    border: 1px solid black;
  }
  Button {
    margin-left: 5px;
    height: 40px;
    width: 100px;
  }
`;

const ButtonController = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logout = styled.li``;
