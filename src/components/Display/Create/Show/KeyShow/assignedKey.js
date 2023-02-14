import { useState, useEffect } from 'react'


import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import KeyModal from './KeyModal'

function AssignedKey(props) {

  const [showKeyModal, setShowKeyModal] = useState(false);

  const handleShowKeyModal = (e) => {
    setShowKeyModal(!showKeyModal);
  };



  return (
    <>
      <Card key={props.used} onClick={(e) => handleShowKeyModal()} >
        <Card.Header>{props.keyData.keyTitle}</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Ref: {props.keyData.reference}</ListGroup.Item>
            <ListGroup.Item>Stamp: {props.keyData.stamp}</ListGroup.Item>
            <ListGroup.Item>Cut: {props.keyData.cut}</ListGroup.Item>
            <ListGroup.Item>Created:{props.keyData.created_at.slice(0, 10)}</ListGroup.Item>
            <ListGroup.Item>Updated:{props.keyData.updated_at.slice(0, 10)}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <KeyModal 
        keyData={props.keyData}
        keys={props.keys}
        setKeys={props.setKeys}
        showKeyModal={showKeyModal}
        handleShowKeyModal={handleShowKeyModal}
      />

    </>
    
  );
}

export default AssignedKey