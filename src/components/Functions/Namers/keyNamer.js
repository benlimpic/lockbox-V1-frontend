export const keyNamer = (array) => {
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
  let keyNames = [];
  for (let i = 0; i < array.length / 64; i++) {
    for (let j = 0; j < 64; j++) {
      keyNames.push(`${pageNames[i]} ${j + 1}`);
    }
  }
  return keyNames;
};

export default keyNamer;
