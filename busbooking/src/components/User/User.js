import styled from 'styled-components'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Provider } from 'react-redux';
import Store from '../../Store';
import UserHook from './UserHook';
import Fade from 'react-reveal/Fade';
import Tryb from './tryb'
const User = () => {
    return (
        <>
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <b className="navbar-brand" href="#" style={{color:"#b2ff96"}}>Comper<span>T</span>ur</b>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-link" exact to='/' activeClassName="active">Home</NavLink>
                                <Link className="nav-link" exact to='/booking' activeClassName="active">book seat</Link>
                                <Link className="nav-link" exact to='/contactus' activeClassName="active">contact us</Link>
                                <Link className="nav-link" exact to='/aboutus' activeClassName="active">about us</Link>
                                <Link className="nav-item nav-link active" exact to='/user' activeClassName="active">user</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <br />
            <br />
            <br />
            <div>
                <Fade top big>
                    <Name>hello user</Name>
                </Fade>
                <Provider store={Store}>
                    {/* <UsersContainer/> */}
                    {/* <Tryb/> */}
                    <UserHook />
                </Provider>
            </div>
        </>
    )
}

export default User

const Name = styled.div`
text-align:center;
color:#000000;
height:100%;
font-size:25px;

`