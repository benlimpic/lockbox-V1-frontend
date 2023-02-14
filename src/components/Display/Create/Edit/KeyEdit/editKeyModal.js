import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import KeyFormEdit from "./keyFormEdit";

const EditKeyModal = (props) => {
  const [fullscreen, setFullscreen] = useState(true);
  return (
    <Modal 
      show={props.showEditModal} 
      fullscreen={fullscreen}
      onHide={props.handleShowEditModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Key: {props.keyData.reference}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <KeyFormEdit
          keyData={props.keyData}
          handleShowEditModal={props.handleShowEditModal}
          setKeys={props.setKeys}
          keyCutArray={props.keyCutArray} 
          fetchTMK={props.fetchTMK} 
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleShowEditModal}>
          Cancle
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditKeyModal;
