function calculator(num1, num2, operator) {
  let result = null;
  switch (operator) {
    case "+":
      return (result = num1 + num2);
    case "-":
      return (result = num1 - num2);
    case "*":
      return (result = num1 * num2);
    case "/":
      return (result = num1 / num2);
    default:
      throw new Error();
  }
}

module.exports = calculator;
