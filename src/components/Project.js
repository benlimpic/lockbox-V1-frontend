import { useState, useEffect} from "react";

import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import ProjectModal from "./Display/Create/Edit/ProjectModal";
import DataPreview from "./Data/Show/dataPreview";
import SmallMatrixBuild from "./Data/Show/smallMatrix.js";
import MAC from "./Functions/PageSort/MAC";
import "../App.css";

async function getProject(projectId) {
  const response = await axios.get( `http://localhost:3000/api/v1/projects/${projectId}`);
  return response.data;
}

async function getKeys(projectId) {
  const response = await axios.get(`http://localhost:3000/api/v1/projects/${projectId}/keys`);
  return response.data;
}

export const Project = (props) => {
  const {
    projectId,
    data,
    tmk,
    sop,
    mac,
    max,
    joinTmk,
    joinSop,
    smMatrix,
    smFilter,
    pageNames,
    getAllBlanks,
  } = props

  const [keyClick, setKeyClick] = useState("");
  const [show, setShow] = useState(false);
  const [keys, setKeys] = useState("");
  const [keysInUse, setKeysInUse] = useState([] || "");
  const [resetProject, setResetProject] = useState("");
  const [resetKeys, setResetKeys] = useState("");


  const handleShow = (e) => {
    setShow(!show);
  };


  useEffect(() => {
      getProject(projectId).then((data) => {
        setResetProject(data);
      })
      .catch((err) => console.log(err.full_messages));
  }, [show]);


useEffect(() => {
    getKeys(projectId).then((data) => {
        setKeys(data);
        let keysArray = []
        data.forEach((key) => {
          if (key.inUse === true && key.reserved === false && key.archived === false) {
            keysArray.push(key)
          }
        })
        setKeysInUse(keysArray)
        keysArray = []
      })
      .catch((err) => console.log(err.full_messages));
  }, [setKeysInUse, setKeys, projectId]);


  return (
    <>
      <ProjectModal 
        show={show}
        handleShow={handleShow}
        tmk={joinTmk}
        sop={joinSop}
        mac={max}
        smMatrix={smMatrix}
        projectId={data.id}
        siteName={data.siteName}
        siteAddress={data.siteAddress}
        siteCity={data.siteCity}
        siteState={data.siteState}
        siteZip={data.siteZip}
        siteKeyway={data.siteKeyway}
        siteDescription={data.siteDescription}
        siteNotes={data.siteNotes}
        contactName={data.contactName}
        contactPosition={data.contactPosition}
        contactEmail={data.contactEmail}
        contactPhone={data.contactPhone}
        resetProject={resetProject}
      />

      <Form>
        <Form.Group style={{padding: "10px", paddingLeft: "20px"}}>
          <label>Site / Project:</label>
        <h5>{resetProject.siteName}</h5>
        </Form.Group>       
        <Accordion>
          <Accordion.Item defaultactivekey="1">
            <Accordion.Header>
              <h5>Project Details:</h5>
            </Accordion.Header>
            <Accordion.Body>

              <Row>
                <Form.Group as={Col}>
                  <Form.Label>TMK:</Form.Label>
                  <Form.Control
                    type="text"
                    value={joinTmk}
                    disabled
                    readOnly
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>SOP:</Form.Label>
                  <Form.Control
                    type="text"
                    value={joinSop}
                    disabled
                    readOnly
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>MAC:</Form.Label>
                  <Form.Control
                    type="text"
                    value={MAC(mac)}
                    disabled
                    readOnly
                  />
                </Form.Group>
              </Row>
            <br></br>
              <Form.Label>KeyWay:</Form.Label>
              <Form.Control
                type="text"
                value={data.siteKeyway}
                disabled
                readOnly
              />
    <br></br>
              <Form.Group>
              <Form.Label>KBA:</Form.Label>
              <SmallMatrixBuild smMatrix={smMatrix}/>
              </Form.Group>
    <br></br>

        <Accordion>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h5>Site Information:</h5>
            </Accordion.Header>
              <Accordion.Body>
                <Form.Label>Site Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={resetProject.siteName}
                    disabled
                    readOnly
                  />

                  <Form.Label>Site Address:</Form.Label>
                  <Form.Control
                    type="text"
                    value={resetProject.siteAddress}
                    disabled
                    readOnly
                  />

                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label>City:</Form.Label>
                      <Form.Control
                        type="text"
                        value={resetProject.siteCity}
                        disabled
                        readOnly
                      />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>State:</Form.Label>
                      <Form.Control
                        type="text"
                        value={resetProject.siteState}
                        disabled
                        readOnly
                      />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Zip:</Form.Label>
                      <Form.Control
                        type="text"
                        value={resetProject.siteZip}
                        disabled
                        readOnly
                      />
                    </Form.Group>
                  </Row>
              <br></br>
                  <Form.Label>Site Description:</Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{ height: "100px" }}
                    value={resetProject.siteDescription}
                    disabled
                    readOnly
                  />
              <br></br>
                  <Form.Label>Site Notes:</Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{ height: "100px" }}
                    value={resetProject.siteNotes}
                    disabled
                    readOnly
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h5>Contact Information:</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label>Name:</Form.Label>
                      <Form.Control
                        type="text"
                        value={resetProject.contactName}
                        disabled
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Position:</Form.Label>
                      <Form.Control
                        type="text"
                        value={resetProject.contactPosition}
                        disabled
                        readOnly
                      />
                    </Form.Group>
                  </Row>
              <br></br>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type="email"
                        value={resetProject.contactEmail}
                        disabled
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Phone:</Form.Label>
                      <Form.Control
                        type="phone"
                        value={resetProject.contactPhone}
                        disabled
                        readOnly
                      />
                    </Form.Group>
                  </Row>
              <br></br>
                  <Form.Group as={Col}>
                    <Form.Label>Details:</Form.Label>
                    <Form.Control
                      as="textarea"
                      style={{ height: "100px" }}
                      value={resetProject.contactDetails}
                      disabled
                      readOnly
                    />
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <br></br>
            <Row>         
              <Form.Group style={{ display: "flex", justifyContent: "right", marginRight: "20px", marginBottom: "10px"}}>
                <Button size="sm" variant="secondary" onClick={(e) => handleShow()} >
                  Edit Project Details
                </Button>
              </Form.Group>  
            </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        </Form>
        <DataPreview
          tmk={tmk}
          sop={sop}
          mac={mac}
          max={max}
          smMatrix={smMatrix}
          smFilter={smFilter}
          keyClick={keyClick}
          setKeyClick={setKeyClick}
          setKeys={setKeys}
          usedKeys={keys}
          projectId={projectId}
          resetKeys={resetKeys}
          setResetKeys={setResetKeys}
          setKeysInUse={setKeysInUse}
          keysInUse={keysInUse}
          pageNames={pageNames}
          getAllBlanks={getAllBlanks}
        />
    </>
  );
};

export default Project;
