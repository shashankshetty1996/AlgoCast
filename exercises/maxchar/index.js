// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function prepareMap(str) {
  const chars = {};

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  return chars;
}

// Solution 1
function maxChar(str) {
  const strMap = prepareMap(str);
  let max = 0;
  let maxChar = '';

  for (let char in strMap) {
    if (strMap[char] > max) {
      max = strMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
