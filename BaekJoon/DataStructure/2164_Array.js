const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", function (line) {
  solution(line.trim());
  process.exit();
});

function solution(input) {
  const numOfCard = parseInt(input);
  const cards = [];

  for (let i = 1; i < numOfCard + 1; i++)
    cards.push(i);

  while (cards.length > 1) {
    cards.shift();
    cards.push(cards.shift());
  }
  console.log(cards[0]);
}