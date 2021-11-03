import "./App.css";
import { getAll } from "./GraphQl/Query";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POST, DELETE_POST } from "./GraphQl/Mutation";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function App() {
  const { loading, error, data } = useQuery(getAll);

  const [createPost, { err }] = useMutation(CREATE_POST);
  const [deletePost, { errr }] = useMutation(DELETE_POST);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  if (loading) return "Loading";
  if (error) return "error";

  const addPost = () => {
    createPost({
      variables: {
        title: title,
        description: description,
      },
    });
  };

  const removePost = (id) => {
    deletePost({
      variables: {
        id: id,
      },
    });
  };
  return (
    <div className="App">
      <table class="table">
        <tr>
          <th scope="col">title</th>
          <th scope="col">description</th>
        </tr>
        {data.getAll.map((data) => (
          <tbody>
            <tr>
              <td>{data.title}</td>
              <td>{data.description}</td>
              <Button  variant="outlined" color="error"
                onClick={() => {
                  removePost(data.id);
                }}
              >
                delete
              </Button>
            </tr>
          </tbody>
        ))}
      </table>
      <TextField
        id="outlined-basic"
        label="title"
        variant="outlined"
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextField
        id="outlined-basic"
        style={{ marginRight: "5px" }}
        label="description"
        variant="outlined"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant="contained" color="success" onClick={() => addPost()} >
        Add post
      </Button>
    </div>
  );
}

export default App;
