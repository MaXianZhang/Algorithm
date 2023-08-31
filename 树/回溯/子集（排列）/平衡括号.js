/**
 * @param { 排列组合 }
 * @return {   }
  */
const lg = console.log


function generate_valid_parentheses_mine(num) {
  const arrs = [['(', 1]]
  const result = []

  for (let i = 0; i < num * 2 - 1; i++) {
    lg(arrs)
    lg()
    let n = arrs.length
    for (let j = 0; j < n; j++) {
      let curMessage = arrs.shift()
      let [str, count] = curMessage
      if (count < num) {
        arrs.push([str + '(', count + 1])
      }
      if (count > 0) {
        arrs.push([str + ')', count - 1])
      }
    }
  }
  // TODO: Write your code here
  return result;
};


console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses_mine(2)}`)
console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses_mine(3)}`)


class ParenthesesString {
  constructor(str, openCount, closeCount) {
    this.str = str;
    this.openCount = openCount;
    this.closeCount = closeCount;
  }
}


function generate_valid_parentheses(num) {
  let result = [],
    queue = []
  queue.push(new ParenthesesString('', 0, 0));
  while (queue.length > 0) {
    const ps = queue.shift();
    // if we've reached the maximum number of open and close parentheses, add to the result
    if (ps.openCount === num && ps.closeCount === num) {
      result.push(ps.str);
    } else {
      if (ps.openCount < num) { // if we can add an open parentheses, add it
        queue.push(new ParenthesesString(`${ps.str}(`, ps.openCount + 1, ps.closeCount));
      }
      if (ps.openCount > ps.closeCount) { // if we can add a close parentheses, add it
        queue.push(new ParenthesesString(`${ps.str})`, ps.openCount, ps.closeCount + 1));
      }
    }
  }
  return result;
}


console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(2)}`);
console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(3)}`);