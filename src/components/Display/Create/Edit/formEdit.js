import { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AreYouSure from "./areYouSure.js";

import SmallMatrixBuild from "../../../Data/Show/smallMatrix.js";

import "../../../../App.css";

export const FormEdit = (props) => {
  const [refreshProject, setRefreshProject] = useState(props.resetProject);
  const [tmk, setTmk] = useState(props.tmk);
  const [sop, setSop] = useState(props.sop);
  const [mac, setMac] = useState(props.mac);
  const [siteKeyway, setSiteKeyway] = useState(props.keyway);
  const [siteName, setSiteName] = useState(refreshProject.siteName);
  const [siteAddress, setSiteAddress] = useState(refreshProject.siteAddress);
  const [siteCity, setSiteCity] = useState(refreshProject.siteCity);
  const [siteState, setSiteState] = useState(refreshProject.siteState);
  const [siteZip, setSiteZip] = useState(refreshProject.siteZip);
  const [siteDescription, setSiteDescription] = useState(refreshProject.siteDescription);
  const [siteNotes, setSiteNotes] = useState(refreshProject.siteNotes);
  const [contactName, setContactName] = useState(refreshProject.contactName);
  const [contactPosition, setContactPosition] = useState(refreshProject.contactPosition);
  const [contactEmail, setContactEmail] = useState(refreshProject.contactEmail);
  const [contactPhone, setContactPhone] = useState(refreshProject.contactPhone);
  const [contactDetails, setContactDetails] = useState(refreshProject.contactDetails);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
    .patch(`/api/v1/projects/${props.projectId}`, {
      siteName,
      siteAddress,
      siteCity,
      siteState,
      siteZip,
      siteDescription,
      siteNotes,
      contactName,
      contactPosition,
      contactEmail,
      contactPhone,
      contactDetails
    })
    .then((res) => {
      console.log(res);
      console.log(res.data);
      setRefreshProject(res.data);      
      props.handleShow();
      })
      .catch((err) => console.log(err.full_messages));
  };



  return (


    <div>
      <div>
      <Form onSubmit={handleSubmit}>

      <h3>Project Details:</h3>

        <Row>
          <Form.Group as={Col}>
            <Form.Label>
              TMK:
            </Form.Label>
            <Form.Control
              type="text"
              value={tmk}
              disabled
              readOnly
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>
              SOP:
            </Form.Label>
            <Form.Control
              type="text"
              value={sop}
              disabled
              readOnly
              />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>
              MAC:
            </Form.Label>
            <Form.Control
              type="text"
              value={mac}
              disabled
              readOnly
            />
          </Form.Group>
          </Row>
          <br></br>

          <Row>
            <Form.Label>KBA:</Form.Label>
            <Container>
            <SmallMatrixBuild smMatrix={props.smMatrix} />
            </Container>
          </Row>

          <br></br>
            <Form.Label>
              KeyWay:
            </Form.Label>
            <Form.Control
              type="text"
              value={siteKeyway}
              disabled
              readOnly
            />

        <br></br>

        <h3>Site Information:</h3>
          
              <Form.Label>
                Site Name:
              </Form.Label>
              <Form.Control
                type="text"
                value={siteName}
                onChange={(e) => handleChange(e, setSiteName)}
              />

        <br></br>

              <Form.Label>
                Site Address:
              </Form.Label>
              <Form.Control
                type="text"
                value={siteAddress}
                onChange={(e) => handleChange(e, setSiteAddress)}
              />

        <br></br>

          <Row>
            <Form.Group as={Col}>
              <Form.Label>
                City:
              </Form.Label>
              <Form.Control
                type="text"
                value={siteCity}
                onChange={(e) => handleChange(e, setSiteCity)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>
                State:
              </Form.Label>
              <Form.Control
                type="text"
                value={siteState}
                onChange={(e) => handleChange(e, setSiteState)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>
                Zip:
              </Form.Label>
              <Form.Control
                type="text"
                value={siteZip}
                onChange={(e) => handleChange(e, setSiteZip)}
              />
            </Form.Group>
          </Row>
          <br></br>

              <Form.Label>
                Site Description:
              </Form.Label>
              <Form.Control
                as="textarea"
                style={{ height: '100px' }}
                value={siteDescription}
                onChange={(e) => handleChange(e, setSiteDescription)}
              />
          <br></br>
              <Form.Label>
                Site Notes:
              </Form.Label>
              <Form.Control
                as="textarea"
                style={{ height: '100px' }}
                value={siteNotes}
                onChange={(e) => handleChange(e, setSiteNotes)}
              />

        <br></br>
        <h3>Contact Details:</h3>

          <Row>
            <Form.Group as={Col}>
              <Form.Label>
                Name:
              </Form.Label>
              <Form.Control
                type="text"
                value={contactName}
                onChange={(e) => handleChange(e, setContactName)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                Position:
              </Form.Label>
              <Form.Control
                type="text"
                value={contactPosition}
                onChange={(e) => handleChange(e, setContactPosition)}
              />
            </Form.Group>
          </Row>
          <br></br>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>
                Email:
              </Form.Label>
              <Form.Control
                type="email"
                value={contactEmail}
                onChange={(e) => handleChange(e, setContactEmail)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                Phone:
              </Form.Label>
              <Form.Control
                type="phone"
                value={contactPhone}
                onChange={(e) => handleChange(e, setContactPhone)}
              />
            </Form.Group>
          </Row>
          <br></br>
          <Form.Label>
                Contact Details:
              </Form.Label>
              <Form.Control
                as="textarea"
                style={{ height: '100px' }}
                value={siteDescription}
                onChange={(e) => handleChange(e, setContactDetails)}
              />
          <br></br>
          <Row>
            <Form.Group as={Col}>
              <Button type="submit">Submit</Button>
            </Form.Group>
          <br></br>
            <Form.Group as={Col}>
              <Button variant="danger" onClick={handleShow}>Delete Project</Button>
            </Form.Group>
          </Row>          
        </Form>


        <AreYouSure 
          showModal={show} 
          handleClose = {handleClose}  
          projectId={props.projectId} 
        />
      </div>
    </div>
  );
};

export default FormEdit;
