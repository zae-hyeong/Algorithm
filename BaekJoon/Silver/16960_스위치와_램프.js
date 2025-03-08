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

/**
 * @param {Array<string>} inputLines
 */
function solution(inputLines) {
  const [N, M] = inputLines[0].split(" ").map((v) => +v);
  const [, ...inputs] = inputLines.map((v) => v.split(" ").map((v) => +v));
  inputs.pop();

  const isTurnOn = [true];
  for (let i = 1; i <= M; i++) {
    isTurnOn[i] = false;
  }

  let len = 0;
  for(const input of inputs) {
    len = input[0];
    for (let i = 1; i <= len; i++) {
      isTurnOn[input[i]] = true;
    }
  }

  console.log(isTurnOn.reduce((a, v) => a && v) ? 1 : 0);
}

solution(["4 5", "3 1 3 5", "1 2", "3 3 4 5", "1 1"]); // 1
solution(["4 5", "2 1 3", "1 2", "2 3 4", "2 3 5"]); // 0
solution(["10 1", "1 1", "0", "0", "0", "0", "0", "0", "0", "0", "1 1"]); // 1
