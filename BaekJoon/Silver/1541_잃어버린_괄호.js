const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.on("line", function (line) {
    solution(line.trim());
    process.exit();
});

const makeArray = (str) => {
    const arr = [];

    let char = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "+" || str[i] === "-") {
            arr.push(+char);
            arr.push(str[i]);
            char = "";
            continue;
        }

        char += str[i];
    }

    arr.push(+char);

    return arr;
};

function solution(input) {
    const arr = makeArray(input);

    let result = 0;
    const stack = [];

    let isMinus = false;
    arr.forEach((v) => {
        if (v === "-") {
            isMinus = true;
            return;
        }
        if (v === "+") {
            isMinus = false;
            return;
        }

        if (isMinus) {
            stack.push(v);
        } else if (!isMinus && stack.length === 0) {
            result += v;
        } else {
            stack[stack.length - 1] += v;
        }
    });

    while (stack.length > 0) {
        result -= stack.pop();
    }

    console.log(result);
}
// solution("10+20+30+40");
