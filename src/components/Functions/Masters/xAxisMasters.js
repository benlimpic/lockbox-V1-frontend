export const xMasters = (smFilter, sop, tmk) => {
  let XM = [];

  let b = "";
  let d = "";
  let e = "";
  let f = "";

  for (let i = 0; i < 4 ** sop.length; i++) {
    let row = [];

    if (i % 4 === 0) {
      b = (i / 4) % 4;
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
        row.push(tmk[sop.indexOf("A")]);
      } else if (sop[j] === "B") {
        row.push(smFilter[sop.indexOf("B")][b]);
      } else if (sop[j] === "C") {
        row.push(tmk[sop.indexOf("C")]);
      } else if (sop[j] === "D") {
        row.push(smFilter[sop.indexOf("D")][d]);
      } else if (sop[j] === "E") {
        row.push(smFilter[sop.indexOf("E")][e]);
      } else if (sop[j] === "F") {
        row.push(smFilter[sop.indexOf("F")][f]);
      }
    }
    if (i % 64 === 0) {
      XM.push(row);
    } else if (i % 64 === 20) {
      XM.push(row);
    } else if (i % 64 === 40) {
      XM.push(row);
    } else if (i % 64 === 60) {
      XM.push(row);
    }
  }
  return XM;
};

export default xMasters;
