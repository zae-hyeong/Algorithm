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
  const [fisrtLine, ...inputStrings] = [...inputLines];

  const [numOfStringSet, numOfInputString] = fisrtLine
    .split(" ")
    .map((item) => parseInt(item));

  const set = new Set();

  for (let i = 0; i < numOfStringSet; i++) {
    set.add(inputStrings[i]);
  }

  let count = 0;
  for (let i = numOfStringSet; i < inputStrings.length; i++) {
    if (set.has(inputStrings[i])) count++;
  }

  console.log(count);
}
