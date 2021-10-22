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
  const [ticket, setTicket] = useState([]);
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
      const docRef = db.collection("ticket").doc(user.uid);
      unsubscribe = docRef.onSnapshot((docsnap) => {
        if (docsnap.exists) {
          console.log(docsnap.data().ticket);
          setTicket(docsnap.data().ticket)

          const arr = [...ticketStatus];
          const objIndex = arr.findIndex((obj) => obj.id = ticket);
          // console.log(ticket)
          arr[objIndex].status = true;
          
          
          dispatch(BUYSEAT(arr));
          
          
        //   if (ticket) {
        //     const arr = [...ticketStatus];
        //     const objIndex = arr.findIndex((obj) => obj.id === ticket);
        //     arr[objIndex].status = true;
    
        //     if ([objIndex].status === true) {
        //       swal({
        //         title: "Error",
        //         text: "seat is already booked",
        //         icon: "error",
        //         button: "ok",
        //       });
        //     } 
        //     else {
        //       db.collection("ticket")
        //         .doc(user.uid)
        //         .set({
        //           ticket: [...ticket,id],
        //         });
        //       dispatch(BUYSEAT(arr));
          
        //       }          
        // } 
        //  else {
        //   console.log("no docs");
        // }

      }});
    } else {
      console.log("redirect");
    }
    return () => {
      unsubscribe();
    };
  }, []);

  const handler = () => {};

  const deletetodo = (deleteTodo) => {
    const docRef = db.collection("ticket").doc(user.uid);
    docRef.get().then((docSnapshot) => {
      const result = docSnapshot
        .data()
        .ticket.filter((todo) => todo !== deleteTodo);

      docRef.update({
        ticket: result,
      });
    });
  };
  const onclickhandler = (id, ostatus) => {
    if (user) {
      if (ticket) {
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
          db.collection("ticket")
            .doc(user.uid)
            .set({
              ticket: [...ticket,id],
            });
          dispatch(BUYSEAT(arr));
        }
      }
    } else {
      swal({
        title: "Error",
        text: "please login ",
        icon: "error",
        button: "ok",
      });
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
          ((
            <Button
              onClick={() => {
                setValue("loginin");
              }}
            >
              signup
            </Button>
          ),
          (
            <Button
              onClick={() => {
                setValue("signup");
              }}
            >
              {value}
            </Button>
          ))
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
                      item.status ? "#ff6b6b" : "#90ff6b",
                    margin: "10px",
                    height: "30px",
                    width: "60px",
                    color: "black",
                    alignitem: "center",
                    border: "none",
                  }}
                  onClick={() => onclickhandler(item.id, item.status)}
                >
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
        {user ? (
          <ul class="list-group">
            {ticket.map((todo,i) => {
              return (
                <span>
                  <li class="list-group-item ">seatno-{todo}</li>
                  <li class="list-group-item ">seatno-{i}</li>
                  <DeleteIcon
                    onClick={() => {
                      deletetodo(todo);
                    }}
                  />
                </span>
              );
            })}
          </ul>
        ) 
        
        : (
          <h1>please login</h1>
        )}
      </div>
    </>
  );
};

export default NewHooks;

const Container = styled.div`
  margin-top: 10px;
`;
