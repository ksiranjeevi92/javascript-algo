function titleCase(input) {
  // let words = input.split(" ");
  // for (let i = 0; i < words.length; i++) {
  //   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  // }
  // return words.join(" ");
  let result = input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] == " ") {
      result += input[i].toUpperCase();
    } else {
      result += input[i];
    }
  }
  return result;
}

module.exports = titleCase;
