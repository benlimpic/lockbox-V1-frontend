import { useState, useEffect, useCallback } from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import HoverComponent from "./Hover/matrixHover.js";
import MasterHover from "./Hover/masterHover.js";



const GridTable = (props) => {
  const {
    keyClick,
    setKeyClick,
    setKeys,
    usedKeys,
    projectId,
    setKeysInUse,
    pageName,
    pageMaster,
    pageMatrix,
    setView,
  } = props;

  const [loading, setLoading] = useState(true);

  const handleLoading = useCallback(() => {
    if (pageMatrix[63] !== undefined) {
      if (pageMatrix[63][3] !== undefined) {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }
  }, [pageMatrix]);

  useEffect(() => {
    handleLoading();
  }, [handleLoading, pageMatrix]);

  return (
    <>
      {loading ? (
        <div style={{height: "45rem"}}>
          <h1>Loading...</h1>
        </div>
      ) : (
        
        <Table size="sm">
          <thead>
            {/* <tr> */}
              {/* //! PAGE MASTER */}
              {/* <th>{pageName}</th> */}
              {/* //# Y1 MASTER */}
              {/* <th>{pageName}.Y1:</th> */}
              {/* //# Y2 MASTER */}
              {/* <th>{pageName}.Y2:</th> */}
              {/* //# Y3 MASTER */}
              {/* <th>{pageName}.Y3:</th> */}
              {/* //# Y4 MASTER */}
              {/* <th>{pageName}.Y4:</th> */}
            {/* </tr> */}
          </thead>

          <thead>
            <tr>
              {/* //! PAGE MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[24]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //# Y1 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[20]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //# Y2 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[21]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //# Y3 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[22]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //# Y4 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[23]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>
          </thead>

          <thead>
            
            {/* <tr> */}
              {/*//@ X1 MASTER*/}
              {/* <th>{pageName}.X1:</th> */}

              {/* //$ BLOCK:1 MASTER */}
              {/* <th>{pageName}.B1:</th> */}

              {/* //$ BLOCK:5 MASTER */}
              {/* <th>{pageName}.B5:</th> */}

              {/* //$ BLOCK:9 MASTER */}
              {/* <th>{pageName}.B9:</th> */}

              {/* //$ BLOCK:13 MASTER */}
              {/* <th>{pageName}.B13:</th> */}
            {/* </tr> */}
          </thead>

          <thead>
            <tr>
              {/* //@ X1 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[16]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:1 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[0]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:5 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[4]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:9 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[8]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:13 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[12]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>
          </thead>

          <tbody>
            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 1 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[0]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 17 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[16]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 33 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[32]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 49 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[48]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>

            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 2 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[1]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 18 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[17]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 34 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[33]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 50 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[49]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>

            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 3 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[2]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 19 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[18]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 35 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[34]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 51 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[50]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>

            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 4 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[3]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 20 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[19]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 36 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[35]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 52 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[51]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>
          </tbody>

          <thead>
            {/* <tr> */}
              {/* //@ X2 MASTER */}
              {/* <th>{pageName}.X2:</th> */}

              {/* //$ BLOCK:2 MASTER */}
              {/* <th>{pageName}.B2:</th> */}

              {/* //$ BLOCK:6 MASTER */}
              {/* <th>{pageName}.B6:</th> */}

              {/* //$ BLOCK:10 MASTER */}
              {/* <th>{pageName}.B10:</th> */}

              {/* //$ BLOCK:14 MASTER */}
              {/* <th>{pageName}.B14:</th> */}
            {/* </tr> */}
          </thead>

          <thead>
            <tr>
              {/* //@ X2 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[17]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:2 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[1]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:6 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[5]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:10 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[9]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:14 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[13]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>
          </thead>

          <tbody>
            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 5 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[4]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 21 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[20]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 37 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[36]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 53 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[52]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>
            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 6 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[5]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 22 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[21]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 38 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[37]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 54 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[53]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>

            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 7 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[6]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 23 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[22]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 39 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[38]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 55 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[54]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>

            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 8 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[7]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 24 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[23]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 40 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[39]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 56 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[55]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>
          </tbody>

          <thead>
            {/* <tr> */}
              {/* //@ X3 MASTER */}
              {/* <th>{pageName}.X3:</th> */}

              {/* //$ BLOCK:3 MASTER */}
              {/* <th>{pageName}.B3:</th> */}

              {/* //$ BLOCK:7 MASTER */}
              {/* <th>{pageName}.B7:</th> */}

              {/* //$ BLOCK:11 MASTER */}
              {/* <th>{pageName}.B11:</th> */}

              {/* //$ BLOCK:15 MASTER */}
              {/* <th>{pageName}.B15:</th> */}
            {/* </tr> */}
          </thead>

          <thead>
            <tr>
              {/* //@ X3 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[18]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:3 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[2]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:7 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[6]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:11 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[10]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:15 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[14]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>
          </thead>

          <tbody>
            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 9 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[8]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 25 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[24]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 41 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[40]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 57 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[56]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>

            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 10 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[9]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 26 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[25]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 42 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[41]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 58 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[57]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>

            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 11 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[10]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 27 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[26]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 43 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[42]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 59 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[58]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>

            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 12 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[11]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 28 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[27]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 44 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[43]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 60 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[59]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>
          </tbody>

          <thead>
            {/* <tr> */}
              {/* //@ X4 MASTER */}
              {/* <th>{pageName}.X4:</th> */}

              {/* //$ BLOCK:4 MASTER */}
              {/* <th>{pageName}.B4:</th> */}

              {/* //$ BLOCK:8 MASTER */}
              {/* <th>{pageName}.B8:</th> */}

              {/* //$ BLOCK:12 MASTER */}
              {/* <th>{pageName}.B12:</th> */}

              {/* //$ BLOCK:16 MASTER */}
              {/* <th>{pageName}.B16:</th> */}
            {/* </tr> */}
          </thead>

          <thead>
            <tr>
              {/* //@ X4 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[19]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:4 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[3]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:8 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[7]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:12 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[11]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //$ BLOCK:16 MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[15]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>
          </thead>

          <tbody>
            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 13 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[12]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 29 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[28]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 45 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[44]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 61 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[60]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>

            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 14 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[13]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 30 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[29]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 46 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[45]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 62 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[61]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>

            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 15 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[14]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 31 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[30]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 47 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[46]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 63 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[62]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>

            <tr>
              {/* //! Empty Cell */}
              <td className="table-secondary"></td>

              {/* //! DATA 16 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[15]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 32 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[31]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 48 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[47]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //! DATA 64 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[63]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            </tr>
          </tbody>

          <thead>
            <tr>
              {/* //@ 4 PAGE MASTER */}

              <th className="table-secondary"></th>

              {/* <th>{pageName.slice(0, 2)}:</th> */}
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[25]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

              {/* //@ 16 PAGE MASTER */}

              {/* <th>{pageName.slice(0, 1)}:</th> */}


              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[26]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
                />

              <th className="table-secondary"></th>
              <th className="table-secondary"></th>
            </tr>
          </thead>
        </Table>
      )}

    </>
  );
};

export default GridTable;
