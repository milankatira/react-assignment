import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../redux/User/UserAction";
import { Table } from "react-bootstrap";
import "../../App.css";
import {
  fetchUsersUpdate,
  fetchUsersDelete,
  fetchUsersAdd,
} from "../../redux/User/UserAction";

import swal from "sweetalert";
function UserHook() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [selecteduser, setSelecteduser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });
  const [adddata, setAdddata] = useState({ name: "", username: "", email: "" });
  const [searchTerm, setSearchTerm] = useState("");
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#f8f8f8");

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const override = css`
    display: flex;
    margin: 10%;
    border-color: #b2ff96;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const updateSelector = (user) => {
    setSelecteduser({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    });
  };

  const addSelector = () => {
    setAdddata({
      name: "",
      username: "",
      email: "",
    });
  };

  const UpdateUser = () => {
    const arr = [...userData.users];
    const objIndex = arr.findIndex((obj) => obj.id === selecteduser.id);
    arr[objIndex].name = selecteduser.name;
    arr[objIndex].username = selecteduser.username;
    arr[objIndex].email = selecteduser.email;
    if (
      (selecteduser.name === "" ||
        selecteduser.email === "" ||
        selecteduser.username === "") === true
    ) {
      swal({
        title: "Error",
        text: "value is not empty",
        icon: "error",
        button: "ok",
      });
      
    }
    else if((userData.users.name) ===true){
      swal({
        title: "Error",
        text: "value is not empty",
        icon: "error",
        button: "ok",
      });
    }
    else {
      dispatch(fetchUsersUpdate(arr));
    }
  };

  const DeleteUser = (id) => {
    const deletedata = [...userData.users];
    const index = deletedata.findIndex((obj) => obj.id === id);
    deletedata.splice(index, 1);
    dispatch(fetchUsersDelete(deletedata));
  };

  const AddUser = () => {
    const addUser = [...userData.users];
    if (
      (adddata.name === "" ||
        adddata.email === "" ||
        adddata.username === "") === true
    ) {
      swal({
        title: "Error",
        text: "value is not empty",
        icon: "error",
        button: "ok",
      });
    } else {
      addUser.push({
        name: adddata.name,
        username: adddata.username,
        email: adddata.email,
      });
      dispatch(fetchUsersAdd(addUser));
    }
  };

  return userData.loading ? (
    <Loading className="sweet-loading">
      <ClipLoader color={color} loading={loading} css={override} size={150} />
    </Loading>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <Container>
        <button
          onClick={() => addSelector()}
          data-bs-toggle="modal"
          data-bs-target="#addmodal"
        >
          add
        </button>
      </Container>

      <Table>
        <tbody>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>userName</th>
            <th>email</th>
            <th>Options</th>
          </tr>

          {userData.users.map((user, i) => (
            <tr key={user.id}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Container>
                  <button
                    onClick={() => updateSelector(user)}
                    data-bs-toggle="modal"
                    data-bs-target="#updatemodal"
                  >
                    edit
                  </button>
                  <button onClick={() => DeleteUser(user.id)}>delete</button>
                </Container>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* //update modal */}

      <div
        class="modal fade rounded"
        id="updatemodal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                edit user data
              </h5>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  value={selecteduser.id}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  disabled
                  readonly
                ></input>
              </div>
              <br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={selecteduser.name}
                  placeholder="enter your name"
                  onChange={(e) =>
                    setSelecteduser({
                      ...selecteduser,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={selecteduser.username}
                  placeholder="enter your username"
                  onChange={(e) =>
                    setSelecteduser({
                      ...selecteduser,
                      username: e.target.value,
                    })
                  }
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={selecteduser.email}
                  placeholder="enter your email"
                  onChange={(e) =>
                    setSelecteduser({
                      ...selecteduser,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <br />
              <button class="btn btn-dark" onClick={() => UpdateUser()}>
                Done
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* add modal */}
      <div
        class="modal fade rounded"
        id="addmodal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                edit user data
              </h5>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={adddata.name}
                  placeholder="enter your name"
                  onChange={(e) =>
                    setAdddata({
                      ...adddata,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={adddata.username}
                  placeholder="enter your username"
                  onChange={(e) =>
                    setAdddata({
                      ...adddata,
                      username: e.target.value,
                    })
                  }
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={adddata.email}
                  placeholder="enter your email"
                  onChange={(e) =>
                    setAdddata({
                      ...adddata,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <br />
              <button class="btn btn-dark" onClick={() => AddUser()}>
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHook;

const Container = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: flex-end;
  align-items: center;
  flex: 0.2;
  button {
    margin: 5px;
    color: black;
    background: white;
    border: none;
    border: 2px solid black;
    transition: all 0.3s ease-in-out;
    height: 50px;
    width: 70px;
    text-decoration: none;
    border-radius: 20px;

    &:hover {
      color: white;
      background: black;
      border: 1px solid black;
      transform: scale(1.09);
    }
  }
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b2ff96;
  margin: auto center;
`;
