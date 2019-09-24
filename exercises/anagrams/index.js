// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanUpString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase();
}

function prepareMap(str) {
  const chars = {};

  for (let char of str) {
    chars[char] = chars[char] || 1;
  }

  return chars;
}

// // Solution 1
// function anagrams(stringA, stringB) {
//   const charMapStringA = prepareMap(cleanUpString(stringA));
//   const charMapStringB = prepareMap(cleanUpString(stringB));

//   console.log(charMapStringA, charMapStringB);

//   if (
//     Object.keys(charMapStringA).length !== Object.keys(charMapStringB).length
//   ) {
//     return false;
//   }

//   for (let char in charMapStringA) {
//     if (charMapStringA[char] !== charMapStringB[char]) {
//       return false;
//     }
//   }

//   return true;
// }

function prepareSortedString(string) {
  return string
    .split('')
    .sort()
    .join();
}

// Solution 2
function anagrams(stringA, stringB) {
  return (
    prepareSortedString(cleanUpString(stringA)) ===
    prepareSortedString(cleanUpString(stringB))
  );
}

module.exports = anagrams;
