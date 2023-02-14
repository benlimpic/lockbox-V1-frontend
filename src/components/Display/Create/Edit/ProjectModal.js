import { useState } from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FormEdit from './formEdit'


function ProjectModal(props) {

    const [fullscreen, setFullscreen] = useState(true);
  
  return (
    <>
      <Modal 
        show={props.show}
        fullscreen={fullscreen} 
        onHide={props.handleShow}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editing: {props.siteName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormEdit
            smMatrix={props.smMatrix}
            tmk={props.tmk}
            sop={props.sop}
            mac={props.mac}
            projectId={props.projectId}
            siteName={props.siteName}
            siteAddress={props.siteAddress}
            siteCity={props.siteCity}
            siteState={props.siteState}
            siteZip={props.siteZip}
            siteKeyway={props.siteKeyway}
            siteDescription={props.siteDescription}
            siteNotes={props.siteNotes}
            contactName={props.contactName}
            contactPosition={props.contactPosition}
            contactEmail={props.contactEmail}
            contactPhone={props.contactPhone}
            handleShow={props.handleShow}
            resetProject={props.resetProject}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleShow}>
            Cancle
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }

export default ProjectModal