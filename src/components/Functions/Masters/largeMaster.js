import blockMasters from "./blockMasters";
import xMasters from "./xAxisMasters.js";
import yMasters from "./yAxisMasters.js";
import pageMasters from "./pageMasters.js";
import fourPageMasters from "./fourPageMasters.js";
import sixteenPageMasters from "./sixteenPageMasters.js";

export const LargeMaster = (smFilter, sop, tmk) => {
  let LgMaster = [];

  LgMaster.push(blockMasters(smFilter, sop, tmk));
  LgMaster.push(xMasters(smFilter, sop, tmk));
  LgMaster.push(yMasters(smFilter, sop, tmk));
  LgMaster.push(pageMasters(smFilter, sop, tmk));
  LgMaster.push(fourPageMasters(smFilter, sop, tmk));
  LgMaster.push(sixteenPageMasters(smFilter, sop, tmk));

  return LgMaster;
};
export default LargeMaster;
