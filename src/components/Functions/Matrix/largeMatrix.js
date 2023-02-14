export const largeMatrix = (array, letters) => {
  let LgMatrix = [];
  let smFilter = array;
  let sop = letters;

  let a = "";
  let b = "";
  let c = "";
  let d = "";
  let e = "";
  let f = "";

  for (let i = 0; i < 4 ** sop.length; i++) {
    let row = [];
    if (i % 1 === 0) {
      a = i % 4;
    }
    if (i % 4 === 0) {
      b = (i / 4) % 4;
    }
    if (i % 16 === 0) {
      c = (i / 16) % 4;
    }
    if (i % 64 === 0) {
      d = (i / 64) % 4;
    }
    if (i % 256 === 0) {
      e = (i / 256) % 4;
    }
    if (i % 1024 === 0) {
      f = (i / 1024) % 4;
    }

    for (let j = 0; j < sop.length; j++) {
      if (sop[j] === "A") {
        row.push(smFilter[sop.indexOf("A")][a]);
      } else if (sop[j] === "B") {
        row.push(smFilter[sop.indexOf("B")][b]);
      } else if (sop[j] === "C") {
        row.push(smFilter[sop.indexOf("C")][c]);
      } else if (sop[j] === "D") {
        row.push(smFilter[sop.indexOf("D")][d]);
      } else if (sop[j] === "E") {
        row.push(smFilter[sop.indexOf("E")][e]);
      } else if (sop[j] === "F") {
        row.push(smFilter[sop.indexOf("F")][f]);
      }
    }
    LgMatrix.push(row);
  }
  return LgMatrix;
};

export default largeMatrix;
