import React, { useState } from "react";
import styled from "styled-components";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { BUYSEAT } from "../../redux/ticket/Action";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { db, auth } from "../firebase/firebase";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom";

const NewHooks = ({ user }) => {
  const ticketStatus = useSelector((state) => state.bus);

  const dispatch = useDispatch();

  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("login");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      console.log(result);
      history.push("/");
    } catch (err) {
      toast.error(err);
    }
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      console.log(result);
      history.push("/user");
    } catch (err) {
      toast.error(err);
    }
  };
  let unsubscribe = () => {};
  useEffect(() => {
    if (user) {
      const docRef = db.collection("todos").doc(user.uid);
      unsubscribe = docRef.onSnapshot((docsnap) => {
        if (docsnap.exists) {
          console.log(docsnap.data().todos);
          setTodos(docsnap.data().todos);
        } else {
          console.log("no docs");
        }
      });
    } else {
      console.log("redirect");
    }
    return () => {
      unsubscribe();
    };
  }, []);

  const handler = () => {
    db.collection("todos")
      .doc(user.uid)
      .set({
        todos: [...todos, data],
      });

    console.log(data);
    console.log(todos);
    console.log(user.uid);
  };

  const deletetodo = (deleteTodo) => {
    const docRef = db.collection("todos").doc(user.uid);
    docRef.get().then((docSnapshot) => {
      const result = docSnapshot
        .data()
        .todos.filter((todo) => todo !== deleteTodo);

      docRef.update({
        todos: result,
      });
    });
  };
  const onclickhandler = (id, ostatus) => {
    const arr = [...ticketStatus];
    const objIndex = arr.findIndex((obj) => obj.id === id);
    arr[objIndex].status = true;
    if (ostatus === true) {
      swal({
        title: "Error",
        text: "seat is already booked",
        icon: "error",
        button: "ok",
      });
    } else {
      dispatch(BUYSEAT(arr));
    }
  };

  return (
    <>
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3>please sign up</h3>
          <div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter your email"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter password"
            />
            <br />
            <Button class="btn-dark" type="submit">
              sign up
            </Button>
          </div>
        </form>

        <form onSubmit={(e) => loginSubmit(e)}>
          <h3>please login</h3>
          <div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter your email"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter password"
            />
            <br />
            <Button class="btn-danger" type="submit">
              login
            </Button>
          </div>
        </form>

        {user ? (
          <Button
            className="btn-danger"
            onClick={() => {
              auth.signOut();
            }}
          >
            logout
          </Button>
        ) : (
        
            <Button
              onClick={() => {
                setValue("loginin");
              }}
            >
              signup
            </Button>,

            <Button
              onClick={() => {
                setValue("signup");
              }}
            >
              {value}
            </Button>
        )}
      </Container>
      <div className="seat_status">
        {ticketStatus.map((item) => {
          return (
            <div>
              <div className="button_size">
                <button
                  style={{
                    backgroundColor:
                      item.status === true ? "#ff6b6b" : "#90ff6b",
                    margin: "10px",
                    height: "30px",
                    width: "60px",
                    color: "black",
                    alignitem: "center",
                    border: "none",
                  }}
                  onClick={() => onclickhandler(item.id, item.status)}
                >
                  {" "}
                  seat.{item.id}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <Button onClick={() => handler()}>add</Button>
        <ul class="list-group">
          {todos.map((todo) => {
            return (
              <span>
                <li class="list-group-item ">{todo}</li>
                <DeleteIcon
                  onClick={() => {
                    deletetodo(todo);
                  }}
                />
              </span>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NewHooks;

const Container = styled.div`
  margin-top: 10px;
`;
