import React from 'react'
import styled from 'styled-components'
import './Home.css'
import Fade from 'react-reveal/Fade';
import { NavLink, Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <div>
                <nav className="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <b className="navbar-brand" href="#" style={{color:"#b2ff96"}}>Comper<span>T</span>ur</b>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-item nav-link active" exact to='/' activeClassName="active">Home</NavLink>
                                <Link className="nav-link" exact to='/booking' activeClassName="active">book seat</Link>
                                <Link className="nav-link" exact to='/contactus' activeClassName="active">contact us</Link>
                                <Link className="nav-link" exact to='/aboutus' activeClassName="active">about us</Link>
                                <Link className="nav-link" exact to='/user' activeClassName="active">user</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            
            <div>
                <Wrap>
                    <Fade bottom cascade>
                        <ItemText>
                            <h1>book your tour</h1>
                            <p>book ticket online for tour</p>

                        </ItemText>
                    </Fade>
                </Wrap>
            </div>
        </div>
    )
}

export default Home

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-image: url('/images/bus-image.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`


const ItemText = styled.div`
padding-top:15vh;
text-align:center;
color: white;
font-weight:bold;
font-size:20px;
padding-top:12%;
@media(max-width:768px){
padding-top:25%;
}
`



