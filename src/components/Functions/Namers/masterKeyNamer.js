export const masterKeyNamer = (array) => {
  let masterKeyNames = [];
  let pageNames = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        let name = [];
        let letters = ["A", "B", "C", "D"];
        name.push(letters[i], letters[j], letters[k]);
        pageNames.push(name.join(""));
      }
    }
  }

  let blockNames = [];
  for (let i = 0; i < array[0].length / 16; i++) {
    for (let j = 0; j < 16; j++) {
      blockNames.push(`${pageNames[i]}.B${j + 1}`);
    }
  }

  let xNames = [];
  for (let i = 0; i < array[1].length / 4; i++) {
    for (let j = 0; j < 4; j++) {
      xNames.push(`${pageNames[i]}.X${j + 1}`);
    }
  }

  let yNames = [];
  for (let i = 0; i < array[2].length / 4; i++) {
    for (let j = 0; j < 4; j++) {
      yNames.push(`${pageNames[i]}.Y${j + 1}`);
    }
  }

  let pgNames = [];
  for (let i = 0; i < array[3].length; i++) {
    pgNames.push(`${pageNames[i]}`);
  }

  let fpmNames = [];
  for (let i = 0; i < array[4].length; i++) {
    fpmNames.push(`${pageNames[i * 4].slice(0, 2)}`);
  }

  let spmNames = [];
  for (let i = 0; i < array[5].length; i++) {
    spmNames.push(`${pageNames[i * 16].slice(0, 1)}`);
  }

  masterKeyNames.push(blockNames, xNames, yNames, pgNames, fpmNames, spmNames);

  return masterKeyNames;
};

export default masterKeyNamer;
