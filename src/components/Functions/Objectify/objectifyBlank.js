export const objectify = (array, namer, maxCut, usable, projectId) => {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let key = {
      id: i,
      reference: namer[i],
      page: namer[i].slice(0, 3),
      cut: array[i].join(""),
      MAC: maxCut,
      usable: usable[i]
    };
    obj[i] = key;
  }

  return obj;
};

export default objectify;
