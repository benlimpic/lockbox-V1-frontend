import { useState, useEffect, useCallback } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

export const ShowKeying = (props) => {
  const { keyCutArray, fetchTMK } = props;

  const [bottomPin, setBottomPin] = useState([]);
  const [masterWafer, setMasterWafer] = useState([]);

  const keying = useCallback((key, tmk) => {
  
    if (key.length > 0) {

      let bottom = [];
      let master = [];

      for (let i = 0; i < key.length; i++) {

        if (key[i] > tmk[i]) {
          bottom.push(tmk[i]);
          master.push(key[i] - tmk[i]);
        }
        else if (key[i] < tmk[i]) {
          bottom.push(key[i]);
          master.push(tmk[i] - key[i]);
        }
        else if (key[i] === tmk[i]) {
          bottom.push(key[i]);
          master.push("X");
        }
      }
      setBottomPin(bottom);
      setMasterWafer(master);
    }
  }, [] )



  useEffect(() => {
    keying(keyCutArray, fetchTMK);
  }, [keyCutArray, fetchTMK, keying]);
  
  // console.log("fetchTMK", fetchTMK)
  // console.log("keyCutArray", keyCutArray);
  // console.log("bottomPin", bottomPin);
  // console.log("masterWafer", masterWafer);



  return (
    <>
    <Container style={{backgroundColor: "#F2F0F3", padding: "15px", borderRadius: ".75rem"}}>
    <Table  responsive bordered hover style={{margin: "0px"}}>
      <tbody>
        <tr>
          <th className="table-info" style={{width: "25%"}}>TMK:</th>
          {fetchTMK.map((item, index) => {
            return <td className="table-info" style={{textAlign: "center"}}key={index}>{item}</td>;
          })}
        </tr>
        <tr>
          <th className="table-primary" style={{width: "25%"}}>Key:</th>
          {keyCutArray.map((item, index) => {
            return <td className="table-primary" style={{textAlign: "center"}} key={index}>{item}</td>;
          })}
        </tr>
        <tr>
          <th className="table-warning" style={{width: "25%"}}>Bottom:</th>
          {bottomPin.map((item, index) => {
            return <td className="table-warning" style={{textAlign: "center"}} key={index}>{item}</td>;
          })}
        </tr>
        <tr>
          <th className="table-danger" style={{width: "25%"}}>Master:</th>
          {masterWafer.map((item, index) => {
            return <td className="table-danger" style={{textAlign: "center"}} key={index}>{item}</td>;
          })}
        </tr>
      </tbody>
    </Table>
    </Container>
    </>

  );
};

export default ShowKeying;
