import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Ticket from "./components/ticket/Ticket";
import NewTicket from "./components/ticket/NewTicket";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Error from "./components/Error/Error";
import Login from "./components/userlogin/Login";
import Navbar from "./components/navbar/Navbar";
import Calculator from "./components/calculator/Calculator";
import Signup from "./components/signup/Signup";
import { useEffect, useState } from "react";
import { auth } from "./components/firebase/firebase";
import AddEdit from "./components/crud/AddEdit";
import View from "./components/crud/View";
import { HomeC } from "./components/crud/Home";
import { AboutC } from "./components/crud/About";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllUsers from "./components/crud-mongo/AllUsers";
import AddUser from "./components/crud-mongo/AddUser";
import EditUser from "./components/crud-mongo/EditUser";

function App() {
  const [user, setUser] = useState(null);
  let unsubscribe = () => {};
  useEffect(() => {
    unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(null);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Router>
        <Navbar user={user} />
        <ToastContainer position="top-centre" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/booking">
            <NewTicket user={user} />
          </Route>
          <Route path="/aboutus" exact component={About} />
          <Route path="/contactus" exact component={Contact} />
          <Route path="/user">
            <Login user={user} />
          </Route>
          <Route path="/calculator" exact component={Calculator} />
          <Route path="/signup" exact component={Signup} />

          {/* //crud route */}
          <Route path="/home" exact component={HomeC} />
          <Route path="/edit" exact component={AddEdit} />
          <Route path="/update" exact component={AddEdit} />
          <Route path="/update/:id" exact component={AddEdit} />
          <Route path="/view" exact component={View} />
          <Route path="/view/:id" exact component={View} />
          <Route path="/about" exact component={AboutC} />

          
          
          <Route path="/all" exact component={AllUsers} />
          <Route path="/add" exact component={AddUser} />
          <Route path="/edit/:id" exact component={EditUser} />

          {/* error */}
          <Route component={Error}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
