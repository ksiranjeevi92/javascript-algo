function isPalindrome(str) {
  let clean = [];
  let left = 0;

  for (let char of str) {
    if (/[a-z0-9]/i.test(char)) {
      clean.push(char.toLowerCase());
    }
  }

  for (let i = 0; i < clean.length / 2; i++) {
    if (clean[i] !== clean[clean.length - 1 - i]) {
      return false;
    }
  }

  //   let right = str.length - 1;
  //   while (left < right) {
  //     if (str[left] !== str[right]) {
  //       return false;
  //     }
  //     left++;
  //     right--;
  //   }
  return true;
}

module.exports = isPalindrome;
