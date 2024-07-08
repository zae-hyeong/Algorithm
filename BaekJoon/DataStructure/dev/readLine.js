const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input = line.trim().split(' ').map(el => parseInt(el));
}).on('close', function(){ //이 안에 솔루션 코드 작성

  console.log(typeof input[0]);

  process.exit();
});