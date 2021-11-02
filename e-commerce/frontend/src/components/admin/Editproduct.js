import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { getProductbyId } from "./service/api_call";
import swal from "sweetalert";
import { Editproduct } from "../../redux/action/Product";
const Addproduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState(0);
  const [url, setUrl] = useState();
  const dispatch=useDispatch();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getProductbyId(id);
    setName(response.data.name);
    setDescription(response.data.description);
    setPrice(response.data.price);
    setItems(response.data.items);
  };

  const packet = {
    name,
    description,
    photo: url,
    price,
    items,
  };
  
  const Uploadproduct = () => {
    fetch(`/admin/editproduct/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(packet),
    })
    
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
    
    })

  
    dispatch(Editproduct(packet));
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
  );
};

export default Addproduct;

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
