var readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.on("line", function (line) {
    solution(line.trim());
    process.exit();
});
function solution(originInput) {
    var inputArray = originInput.split('');
    inputArray.reverse();
    var operatorStack = [];
    var input = "";
    var answer = "";
    while (inputArray.length || operatorStack.length) {
        input = inputArray.pop() || operatorStack.pop();
        switch (input) {
            case "+":
            case "-":
                if (!operatorStack.length) {
                    operatorStack.push(input);
                    break;
                }
                if (operatorStack[operatorStack.length - 1] === "+" ||
                    operatorStack[operatorStack.length - 1] === "-") {
                    answer += operatorStack.pop();
                }
                operatorStack.push(input);
                break;
            case "*":
            case "/":
                if (!operatorStack.length) {
                    operatorStack.push(input);
                    break;
                }
                if (operatorStack[operatorStack.length - 1] === "*" ||
                    operatorStack[operatorStack.length - 1] === "/") {
                    answer += operatorStack.pop();
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
