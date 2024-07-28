const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", function (line: string) {
  solution(line.trim());
  process.exit();
});

function solution(originInput: string) {
  const inputArray = originInput.split('');
  inputArray.reverse();
  
  const operatorStack: string[] = [];
  let input:string = "";
  let answer:string = "";

  while (inputArray.length || operatorStack.length) {
    input = inputArray.pop()!;
    switch (input) {
      case "+":
      case "-":
        if (!operatorStack.length) {
          operatorStack.push(input);
          break;
        }
        if (
          operatorStack[operatorStack.length - 1] === "+" ||
          operatorStack[operatorStack.length - 1] === "-"
        ) {
          answer += operatorStack.pop()!;
        }
        operatorStack.push(input);
        break;
      case "*":
      case "/":
        if (!operatorStack.length) {
          operatorStack.push(input);
          break;
        }
        if (
          operatorStack[operatorStack.length - 1] === "*" ||
          operatorStack[operatorStack.length - 1] === "/"
        ) {
          answer += operatorStack.pop()!;
        }
        operatorStack.push(input);
        break;
      case "(":
      case ")":
        operatorStack.push(input);
        break;
      default:
        answer += input;
    }
  }
  console.log(answer);
}
