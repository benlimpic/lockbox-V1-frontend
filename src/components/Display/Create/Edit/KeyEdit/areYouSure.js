import { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";


function AreYouSure(props) {
  const [yesDelete, setYesDelete] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState("");

  const navigate = useNavigate();
  let returnProjectId = props.projectId;

  const handleYesDelete = () => {
    setYesDelete(!yesDelete);
  };

  const handleChange = (e) => {
    setDeleteConfirm(e.target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (deleteConfirm === "DELETE") {
      axios
        .delete(`/api/v1/projects/${props.projectId}/keys/${props.keyId}`)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          navigate(`/projects/${props.projectId}`)
        })
        .catch((err) => console.log(err.full_messages));
    }
    else {
      alert("Please type DELETE to confirm")
    }
  };

  return (
      <>
        {yesDelete ? (
          <>
        <Modal show={yesDelete} onHide={handleYesDelete}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h4>Are you sure you want to delete this key?</h4>
            <p>This action cannot be undone, and all associated data will be erased.</p>
          <br></br>
          <Form onSubmit={handleDelete}>
              <Form.Control
                type="text"
                placeholder="Type DELETE To Confirm"
                onChange={(e) => handleChange(e, setDeleteConfirm)}
              />
              <br></br>
            <Button variant="danger" type="submit">
              Delete
            </Button>
          </Form> 
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleYesDelete}>
              Cancle
            </Button>
          </Modal.Footer>
        </Modal>
        </>
        ) : (    
      <>
        <Modal show={props.showModal} onHide={props.handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h4>Gary... I know you didnt want this button...</h4>
            <p>I figured you would probably need it while testing the application... haha</p> 
            <p>I figured I would add it now before you needed it and I wasnt able to get it going quickly!</p>
            <p>I can remove it before production!</p>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="danger" onClick={handleYesDelete}>
          Delete
          </Button>
          <Button variant="secondary" onClick={props.handleClose}>
          Cancle
          </Button>
          </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  )
}

export default AreYouSure

{/* <Form onSubmit={handleDelete}>
<Form.Group>
  Type "DELETE" to confirm
  <Form.Control
    type="text"
    placeholder="Type Delete To Confirm"
    onChange={(e) => handleChange(e, setDeleteConfirm)}
  />
</Form.Group>
<Button variant="danger" type="submit">
</Form> */}