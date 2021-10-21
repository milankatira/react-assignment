import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import fireDb from "../firebase/firebase";
import { useParams } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState("");

  const { name, email, contact } = state;

  const { id } = useParams();

  useEffect(() => {
    fireDb.child("contact").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData(snapshot.val());
      } else {
        setData({});
      }

      console.log("--------------------------------------", snapshot.val());
    });

    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
      console.log("success");
    } else {
      setState({ initialState });
      console.log("error");
    }
    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("please fill all the field");
    } 
    else {
      if (!id) {
        fireDb.child("contact").push(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("data saved successfully");
          }
        });
      } else {
        fireDb.child(`contact/${id}`).set(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("contact update successfully");
          }
        });
      }
    }
  };

  const handleinput = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <form onSubmit={handlesubmit}>
        <label>name</label>
        <input
          type="text"
          value={name || ""}
          name="name"
          onChange={handleinput}
        />

        <label>email</label>
        <input
          type="text"
          value={email || ""}
          name="email"
          onChange={handleinput}
        />

        <label>contact</label>
        <input
          type="text"
          value={contact || ""}
          name="contact"
          onChange={handleinput}
        />

        <Button type="submit" value={id ? "update" : "add"}>
          add
        </Button>
      </form>
    </div>
  );
};

export default AddEdit;
