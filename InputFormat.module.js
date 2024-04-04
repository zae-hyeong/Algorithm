const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const readInput = () => { 
  const input = [];
  rl.on("line", function (line) {
    input.push(line);
  }).on("close", function () {
    process.exit();
  });

  return input;
}