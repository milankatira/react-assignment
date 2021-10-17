import React, { useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/login/UserAction";
import { Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import Ticket from "./Ticket";
import Home from "../Home/Home";

const NewTicket = () => {
  // const history = useHistory();
  const loginData = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Loginhandler = () => {
    if (loginData.username === username && loginData.password === password) {
      console.log("login successfull");
      dispatch(login(true));
      // history.push("/user");
      swal({
        title: "Success",
        text: "login succesfull",
        icon: "success",
        button: "ok",
      });
    } else {
      dispatch(login(false));
      swal({
        title: "Error",
        text: "login fail",
        icon: "error",
        button: "ok",
      });
    }
  };
  return (
    <>
      {loginData.isLogin ? (
        <Home />
      ) : (
        <Container>
          <input
            type="text"
            placeholder="enter your name"
            onChange={(e) => setUsername(e.target.value)}
          />
          ,
          <input
            type="password"
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          ,
          <Button type="submit" onClick={() => Loginhandler()}>
            Login
          </Button>
        </Container>
      )}
    </>
  );
};

export default NewTicket;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10;
  padding: 10px;

  input {
    margin: 10px;
  }
`;
