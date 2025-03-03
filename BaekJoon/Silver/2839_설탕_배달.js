const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", function (line) {
  solution(Number(line.trim()));
  process.exit();
});

function solution(N) {
  const map = new Map();
    
  (function _helper(num, numOfBasket) {
    if((map.get(num) && map.get(num) <= numOfBasket) || num > N) return;  
      
    map.set(num, numOfBasket);
    _helper(num + 3, numOfBasket + 1);
    _helper(num + 5, numOfBasket + 1);
  })(0, 0);

  console.log(map.get(N) === undefined ? -1 : map.get(N));
}