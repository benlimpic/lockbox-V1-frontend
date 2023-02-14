const pageOptions = (array) => {
  let names = [];

  if (array !== undefined) {
    if (array.length === 4) {
      for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 1; j++) {
          for (let k = 0; k < 4; k++) {
            let name = [];
            let letters = ["A", "B", "C", "D"];
            name.push(letters[i], letters[j], letters[k]);
            names.push(name.join(""));
          }
        }
      }
      return names;
    } else if (array.length === 5) {
      for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 4; j++) {
          for (let k = 0; k < 4; k++) {
            let name = [];
            let letters = ["A", "B", "C", "D"];
            name.push(letters[i], letters[j], letters[k]);
            names.push(name.join(""));
          }
        }
      }
      return names;
    } else if (array.length === 6) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          for (let k = 0; k < 4; k++) {
            let name = [];
            let letters = ["A", "B", "C", "D"];
            name.push(letters[i], letters[j], letters[k]);
            names.push(name.join(""));
          }
        }
      }
      return names;
    } else {
      return (names = ["AAA"]);
    }
  } else {
    return (names = ["AAA"]);
  }
};

export default pageOptions;
