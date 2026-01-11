function removeDuplicates(input) {
  let seen = new Set();
  let unique = [];
  for (let val of input) {
    if (!seen.has(val)) {
      unique.push(val);
      seen.add(val);
    }
  }
  return unique;
}

module.exports = removeDuplicates;
