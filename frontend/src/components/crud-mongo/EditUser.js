import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getUsers, editUser } from "../../service/api";
import { Button } from "react-bootstrap";
import styled from 'styled-components';
const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    const response = await editUser(id, user);
    history.push("/all");
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
  <Container>
    <form action="" type="submit"  style={{margintop:40}}>
    <br />
    <br />
    <br />
    <br />
    
      <div class="mb-3" >
        <label for="exampleFormControlInput1" class="form-label">
          name
        </label>
        <input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="enter your name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          username
        </label>
        <input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={username}
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="enter yourname"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email
        </label>
        <input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="enter email address"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          number
        </label>
        <input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          type="number"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="enter your number"
        />
      </div>
      <Button class="btn-dark" onClick={() => editUserDetails()}>
        Add
      </Button>
    </form>
    </Container>
  );
};

export default EditUser;

const Container=styled.div`
margin-top: 40px;
`