import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { fetchUsers } from '../../redux/User/UserAction';
import { Table } from 'react-bootstrap'
import '../../App.css'
//import { USERS_REQUEST } from '../../Userredux/UserTypes';
import { fetchUsersUpdate } from '../../redux/User/UserAction';
function UserHook() {
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch()
    const [selecteduser, setSeleteduser] = useState({ id: '', name: '', username: '', email: '' })
    //    const [burgerStatus, setBurgerStatus] = useState(false);
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const updateSelector = (user) => {
        setSeleteduser({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
        })
    }

    const onclickhandler = () => {

        const arr = [...userData]
        const objIndex = arr.findIndex(obj => obj.id === selecteduser.id)
        arr[objIndex].name = selecteduser.name
        arr[objIndex].username = selecteduser.username
        arr[objIndex].email = selecteduser.email
        dispatch(fetchUsersUpdate(arr))
    }

    return userData.error ? (<h2>{userData.error}</h2>) : (
        <div>

            {/* striped bordered hover variant="dark" */}
            
            <Table >
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Name</td>
                        <td>userName</td>
                        <td>email</td>
                    </tr>

                    {userData.map((user) =>
                        <tr key={user.id}>
                            <td>{user.id}</td>

                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <button onClick={() => updateSelector(user)} className="buttons-ui" data-bs-toggle="modal" data-bs-target="#loginModal">edit</button>


                        </tr>

                    )}

                </tbody>

            </Table>
            {/* //modal */}
            <div class="modal fade rounded" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">edit user data</h5>

                        </div>
                        <div class="modal-body">

                            <div class="form-group">
                                <input type="text" class="form-control" value={selecteduser.id} id="exampleInputEmail1" aria-describedby="emailHelp" disabled readonly></input>
                            </div>
                            <br />
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={selecteduser.name} placeholder="enter your name" onChange={(e) => setSeleteduser({
                                    ...selecteduser,
                                    name: (e.target.value)
                                })} />
                            </div>
                            <br />
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={selecteduser.username} placeholder="enter your username" onChange={(e) => setSeleteduser({
                                    ...selecteduser,
                                    username: (e.target.value)
                                })} />
                            </div>
                            <br />
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={selecteduser.email} placeholder="enter your email" onChange={(e) => setSeleteduser({
                                    ...selecteduser,
                                    email: (e.target.value)
                                })} />
                            </div>
                            <br />
                            <button class="btn btn-dark" onClick={() => onclickhandler()}>Login</button>

                        </div>
                        {/* <div class="modal-footer" >
                            <button type="button" class="btn btn-outline-dark" data-dismiss="modal" >Close</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserHook
