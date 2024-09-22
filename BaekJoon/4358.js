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

function solution(input) {
  const [...trees] = [...input];

  const hash = {};
  let numOfTrees = 0;

  for (let tree of trees) {
    if(hash[tree] === undefined) hash[tree] = 1;
    else hash[tree]++;
    numOfTrees++;
  }

  const result = [];
  for(let treeName of Object.keys(hash)) {
    hash[treeName] = hash[treeName] / numOfTrees;
    result.push(`${treeName} ${(hash[treeName]*100).toFixed(4)}`);
  }
  console.log(result.sort().join('\n'));
}
