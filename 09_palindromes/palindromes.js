const palindromes = function (str) {
  const alphaNumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const newString = str
    .toLowerCase()
    .split('')
    .filter(character => alphaNumeric.includes(character))
    .join('');

  const reversedString = newString.split('').reverse().join('');

  return newString === reversedString;
};
// was not able to complete challenge ---- lesson learned array methods on strings as they operate similar to an array of characters.

// Do not edit below this line
module.exports = palindromes;
