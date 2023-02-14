import Table from "react-bootstrap/Table";

const TMK = ({ tmk }) => {
  return (
    <div>
      <h1>TMK:</h1>
      <div>
        <Table striped hover variant="dark" size="sm">
          <thead>
            <tr>
              {tmk.map((item, index) => {
                return <th key={index}>{item}</th>;
              })}
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  );
};

export default TMK;
