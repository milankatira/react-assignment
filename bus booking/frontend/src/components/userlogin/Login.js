import React from "react";
import styled from 'styled-components';
import Logincontainer from "./Logincontainer";
import { Provider } from "react-redux";
import Store from "../../Store";
const Login = () => {
  return (
    <Container>
      <h1>login page</h1>
      <Provider store={Store}>
        <Logincontainer />
      </Provider>
    </Container>
  );
};

export default Login;

const Container = styled.div`
display: flex;
justify-content: center;
text-align: center;
flex-direction: column;
color:#066100;
`
