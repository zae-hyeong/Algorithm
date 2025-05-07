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
    if (startIdx === -1) {
        console.log(0);
        return;
    }

    const parts = pearls.split("*");
    if (startIdx !== 0) parts.shift();
    if (lastIdx !== pearls.length - 1) parts.pop();

    console.log(parts);

    const areas = []; // {start, end, price}
    let currentIndex = startIdx;

    for (const part of parts) {
        const start = currentIndex;
        const end = currentIndex + part.length;

        let price = Array.from(part)
            .map((v) => +v)
            .reduce((a, c) => a + c, 0);
        areas.push({ start, end, price });

        currentIndex = end + 1;
    }
    console.log(areas);

    const results = [];

    for (const [start, end] of slices) {
        let sum = 0;
        let flag = false;
        for (const area of areas) {
            if (
                (start >= area.start && start <= area.end) ||
                (end >= area.start && end <= area.end)
            ) {
                flag = !flag;
            }
            if (flag) sum += area.price;
        }
        results.push(sum);
    }

    console.log(results.join("\n"));
}

solution(["20", "111*213*22*3*132**12", "4", "3 8", "10 18", "0 11", "4 9"]);
