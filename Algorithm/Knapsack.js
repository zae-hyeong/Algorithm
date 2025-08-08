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
  const [N, W] = inputLines[0].split(" ").map((v) => parseInt(v));
  const [, ...strs] = inputLines;
  const items = strs.map((str) => str.split(" ").map((v) => parseInt(v)));

  const dp = Array.from({ length: W + 1 }, () => 0);

  for (let i = 0; i < N; i++) {
    const [weight, value] = items[i];

    for (let j = W; j >= weight; j--) {
      if (weight <= j) dp[j] = Math.max(dp[j], dp[j - weight] + value);
    }
  }

  console.log(dp[W]);
}

solution(["4 7", "6 13", "4 8", "3 6", "5 12"]);
