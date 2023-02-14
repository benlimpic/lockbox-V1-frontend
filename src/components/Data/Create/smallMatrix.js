import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import smallFilter from "../../Functions/Matrix/smallFilter";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

export const SmallMatrixFormula = ({
  tmk,
  setSmallMatrix,
  smallMatrix,
  setSmFilter,
  showKBA,
}) => {
  let matrix = [];

  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < tmk.length; j++) {
      //! TMK Processing
      i === 0
        ? tmk[j] < 8
          ? row.push(tmk[j] + 2)
          : row.push(tmk[j] - 8)
        : //# Small Matrix Processing
        matrix[i - 1][j] < 8
        ? row.push(matrix[i - 1][j] + 2)
        : row.push(matrix[i - 1][j] - 8);
    }
    matrix.push(row);
  }

  useEffect(() => {
    setSmallMatrix(matrix);
  }, [tmk]);

  useEffect(() => {
    setSmFilter(smallFilter(smallMatrix));
  }, [smallMatrix]);

  return (
    <>
    {showKBA ? (
      <div>
      <Form.Label>KBA:</Form.Label>
      <Container className="App" style={{backgroundColor: "#F2F0F3", paddingTop: "15px", borderRadius: ".75rem"}}>
        <Table striped variant="dark" responsive >
          <thead>
          </thead>
          <tbody>
            {matrix.map((row, index) => {
              return (
                <tr key={index}>
                  {row.map((item, index) => {
                    return <td style={{textAlign: "center"}} key={index}>{item}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>

      </Container>
    </div>
    ) : (
      <div>
        <Form.Label>KBA:</Form.Label>
        <Container className="App" style={{backgroundColor: "#F2F0F3", paddingTop: "15px", paddingBottom: "15px", borderRadius: ".75rem"}}>
        </Container>
      </div>
    )}
    </>
  );
};
export default SmallMatrixFormula;
