import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Calculator = () => {
  const [num, setNum] = useState("");
  const [highlight, setHighlight] = useState("");

  const clickhandler = (e) => {
    if (
      (operator.includes(e.target.value) && num === "") ||
      (operator.includes(e.target.value) && operator.includes(num.slice(-1)))
    ) {
      return;
    }

    setNum(num.concat(e.target.value).toString());

    if (operator.includes(e.target.value)) {
      setHighlight("invalid");
    } else if (!operator.includes(e.target.value)) {
      setHighlight(eval(num + e.target.value).toString());
    }
  };

  const clearhandler = () => {
    setNum("");
    setHighlight("");
  };

  const createbutton = () => {
    const button = [];

    for (let i = 1; i < 10; i++) {
      button.push(
        <Button value={i} onClick={clickhandler}>
          {i}
        </Button>
      );
    }

    return button;
  };

  const resulthandler = () => {
    setNum(highlight);
  };

  const operator = ["+", "-", "/", "*", "."];

  return (
    <Components>
      <h1>calculator</h1>

      <Box>
        <span>input</span>
        <input type="text" value={num} />
        <br />
        <br />
        <span>total</span>
        <input value={highlight} />

        <Buttoncss>
          <Button value="+" onClick={clickhandler}>
            +
          </Button>
          <Button value="-" onClick={clickhandler}>
            -
          </Button>
          <Button value="*" onClick={clickhandler}>
            *
          </Button>
          <Button value="/" onClick={clickhandler}>
            /
          </Button>

          {highlight === "invalid" ? (
            <Button onClick={resulthandler} disabled>
              =
            </Button>
          ) : (
            <Button onClick={resulthandler}>=</Button>
          )}
          {
            num === "" ? (
              <Button onClick={clearhandler} disabled>
                clear
              </Button>
            ) : (
              <Button onClick={clearhandler}>clear</Button>
            )
          }
        </Buttoncss>

        <Number>
          {num === "" ? (
            <Button value="0" onClick={clickhandler} disabled>
              0
            </Button>
          ) : (
            <Button value="0" onClick={clickhandler}>
              0
            </Button>
          )}

          {createbutton()}
          <Button value="." onClick={clickhandler}>
            .
          </Button>
        </Number>
      </Box>
    </Components>
  );
};

export default Calculator;

const Components = styled.div`
  margin: 10%;
  color: white;
  background-color: black;
  margin-left: 30%;
  margin-right: 30%;
  margin: 20px;
  padding: 20px;
  border: 5px solid black;
  border-radius: 20px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  padding: 10px;
  color: black;
  flex-wrap: wrap;
  span {
    color: white;
  }
  Button {
    color: white;
    margin: 10px;
    padding: 10px;
    height: 50px;
    width: 50px;
    transition: 200ms ease-out;
  }

  input {
    border: none;
    text-decoration: none;
    outline: none;
    height: 40px;
    border: 2px solid white;
    border-radius: 5px;
    transition: 200ms ease-out;
    :hover {
      border: 2px solid black;
    }
  }
`;
const Number = styled.div`
  Button {
    color: white;
    margin: 10px;
    padding: 10px;
    height: 50px;
    width: 50px;
    background-color: black;
    transition: 200ms ease-out;
  }
`;

const Buttoncss = styled.span``;
