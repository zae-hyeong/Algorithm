let givenInput = [];
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline
    .on("line", function (line) {
        givenInput.push(line.trim());
    })
    .on("close", function () {
        solution(givenInput);
        process.exit();
    });

/**
 * @param {Array<string>} inputLines
 */
function solution(inputLines) {
    const [M, N] = inputLines[0].split(" ").map((v) => +v);
    const diceMarks = inputLines[1]
        .split(" ")
        .map((v) => +v);

    let count = 0;

    (function _helper(sum) {
        for (const diceMark of diceMarks) {
            if (sum + diceMark === N) {
                count += 1;
                break;
            } else if (sum + diceMark < N) {
                _helper(sum + diceMark);
            }
        }
    })(0);

    console.log(count);
}

solution(["6 4", "6 5 4 3 2 1"]);
solution(["2 10", "2 5"]);
solution(["1 10", "3"]);
