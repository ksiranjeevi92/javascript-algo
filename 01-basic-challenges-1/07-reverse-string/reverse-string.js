function reverseString(input) {
  let reversed = "";
  //   for (let char of input) {
  //     reversed = char + reversed;
  //   }
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  return reversed;
}

module.exports = reverseString;
