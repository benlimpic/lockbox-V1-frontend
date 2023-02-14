export const masterSort = (array, num) => {
  let masterArray = [];
  let pageBlocks = [];
  let pageXM = [];
  let pageYM = [];
  let pagePM = [];
  let pageFPM = [];
  let pageSPM = [];
  let x = Number(num);

  pageBlocks = array[0].slice(x * 16, (x + 1) * 16);
  pageXM = array[1].slice(x * 4, (x + 1) * 4);
  pageYM = array[2].slice(x * 4, (x + 1) * 4);
  pagePM = array[3].slice(x, x + 1);
  pageFPM = array[4].slice((x - (x % 4)) / 4, (x - (x % 4)) / 4 + 1);
  pageSPM = array[5].slice((x - (x % 16)) / 16, (x - (x % 16)) / 16 + 1);

  masterArray.push(pageBlocks, pageXM, pageYM, pagePM, pageFPM, pageSPM);

  // console.log("MasterArray", masterArray)
  return masterArray;
};

export default masterSort;
