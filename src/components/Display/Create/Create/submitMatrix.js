import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import chalk from "chalk";
import CreateMatrix from "./createMatrix";
import FormMatrix from "./formMatrix";

import Button from "react-bootstrap/Button";

export const SubmitMatrix = (props) => {

  const [tmk, setTmk] = useState([]);
  const [sop, setSop] = useState([]);
  const [smallMatrix, setSmallMatrix] = useState([]);
  const [smFilter, setSmFilter] = useState([]);
  const [maxAC, setMaxAC] = useState(8);
  const [matrix, setMatrix] = useState([]);
  const [master, setMaster] = useState([]);
  const [dataMatrix, setDataMatrix] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [formPage, setFormPage] = useState(false);
  const [showKBA, setShowKBA] = useState(false);

  const handleShow = (state, setState) => {
    setState(!state);
  };

  const handleClick = (e) => {
    if (tmk.length === 0 ||sop.length === 0) {
      alert("Please add a valid TMK and SOP to create a new record.");
    } else {
      handleShow(formPage, setFormPage);
    }
  };



  const handleKBA = (setState) => {
    setState(true);
  };

  // console.log(chalk.cyan.bold.underline("SUBMIT MATRIX"))
  // console.log(chalk.red.bold.underline("SOP"), sop)
  // console.log(chalk.yellow.bold.underline("TMK"), tmk)
  // console.log(chalk.green.bold.underline("KBA"), smallMatrix)
  // console.log(chalk.blue.bold.underline("MATRIX"), matrix)
  // console.log(chalk.magenta.bold.underline("MASTER"), master)
  // console.log(chalk.cyan.bold.underline("DATA MATRIX"), dataMatrix)

  return (
    <Container className="App" style={{backgroundColor: "#F2F0F3", paddingTop: "15px", paddingBottom: "15px", borderRadius: ".75rem", marginTop: "15px", marginBottom: "40px"}}>
      <h3>New Project:</h3>
      {formPage === true ? (
        <div>
          <FormMatrix
            tmk={tmk}
            sop={sop}
            smFilter={smFilter}
            setSmFilter={setSmFilter}
            smallMatrix={smallMatrix}
            setSmallMatrix={setSmallMatrix}
            maxAC={maxAC}
            matrix={matrix}
            master={master}
            submitted={submitted}
            setSubmitted={setSubmitted}
            dataMatrix={dataMatrix}
            setDataMatrix={setDataMatrix}
            showKBA={showKBA}
            user={props.user}

          />
        </div>
      ) : (
        <div>
          <CreateMatrix
            tmk={tmk}
            setTmk={setTmk}
            sop={sop}
            setSop={setSop}
            smallMatrix={smallMatrix}
            setSmallMatrix={setSmallMatrix}
            smFilter={smFilter}
            setSmFilter={setSmFilter}
            maxAC={maxAC}
            setMaxAC={setMaxAC}
            matrix={matrix}
            setMatrix={setMatrix}
            master={master}
            setMaster={setMaster}
            setShowKBA={setShowKBA}
            showKBA={showKBA}
            handleKBA={() => handleKBA(setShowKBA)}
          />

          <Button onClick={(e) => handleClick()}>
            Create Record
          </Button>
        </div>
      )}
    </Container>
  );
};

export default SubmitMatrix;
