import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

export const PageSelect = ({ setPage, setPageName, matrix, preview, handleClick }) => {
  const [pageNames, setPageNames] = useState([]);
  const [selectedPage, setSelectedPage] = useState(0);
  const [selectedName, setSelectedName] = useState("AAA");

  let names = [];

  const pageOptions = (matrix) => {
    if (matrix.matrix[0] !== undefined) {
      if (matrix.matrix[0].length === 4) {
        for (let i = 0; i < 1; i++) {
          for (let j = 0; j < 1; j++) {
            for (let k = 0; k < 4; k++) {
              let name = [];
              let letters = ["A", "B", "C", "D"];
              name.push(letters[i], letters[j], letters[k]);
              names.push(name.join(""));
            }
          }
        }
        return names;
      } else if (matrix.matrix[0].length === 5) {
        for (let i = 0; i < 1; i++) {
          for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
              let name = [];
              let letters = ["A", "B", "C", "D"];
              name.push(letters[i], letters[j], letters[k]);
              names.push(name.join(""));
            }
          }
        }
        return names;
      } else if (matrix.matrix[0].length === 6) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
              let name = [];
              let letters = ["A", "B", "C", "D"];
              name.push(letters[i], letters[j], letters[k]);
              names.push(name.join(""));
            }
          }
        }
        return names;
      } else {
        return (names = ["AAA"]);
      }
    } else {
      return (names = ["AAA"]);
    }
  };

  useEffect(() => {
    setPageNames(pageOptions(matrix));
  }, [matrix]);

  const handleChange = (e) => {
    setPage(e.target.value);
    setPageName(pageNames[e.target.value]);
  };

  useEffect(() => {
    setPageName(selectedName);
    setPage(selectedPage);
  }, [setSelectedPage, setSelectedName]);

  return (
    <Container>
    <Form onChange={handleChange} style={{margin: "auto", width: "80%" }}>
      <Form.Label>Page Preview:</Form.Label>
        <InputGroup>
          <Button variant="primary" id="button-addon1" onClick={handleClick}>
          {preview ? "Close Preview" : "Preview"}
          </Button>

          <Form.Select defaultValue={selectedName}  
            >
            {pageNames.map((name, index) => {
              return (
                <option key={index} value={index}>
                  {name}
                </option>
              );
            })}
          </Form.Select>
        </InputGroup>
      </Form>
    </Container>
  );
};

export default PageSelect;
