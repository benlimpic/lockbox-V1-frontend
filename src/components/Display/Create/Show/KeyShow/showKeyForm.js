import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditKeyModal from "../../Edit/KeyEdit/editKeyModal";
import ShowKeying from "./showKeying";

function KeyForm(props) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [fetchKeyData, setFetchKeyData] = useState("");
  const [fetchKeyCut, setFetchKeyCut] = useState([]);
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  const handleShowEditModal = useCallback(() => {
    setShowEditModal(!showEditModal);
  }, [showEditModal]);

  const getKey = useCallback(
    (keyId) => {
      axios
        .get(
          `http://localhost:3000/api/v1/projects/${props.projectId}/keys/${keyId}`
        )
        .then((response) => {
          setFetchKeyData(response.data);
          setCreatedAt(response.data.created_at.slice(0, 10));
          setUpdatedAt(response.data.updated_at.slice(0, 10));
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [props.projectId]
  );

  const keyCutNumbers = useCallback((keyCutId) => {
    let numbers = [];

    keyCutId.split("").forEach((cut) => {
      numbers.push(parseInt(cut));
    });

    setFetchKeyCut(numbers);
  }, []);

  useEffect(() => {
    getKey(props.keyData.id);
  }, [getKey, handleShowEditModal, props.keyData.id]);

  useEffect(() => {
    keyCutNumbers(props.keyData.cut);
  }, [keyCutNumbers, props.keyData.cut]);

  return (
    <Form>
      <Form.Group
        as={Col}
        style={{ display: "flex", justifyContent: "right", margin: "1%" }}
        onClick={(e) => handleShowEditModal()}
      >
        <Button size="sm" variant="secondary">
          Edit Key
        </Button>
      </Form.Group>

      <EditKeyModal
        showEditModal={showEditModal}
        handleShowEditModal={handleShowEditModal}
        keyData={fetchKeyData}
        setKeys={props.setKeys}
        keyCutArray={fetchKeyCut} 
        fetchTMK={props.fetchTMK} 
      />

      <h4>Key Info</h4>

      <Row>
        <Form.Group as={Col}>
          <Form.Label>Key Reference:</Form.Label>
          <Form.Control
            type="text"
            placeholder={fetchKeyData.reference}
            disabled
            readOnly
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Key Cut:</Form.Label>
          <Form.Control
            type="text"
            placeholder={fetchKeyData.cut}
            disabled
            readOnly
          />
        </Form.Group>
      </Row>
      <br></br>
      <Row>
        <Form.Group as={Col}>
          <Form.Label>MAC:</Form.Label>
          <Form.Control
            type="text"
            placeholder={fetchKeyData.mac}
            disabled
            readOnly
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Key Page:</Form.Label>
          <Form.Control
            type="text"
            placeholder={fetchKeyData.page}
            disabled
            readOnly
          />
        </Form.Group>
      </Row>
      <br></br>
      <Form.Label>Pinning Chart:</Form.Label>
      <Row style={{margin: "0px"}}>
        <ShowKeying 
          keyCutArray={fetchKeyCut} 
          fetchTMK={props.fetchTMK} 
        />
      </Row>
      <br></br>
      <Row>
        <Form.Group as={Col}>
          <Form.Label>Created:</Form.Label>
          <Form.Control type="text" placeholder={createdAt} disabled readOnly />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Updated:</Form.Label>
          <Form.Control type="text" placeholder={updatedAt} disabled readOnly />
        </Form.Group>
      </Row>
      <br></br>
      <Row>
        <Form.Group as={Col}>

          <Form.Label>Mark key for future use:</Form.Label>
          <Form.Check
            checked={fetchKeyData.reserved}
            type="checkbox"
            label="Reserve Key"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
            disabled
            readOnly
          />
        </Form.Group>
        <Form.Group as={Col}>

          <Form.Label>Mark key out of use:</Form.Label>
          <Form.Check
            checked={fetchKeyData.archived}
            type="checkbox"
            label="Archive Key"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
            disabled
            readOnly
          />
        </Form.Group>
      </Row>

      <br></br>

      <h4>Key Details</h4>

      <Form.Label>Description:</Form.Label>
      <Form.Control
        type="text"
        placeholder={fetchKeyData.keyTitle}
        disabled
        readOnly
      />
      <br></br>
      <Form.Label>Custom Stamp:</Form.Label>
      <Form.Control
        type="text"
        placeholder={fetchKeyData.stamp}
        disabled
        readOnly
      />
      <br></br>
      <Form.Label>Details:</Form.Label>
      <Form.Control
        as="textarea"
        style={{ height: "100px" }}
        placeholder={fetchKeyData.description}
        disabled
        readOnly
      />

      <br></br>

      <h4>Technician Details</h4>

      <Form.Group>
        <Form.Label>Tech Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder={fetchKeyData.techName}
          disabled
          readOnly
        />
        <br></br>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Tech Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder={fetchKeyData.techEmail}
              disabled
              readOnly
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Tech Phone:</Form.Label>
            <Form.Control
              type="phone"
              placeholder={fetchKeyData.techPhone}
              disabled
              readOnly
            />
          </Form.Group>
        </Row>
        <br></br>
        <Form.Label>Notes:</Form.Label>
        <Form.Control
          as="textarea"
          style={{ height: "100px" }}
          placeholder={fetchKeyData.notes}
          disabled
          readOnly
        />
        <br></br>
        <Form.Label>Origination Date:</Form.Label>
        <Form.Control
          type="date"
          placeholder={fetchKeyData.oDate}
          disabled
          readOnly
        />
      </Form.Group>

      <br></br>

      <h4>Assignee Info</h4>

      <Form.Label>Assignee Name:</Form.Label>
      <Form.Control
        type="text"
        placeholder={fetchKeyData.assigneeName}
        disabled
        readOnly
      />
      <br></br>
      <Row>
        <Form.Group as={Col}>
          <Form.Label>Assignee Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder={fetchKeyData.assigneeEmail}
            disabled
            readOnly
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Assignee Phone:</Form.Label>
          <Form.Control
            type="phone"
            placeholder={fetchKeyData.assigneePhone}
            disabled
            readOnly
          />
        </Form.Group>
      </Row>
      <br></br>
      <Form.Label>Details:</Form.Label>
      <Form.Control
        as="textarea"
        style={{ height: "100px" }}
        placeholder={fetchKeyData.contactDetails}
        disabled
        readOnly
      />
      <br></br>
      <Form.Label>Assignment Date:</Form.Label>
      <Form.Control
        type="date"
        placeholder={fetchKeyData.assignmentDate}
        disabled
        readOnly
      />

      <br></br>
    </Form>
  );
}

export default KeyForm;
