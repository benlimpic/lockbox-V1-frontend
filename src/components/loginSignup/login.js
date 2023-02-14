import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    axios.post("/sessions", { withCredentials: true },
        {
          user: {
            email,
            password,
          },
        }
      )
      .then((response) => {
        console.log(response);
        props.setLoggedIn(response.data.logged_in);
      });
  }

  
  const handleChange = (e, setState, state) => {
    setState(e.target.value);
  };

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => handleChange(e, setEmail, email)}
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => handleChange(e, setPassword, password)}
          />
        </Form.Group>
        <br></br>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
