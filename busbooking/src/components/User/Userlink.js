import React from 'react'
import {useSelector} from 'react-redux'
import Login from '../userlogin/Login';
import User from './User';

const Userlink = () => {
    const loginData = useSelector((state) => state.login);
    return (
        <div>
            {/* {loginData.isLogin?
            <Login/>:<User/>
            } */}
        </div>
    )
}

export default Userlink;
