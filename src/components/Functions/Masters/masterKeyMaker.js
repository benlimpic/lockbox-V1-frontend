export const masterKeyMaker = (smFilter, sop, tmk) => {
  let MK = [];
  let BM = [];
  let XM = [];
  let YM = [];
  let PM = [];
  let FPM = [];
  let SPM = [];

  for (let i = 0; i < 4 ** sop.length; i++) {
    let b = "";
    let c = "";
    let d = "";
    let e = "";
    let f = "";

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

    if (i % 4 === 0) {
      let row = [];
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
      XM.push(row);
    }

    if (i % 64 === 0 || 20 || 40 || 60) {
      let row = [];
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
      XM.push(row);
    }

    if (i % 16 === 0) {
      let row = [];
      for (let j = 0; j < sop.length; j++) {
        if (sop[j] === "A") {
          row.push(tmk[sop.indexOf("A")]);
        } else if (sop[j] === "B") {
          row.push(tmk[sop.indexOf("B")]);
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
      YM.push(row);
    }

    if (i % 64 === 0) {
      let row = [];
      for (let j = 0; j < sop.length; j++) {
        if (sop[j] === "A") {
          row.push(tmk[sop.indexOf("A")]);
        } else if (sop[j] === "B") {
          row.push(tmk[sop.indexOf("B")]);
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
      PM.push(row);
    }

    if (i % 256 === 0) {
      let row = [];
      for (let j = 0; j < sop.length; j++) {
        if (sop[j] === "A") {
          row.push(tmk[sop.indexOf("A")]);
        } else if (sop[j] === "B") {
          row.push(tmk[sop.indexOf("B")]);
        } else if (sop[j] === "C") {
          row.push(tmk[sop.indexOf("C")]);
        } else if (sop[j] === "D") {
          row.push(tmk[sop.indexOf("D")]);
        } else if (sop[j] === "E") {
          row.push(smFilter[sop.indexOf("E")][e]);
        } else if (sop[j] === "F") {
          row.push(smFilter[sop.indexOf("F")][f]);
        }
      }
      FPM.push(row);
    }

    if (i % 1024 === 0) {
      let row = [];
      for (let j = 0; j < sop.length; j++) {
        if (sop[j] === "A") {
          row.push(tmk[sop.indexOf("A")]);
        } else if (sop[j] === "B") {
          row.push(tmk[sop.indexOf("B")]);
        } else if (sop[j] === "C") {
          row.push(tmk[sop.indexOf("C")]);
        } else if (sop[j] === "D") {
          row.push(tmk[sop.indexOf("D")]);
        } else if (sop[j] === "E") {
          row.push(tmk[sop.indexOf("E")]);
        } else if (sop[j] === "F") {
          row.push(smFilter[sop.indexOf("F")][f]);
        }
      }
      SPM.push(row);
    }

    MK.push(BM, XM, YM, PM, FPM, SPM);
  }

  return BM;
};

export default masterKeyMaker;
