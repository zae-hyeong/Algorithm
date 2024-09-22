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

function solution(inputLines) {
  const [numOfInput, ...input] = [...inputLines];

  const stack = [];
  for (let i = 0; i < numOfInput; i++) {
    stack.length = 0;
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "(") {
        stack.push("(");
        continue;
      }
      if (stack.pop() === undefined) {
        stack.length = 1;
        break;
      }
    }
    stack.length === 0 ? console.log("YES") : console.log("NO");
  }
}
