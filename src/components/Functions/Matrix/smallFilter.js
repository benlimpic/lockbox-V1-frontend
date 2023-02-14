export const smallFilter = (array) => {
  let master = [];
  let c1 = [];
  let c2 = [];
  let c3 = [];
  let c4 = [];
  let c5 = [];
  let c6 = [];

  for (let i = 0; i < array.length; i++) {
    c1.push(array[i][0]);
    c2.push(array[i][1]);
    c3.push(array[i][2]);
    c4.push(array[i][3]);
    c5.push(array[i][4]);
    c6.push(array[i][5]);
  }
  master.push(c1, c2, c3, c4, c5, c6);
  return master;
};

export default smallFilter;
