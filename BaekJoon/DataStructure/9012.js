let givenInput = [];
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on('line', function(line) {
  console.log("AA:" + line.trim());
  givenInput.push(line.trim());
}).on('close', function(){
  solution(givenInput);
  process.exit();
});

function solution(input) {
  console.log(input);
};