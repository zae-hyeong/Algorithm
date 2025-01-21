let givenInput = [];
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline
  .on("line", function (line) {
    givenInput.push(line.trim());
  })
  .on("close", function () {
    solution(givenInput);
    process.exit();
  });

function recursion(s, left, right, depth) {
  if (left >= right) return [1, depth];
  else if (s[left] != s[right]) return [0, depth];
  else return recursion(s, left + 1, right - 1, depth + 1);
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1, 1);
}

function solution(inputLines) {
  const [, ...inputs] = inputLines;
  
  for(const line of inputs) {
    console.log(isPalindrome(line).join(' '));
  }
}
