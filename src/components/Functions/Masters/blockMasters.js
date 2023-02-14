export const blockMasters = (smFilter, sop, tmk) => {
  let BM = [];

  let b = "";
  let c = "";
  let d = "";
  let e = "";
  let f = "";

  for (let i = 0; i < 4 ** sop.length; i++) {
    let row = [];

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
        row.push(tmk[sop.indexOf("A")]);
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
    if (i % 4 === 0) {
      BM.push(row);
    }
  }
  return BM;
};

export default blockMasters;
