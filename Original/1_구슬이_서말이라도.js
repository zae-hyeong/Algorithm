// let givenInput = [];
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// readline
//     .on("line", function (line) {
//         givenInput.push(line.trim());
//     })
//     .on("close", function () {
//         solution(givenInput);
//         process.exit();
//     });

function solution(inputs) {
    const [, pearls, , ...temmpSlices] = inputs;
    const slices = temmpSlices.map((v) => v.split(" ").map((vv) => +vv));

    let startIdx = pearls.indexOf("*");
    let lastIdx = pearls.lastIndexOf("*");
    if (startIdx === -1 || startIdx === lastIdx) {
        console.log(Array(slices.length).fill(0).join("\n"));
        return;
    }

    const parts = pearls.split("*");
    if (startIdx !== 0) parts.shift();
    if (lastIdx !== pearls.length - 1) parts.pop();

    const areas = []; // {point, price}
    let currentIndex = startIdx;

    for (const part of parts) {
        const point = currentIndex;

        let price = Array.from(part)
            .map((v) => +v)
            .reduce((a, c) => a + c, 0);
        areas.push({ point, price });

        currentIndex = currentIndex + part.length + 1;
    }

    const results = [];

    for (const [start, end] of slices) {
        let sum = 0;
        let startPoint = 0;
        let endPoint = 0;

        for (const area of areas) {
            if (start <= area.point) {
                startPoint = area.point;
                break;
            }
        }
        for (const area of areas.toReversed()) {
            if (end >= area.point) {
                endPoint = area.point;
                break;
            }
        }

        for (const area of areas) {
            if (area.point >= startPoint && area.point < endPoint)
                sum += area.price;
        }

        results.push(sum);
    }

    console.log(results.join("\n"));
}

// solution(["20", "111*213*22*3*132**12", "4", "3 8", "10 18", "0 11", "4 9"]);
solution(["20", "***123123*********123123***", "4", "3 8", "1 100", "0 11", "4 9"]);
