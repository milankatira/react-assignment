import React, { useState } from "react";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { BUYSEAT } from "../../redux/ticket/Action";
import swal from "sweetalert";
// import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import fireDb from "../firebase/firebaseMethod";

const HooksContainer = () => {
  const ticketStatus = useSelector((state) => state.bus);

  const dispatch = useDispatch();

  //   const [value, setValue] = useState("");
  //   const [mytodos, setMytodos] = useState([]);
  //   const addTodo = () => {
  //     db.collection("userData")
  //       .doc(user.uid)
  //       .set({
  //         todos: [...mytodos, value],
  //       });
  //   };
  const [state, setState] = useState({});
  
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
    <div className="seat_status">
      {ticketStatus.map((item) => {
        return (
          <div>
            <div className="button_size">
              <button
                style={{
                  backgroundColor: item.status === true ? "#ff6b6b" : "#90ff6b",
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
              <oueStaus />
            </div>
          </div>
        );
      })}

      {/* <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="enter todos"
        />
        <Button onClick={() => addTodo()}>add</Button>
      </div> */}
    </div>
  );
};

export default HooksContainer;
