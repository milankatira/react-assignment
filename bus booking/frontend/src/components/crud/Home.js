import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import fireDb from "../firebase/firebase";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

export const HomeC = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fireDb.child("contact").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData(snapshot.val());
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, []);

  const onDelete = (id) => {
    if (window.confirm("are you sure for delete data")) {
      fireDb.child(`contact/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("deleted successfully");
        }
      });
    }
  };
  

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>home</h1>
      <Table>
        <thead>
          <tr>
            <th>no.</th>
            <th>name</th>
            <th>email</th>
            <th>contact</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th>{index + 1}</th>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td>
                  <Link to={`/update/${id}`}>
                    <Button style={{ marginRight: 10 }}>edit</Button>
                  </Link>
                  <Button
                    className="btn-danger"
                    style={{ marginRight: 10 }}
                    onClick={() => {
                      onDelete(id);
                    }}
                  >
                    Delete
                  </Button>

                  <Link to={`/view/${id}`}>
                    <Button style={{ marginRight: 10 }}>view</Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
