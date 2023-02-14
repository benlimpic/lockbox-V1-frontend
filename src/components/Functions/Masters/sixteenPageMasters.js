export const sixteenPageMasters = (smFilter, sop, tmk) => {
  let SPM = [];

  let f = "";

  for (let i = 0; i < 4 ** sop.length; i++) {
    let row = [];

    if (i % 1024 === 0) {
      f = (i / 1024) % 4;
    }

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
    if (i % 1024 === 0) {
      SPM.push(row);
    }
  }
  return SPM;
};
export default sixteenPageMasters;
