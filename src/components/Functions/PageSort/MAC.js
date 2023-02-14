export const MAC = (num) => {
  if (num === 10) {
    return "0/9";
  } else if (num === 9) {
    return "0/8";
  } else if (num === 8) {
    return "0/7";
  } else if (num === 7) {
    return "0/6";
  } else if (num === 6) {
    return "0/5";
  } else if (num === 5) {
    return "0/4";
  } else {
    return "0/7";
  }
};

export default MAC;
