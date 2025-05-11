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
    const str = Array.from(inputLines[0]);
    const [, , ...questions] = inputLines.map((v) =>
        v.split(" ").map((vv, i) => {
            return i === 0 ? vv : +vv;
        })
    );

    const alphabetHash = {};

    const strSet = new Set(str);
    strSet.forEach((v) => {
        alphabetHash[v] = Array.from({ length: str.length + 1 }, () => 0);
    });

    for (const c of strSet) {
        let count = 0;

        str.forEach((s, i) => {
            if (s === c) count++;
            alphabetHash[c][i + 1] = count;
        });
    }

    const answer = [];
    for (let [char, start, end] of questions) {
        answer.push(alphabetHash[char][end + 1] - alphabetHash[char][start]);
    }
    console.log(answer.join("\n"));
}

solution(["seungjaehwang", "4", "a 0 5", "a 0 6", "a 6 10", "a 7 10"]);
