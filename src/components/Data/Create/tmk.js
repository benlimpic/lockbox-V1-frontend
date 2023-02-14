import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const TMK = ({ setTmk, tmk, sop, setSop, handleKBA }) => {
  const [input, setInput] = useState("");
  const [tmkString, setTmkString] = useState("");

  // convert string to an array
  useEffect(() => {
    const convertToArray = (string) => {
      let array = string.split("");
      array = array.map((item) => {
        return parseInt(item);
      });
      setTmk(array);
    };
    convertToArray(tmkString);
  }, [tmkString]);

  //handle input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sop.length === 0) {
      if (input.length > 3 && input.length < 7 && input.match(/^[0-9]+$/)) {
        setTmkString(input);
        handleKBA()
        // setInput("");
      } else {
        alert("Please enter between four and six numbers ");
        // setInput("");
      }
    } else {
      if (sop.length !== input.length) {
        if (input.length > 3 && input.length < 7 && input.match(/^[0-9]+$/)) {
          setTmkString(input);
          handleKBA();
          // setInput("");
          setSop([]);
        } else {
          alert("Please enter between four and six numbers ");
          // setInput("");
        }
      } else {
        if (input.length > 3 && input.length < 7 && input.match(/^[0-9]+$/)) {
          setTmkString(input);
          handleKBA();
          // setInput("");
        } else {
          alert("Please enter between four and six numbers ");
          // setInput("");
        }
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} 
        style={{margin: "auto", width: "80%"}}>
        <Form.Label>TMK:</Form.Label>
        <InputGroup>
          <Form.Control
            type="text"
            value={input}
            placeholder="Enter a Valid TMK"
            onChange={handleChange}
          ></Form.Control>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </InputGroup>
      </Form>
      <br></br>
      <Container>
        <Table
          bordered
          style={{ margin: "auto", width: "80%" }}
        >
          <thead>
            <tr>
              {tmk.map((item, index) => {
                return <th style={{textAlign: "center"}} key={index}>{item}</th>;
              })}
            </tr>
          </thead>
        </Table>
      </Container>
    </Container>
  );
};

export default TMK;
