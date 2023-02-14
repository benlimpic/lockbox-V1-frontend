export const unMAC = (props) => {
  if (JSON.parse(props) === "0/9") {
    return 10;
  }
  if (JSON.parse(props) === "0/8") {
    return 9;
  }
  if (JSON.parse(props) === "0/7") {
    return 8;
  }
  if (JSON.parse(props) === "0/6") {
    return 7;
  }
  if (JSON.parse(props) === "0/5") {
    return 6;
  }
  if (JSON.parse(props) === "0/4") {
    return 5;
  }
};

export default unMAC;
