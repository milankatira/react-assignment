import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import Store from "../../Store";
import UserHook from "./UserHook";
import Fade from "react-reveal/Fade";
import Login from "../userlogin/Login";
import Logincontainer from "../userlogin/Logincontainer";

const User = () => {
 // const loginData = useSelector((state) => state.login);

  return (
    <>
      <br />
      <br />
      <br />
      <div>
        {/* <div>
          {loginData.isLogin ? (
            <Provider store={Store}>
              <UserHook />
            </Provider>
          ) : (
            <Provider store={Store}>
              <Logincontainer />
            </Provider>
          )}
        </div> */}
        
        <Fade top big>
          <Name>hello user</Name>
        </Fade>

        <Provider store={Store}>
          <UserHook />
        </Provider>
      </div>
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
