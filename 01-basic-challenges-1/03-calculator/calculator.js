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
      if (num2 == 0) throw new Error("Divisio by zero ");
      return (result = num1 / num2);
    default:
      throw new Error("Invalid Operator");
  }
}

module.exports = calculator;
