import { useState, useEffect } from "react";
import { useNavigate } from 'react-router'
import { BeatLoader } from "react-spinners";

import MAC from "../../../Functions/PageSort/MAC.js";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import SmallMatrix from "../../../Data/Create/smallMatrix.js";
import "../../../../App.css";

export const FormMatrix = ({
  tmk,
  sop,
  smFilter,
  setSmFilter,
  smallMatrix,
  setSmallMatrix,
  maxAC,
  showKBA,
}) => {
  const [siteKeyway, setSiteKeyway] = useState("Keyway");
  const [dateCreated, setCreatedDate] = useState("");
  const [siteName, setSiteName] = useState("Site Name");
  const [siteAddress, setSiteAddress] = useState("Address");
  const [siteCity, setSiteCity] = useState("City");
  const [siteState, setSiteState] = useState("State");
  const [siteZip, setSiteZip] = useState("Zip");
  const [siteDescription, setSiteDescription] = useState("Description");
  const [siteNotes, setSiteNotes] = useState("Notes");
  const [contactName, setContactName] = useState("Contact Name");
  const [contactPosition, setContactPosition] = useState("Contact Position");
  const [contactEmail, setContactEmail] = useState("Contact Email");
  const [contactPhone, setContactPhone] = useState("Contact Phone");
  const [contactDetails, setContactDetails] = useState("Contact Details");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleRoute = (id) => {
    window.location = `/projects/${id}`;
  };

  const handleWait = (id) => {
    setTimeout(() => {
      handleRoute(id);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    axios
      .post(
        "/api/v1/projects/",
        {
          mac: maxAC,
          tmk: JSON.stringify(tmk),
          sop: JSON.stringify(sop),
          dateCreated,
          siteKeyway,
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
          contactDetails,
          user_id: 1
        })
      .then((response) => {
        if (response.statusText === "Created") {
          console.log("Success", response);
          console.log("response.data.id", response.data.id);
          navigate(`/projects/${response.data.id}`)
        }
        else {
          console.log("Error", response)
        }
    }).catch((error) => {
      console.log("create error", error);
    })
};

  return (
    <div>
      {isLoading ? (
        <div className={"isLoading"}>
          <BeatLoader color="#36d663" size={20} />
        </div>
      ) : (
        <Container
          className="App"
          style={{
            backgroundColor: "white",
            paddingTop: "15px",
            paddingBottom: "15px",
            borderRadius: ".75rem",
            marginTop: "15px",
            marginBottom: "40px",
          }}
        >
          <Form
            onSubmit={handleSubmit}
            style={{ margin: "auto", width: "95%" }}
          >
            <Row>
              <Form.Group as={Col}>
                <Form.Label>TMK:</Form.Label>
                <Form.Control
                  type="text"
                  value={tmk.join("")}
                  disabled
                  readOnly
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>SOP:</Form.Label>
                <Form.Control
                  type="text"
                  value={sop.join("")}
                  disabled
                  readOnly
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>MAC:</Form.Label>
                <Form.Control
                  type="text"
                  value={MAC(maxAC)}
                  disabled
                  readOnly
                />
              </Form.Group>
            </Row>

            <br></br>

            <Form.Group>
              <SmallMatrix
                showKBA={showKBA}
                tmk={tmk}
                smFilter={smFilter}
                setSmFilter={setSmFilter}
                smallMatrix={smallMatrix}
                setSmallMatrix={setSmallMatrix}
              />
            </Form.Group>

            <br></br>

            <Form.Group>
              <Form.Label>
                <h3>Site Details:</h3>
              </Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Label>Keyway:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Keyway"
                onChange={(e) => handleChange(e, setSiteKeyway)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Date Created:</Form.Label>
              <Form.Control
                type="date"
                placeholder="Select Date"
                onChange={(e) => handleChange(e, setCreatedDate)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Site Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Site Name"
                onChange={(e) => handleChange(e, setSiteName)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Street Address"
                onChange={(e) => handleChange(e, setSiteAddress)}
              ></Form.Control>
            </Form.Group>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>City:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  onChange={(e) => handleChange(e, setSiteCity)}
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>State:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  onChange={(e) => handleChange(e, setSiteState)}
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Zip:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  onChange={(e) => handleChange(e, setSiteZip)}
                ></Form.Control>
              </Form.Group>
            </Row>

            <Form.Group>
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                placeholder="Description"
                onChange={(e) => handleChange(e, setSiteDescription)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Notes:</Form.Label>
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                placeholder="Notes"
                onChange={(e) => handleChange(e, setSiteNotes)}
              ></Form.Control>
            </Form.Group>

            <br></br>

            <Form.Group>
              <Form.Label>
                <h3>Contact Details:</h3>
              </Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Label>Contact Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact Name"
                onChange={(e) => handleChange(e, setContactName)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Contact Position:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact Position"
                onChange={(e) => handleChange(e, setContactPosition)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Contact Email"
                onChange={(e) => handleChange(e, setContactEmail)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Contact Phone"
                onChange={(e) => handleChange(e, setContactPhone)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Contact Details:</Form.Label>
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                placeholder="Description"
                onChange={(e) => handleChange(e, setContactDetails)}
              ></Form.Control>
            </Form.Group>
            <br></br>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      )}
    </div>
  );
};

export default FormMatrix;
