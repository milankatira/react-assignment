import React from "react";
import "../../App.css";
import { Provider } from "react-redux";
import Store from "../../Store";
import Fade from "react-reveal/Fade";
import NewHooks from "./NewHooks";

const NewTicket = ({user}) => {
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
          <NewHooks user={user} />
        </Provider>
      </div>
    </div>
  );
};

export default NewTicket;
