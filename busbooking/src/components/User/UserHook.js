import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchUsers } from '../../Userredux/UserAction';
import { Table } from 'react-bootstrap'
import '../../App.css'
function UserHook() {

    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return userData.error ? (<h2>{userData.error}</h2>) : (
        <div>
            <h2>Users List</h2>
            <Table striped variant="success" >
                <tbody className="table">
                    <tr>
                        <td>id</td>
                        <td>Name</td>
                        <td>userName</td>
                        <td>email</td>
                       
                    </tr>
                    {userData.users.map((user, i) =>
                        <tr key={i}>
                        <td>{i}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    )}

                </tbody>
            </Table>
        </div>
    )
}

export default UserHook
