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

/* 풀었다가 모으는 방식 */
function solution2(inputLines) {
  function _combination(arr, depth) {
    if (depth === 1) return arr.map((v) => [v]);

    const returnVal = [];

    arr.forEach((fixed, i) => {
      const restArr = arr.slice(i + 1);

      const returnedArr = _combination(restArr, depth - 1);
      returnVal.push(...returnedArr.map((v) => [fixed, ...v]));
    });

    return returnVal;
  }

  const result = [];

  for (const inputLine of inputLines) {
    const [isNotEnd, ...nums] = inputLine.split(" ").map((v) => +v);
    if (!isNotEnd) break;

    const cmb = _combination(nums, 6);
    result.push(cmb.map((v) => v.join(" ")).join("\n"));
  }
  return result.join("\n\n");
}

/* 쌓아가는 방식 */
function solution(inputLines) {
  let result = "";

  function _combination(picked, nums, depth) {

    if (depth === 6) {
      result += `${picked.join(" ")}\n`;
      return;
    }

    nums.forEach((fixed, i) => {
      _combination([...picked, fixed], nums.slice(i + 1), depth + 1);
    });

    return;
  }

  for (const inputLine of inputLines) {
    const [isNotEnd, ...nums] = inputLine.split(" ").map((v) => +v);
    if (!isNotEnd) {break;}

    _combination([], nums, 0);

    result+= '\n';
  }
  return result.slice(0, -2);
}

console.log(
  solution([
    "7 1 2 3 4 5 6 7",
    "8 1 2 3 5 8 13 21 34",
    "10 1 3 5 7 9 11 13 15 17 19",
    "0",
  ])
);
