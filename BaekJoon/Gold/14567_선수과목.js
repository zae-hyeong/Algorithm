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
    const N = Number(inputLines[0].split(" ")[0]);

    const [, ...inputs] = inputLines.map((line) =>
        line.split(" ").map((v) => +v)
    );
    inputs.sort((a, b) => a[0] - b[0]);

    const answer = new Array(N).fill(1);

    inputs.forEach(([p, c]) => {
        answer[c - 1] = Math.max(answer[c - 1], answer[p - 1] + 1);
    });

    console.log(answer.join(" "));
}

solution(["6 4", "1 2", "1 3", "2 5", "4 5"]);
