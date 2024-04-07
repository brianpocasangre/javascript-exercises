const leapYears = function (year) {
  if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
// broke down the solution in chatgpt as i was writting out
// if statements and got stuck on the last errors

// Do not edit below this line
module.exports = leapYears;
