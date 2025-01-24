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
  const L = +inputLines[0].split(" ").map((v) => +v)[0];
  const alphabets = inputLines[1].split(" ").sort();

  const vs = new Set(["a", "e", "i", "o", "u"]);

  const result = [];
  (function _helper(subStr, startIdx) {
    if (subStr.length === L) {
      const numOfVowels = Array.from(subStr).filter((v) => vs.has(v)).length;
      
      if (numOfVowels >= 1 && L - numOfVowels >= 2) {
        result.push(subStr);}
      return;
    }

    for (let i = startIdx; i < alphabets.length; i++) {
      _helper(subStr + alphabets[i], i + 1);
    }
  })("", 0);

  console.log(result.join('\n'));
}

console.log(solution(["4 6", "a t c i s w"]));
