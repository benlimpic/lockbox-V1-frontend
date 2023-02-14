import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const ChooseMac = ({ setMaxAC }) => {
  const [chooseMac, setChooseMac] = useState(8);

  const handleMac = (e) => {
    setChooseMac(e.target.value);
  };

  useEffect(() => {
    // setMac(Number(chooseMac))
    setMaxAC(Number(chooseMac));
  }, [chooseMac]);

  return (
    <Container>
      <Form onChange={handleMac}
      style={{margin: "auto", width: "80%"}}>
        <Form.Label>MAC:</Form.Label>
        <Form.Select defaultValue={8}>
          <option value={10}>0/9</option>
          <option value={9}>0/8</option>
          <option value={8}>0/7</option>
          <option value={7}>0/6</option>
          <option value={6}>0/5</option>
          <option value={5}>0/4</option>
        </Form.Select>
      </Form>
    </Container>
  );
};

export default ChooseMac;
