function countOccurrences(str, char) {
  let count = 0;
  for (let c of str) {
    if (c === char) {
      count++;
    }
  }
  return count;
  //Functional
  //   return [...str].filter((c) => c == char).length;
}

module.exports = countOccurrences;
