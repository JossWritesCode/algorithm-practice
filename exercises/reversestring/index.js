// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // save an output string
  let output = "";
  // loop over the string backward
  for (let i = str.length - 1; i >= 0; i--) {
    //add each char to output
    output += str[i];
  }
  console.log(output);
  return output;

  // return output
}

module.exports = reverse;
