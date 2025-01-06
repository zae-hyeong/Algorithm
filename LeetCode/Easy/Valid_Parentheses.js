/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for(let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
      continue;
    }
    
    const popedChar = stack.pop();

    if (char === ')' && popedChar !== '(') return false;
    if (char === '}' && popedChar !== '{') return false;
    if (char === ']' && popedChar !== '[') return false;
  };
  return stack.length ? false : true;
};

console.log(isValid("()"));
console.log(isValid("(){}[]"));
console.log(isValid("(]"));
console.log(isValid("([{}])"));
console.log(isValid("([)]"));
console.log(isValid("(((("));