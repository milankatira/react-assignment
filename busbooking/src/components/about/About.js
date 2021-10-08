import React from "react";
import "./About.css";
import {NavLink,Link} from 'react-router-dom'
const About_us =
  "https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

function About() {
  return (
    <div className="about">

      <div>
        <nav className="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <b className="navbar-brand" href="#">Comper<span>T</span>ur</b>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-link" exact to='/' activeClassName="active">Home</NavLink>
                <Link className="nav-link" exact to='/booking' activeClassName="active">book seat</Link>
                <Link className="nav-link" exact to='/contactus' activeClassName="active">contact us</Link>
                <Link className="nav-item nav-link active" exact to='/aboutus' activeClassName="active">about us</Link>
                <Link className="nav-link" exact to='/user' activeClassName="active">user</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${About_us}` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit
        </p>
      </div>
    </div>
  );
}

export default About;
