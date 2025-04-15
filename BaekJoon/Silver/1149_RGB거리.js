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
    const N = +inputLines[0];
    const [, ...inputs] = inputLines.map((v) => v.split(" ").map((vv) => +vv));

    for(let idx = 1; idx < N; idx ++) {
        inputs[idx][0] = inputs[idx][0] + Math.min(inputs[idx - 1][1], inputs[idx - 1][2]);
        inputs[idx][1] = inputs[idx][1] + Math.min(inputs[idx - 1][0], inputs[idx - 1][2]);
        inputs[idx][2] = inputs[idx][2] + Math.min(inputs[idx - 1][0], inputs[idx - 1][1]);
    }

    console.log(Math.min(...inputs[N - 1]));
}

solution(["3", "26 40 83", "49 60 57", "13 89 99"]);
solution(["3", "100 100 10", "50 30 10", "60 5 30"]);
// solution(["3", "1 100 100", "100 1 100", "100 100 1"]);
// solution([
//     "6",
//     "30 19 5",
//     "64 77 64",
//     "15 19 97",
//     "4 71 57",
//     "90 86 84",
//     "93 32 91",
// ]);
// solution([
//     "8",
//     "71 39 44",
//     "32 83 55",
//     "51 37 63",
//     "89 29 100",
//     "83 58 11",
//     "65 13 15",
//     "47 25 29",
//     "60 66 19",
// ]);
