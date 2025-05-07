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
    slices = temmpSlices.map((v) => v.split(" ").map((vv) => +vv));

    
    const answer = [];
    
    for (const [start, end] of slices) {
        let slicedPearls = pearls.slice(start, end + 1);

        let startIdx = slicedPearls.indexOf('*');
        let lastIdx = slicedPearls.lastIndexOf('*');

        if(startIdx === -1) {
            answer.push(0);
            continue;
        }

        const groups = slicedPearls.slice(startIdx+1, lastIdx).split('*');

        let partialSum = 0;
        for(const group of groups) {
            partialSum += group.split('').map(v => +v).reduce((a, c) => a + c, 0);
        }

        answer.push(partialSum);
    }

    console.log(answer.join("\n"));
}

solution(["20", "111*213*22*3*132**12", "4", "3 8", "10 18", "0 11", "4 9"]);
