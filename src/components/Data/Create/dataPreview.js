import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import PageSelect from "./pageSelect.js";
import matrixSort from "../../Functions/PageSort/matrixSort.js";
import masterSort from "../../Functions/PageSort/masterSort.js";
import isUsableCss from "../../Functions/CSS/isUsableCss.js";
import isUsableCssMaster from "../../Functions/CSS/isUsableCssMaster.js";

export const DataPreview = (matrix) => {
  const [mac, setMac] = useState(8);
  const [page, setPage] = useState();
  const [pageName, setPageName] = useState();
  const [pageMatrix, setPageMatrix] = useState([]);
  const [pageMaster, setPageMaster] = useState([]);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    setPreview(false);
  }, [matrix.tmk.length, matrix.sop.length]);

  const handleClick = (e) => {
    if (matrix.tmk.length === 0 || matrix.sop.length === 0) {
      alert("Please add a valid TMK and SOP to preview your matrix.");
    } else {
      setPreview(!preview);
    }
  };

  useEffect(() => {
    setMac(matrix.maxAC);
  }, [matrix.maxAC]);

  useEffect(() => {
    setPageMatrix(matrixSort(matrix, page));
    setPageMaster(masterSort(matrix, page));
  }, [matrix, page, mac]);


  return (
    <div>
      <div>
        <PageSelect
          handleClick={handleClick}
          preview={preview}
          setPage={setPage}
          setPageName={setPageName}
          matrix={matrix}
        />
      <br></br>
        {preview === true ? (
          <div>
            {pageMaster[0] && pageMatrix[0] !== undefined ? (
                <Container className="App" style={{backgroundColor: "#F2F0F3", paddingTop: "15px", paddingBottom: "15px", borderRadius: ".75rem", marginTop: "15px", marginBottom: "40px"}}>
                <Table size="sm" style={{margin: "auto", width: "80%"}}>
                  <thead>
                    <tr>
                      {/* //! PAGE MASTER */}
                      <th>{pageName}</th>
                      {/* //# Y1 MASTER */}
                      <th>{pageName}.Y1:</th>
                      {/* //# Y2 MASTER */}
                      <th>{pageName}.Y2:</th>
                      {/* //# Y3 MASTER */}
                      <th>{pageName}.Y3:</th>
                      {/* //# Y4 MASTER */}
                      <th>{pageName}.Y4:</th>
                    </tr>
                  </thead>

                  <thead>
                    <tr>
                      {/* //! PAGE MASTER */}
                      <th className={isUsableCssMaster(pageMaster[3][0], mac)}>
                        {pageMaster[3][0]}
                      </th>
                      {/* //# Y1 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[2][0], mac)}>
                        {pageMaster[2][0]}
                      </th>
                      {/* //# Y2 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[2][1], mac)}>
                        {pageMaster[2][1]}
                      </th>
                      {/* //# Y3 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[2][2], mac)}>
                        {pageMaster[2][2]}
                      </th>
                      {/* //# Y4 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[2][3], mac)}>
                        {pageMaster[2][3]}
                      </th>
                    </tr>
                  </thead>

                  <thead>
                    <tr>
                      {/* //@ X1 MASTER */}
                      <th>{pageName}.X1:</th>

                      {/* //$ BLOCK:1 MASTER */}
                      <th>{pageName}.B1:</th>

                      {/* //$ BLOCK:5 MASTER */}
                      <th>{pageName}.B5:</th>

                      {/* //$ BLOCK:9 MASTER */}
                      <th>{pageName}.B9:</th>

                      {/* //$ BLOCK:13 MASTER */}
                      <th>{pageName}.B13:</th>
                    </tr>
                  </thead>

                  <thead>
                    <tr>
                      {/* //@ X1 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[1][0], mac)}>
                        {pageMaster[1][0]}
                      </th>

                      {/* //$ BLOCK:1 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][0], mac)}>
                        {pageMaster[0][0]}
                      </th>

                      {/* //$ BLOCK:5 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][4], mac)}>
                        {pageMaster[0][4]}
                      </th>

                      {/* //$ BLOCK:9 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][8], mac)}>
                        {pageMaster[0][8]}
                      </th>

                      {/* //$ BLOCK:13 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][12], mac)}>
                        {pageMaster[0][12]}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 1 */}
                      <td className={isUsableCss(pageMatrix[0][0][0], mac)}>
                        {pageMatrix[0][0][0]}
                      </td>

                      {/* //! DATA 17 */}
                      <td className={isUsableCss(pageMatrix[1][0][0], mac)}>
                        {pageMatrix[1][0][0]}
                      </td>

                      {/* //! DATA 33 */}
                      <td className={isUsableCss(pageMatrix[2][0][0], mac)}>
                        {pageMatrix[2][0][0]}
                      </td>

                      {/* //! DATA 49 */}
                      <td className={isUsableCss(pageMatrix[3][0][0], mac)}>
                        {pageMatrix[3][0][0]}
                      </td>
                    </tr>

                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 2 */}
                      <td className={isUsableCss(pageMatrix[0][0][1], mac)}>
                        {pageMatrix[0][0][1]}
                      </td>

                      {/* //! DATA 18 */}
                      <td className={isUsableCss(pageMatrix[1][0][1], mac)}>
                        {pageMatrix[1][0][1]}
                      </td>

                      {/* //! DATA 34 */}
                      <td className={isUsableCss(pageMatrix[2][0][1], mac)}>
                        {pageMatrix[2][0][1]}
                      </td>

                      {/* //! DATA 50 */}
                      <td className={isUsableCss(pageMatrix[3][0][1], mac)}>
                        {pageMatrix[3][0][1]}
                      </td>
                    </tr>

                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 3 */}
                      <td className={isUsableCss(pageMatrix[0][0][2], mac)}>
                        {pageMatrix[0][0][2]}
                      </td>

                      {/* //! DATA 19 */}
                      <td className={isUsableCss(pageMatrix[1][0][2], mac)}>
                        {pageMatrix[1][0][2]}
                      </td>

                      {/* //! DATA 35 */}
                      <td className={isUsableCss(pageMatrix[2][0][2], mac)}>
                        {pageMatrix[2][0][2]}
                      </td>

                      {/* //! DATA 51 */}
                      <td className={isUsableCss(pageMatrix[3][0][2], mac)}>
                        {pageMatrix[3][0][2]}
                      </td>
                    </tr>

                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 4 */}
                      <td className={isUsableCss(pageMatrix[0][0][3], mac)}>
                        {pageMatrix[0][0][3]}
                      </td>

                      {/* //! DATA 20 */}
                      <td className={isUsableCss(pageMatrix[1][0][3], mac)}>
                        {pageMatrix[1][0][3]}
                      </td>

                      {/* //! DATA 36 */}
                      <td className={isUsableCss(pageMatrix[2][0][3], mac)}>
                        {pageMatrix[2][0][3]}
                      </td>

                      {/* //! DATA 52 */}
                      <td className={isUsableCss(pageMatrix[3][0][3], mac)}>
                        {pageMatrix[3][0][3]}
                      </td>
                    </tr>
                  </tbody>

                  <thead>
                    <tr>
                      {/* //@ X2 MASTER */}
                      <th>{pageName}.X2:</th>

                      {/* //$ BLOCK:2 MASTER */}
                      <th>{pageName}.B2:</th>

                      {/* //$ BLOCK:6 MASTER */}
                      <th>{pageName}.B6:</th>

                      {/* //$ BLOCK:10 MASTER */}
                      <th>{pageName}.B10:</th>

                      {/* //$ BLOCK:14 MASTER */}
                      <th>{pageName}.B14:</th>
                    </tr>
                  </thead>

                  <thead>
                    <tr>
                      {/* //@ X2 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[1][1], mac)}>
                        {pageMaster[1][1]}
                      </th>

                      {/* //$ BLOCK:2 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][1], mac)}>
                        {pageMaster[0][1]}
                      </th>

                      {/* //$ BLOCK:6 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][5], mac)}>
                        {pageMaster[0][5]}
                      </th>

                      {/* //$ BLOCK:10 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][9], mac)}>
                        {pageMaster[0][9]}
                      </th>

                      {/* //$ BLOCK:14 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][13], mac)}>
                        {pageMaster[0][13]}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 5 */}
                      <td className={isUsableCss(pageMatrix[0][1][0], mac)}>
                        {pageMatrix[0][1][0]}
                      </td>

                      {/* //! DATA 21 */}
                      <td className={isUsableCss(pageMatrix[1][1][0], mac)}>
                        {pageMatrix[1][1][0]}
                      </td>

                      {/* //! DATA 37 */}
                      <td className={isUsableCss(pageMatrix[2][1][0], mac)}>
                        {pageMatrix[2][1][0]}
                      </td>

                      {/* //! DATA 53 */}
                      <td className={isUsableCss(pageMatrix[3][1][0], mac)}>
                        {pageMatrix[3][1][0]}
                      </td>
                    </tr>

                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 6 */}
                      <td className={isUsableCss(pageMatrix[0][1][1], mac)}>
                        {pageMatrix[0][1][1]}
                      </td>

                      {/* //! DATA 22 */}
                      <td className={isUsableCss(pageMatrix[1][1][1], mac)}>
                        {pageMatrix[1][1][1]}
                      </td>

                      {/* //! DATA 38 */}
                      <td className={isUsableCss(pageMatrix[2][1][1], mac)}>
                        {pageMatrix[2][1][1]}
                      </td>

                      {/* //! DATA 54 */}
                      <td className={isUsableCss(pageMatrix[3][1][1], mac)}>
                        {pageMatrix[3][1][1]}
                      </td>
                    </tr>

                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 7 */}
                      <td className={isUsableCss(pageMatrix[0][1][2], mac)}>
                        {pageMatrix[0][1][2]}
                      </td>

                      {/* //! DATA 23 */}
                      <td className={isUsableCss(pageMatrix[1][1][2], mac)}>
                        {pageMatrix[1][1][2]}
                      </td>

                      {/* //! DATA 39 */}
                      <td className={isUsableCss(pageMatrix[2][1][2], mac)}>
                        {pageMatrix[2][1][2]}
                      </td>

                      {/* //! DATA 55 */}
                      <td className={isUsableCss(pageMatrix[3][1][2], mac)}>
                        {pageMatrix[3][1][2]}
                      </td>
                    </tr>

                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 8 */}
                      <td className={isUsableCss(pageMatrix[0][1][3], mac)}>
                        {pageMatrix[0][1][3]}
                      </td>

                      {/* //! DATA 24 */}
                      <td className={isUsableCss(pageMatrix[1][1][3], mac)}>
                        {pageMatrix[1][1][3]}
                      </td>

                      {/* //! DATA 40 */}
                      <td className={isUsableCss(pageMatrix[2][1][3], mac)}>
                        {pageMatrix[2][1][3]}
                      </td>

                      {/* //! DATA 56 */}
                      <td className={isUsableCss(pageMatrix[3][1][3], mac)}>
                        {pageMatrix[3][1][3]}
                      </td>
                    </tr>
                  </tbody>

                  <thead>
                    <tr>
                      {/* //@ X3 MASTER */}
                      <th>{pageName}.X3:</th>

                      {/* //$ BLOCK:3 MASTER */}
                      <th>{pageName}.B3:</th>

                      {/* //$ BLOCK:7 MASTER */}
                      <th>{pageName}.B7:</th>

                      {/* //$ BLOCK:11 MASTER */}
                      <th>{pageName}.B11:</th>

                      {/* //$ BLOCK:15 MASTER */}
                      <th>{pageName}.B15:</th>
                    </tr>
                  </thead>

                  <thead>
                    <tr>
                      {/* //@ X3 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[1][2], mac)}>
                        {pageMaster[1][2]}
                      </th>

                      {/* //$ BLOCK:3 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][2], mac)}>
                        {pageMaster[0][2]}
                      </th>

                      {/* //$ BLOCK:7 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][6], mac)}>
                        {pageMaster[0][6]}
                      </th>

                      {/* //$ BLOCK:11 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][10], mac)}>
                        {pageMaster[0][10]}
                      </th>

                      {/* //$ BLOCK:15 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][14], mac)}>
                        {pageMaster[0][14]}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 9 */}
                      <td className={isUsableCss(pageMatrix[0][2][0], mac)}>
                        {pageMatrix[0][2][0]}
                      </td>

                      {/* //! DATA 25 */}
                      <td className={isUsableCss(pageMatrix[1][2][0], mac)}>
                        {pageMatrix[1][2][0]}
                      </td>

                      {/* //! DATA 41 */}
                      <td className={isUsableCss(pageMatrix[2][2][0], mac)}>
                        {pageMatrix[2][2][0]}
                      </td>

                      {/* //! DATA 57 */}
                      <td className={isUsableCss(pageMatrix[3][2][0], mac)}>
                        {pageMatrix[3][2][0]}
                      </td>
                    </tr>

                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 10 */}
                      <td className={isUsableCss(pageMatrix[0][2][1], mac)}>
                        {pageMatrix[0][2][1]}
                      </td>

                      {/* //! DATA 26 */}
                      <td className={isUsableCss(pageMatrix[1][2][1], mac)}>
                        {pageMatrix[1][2][1]}
                      </td>

                      {/* //! DATA 42 */}
                      <td className={isUsableCss(pageMatrix[2][2][1], mac)}>
                        {pageMatrix[2][2][1]}
                      </td>

                      {/* //! DATA 58 */}
                      <td className={isUsableCss(pageMatrix[3][2][1], mac)}>
                        {pageMatrix[3][2][1]}
                      </td>
                    </tr>

                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 11 */}
                      <td className={isUsableCss(pageMatrix[0][2][2], mac)}>
                        {pageMatrix[0][2][2]}
                      </td>

                      {/* //! DATA 27 */}
                      <td className={isUsableCss(pageMatrix[1][2][2], mac)}>
                        {pageMatrix[1][2][2]}
                      </td>

                      {/* //! DATA 43 */}
                      <td className={isUsableCss(pageMatrix[2][2][2], mac)}>
                        {pageMatrix[2][2][2]}
                      </td>

                      {/* //! DATA 59 */}
                      <td className={isUsableCss(pageMatrix[3][2][2], mac)}>
                        {pageMatrix[3][2][2]}
                      </td>
                    </tr>

                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 12 */}
                      <td className={isUsableCss(pageMatrix[0][2][3], mac)}>
                        {pageMatrix[0][2][3]}
                      </td>

                      {/* //! DATA 28 */}
                      <td className={isUsableCss(pageMatrix[1][2][3], mac)}>
                        {pageMatrix[1][2][3]}
                      </td>

                      {/* //! DATA 44 */}
                      <td className={isUsableCss(pageMatrix[2][2][3], mac)}>
                        {pageMatrix[2][2][3]}
                      </td>

                      {/* //! DATA 60 */}
                      <td className={isUsableCss(pageMatrix[3][2][3], mac)}>
                        {pageMatrix[3][2][3]}
                      </td>
                    </tr>
                  </tbody>

                  <thead>
                    <tr>
                      {/* //@ X4 MASTER */}
                      <th>{pageName}.X4:</th>

                      {/* //$ BLOCK:4 MASTER */}
                      <th>{pageName}.B4:</th>

                      {/* //$ BLOCK:8 MASTER */}
                      <th>{pageName}.B8:</th>

                      {/* //$ BLOCK:12 MASTER */}
                      <th>{pageName}.B12:</th>

                      {/* //$ BLOCK:16 MASTER */}
                      <th>{pageName}.B16:</th>
                    </tr>
                  </thead>

                  <thead>
                    <tr>
                      {/* //@ X4 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[1][3], mac)}>
                        {pageMaster[1][3]}
                      </th>

                      {/* //$ BLOCK:4 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][3], mac)}>
                        {pageMaster[0][3]}
                      </th>

                      {/* //$ BLOCK:8 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][7], mac)}>
                        {pageMaster[0][7]}
                      </th>

                      {/* //$ BLOCK:12 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][11], mac)}>
                        {pageMaster[0][11]}
                      </th>

                      {/* //$ BLOCK:16 MASTER */}
                      <th className={isUsableCssMaster(pageMaster[0][15], mac)}>
                        {pageMaster[0][15]}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 13 */}
                      <td className={isUsableCss(pageMatrix[0][3][0], mac)}>
                        {pageMatrix[0][3][0]}
                      </td>

                      {/* //! DATA 29 */}
                      <td className={isUsableCss(pageMatrix[1][3][0], mac)}>
                        {pageMatrix[1][3][0]}
                      </td>

                      {/* //! DATA 45 */}
                      <td className={isUsableCss(pageMatrix[2][3][0], mac)}>
                        {pageMatrix[2][3][0]}
                      </td>

                      {/* //! DATA 61 */}
                      <td className={isUsableCss(pageMatrix[3][3][0], mac)}>
                        {pageMatrix[3][3][0]}
                      </td>
                    </tr>

                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 14 */}
                      <td className={isUsableCss(pageMatrix[0][3][1], mac)}>
                        {pageMatrix[0][3][1]}
                      </td>

                      {/* //! DATA 30 */}
                      <td className={isUsableCss(pageMatrix[1][3][1], mac)}>
                        {pageMatrix[1][3][1]}
                      </td>

                      {/* //! DATA 46 */}
                      <td className={isUsableCss(pageMatrix[2][3][1], mac)}>
                        {pageMatrix[2][3][1]}
                      </td>

                      {/* //! DATA 62 */}
                      <td className={isUsableCss(pageMatrix[3][3][1], mac)}>
                        {pageMatrix[3][3][1]}
                      </td>
                    </tr>

                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 15 */}
                      <td className={isUsableCss(pageMatrix[0][3][2], mac)}>
                        {pageMatrix[0][3][2]}
                      </td>

                      {/* //! DATA 31 */}
                      <td className={isUsableCss(pageMatrix[1][3][2], mac)}>
                        {pageMatrix[1][3][2]}
                      </td>

                      {/* //! DATA 47 */}
                      <td className={isUsableCss(pageMatrix[2][3][2], mac)}>
                        {pageMatrix[2][3][2]}
                      </td>

                      {/* //! DATA 63 */}
                      <td className={isUsableCss(pageMatrix[3][3][2], mac)}>
                        {pageMatrix[3][3][2]}
                      </td>
                    </tr>

                    <tr>
                      {/* //! Empty Cell */}
                      <td></td>

                      {/* //! DATA 16 */}
                      <td className={isUsableCss(pageMatrix[0][3][3], mac)}>
                        {pageMatrix[0][3][3]}
                      </td>

                      {/* //! DATA 32 */}
                      <td className={isUsableCss(pageMatrix[1][3][3], mac)}>
                        {pageMatrix[1][3][3]}
                      </td>

                      {/* //! DATA 48 */}
                      <td className={isUsableCss(pageMatrix[2][3][3], mac)}>
                        {pageMatrix[2][3][3]}
                      </td>

                      {/* //! DATA 64 */}
                      <td className={isUsableCss(pageMatrix[3][3][3], mac)}>
                        {pageMatrix[3][3][3]}
                      </td>
                    </tr>
                  </tbody>

                  <thead>
                    <tr>
                      {/* //@ 4 PAGE && 16 PAGE MASTER */}
                      <th></th>

                      <th colSpan={2}>{pageName.slice(0, 2)}:</th>

                      <th colSpan={2}>{pageName.slice(0, 1)}:</th>
                    </tr>
                    <tr>
                      {/* //@ 4 PAGE && 16 PAGE MASTER */}
                      <th></th>

                      <th
                        colSpan={2}
                        className={isUsableCssMaster(pageMaster[4][0], mac)}
                      >
                        {pageMaster[4][0]}
                      </th>

                      <th
                        colSpan={2}
                        className={isUsableCssMaster(pageMaster[5][0], mac)}
                      >
                        {pageMaster[5][0]}
                      </th>
                    </tr>
                  </thead>
                </Table>
                <br></br>
              </Container>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default DataPreview;
