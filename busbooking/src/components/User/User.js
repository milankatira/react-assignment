import styled from "styled-components";
import React from "react";
import { Provider } from "react-redux";
import Store from "../../Store";
import UserHook from "./UserHook";
import Fade from "react-reveal/Fade";

const User = () => {
  return (
    <>
      <Container>
        <Fade top big>
          <Name>hello user</Name>
        </Fade>

        <Provider store={Store}>
          <UserHook />
        </Provider>
      </Container>
    </>
  );
};

export default User;

const Name = styled.div`
  text-align: center;
  color: #000000;
  height: 100%;
  font-size: 25px;
`;


const Container = styled.div`
margin-top: 50px;
padding-top: 50px
`