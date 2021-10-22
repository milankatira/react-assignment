import React from "react";
import styled from "styled-components";
import "./Home.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
// import {useSelector} from 'react-redux';
const Home = () => {
 // const loginData = useSelector((state) => state.login);
  return (
    <div>
      <Wrap >

        <Fade bottom cascade>
          <ItemText>
            <h1>book your tour</h1>
            <p>book ticket online for tour</p>
          </ItemText>
        </Fade>

        <Fade bottom cascade>
        
          <Link
            className="button-login"
            exact
            to="/user"
            activeClassName="active"
          >
            users
          </Link>
        </Fade>

      </Wrap>
    </div>
  );
};

export default Home;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/bus-image.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-direction: column;
  z-index: 1;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding-top: 12%;
  @media (max-width: 768px) {
    padding-top: 25%;
  }
`;

