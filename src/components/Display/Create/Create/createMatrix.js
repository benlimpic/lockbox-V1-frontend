import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import TMK from "../../../Data/Create/tmk.js";
import SmallMatrix from "../../../Data/Create/smallMatrix.js";
import SOP from "../../../Data/Create/sop.js";
import DataPreview from "../../../Data/Create/dataPreview.js";
import ChooseMac from "../../../Data/Create/chooseMac.js";

import largeMatrix from "../../../Functions/Matrix/largeMatrix.js";
import largeMaster from "../../../Functions/Masters/largeMaster.js";

export const CreateMatrix = ({
  tmk,
  setTmk,
  sop,
  setSop,
  smallMatrix,
  setSmallMatrix,
  smFilter,
  setSmFilter,
  maxAC,
  setMaxAC,
  matrix,
  setMatrix,
  master,
  setMaster,
  setShowKBA,
  showKBA,
  handleKBA,
}) => {



  useEffect(() => {
    setMaster(largeMaster(smFilter, sop, tmk));
    setMatrix(largeMatrix(smFilter, sop));
  }, [smFilter, sop, tmk]);

  console.log("SMALL FILTER", smFilter);

  return (
    <Container 
      style={{
        backgroundColor: "white", 
        paddingBottom: "5px",
        marginTop: "10px", 
        marginBottom: "10px", 
        borderRadius: ".75rem" }}> 
        
      <br></br>
      <TMK 
        tmk={tmk} 
        sop={sop} 
        setTmk={setTmk} 
        setSop={setSop} 
        handleKBA={() => handleKBA(setShowKBA)}
      />
      <br></br>

      <SOP 
        sop={sop} 
        setSop={setSop} 
        tmk={tmk} 
      />
      <br></br>
      <Container style={{width: "80%"}}>
        <SmallMatrix
          showKBA={showKBA}
          tmk={tmk}
          smallMatrix={smallMatrix}
          setSmallMatrix={setSmallMatrix}
          smFilter={smFilter}
          setSmFilter={setSmFilter}
        />
      </Container>
      <br></br>

      <ChooseMac setMaxAC={setMaxAC} />
      <br></br>

      <DataPreview
        sop={sop}
        tmk={tmk}
        matrix={matrix}
        master={master}
        maxAC={maxAC}
      />
    </Container>
  );
};

export default CreateMatrix;
