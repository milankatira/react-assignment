import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ticket from './components/ticket/Ticket'
import Home from './components/Home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import User from './components/User/User'
import Error from './components/Error/Error'

function App() {
  return (
    <div>
      <Router>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/booking" exact component={Ticket} />
          <Route path="/aboutus" exact component={About} />
          <Route path="/contactus" exact component={Contact} />
          <Route path="/user" exact component={User}/>
          {/* <Route path='/tryb' exact component={} */}
          <Route component={Error}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
