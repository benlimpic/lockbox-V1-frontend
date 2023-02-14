import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import ShowKeying from '../../Show/KeyShow/showKeying.js'
import AreYouSure from './areYouSure.js'



const KeyFormEdit = (props) => {

const [resetKey, setResetKey] = useState(props.keyData || "")

const [assigneeName, setAssigneeName] = useState(resetKey.assigneeName || "")
const [assigneeEmail, setAssigneeEmail] = useState(resetKey.assigneeEmail || "")
const [assigneePhone, setAssigneePhone] = useState(resetKey.assigneePhone || "")
const [details, setDetails] = useState(resetKey.details || "")
const [assignmentDate, setAssignmentDate] = useState(resetKey.assignmentDate || "")

const [techName, setTechName] = useState(resetKey.techName || "")
const [techEmail, setTechEmail] = useState(resetKey.techEmail || "")
const [techPhone, setTechPhone] = useState(resetKey.techPhone || "")
const [notes, setNotes] = useState(resetKey.notes || "")
const [oDate, setODate] = useState(resetKey.oDate || "")

const [keyTitle, setKeyTitle] = useState(resetKey.keyTitle || "")
const [stamp, setStamp] = useState(resetKey.stamp || "")
const [description, setDescription] = useState(resetKey.description || "")

const [usable, setUsable] = useState(resetKey.usable || "")
const [inUse, setInUse] = useState(resetKey.inUse || "")
const [reserved, setReserved] = useState(resetKey.reserved || "")
const [archived, setArchived] = useState(resetKey.archived || "")
const [status, setStatus] = useState(resetKey.status || "")

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const handleChange = (e, setState) => {
  setState(e.target.value);
};

const checkboxReserve = (e, setState, state) => {
  setState(!state)
  setArchived(false)
};

const checkboxArchive = (e, setState, state) => {
  setState(!state)
  setReserved(false)
};

useEffect(() => {
  if (reserved === true) {
    setInUse(false)
    setArchived(false)
    setStatus("Reserved")
  }
  else if (archived === true) {
    setInUse(false)
    setReserved(false)
    setStatus("Archived")
  }
  else {
    setInUse(true)
    setReserved(false)
    setArchived(false)
    setStatus("In Use")
  }
}, [reserved, archived, inUse])



const handleSubmit = (e) => {
  e.preventDefault();
  
  axios
  .patch(`/api/v1/projects/${props.keyData.project_id}/keys/${props.keyData.id}`, {
    
    assigneeName,
    assigneeEmail,
    assigneePhone,
    details,
    assignmentDate,
    
    techName,
    techEmail,
    techPhone,
    notes,
    oDate,
    
    keyTitle,
    stamp,
    description,
    
    usable,
    inUse,
    reserved,
    archived,
    status,
    
  })
  .then((res) => {
    setResetKey(res.data)
    props.handleShowEditModal()
  })
  

  .catch((err) => console.log(err.full_messages))
};

console.log("reserved", reserved)
console.log("inUse", inUse)
console.log("archived", archived)
console.log("status", status)

return (
  <>
    <Form onSubmit={handleSubmit}>

      <h4>Key Info</h4>

        <Row>
          <Form.Group as={Col}>
          <Form.Label>Key Reference:</Form.Label>
          <Form.Control 
            type="text" 
            value={props.keyData.reference}
            disabled
            readOnly
            />
          </Form.Group> 
          <Form.Group as={Col}> 
          <Form.Label>Key Cut:</Form.Label>
          <Form.Control 
            type="text" 
            value={props.keyData.cut}
            disabled
            readOnly
            />  
          </Form.Group>
        </Row>
        <br></br>
        <Row>
          <Form.Group as={Col}>
          <Form.Label>Maximum Adjacent Cuts:</Form.Label>
          <Form.Control 
            type="text" 
            value={props.keyData.mac}
            disabled
            readOnly
            />
          </Form.Group>
          <Form.Group as={Col}>  
          <Form.Label>Key Page:</Form.Label>
          <Form.Control 
            type="text" 
            value={props.keyData.page}
            disabled
            readOnly
            />
          </Form.Group>
          </Row>
          <br></br>

          <Form.Label>Pinning Chart:</Form.Label>
          <Row style={{margin: "0px"}}>
            <ShowKeying 
              keyCutArray={props.keyCutArray}
              fetchTMK={props.fetchTMK} 
            />
          </Row>
          
          <br></br>
          <Row>
          <Form.Group as={Col}>

          <Form.Label>Mark key for future use:</Form.Label>
          <Form.Check
            checked={reserved}
            type="checkbox"
            label="Reserve Key"
            name="formHorizontalRadios"
            id="formHorizontalRadios7"
            onChange={(e) => checkboxReserve(e, setReserved, reserved)}
          />
          </Form.Group>

          <Form.Group as={Col}>

          <Form.Label>Mark key out of use:</Form.Label>
          <Form.Check
            checked={archived}
            type="checkbox"
            label="Archive Key"
            name="formHorizontalRadios"
            id="formHorizontalRadios7"
            onChange={(e) => checkboxArchive(e, setArchived, archived)}
          />
          </Form.Group>  
        </Row>

      <br></br>

      <h4>Key Details</h4>

          <Form.Label>Key Title:</Form.Label>
          <Form.Control
            type="text"
            value={keyTitle}
            onChange={(e) => handleChange(e, setKeyTitle)}
          />
          <br></br>
          <Form.Label>Stamp:</Form.Label>
          <Form.Control
            type="text"
            value={stamp}
            onChange={(e) => handleChange(e, setStamp)}
          />
          <br></br>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            style={{ height: '100px' }}
            onChange={(e) => handleChange(e, setDescription)}
          />

      <br></br>

      <h4>Technician Details</h4>

          <Form.Group>
          <Form.Label>Tech Name:</Form.Label>
          <Form.Control
            type="text"
            value={techName}
            onChange={(e) => handleChange(e, setTechName)}
          />
          <br></br>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Tech Email:</Form.Label>
              <Form.Control
                type="email"
                value={techEmail}
                onChange={(e) => handleChange(e, setTechEmail)}
              />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Label>Tech Phone:</Form.Label>
          <Form.Control
            type="phone"
            value={techPhone}
            onChange={(e) => handleChange(e, setTechPhone)}
          />
          </Form.Group>
        </Row>
        <br></br>
          <Form.Label>Notes:</Form.Label>
          <Form.Control
            as="textarea"
            value={notes}
            style={{ height: '100px' }}
            onChange={(e) => handleChange(e, setNotes)}
          />  
          <br></br>
          <Form.Label>Origination Date:</Form.Label>
          <Form.Control
            type="date"
            value={oDate}
            onChange={(e) => handleChange(e, setODate)}
          />
          </Form.Group>

      <br></br>

      <h4>Assignee Info</h4>

          <Form.Label>Assignee Name:</Form.Label>
          <Form.Control 
            type="text" 
            value={assigneeName} 
            onChange={(e) => handleChange(e, setAssigneeName)}
            />   
          <br></br> 
        <Row>
          <Form.Group as={Col}>
          <Form.Label>Assignee Email:</Form.Label>
            <Form.Control 
              type="email" 
              value={assigneeEmail}
              onChange={(e) => handleChange(e, setAssigneeEmail)}
              />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Label>Assignee Phone:</Form.Label>
          <Form.Control
            type="phone"
            value={assigneePhone}
            onChange={(e) => handleChange(e, setAssigneePhone)}
            />
          </Form.Group>
        </Row>
        <br></br>
          <Form.Label>Details:</Form.Label>
          <Form.Control
            as="textarea"
            value={details}
            style={{ height: '100px' }}
            onChange={(e) => handleChange(e, setDetails)}
          /> 
          <br></br>       
          <Form.Label>Assignment Date:</Form.Label>
          <Form.Control
            type="date"
            value={assignmentDate}
            onChange={(e) => handleChange(e, setAssignmentDate)}
            />
          <br></br>

        <Row>
          <Form.Group as={Col}>
            <Button type="submit">Submit</Button>
          </Form.Group>
        <br></br>
          <Form.Group as={Col}>
            <Button variant="danger" onClick={handleShow}>Delete Key</Button>
          </Form.Group>
        </Row> 

      </Form>

      <AreYouSure
        showModal={show}
        handleClose={handleClose}
        keyId={props.keyData.id}
        ProjectId={props.keyData.project_id}
      />
  </>
  )
}

export default KeyFormEdit