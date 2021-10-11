// import { useState } from 'react';

// const Tryb = () => {

//     const [show,setShow]=useState(true)
//     return (
//       <div className="App">
//        {
//          show?<h1>Hello World !</h1>:null
//        }
//        <button onClick={()=>setShow(true)} >Show</button>
//        <button onClick={()=>setShow(false)} >Hide</button>
//   <button onClick={()=>setShow(!show)} >Toggle</button> 
//       </div>
//     );
//   }
//     // const [state, setState] = useState({ fName: "mhhhd", lName: "dhdsewwwwwwwwwwwwww" });


//     // const handleChange = e => {
//     //     const { name, value } = e.target;
//     //     setState(prevState => ({
//     //         ...prevState,
//     //         [name]: value
//     //     }));
//     // };


//     // return (

//     //     <div>
//     //         <h1>try</h1>
//     //         <input
//     //             value={state.fName}
//     //             type="text"
//     //             onChange={handleChange}
//     //             name="fName"
//     //         />
//     //         <input
//     //             value={state.lName}
//     //             type="text"
//     //             onChange={handleChange}
//     //             name="lName"
//     //         />
//     //     </div>
//     // )
//     // const [todos, setTodos] = useState([
//     //     { id: 1, title: "Selectus aut autem", completed: false },
//     //     { id: 2, title: "Luis ut nam facilis et officia qui", completed: false },
//     //     { id: 3, title: "Fugiat veniam minus", completed: false },
//     //     { id: 4, title: "Aet porro tempora", completed: true },
//     //     { id: 5, title: "Laboriosam mollitia et enim quasi", completed: false }
//     // ]);

// //     const changeInput = (e) => {
// //         todos.map(items => items.id === parseInt(e.target.value) && (items.completed = e.target.checked));
// //         setTodos([...todos], todos);
// //     }
// //     return (
// //         <div className="container">
// //             {todos.map(items => {
// //                 return (
// //                     <div key={items.id}>
// //                         <label>
// //                             <input type="checkbox"
// //                                 onChange={changeInput}
// //                                 value={items.id}
// //                                 checked={items.completed} />&nbsp; {items.title}</label>
// //                     </div>
// //                 )
// //             })}
// //         </div>
// //     );


// // }

// export default Tryb

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { fetchUsers } from '../../redux/User/UserAction';
import { Table } from 'react-bootstrap'
import '../../App.css'
import { fetchUsersUpdate, fetchUsersDelete, fetchUsersAdd } from '../../redux/User/UserAction';
import swal from 'sweetalert';
function UserHook() {
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch()
    const [selecteduser, setSeleteduser] = useState({ id: '', name: '', username: '', email: '' })
    const [adddata, setAdddata] = useState({ name: '', username: '', email: '' })
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const searchClick = () => {
        // const search = [...userData]
        if ((userData.name === searchTerm || userData.email === searchTerm || userData.username === searchTerm) === true) {
            // return (
            //     <div>
            //         alert(
            //         {searchTerm.map((user, i) =>
            //             <div key={user.id}>
            //                 <h1>{i + 1}</h1>
            //                 <h1>{user.name}</h1>
            //                 <h1>{user.username}</h1>
            //                 <h1>{user.email}</h1>
            //             </div>

            //         )}
            //         )
            //     </div>
            // )
            alert(searchTerm)
        }
        else {
            alert("else", searchTerm)
        }
    }

    const updateSelector = (user) => {
        setSeleteduser({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
        })
    }

    const addSelector = () => {
        setAdddata({
            name: "",
            username: "",
            email: "",
        })
    }

    const UpdateUser = () => {
        const arr = [...userData]
        const objIndex = arr.findIndex(obj => obj.id === selecteduser.id)
        arr[objIndex].name = selecteduser.name
        arr[objIndex].username = selecteduser.username
        arr[objIndex].email = selecteduser.email
         dispatch(fetchUsersUpdate(arr))
    }

    const DeleteUser = (id) => {
        const deletedata = [...userData]
        const index = deletedata.findIndex(obj => obj.id === id)
        deletedata.splice(index, 1)
        dispatch(fetchUsersDelete(deletedata))
    }

    const AddUser = () => {
        const addUser = [...userData]
        if ((adddata.name === "" || adddata.email === "" || adddata.username === "") === true) {
            swal({
                title: "Error",
                text: 'value is not empty',
                icon: "error",
                button: "ok",
            });
        }
        else {
            addUser.push({ name: adddata.name, username: adddata.username, email: adddata.email })
            dispatch(fetchUsersAdd(addUser))
        }
    }


    return userData.error ? (<h2>{userData.error}</h2>) : (
        <div>
            <div className="button-right">
                <button onClick={() => addSelector()} className="buttons-ui-right" data-bs-toggle="modal" data-bs-target="#addmodal">add</button>
            </div>
            <input type="text" placeholder="Search here" onChange={(e) => { setSearchTerm(e.target.value) }} />
            <button onClick={() => searchClick()}>search</button>
            <Table >
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>userName</th>
                        <th>email</th>
                    </tr>

                    {userData.map((user, i) =>
                        <tr key={user.id}>
                            {/* <td>{user.id}</td> */}
                            <td>{i + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <button onClick={() => updateSelector(user)} className="buttons-ui" data-bs-toggle="modal" data-bs-target="#updatemodal">edit</button>
                            <button onClick={() => DeleteUser(user.id)} className="buttons-ui">delete</button>
                            <button onClick={() => addSelector()} className="buttons-ui" data-bs-toggle="modal" data-bs-target="#addmodal">add</button>
                        </tr>

                    )}

                </tbody>

            </Table>
            {/* //update modal */}
            <div class="modal fade rounded" id="updatemodal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
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
                            <button class="btn btn-dark" onClick={() => UpdateUser()}>Login</button>

                        </div>

                    </div>
                </div>
            </div>



            {/* add modal */}
            <div class="modal fade rounded" id="addmodal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">edit user data</h5>

                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={adddata.name} placeholder="enter your name" onChange={(e) => setAdddata({
                                    ...adddata,
                                    name: (e.target.value)
                                })} />
                            </div>
                            <br />
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={adddata.username} placeholder="enter your username" onChange={(e) => setAdddata({
                                    ...adddata,
                                    username: (e.target.value)
                                })} />
                            </div>
                            <br />
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={adddata.email} placeholder="enter your email" onChange={(e) => setAdddata({
                                    ...adddata,
                                    email: (e.target.value)
                                })} />
                            </div>
                            <br />
                            <button class="btn btn-dark" onClick={() => AddUser()}>Login</button>

                        </div>

                    </div>
                </div>
            </div>


        </div>

    )
}

export default UserHook
