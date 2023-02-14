import Table from "react-bootstrap/Table";

export const SOP = ({ sop }) => {
  return (
    <div>
      <h1>SOP:</h1>
      <div>
        <Table striped hover variant="dark" size="sm">
          <thead>
            <tr>
              {sop.map((item, index) => {
                return <th key={index}>{item}</th>;
              })}
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  );
};

export default SOP;
