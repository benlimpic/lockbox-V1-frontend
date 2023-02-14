export const isUsable = (array, num) => {
  let isUsableList = [];

  array.forEach((item) => {
    let problem = [];
    for (let i = 0; i + 1 < item.length; i++) {
      let j = i + 1;
      if (item[i] >= item[j]) {
        item[i] - item[j] < num ? problem.push(true) : problem.push(false);
      } else {
        item[j] - item[i] < num ? problem.push(true) : problem.push(false);
      }
    }
    let usableRes = true;
    problem.includes(false) ? (usableRes = false) : (usableRes = true);

    isUsableList.push(usableRes);
  });
  return isUsableList;
};

export default isUsable;
