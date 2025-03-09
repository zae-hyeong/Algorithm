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
  const N = +inputLines[0];
  const [, ...inputs] = inputLines.map((v) => v.split(" ").map((v) => +v));

  let maxCost = 0;
  let duration, cost;
  (function _helper(day, totalCost) {
    if (day >= N) {
      maxCost = Math.max(maxCost, totalCost);
      return;
    }
    [duration, cost] = inputs[day];

    if (day + duration <= N) _helper(day + duration, totalCost + cost);
    _helper(day + 1, totalCost);
  }(0, 0))

  console.log(maxCost);
}

// solution(["7", "3 10", "5 20", "1 10", "1 20", "2 15", "4 40", "2 200"]); //45

// solution([
//   "10",
//   "1 1",
//   "1 2",
//   "1 3",
//   "1 4",
//   "1 5",
//   "1 6",
//   "1 7",
//   "1 8",
//   "1 9",
//   "1 10",
// ]); // 55

// solution([
//   "10",
//   "5 10",
//   "5 9",
//   "5 8",
//   "5 7",
//   "5 6",
//   "5 10",
//   "5 9",
//   "5 8",
//   "5 7",
//   "5 6",
// ]); // 20

solution([
  "10",
  "5 50",
  "4 40",
  "3 30",
  "2 20",
  "1 10",
  "1 10",
  "2 20",
  "3 30",
  "4 40",
  "5 50",
]); // 90
