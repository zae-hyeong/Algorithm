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
    solution(givenInput.map((v) => +v));
    process.exit();
  });

/**
 * @param {Array<number>} inputs
 */
function solution(inputs) {
  const [, ...nums] = inputs;

  const minusNums = [1, 2, 3];

  let count = 0;

  function _comb(N) {
    if (N === 0) count++;
    if (N <= 0) return;

    for (const minusNum of minusNums) {
      _comb(N - minusNum);
    }
  }

  const result = [];
  for (const n of nums) {
    _comb(n);
    result.push(count);
    count = 0;
  }

  console.log(result.join("\n"));
}

solution([3, 4, 7, 10]);