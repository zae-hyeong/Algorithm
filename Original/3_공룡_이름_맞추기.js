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
    const [, ...guesses] = inputLines.map((v) =>
        v.split(" ").map((vv, i) => (i === 0 ? vv : +vv))
    );

    const consonants = ["b", "d", "g", "n", "p", "r", "s", "t"];
    const vowels = ["a", "e", "i", "o", "u"];

    const combinations = [];
    for (let c1 of consonants) {
        for (let v1 of vowels) {
            for (let c2 of consonants) {
                if (c2 === c1) continue;
                for (let v2 of vowels) {
                    if (v2 === v1) continue;
                    combinations.push(c1 + v1 + c2 + v2);
                }
            }
        }
    }

    const results = [];

    outer: for (const comb of combinations) {
        for (const [word, strike, ball] of guesses) {
            const result = check(comb, word);

            if (result.strike !== strike || result.ball !== ball) continue outer;
        }
        results.push(comb);
    }

    if (results.length === 0 || results.length > 1) {
        console.log("x");
    } else {
        console.log(results[0]);
    }
}

function check(target, guess) {
    let strike = 0;
    let ball = 0;

    const set = new Set(target);

    for (let i = 0; i < 4; i++) {
        if (target[i] === guess[i]) {
            strike++;
        } else if (set.has(guess[i])) {
            ball++;
        }
    }

    return { strike, ball };
}

solution([
    "7",
    "roga 1 1",
    "rase 0 1",
    "poru 0 1",
    "gipa 0 1",
    "dego 3 0",
    "bego 3 0",
    "nego 3 0",
]);
