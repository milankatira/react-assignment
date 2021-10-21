import React, { useEffect, useState } from "react";
import fireDb from "../firebase/firebase";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const View = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    fireDb
      .child(`contact/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);

  console.log(user);
  return (
    <Container>
      <div>
        <h1>{user.name}</h1>
      </div>
      <hr />
      <div>
        <h1>{user.email}</h1>
      </div>
      <hr />
      <div>
        <h1>{user.contact}</h1>
      </div>
    </Container>
  );
};

export default View;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: centre;
  margin: 10%;
  background-color: black;
  color: white;
  flex-direction: column;
  border:5px solid #caffbd;
  border-radius: 5px;
`;
