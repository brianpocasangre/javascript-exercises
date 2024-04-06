const reverseString = function (string) {
  let stringArray = string.split('');
  let arrayReversed = stringArray.reverse();
  let newString = arrayReversed.join('');
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
