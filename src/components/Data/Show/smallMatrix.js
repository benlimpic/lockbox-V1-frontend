import Table from "react-bootstrap/Table";

export const SmallMatrixFormula = ({ smMatrix }) => {
  return (
    <>
      <div 
        style={{backgroundColor: "#F2F0F3", padding: "15px", borderRadius: ".75rem"}}>
        <Table striped hover variant="dark" style={{margin: "0px"}}>
          <tbody>
            {smMatrix.map((row, index) => {
              return (
                <tr key={index}>
                  {row.map((item, index) => {
                    return <th style={{textAlign: "center"}} key={index}>{item}</th>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default SmallMatrixFormula;
