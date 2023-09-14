/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/
function isValidParenthesis(expression) {
  const stack = [];
  for (let char of expression) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        return false; // Invalid closing parenthesis without opening one
      }
      stack.pop();
    }
  }
  return stack.length === 0; // All parentheses matched
}
class Calculator {
  constructor(){
    this.result = 0;
  }
  add(num)
  {
    this.result += num;
  }
  subtract(num)
  {
    this.result -= num;
  }
  multiply(num)
  {
    this.result *= num;
  }
  divide(num)
  {
    if(num == 0)
      throw new Error('Error: Cannot Divide by 0');
    this.result /= num;
  }
  clear()
  {
    this.result = 0;
  }
  getResult()
  {
    return this.result;
  }
  calculate(expression)
  {
    const expressionWithoutSpaces = expression.replace(/\s+/g, '');
    // Check if the expression contains alphabetic characters
    if (/[a-zA-Z]/.test(expressionWithoutSpaces)) {
      throw new Error('Error: Expression contains alphabetic characters');
    }
    if (expressionWithoutSpaces.includes('/0')) {
      throw new Error('Error: Division by zero is not allowed');
    }
    if (!isValidParenthesis(expressionWithoutSpaces)) {
      throw new Error('Error: Invalid parenthesis');
    }
    try {
      // Use eval to evaluate the expression
      this.result = eval(expressionWithoutSpaces);
  
      // Check if the result is a valid number
      if (typeof this.result === 'number' && isFinite(this.result)) {
        return this.result;
      } else {
        throw new Error('Error: Invalid result');
      }
    } catch (error) {
      return error.message;
    }
  }
  

}

calc = new Calculator()
calc.calculate(
  '10 +   2 *    (   6 - (4 + 1) / 2) + 7'
);
console.log(calc.getResult())

module.exports = Calculator;
