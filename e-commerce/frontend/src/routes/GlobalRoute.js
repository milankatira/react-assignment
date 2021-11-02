import React from "react";
import { Route, Redirect } from "react-router-dom";

const GlobalRoute = ({ children, ...rest }) => {
  const isAuth = !JSON.parse(localStorage.getItem("user"));

  return (
    <Route
      {...rest}
      render={() => (isAuth ? children:<Redirect to={"/"}/> )}
    />
  );
};

export default GlobalRoute;