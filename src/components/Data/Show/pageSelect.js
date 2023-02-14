import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export const PageSelect = ({ setPage, setPageName, pageName, pageNames, handleClick, clicked, handlePage }) => {

  

  return (

        <InputGroup
          style={{display: "flex", justifyContent: "space-between", margin: "auto", width: "60%" }}
        >
          <Button variant="primary" id="button-addon1" onClick={handleClick}>
          {clicked ? "List View" : "Grid View"}
          </Button>
          
          <Form.Select
            defaultValue={pageName}
            onChange={handlePage}  
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
        
  );
};

export default PageSelect;



