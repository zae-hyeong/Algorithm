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

  const nums = new Array(M + 1).fill(0);
  for (const input of inputs) {
    if (input[0] === 0) {
      console.log(1);
      return;
    }
    for (let i = 1; i < input.length; i++) nums[input[i]]++;
  }

  outer: for (const input of inputs) {
    for (let i = 1; i < input.length; i++)
      if (nums[input[i]] <= 1) continue outer; // 하나라도 대체 불가능한 숫자가 있다면

    console.log(1);
    return;
  }

  console.log(0);
}

solution(["4 5", "3 1 3 5", "1 2", "3 3 4 5", "1 1"]); // 1
solution(["4 5", "2 1 3", "1 2", "2 3 4", "2 3 5"]); // 0
solution(["10 1", "1 1", "0", "0", "0", "0", "0", "0", "0", "0", "1 1"]); // 1
