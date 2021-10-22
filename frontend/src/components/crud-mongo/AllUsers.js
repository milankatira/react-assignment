import { useState, useEffect } from "react";
import { getUsers, deleteUser } from "../../service/api";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  return (
    <Table>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>

        {users.map((user) => (
          <tr>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <Link to={`/edit/${user._id}`}>
                <Button className="btn-dark" style={{ marginRight: 10 }}>
                  edit
                </Button>
              </Link>

              <Button
                className="btn-danger"
                onClick={() => deleteUserData(user._id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AllUsers;
