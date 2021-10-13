import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <b className="navbar-brand" href="#" style={{ color: "#b2ff96" }}>
            Comper<span>T</span>ur
          </b>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                className="nav-link"
                exact
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link"
                exact
                to="/booking"
                activeClassName="active"
              >
                book seat
              </NavLink>
              <NavLink
                className="nav-link"
                exact
                to="/contactus"
                activeClassName="active"
              >
                contact us
              </NavLink>
              <NavLink
                className="nav-link"
                exact
                to="/aboutus"
                activeClassName="active"
              >
                about us
              </NavLink>
              <NavLink
                className="nav-link"
                exact
                to="/user"
                activeClassName="active"
              >
                user
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
