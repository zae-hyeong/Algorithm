function readInput() {
  const fs = require("fs");
  return [num, ...input] = [
    ...fs.readFileSync("./stdin").toString().trim().split("\n"),
  ];
}

function solution () {
  const [num, ...input] = readInput();

  console.log(input);
  // console.log(input[0][input[0].length]);
}

solution()