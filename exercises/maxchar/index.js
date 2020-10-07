// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hashMap = {};

  for (let char of str) {
    hashMap[char] = hashMap[char] + 1 || 1;
  }

  let max = 0;
  let biggestChar;
  for (let char in hashMap) {
    if (hashMap[char] > max) {
      max = hashMap[char];
      biggestChar = char;
    }
  }
  console.log(hashMap, 'hashMap');
  return biggestChar;
}

module.exports = maxChar;
