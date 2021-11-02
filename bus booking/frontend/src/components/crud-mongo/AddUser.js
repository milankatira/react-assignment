import { useState } from "react";
import { addUser } from "../../service/api";
import { useHistory } from "react-router-dom";

import { Button } from "react-bootstrap";
const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};



const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  let history = useHistory();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    history.push("/all");
  };

  return (
    <>
<br />
<br />

      <form action="" type="submit">
        <div class="mb-3">
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
        <Button  class='btn-dark' onClick={() => addUserDetails()}>Add</Button>
      </form>
    </>
  );
};

export default AddUser;
