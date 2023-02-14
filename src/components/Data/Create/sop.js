import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

//# SOP Possible Combinations Equal 6! or 720

export const SOP = ({ setSop, sop, tmk }) => {
  const [input, setInput] = useState("");
  const [sopString, setSopString] = useState("");

  // convert sop string to an array
  useEffect(() => {
    const convertToArray = (string) => {
      let array = string.split("");
      array = array.map((item) => {
        return item;
      });
      setSop(array);
    };
    convertToArray(sopString);
  }, [sopString]);

  //handle input change
  const handleChange = (e) => {
    setInput(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tmk.length === 4) {
      if (input.length === 4 && input.match(/^[A-D]+$/)) {
        setSopString(input);
        // setInput("");
      } else {
        alert("Please enter A, B, C, and D in any order");
        // setInput("");
      }
    } else if (tmk.length === 5) {
      if (input.length === 5 && input.match(/^[A-E]+$/)) {
        setSopString(input);
        // setInput("");
      } else {
        alert("Please enter A, B, C, D, and E in any order");
        // setInput("");
      }
    } else if (tmk.length === 6) {
      if (input.length === 6 && input.match(/^[A-F]+$/)) {
        setSopString(input);
        // setInput("");
      } else {
        alert("Please enter A, B, C, D, E, and F in any order");
        // setInput("");
      }
    } else {
      alert("Please enter a valid TMK first");
      // setInput("");
    }
  };

  // console.log("sop", sop)

  return (
    <Container>
      <Form onSubmit={handleSubmit} 
        style={{margin: "auto", width: "80%"}}>
        <Form.Label>SOP:</Form.Label>
        <InputGroup>
          <Form.Control
            type="text"
            value={input}
            placeholder="Enter a Valid SOP"
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
              {sop.map((item, index) => {
                return <th style={{textAlign: "center"}} key={index}>{item}</th>;
              })}
            </tr>
          </thead>
        </Table>
      </Container>
    </Container>
  );
};

export default SOP;
