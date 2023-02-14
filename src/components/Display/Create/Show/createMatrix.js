import { useState, useEffect } from "react";
import TMK from "../../../Data/Show/tmk.js";
import SmallMatrix from "../../../Data/Show/smallMatrix.js";
import SOP from "../../../Data/Show/sop.js";

import DataPreview from "../../../Data/Show/dataPreview.js";

export const CreateMatrix = ({
  tmk,
  sop,
  mac,
  matrix,
  master,
  page,
  setPage,
  pageName,
  setPageName,
  pageMatrix,
  setPageMatrix,
  pageMaster,
  setPageMaster,
  masterObjects,
  matrixObjects,
  keyClick,
  setKeyClick,
  pageNames,
  setKeys,
  usedKeys,
  projectId,
  setResetKeys,
  resetKeys,
  setKeysInUse,
  keysInUse,
}) => {
  return (
    <div className="App">
      <DataPreview
        sop={sop}
        tmk={tmk}
        matrix={matrix}
        master={master}
        mac={mac}
        page={page}
        setPage={setPage}
        pageName={pageName}
        setPageName={setPageName}
        pageMatrix={pageMatrix}
        setPageMatrix={setPageMatrix}
        pageMaster={pageMaster}
        setPageMaster={setPageMaster}
        masterObjects={masterObjects}
        matrixObjects={matrixObjects}
        keyClick={keyClick}
        setKeyClick={setKeyClick}
        pageNames={pageNames}
        setKeys={setKeys}
        usedKeys={usedKeys}
        projectId={projectId}
        setResetKeys={setResetKeys}
        resetKeys={resetKeys}
        setKeysInUse={setKeysInUse}
        keysInUse={keysInUse}
      />
    </div>
  );
};

export default CreateMatrix;
