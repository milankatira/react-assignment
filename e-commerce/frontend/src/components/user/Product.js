import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import swal from "sweetalert";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { product } from "../../redux/action/Product";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { AddToCart, Add_to_cart } from "../../redux/action/Cart";
const Product = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(product());
  }, []);
  const override = css`
    display: flex;
    margin: 10%;
    color: #b2ff96;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const cartItem = (item) => {
    const data = {
      name: item.name,
      description: item.description,
      photo: item.photo,
      price: item.price,
      items: item.items,
    };
    dispatch(Add_to_cart(data));
  };

  const productData = useSelector((state) => state.product);

  const [products] = useState({});

  const makePayment = (token) => {
    const body = {
      token,
      products,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    return fetch("/payment", {
      method: "post",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
        const { status } = response;
        console.log("status---", status);
      })
      .catch((error) => console.log("errors", error));
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
                ,
                <Link
                  className="nav-link"
                  exact
                  to="/cart"
                  activeClassName="active"
                >
                  <Icon>
                    <ShoppingBasketIcon />
                  </Icon>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      ,
      <Loading className="sweet-loading">
        <ClipLoader css={override} loading={productData.loading} size={150} />
      </Loading>
      <Box>
        {!productData.loading ? (
          productData.error ? (
            <h1>{productData.error}</h1>
          ) : (
            productData.product.map((item, key) => {
              return (
                <Container>
                  <Card className="card" style={{ width: "18rem" }}>
                    <img src={item.photo} alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">
                        <b>{item.name}</b>
                      </h5>
                      <h6 className="card-text">{item.description}</h6>
                      <p className="card-text">price-${item.price}</p>
                      <p className="card-text">
                        no.of product available-{item.items}
                      </p>
                      <StripeCheckout
                        stripeKey="pk_test_51JSZd2SDMIjp98GYMfBUabQ5D1jZiFUKm9gmu4W9EExUNEtVJnfa3oV2Mrgd3ojZJZz7qfrBNwBxEAy4xWsrmSBr00gnR9jyAD"
                        token={makePayment}
                        name={item.name}
                        amount={item.price * 100}
                      >
                        <Button className="btn-success">Buy now</Button>
                      </StripeCheckout>

                      <Button
                        className="btn-dark"
                        style={{ marginLeft: "30px" }}
                        onClick={() => cartItem(item)}
                      >
                        add to cart
                      </Button>
                    </div>
                  </Card>
                </Container>
              );
            })
          )
        ) : (
          " "
        )}
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
  h6 {
    color: #6b6b6b;
  }
  :hover {
    box-shadow: 0 0 10px #111;
    border: 1px solid black;
  }
`;
const Logout = styled.li``;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b2ff96;
  margin: auto center;
`;

const Icon = styled.div`
  margin-top: 5px;
  color: #fff;
`;
