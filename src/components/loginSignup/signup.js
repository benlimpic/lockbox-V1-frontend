import { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/registrations", { withCredentials: true },
        {
          user: {
            email,
            password,
            password_confirmation: passwordConfirmation,
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
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => handleChange(e, setEmail, email)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password Confirmation"
            onChange={(e) =>
              handleChange(e, setPasswordConfirmation, passwordConfirmation)
            }
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

export default Signup;
