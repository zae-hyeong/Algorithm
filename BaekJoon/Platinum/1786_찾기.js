let givenInput = [];
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline
  .on("line", function (line) {
    givenInput.push(line);
  })
  .on("close", function () {
    solution(givenInput);
    process.exit();
  });

const result = [];
let count = 0;

function KMP(str, cmp) {
    const pi = makePi(cmp);

    let idx = 0;
    for (let i = 0; i < str.length; i++) {
        while (idx > 0 && str[i] != cmp[idx]) idx = pi[idx - 1];

        if (str[i] == cmp[idx]) {
            if (idx == cmp.length - 1) {
                count++;
                result.push(i - idx + 1);
                idx = pi[idx];
            } else {
                ++idx;
            }
        }
    }
}

function makePi(str) {
    const pi = new Array(str.length).fill(0);

    let idx = 0;
    for (let i = 1; i < str.length; i++) {
        while (idx > 0 && str[i] != str[idx]) idx = pi[idx - 1];

        if (str[i] == str[idx]) pi[i] = ++idx;
    }

    return pi;
}

/**
 * @param {Array<string>} inputLines
 */
function solution(inputLines) {
    const [str, cmp] = inputLines;

    KMP(str, cmp);

    console.log(count);
    console.log(result.join(" "));
}

solution(["ABC ABCDAB ABCDABCDABDE", "ABCDABD"]);
