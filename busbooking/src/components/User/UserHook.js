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
import { Button } from "react-bootstrap";
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

  const [buttonvalue, setButtonvalue] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const override = css`
    display: flex;
    margin: 10%;
    color: #b2ff96;
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

    if (
      arr[objIndex].name === selecteduser.name &&
      arr[objIndex].username === selecteduser.username &&
      arr[objIndex].email === selecteduser.email
    ) {
      swal({
        title: "Error",
        text: "value is not same",
        icon: "error",
        button: "ok",
      });
    } else if (
      selecteduser.name === "" ||
      selecteduser.email === "" ||
      selecteduser.username === ""
    ) {
      swal({
        title: "Error",
        text: "value is empty",
        icon: "error",
        button: "ok",
      });
    } else {
      arr[objIndex].name = selecteduser.name;
      arr[objIndex].username = selecteduser.username;
      arr[objIndex].email = selecteduser.email;

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

  return (
    <>
      <Loading className="sweet-loading">
        <ClipLoader css={override} loading={userData.loading} size={150} />
      </Loading>
      {!userData.loading ? (
        userData.error ? (
          <h2>{userData.error}</h2>
        ) : (
          <div>
            <Container>
              <button
                onClick={() => {
                  setButtonvalue("add");
                  addSelector();
                }}
                data-bs-toggle="modal"
                data-bs-target="#updatemodal"
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
                          onClick={() => {
                            setButtonvalue("update");
                            updateSelector(user);
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#updatemodal"
                        >
                          edit
                        </button>
                        <button onClick={() => DeleteUser(user.id)}>
                          delete
                        </button>
                      </Container>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div
              class="modal fade"
              id="updatemodal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="signupModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    {buttonvalue === "update" ? (
                      <h5 class="modal-title" id="exampleModalLabel">
                        update your data
                      </h5>
                    ) : (
                      <h5 class="modal-title" id="exampleModalLabel">
                        update your data
                      </h5>
                    )}
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="form-group">
                        {buttonvalue === "update"
                          ? ((<label for="exampleInputEmail1">Id</label>),
                            (
                              <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                disabled
                                readonly
                                aria-describedby="emailHelp"
                                value={selecteduser.id}
                              />
                            ))
                          : ""}
                      </div>

                      <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        {buttonvalue === "update" ? (
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="enter your name"
                            value={selecteduser.name}
                            onChange={(e) =>
                              setSelecteduser({
                                ...selecteduser,
                                name: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="enter your name"
                            value={adddata.name}
                            onChange={(e) =>
                              setAdddata({
                                ...adddata,
                                name: e.target.value,
                              })
                            }
                          />
                        )}
                      </div>

                      <div class="form-group">
                        <label for="exampleInputPassword1">Username</label>
                        {buttonvalue === "update" ? (
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="enter your username"
                            value={selecteduser.username}
                            onChange={(e) =>
                              setSelecteduser({
                                ...selecteduser,
                                username: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="enter your username"
                            value={adddata.username}
                            onChange={(e) =>
                              setAdddata({
                                ...adddata,
                                username: e.target.value,
                              })
                            }
                          />
                        )}
                      </div>

                      <div class="form-group">
                        <label for="cexampleInputPassword1">Email</label>
                        {buttonvalue === "update" ? (
                          <input
                            type="text"
                            class="form-control"
                            id="cexampleInputPassword1"
                            placeholder="enter your email address"
                            value={selecteduser.email}
                            onChange={(e) =>
                              setSelecteduser({
                                ...selecteduser,
                                email: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <input
                            type="text"
                            class="form-control"
                            id="cexampleInputPassword1"
                            placeholder="enter your email address"
                            value={adddata.email}
                            onChange={(e) =>
                              setAdddata({
                                ...adddata,
                                email: e.target.value,
                              })
                            }
                          />
                        )}
                      </div>
                      {buttonvalue === "update" ? (
                        <Button
                          className="btn btn-dark"
                          onClick={() => UpdateUser()}
                        >
                          Done
                        </Button>
                      ) : (
                        <Button
                          className="btn btn-dark"
                          onClick={() => AddUser()}
                        >
                          Done
                        </Button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        ""
      )}
      ;
    </>
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
