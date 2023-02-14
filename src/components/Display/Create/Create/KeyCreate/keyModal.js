import React from 'react'
import { useState, useEffect } from 'react'
import { Modal, Button} from 'react-bootstrap'
import KeyForm from './keyForm'


function KeyModal(props) {

  

  const [fullscreen, setFullscreen] = useState(true);

  const handleContinue = () => {
    props.handleShow();
    props.handleShowSecond();
  }

return (
  <>
    <Modal 
      show={props.showSecondModal}
      fullscreen={fullscreen} 
      onHide={props.handleShowSecond}
    >
      <Modal.Header closeButton>
        <Modal.Title>Key: {props.keyClick[1]}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <KeyForm
          projectId={props.projectId}
          keyClick={props.keyClick}
          handleShow={props.handleShow}
          handleShowSecond={props.handleShowSecond}
          setKeys={props.setKeys}
          keys={props.keys} 
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleShowSecond}>
          Cancle
        </Button>
      </Modal.Footer>
    </Modal>

    <Modal
      show={props.showModal}
      onHide={props.handleShow}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Assign Key</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you want to Assign Details to key: {props.keyClick[1]} ?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleShow}>
          Close
        </Button>
        <Button variant="primary" onClick={handleContinue} >Continue</Button>
      </Modal.Footer>
    </Modal>
  </>
);
}



export default KeyModal