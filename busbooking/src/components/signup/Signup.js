import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

import styled from "styled-components";
import { auth } from "../firebase/firebase";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
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

  return (
    <Container>
      {value === "signup" ? (
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
            <Button type="submit">sign up</Button>
          </div>{" "}
          <br />
        </form>
      ) : (
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
            <Button type="submit">login</Button>
          </div>
        </form>
      )}
      {value === "signup" ? (
        <Button
          onClick={() => {
            setValue("loginin");
          }}
        >
          signup
        </Button>
      ) : (
        <Button
          onClick={() => {
            setValue("signup");
          }}
        >
          {value}
        </Button>
      )}
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  margin-top: 10%;
`;
