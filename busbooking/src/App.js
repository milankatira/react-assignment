import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ticket from "./components/ticket/Ticket";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import User from "./components/User/User";
import Error from "./components/Error/Error";
import Login from './components/userlogin/Login'
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/booking" exact component={Ticket} />
          <Route path="/aboutus" exact component={About} />
          <Route path="/contactus" exact component={Contact} />
          <Route path="/user" exact component={User} />
          <Route path="/login" exact component={Login} />
          <Route component={Error}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
