const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", function (line) {
  solution(Number(line.trim()));
  process.exit();
});

function solution(N) {
  const arr = new Array(N + 1).fill(Infinity);
    
  (function _helper(N, numOfBasket) {
    if(arr[N] <= numOfBasket || N >= arr.length) return;  
      
    arr[N] = numOfBasket;
    _helper(N + 3, numOfBasket + 1);
    _helper(N + 5, numOfBasket + 1);
  })(0, 0);

  console.log(arr[N] === Infinity ? -1 : arr[N]);
}