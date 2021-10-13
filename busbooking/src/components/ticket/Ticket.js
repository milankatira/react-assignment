import React from "react";
import "../../App.css";
import HooksContainer from "./HooksContainer";
import { Provider } from "react-redux";
import Store from "../../Store";
import Fade from "react-reveal/Fade";
const Ticket = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="App">
        <Fade bottom>
          <h1>welcome to bus booking system</h1>
        </Fade>
      </div>

      <div className="container">
        <h1>book your seat here</h1>
        <Provider store={Store}>
          <HooksContainer />
        </Provider>
      </div>
    </div>
  );
};

export default Ticket;
