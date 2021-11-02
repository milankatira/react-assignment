import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Add_to_cart } from "../../redux/action/Cart";
const Addtocart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState(0);
  const [url, setUrl] = useState();

  const packet = {
    name,
    description,
    photo: url,
    price,
    items,
  };

  const Uploadproduct = () => {
    dispatch(Add_to_cart(packet));
    
  };

  const Saveproduct = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "da5rta12e");

    fetch("https://api.cloudinary.com/v1_1/da5rta12e/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        swal({
          title: "Success",
          text: "image upload succesfull",
          icon: "success",
          button: "ok",
        });
      });
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
      <Container>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="enter product name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="enter product description"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Photo</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="enter  product image"
            />
            <Button onClick={() => Saveproduct()}>upload</Button>
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="enter product price"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Items</label>
            <input
              type="number"
              value={items}
              onChange={(e) => setItems(e.target.value)}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="enter no.of product"
            />
          </div>

          <Button className="btn-primary" onClick={() => Uploadproduct()}>
            Add product
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Addtocart;

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