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

/* 메모리 초과 */
function getAllCombination(arr, N) {
  if (N === 1) return arr.map(v => [v]);

  const result = [];

  arr.forEach((fixed, i) => {
    const slicedArr = arr.slice(i + 1);

    const cmbs = getAllCombination(slicedArr, N - 1).map(v => [fixed, ...v]);
    result.push(...cmbs);
  });

  return result;
}

function solution(inputLines) {
  const [firstLine, secondLine] = inputLines;

  const [N, S] = firstLine.split(' ').map(v => +v);
  const nums = secondLine.split(' ').map(v => +v);

  let result = 0;
  for (let i = 1; i <= N; i++) {
    result += getAllCombination(nums, i).map(ns => ns.reduce((a, c) => a + c, 0)).filter(v => v === S).length;
  }
  console.log(result);
}

// solution(["20 12",
// "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20"])