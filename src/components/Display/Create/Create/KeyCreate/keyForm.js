import { useState, useEffect } from 'react'
import axios from 'axios'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ShowKeyModal from '../../Show/KeyShow/KeyModal'

function KeyForm(props) {

  const [newKey, setNewKey] = useState([])
  const [allKeys, setAllKeys] = useState(props.keys)

  const [assigneeName, setAssigneeName] = useState('')
  const [assigneeEmail, setAssigneeEmail] = useState('')
  const [assigneePhone, setAssigneePhone] = useState('')
  const [details, setDetails] = useState('')
  const [assignmentDate, setAssignmentDate] = useState('')

  const [techName, setTechName] = useState('')
  const [techEmail, setTechEmail] = useState('')
  const [techPhone, setTechPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [oDate, setODate] = useState('')

  const [keyTitle, setKeyTitle] = useState('')
  const [stamp, setStamp] = useState('')
  const [description, setDescription] = useState('')

  const [usable, setUsable] = useState(props.keyClick[9])
  const [inUse, setInUse] = useState(true)
  const [reserved, setReserved] = useState('')
  const [archived, setArchived] = useState('')
  const [status, setStatus] = useState('In Use')

  const [show, setShow] = useState(false)

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const checkboxReserve = (e, setState, state) => {
    setState(!state)
    setArchived(false)
  };

  useEffect(() => {
    if (reserved === true) {
      setInUse(false)
      setArchived(false)
      setStatus("Reserved")
    }
    else {
      setInUse(true)
      setReserved(false)
      setArchived(false)
      setStatus("In Use")
    }
  }, [reserved, inUse, status])

  const handleShow = () => {
    setShow(!show)
  }

  const handleBothShow = () => {
    setShow(!show)
    props.handleShowSecond()
  }

  useEffect(() => {
    axios
      .get(`/api/v1/projects/${props.projectId}/keys`)
      .then((response) => {
        let data = response.data
        setAllKeys(data)
      }
    )
  }, [newKey, props.projectId])

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
    .post(`/api/v1/projects/${props.projectId}/keys`, {

      project_id: props.projectId,
      mac: props.keyClick[4],
      cut: props.keyClick[3],
      page: props.keyClick[2],
      reference: props.keyClick[1],

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
      status

    })
    .then((res) => {
      console.log(res);
      setNewKey(res.data)
      handleShow()
      })
    .catch((err) => console.log(err.full_messages))
  };

  // console.log("NEW KEY", newKey)
  // console.log("ALL KEYS", allKeys)


  return (
    <>
      <Form onSubmit={handleSubmit}>

        <h4>Key Info</h4>

          <Row>
            <Form.Group as={Col}>
            <Form.Label>Key Reference:</Form.Label>
            <Form.Control 
              type="text" 
              placeholder={props.keyClick[1]}
              disabled
              readOnly
              />
            </Form.Group> 
            <Form.Group as={Col}> 
            <Form.Label>Key Cut:</Form.Label>
            <Form.Control 
              type="text" 
              placeholder={props.keyClick[3]}
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
              placeholder={props.keyClick[4]}
              disabled
              readOnly
              />
            </Form.Group>
            <Form.Group as={Col}>  
            <Form.Label>Key Page:</Form.Label>
            <Form.Control 
              type="text" 
              placeholder={props.keyClick[2]}
              disabled
              readOnly
              />
            </Form.Group>
            <Form.Group>
            <br></br>
            <Form.Label>Mark key for future use:</Form.Label>
            <Form.Check
              type="checkbox"
              label="Reserve Key"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
              onChange={(e) => checkboxReserve(e, setReserved, reserved)}
            />
            </Form.Group>  
          </Row>

        <br></br>

        <h4>Key Details</h4>

            <Form.Label>Key Title:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Key Title"
              onChange={(e) => handleChange(e, setKeyTitle)}
            />
            <br></br>
            <Form.Label>Stamp:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Stamp"
              onChange={(e) => handleChange(e, setStamp)}
            />
            <br></br>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write A Description"
              style={{ height: '100px' }}
              onChange={(e) => handleChange(e, setDescription)}
            />

        <br></br>

        <h4>Technician Details</h4>

            <Form.Group>
            <Form.Label>Tech Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) => handleChange(e, setTechName)}
            />
            <br></br>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Tech Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => handleChange(e, setTechEmail)}
                />
            </Form.Group>
            <Form.Group as={Col}>
            <Form.Label>Tech Phone:</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Enter Phone"
              onChange={(e) => handleChange(e, setTechPhone)}
            />
            </Form.Group>
          </Row>
          <br></br>
            <Form.Label>Notes:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write Some Notes"
              style={{ height: '100px' }}
              onChange={(e) => handleChange(e, setNotes)}
            />  
            <br></br>
            <Form.Label>Origination Date:</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date"
              onChange={(e) => handleChange(e, setODate)}
            />
            </Form.Group>

        <br></br>

        <h4>Assignee Info</h4>

            <Form.Label>Assignee Name:</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Name" 
              onChange={(e) => handleChange(e, setAssigneeName)}
              />   
            <br></br> 
          <Row>
            <Form.Group as={Col}>
            <Form.Label>Assignee Email:</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter Email" 
                onChange={(e) => handleChange(e, setAssigneeEmail)}
                />
            </Form.Group>
            <Form.Group as={Col}>
            <Form.Label>Assignee Phone:</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Enter Phone"
              onChange={(e) => handleChange(e, setAssigneePhone)}
              />
            </Form.Group>
          </Row>
          <br></br>
            <Form.Label>Details:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Important Details"
              style={{ height: '100px' }}
              onChange={(e) => handleChange(e, setDetails)}
            /> 
            <br></br>       
            <Form.Label>Assignment Date:</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date Assigned"
              onChange={(e) => handleChange(e, setAssignmentDate)}
              />

        <br></br>
        <Button type="submit">Submit</Button>
      </Form>

      <ShowKeyModal
        showKeyModal={show}
        handleShowKeyModal={handleBothShow}
        keyData={newKey}
      />
    </>
  )
}

export default KeyForm





