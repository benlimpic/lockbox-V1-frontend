export const objectify = (array, namer, maxCut, usable, projectId) => {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let key = {
      project_id: projectId,
      reference: namer[i],

      page: namer[i].slice(0, 3),
      cut: array[i].join(""),
      MAC: maxCut,
      stamp: "",
      description: "",
      details: "",
      notes: "",

      usable: usable[i],
      inUse: false,
      reserved: false,
      archived: false,
      status: "",

      techName: "",
      techEmail: "",
      techPhone: "",
      oDate: "",

      assigneeName: "",
      assigneePhone: "",
      assigneeEmail: "",
      assignmentDate: "",

    };
    obj[i] = key;
  }

  return obj;
};

export default objectify;
