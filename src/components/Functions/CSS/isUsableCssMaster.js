export const isUsableCssMaster = (array, num) => {
  let usable = null;
  let problem = [];
  for (let i = 0; i + 1 < 6; i++) {
    let j = i + 1;
    if (array[i] >= array[j]) {
      array[i] - array[j] < num ? problem.push(true) : problem.push(false);
    } else {
      array[j] - array[i] < num ? problem.push(true) : problem.push(false);
    }
    problem.includes(false) ? (usable = false) : (usable = true);
  }

  if (usable === true) {
    return "usableMaster";
  } else {
    return "unusableMaster";
  }
};

export default isUsableCssMaster;
