import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { useEffect, createContext, useContext, useReducer } from "react";
import Routes from "./routes/Routes";
import { reducer, initialState } from "./redux/loginreducer";
export const UserContext = createContext();
const user = JSON.parse(localStorage.getItem("user"));

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        {/* <Navbar  /> */}
<Routes/>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
