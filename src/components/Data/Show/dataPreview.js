import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import Accordion from "react-bootstrap/Accordion";
import GridTable from "./gridTable.js";
import ListTable from "./listTable.js";
import PageSelect from "./pageSelect.js";
import KeyModal from "../../Display/Create/Show/KeyShow/KeyModal";
import AssignedTable from "./assignedTable.js";
import Container from "react-bootstrap/Container";

async function getKeys(projectId) {
  const response = await axios.get(
    `http://localhost:3000/api/v1/projects/${projectId}/keys`
  );
  return response.data;
}

export const DataPreview = (props) => {
  const {
    tmk,
    mac,
    keyClick,
    setKeyClick,
    setKeys,
    usedKeys,
    projectId,
    resetKeys,
    setResetKeys,
    setKeysInUse,
    keysInUse,
    pageNames,
    getAllBlanks,
  } = props;

  const [page, setPage] = useState(0);
  const [pageName, setPageName] = useState("AAA");

  const [clicked, setClicked] = useState(true);
  const [pageMatrixObject, setPageMatrixObject] = useState("");
  const [pageMasterObject, setPageMasterObject] = useState("");
  const [pageMatrix, setPageMatrix] = useState("");
  const [pageMaster, setPageMaster] = useState("");

  const [view, setView] = useState(false);
  const [masterObjects, setMasterObjects] = useState([] || "");
  const [matrixObjects, setMatrixObjects] = useState([] || "");

  const [assignedKeyClick, setAssignedKeyClick] = useState([] || "");
  const [showForm, setShowForm] = useState(false);
    



  const handleSortBlanks = useCallback(async () => {
    let matrixArray = [];

    let entries = Object.entries(matrixObjects);
    entries.forEach((entry) => {
      if (entry[1].page === pageName) {
        matrixArray.push(entry[1]);
      }
    });

    setPageMatrixObject(matrixArray);
    // console.log("MATO", pageMatrixObject);

    let masterArray = [];

    let masterEntries = Object.entries(masterObjects);
    masterEntries.forEach((entry) => {
      let mangled = Object.entries(entry[1]);
      mangled.forEach((mangle) => {
        if (mangle[1].page === pageName) {
          masterArray.push(mangle[1]);
        } else if (mangle[1].page === pageName.slice(0, 2)) {
          masterArray.push(mangle[1]);
        } else if (mangle[1].page === pageName.slice(0, 1)) {
          masterArray.push(mangle[1]);
        }
      });
    });

    setPageMasterObject(masterArray);
    // console.log("MASTO", pageMasterObject);

    let pageMatrixArray = [];
    let matrixs = Object.entries(matrixArray);
    matrixs.forEach((entry) => {
      let Items = Object.entries(entry[1]);
      let array = [];
      Items.forEach((item) => {
        array.push(item[1]);
      });
      pageMatrixArray.push(array);
    });

    setPageMatrix(pageMatrixArray);
    // console.log("ARRAY", pageMatrix);

    let pageMasterArray = [];
    let avocado = Object.entries(masterArray);
    avocado.forEach((entry) => {
      let Items = Object.entries(entry[1]);
      let array = [];
      Items.forEach((item) => {
        array.push(item[1]);
      });
      pageMasterArray.push(array);
    });

    setPageMaster(pageMasterArray);
    // console.log("MARRAY", pageMaster);
  }, [pageName, matrixObjects, masterObjects]);


  const handlePage = useCallback(
    async (e) => {
      setPage(e.target.value);
      setPageName(pageNames[e.target.value]);
    },
    [setPage, setPageName, handleSortBlanks]
  );

  useEffect(() => {
    getAllBlanks().then((data) => {
      setMasterObjects(data.masterData);
      setMatrixObjects(data.matrixData.keys);
    });
  }, [getAllBlanks]);

  useEffect(() => {
    console.log(pageName);
    handleSortBlanks();
  }, [getAllBlanks, handleSortBlanks, pageName]);

  useEffect(() => {
    if (pageMatrixObject && pageMasterObject !== undefined) {
      getKeys(projectId).then((data) => {
        setKeys(data);
      });
      setView(true);
    }
  }, [pageMatrixObject, pageMasterObject]);


  const handleClick = (e) => {
    setClicked(!clicked);
  };

  const handleKeyClick = (e, key) => {
  setAssignedKeyClick(key)
  }

  const handleShowForm = (e) => {
    setShowForm(!showForm)
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/projects/${projectId}/keys`).then((result) => {
      let res = result.data
      setKeys(res)
  })
  }, [showForm])

  const handleOnClick = (e, key) => {
    handleKeyClick(e, key)
    handleShowForm(e)
  }

  return (
    <>
      <Accordion>
        <Accordion.Item defaultactivekey="4">
          <Accordion.Header>
            <h5>Assigned Key Collection:</h5>
          </Accordion.Header>
          <Accordion.Body>

              { usedKeys === undefined ?
              
                <h3>Loading Keys...</h3>

              : usedKeys.length === 0 ?

                <h3>No Keys Assigned</h3>

              : 
              
              <AssignedTable
                projectId={projectId}
                usedKeys={usedKeys}
                setAssignedKeyClick={setAssignedKeyClick}
                handleOnClick={handleOnClick}
              />
              }

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item defaultactivekey="5">
          <Accordion.Header>
            <h5>Assignable Key View:</h5>
          </Accordion.Header>
          <Accordion.Body style={{padding: "1%", margin: "0px"}}>
            <div>
              {view ? (
                  <div>
                  <br></br>
                  <PageSelect
                    handlePage={handlePage}
                    setPage={setPage}
                    pageNames={pageNames}
                    setPageName={setPageName}
                    pageName={pageName}
                    tmk={tmk}
                    handleClick={handleClick}
                    clicked={clicked}
                  />
                  <br></br>
                  {clicked ? (
                    // //! GRID TABLE

                    <GridTable
                      mac={mac}
                      pageName={pageName}
                      pageMatrix={pageMatrix}
                      pageMaster={pageMaster}
                      keyClick={keyClick}
                      setKeyClick={setKeyClick}
                      setKeys={setKeys}
                      usedKeys={usedKeys}
                      projectId={projectId}
                      resetKeys={resetKeys}
                      setResetKeys={setResetKeys}
                      setKeysInUse={setKeysInUse}
                      keysInUse={keysInUse}
                    />
                  ) : (
                    // //! LIST TABLE
                    <div  style={{ height: "45rem", overflow: "scroll"}}>
                    <ListTable
                      mac={mac}
                      pageName={pageName}
                      pageMatrix={pageMatrix}
                      pageMaster={pageMaster}
                      keyClick={keyClick}
                      setKeyClick={setKeyClick}
                      setKeys={setKeys}
                      usedKeys={usedKeys}
                      projectId={projectId}
                      resetKeys={resetKeys}
                      setResetKeys={setResetKeys}
                      setKeysInUse={setKeysInUse}
                      keysInUse={keysInUse}
                    />
                    </div>
                  )}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> 


        <KeyModal 
          keyData={assignedKeyClick}
          keys={props.keys}
          setKeys={props.setKeys}
          showKeyModal={showForm}
          handleShowKeyModal={handleShowForm}
          />
    </>
  );
};

export default DataPreview;
