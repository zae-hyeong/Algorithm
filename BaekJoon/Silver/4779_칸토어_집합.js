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
  const inputs = inputLines.map((v) => +v);

  let result = [];

  function _getCantor(startIdx, endIdx) {
    if (startIdx >= endIdx) {
      result[startIdx] = "-";
      return;
    }
    
    const gap = Math.floor((endIdx - startIdx + 1)/ 3);

    _getCantor(startIdx, startIdx + gap - 1);
    _getCantor(endIdx - gap + 1, endIdx);
  }

  for (const N of inputs) {
    result = Array.from({ length: 3 ** N }, () => " ");

    _getCantor(0, 3 ** N - 1);
    console.log(result.join(""));
  }
}

console.log(solution(["0", "1", "3", "2"]));
