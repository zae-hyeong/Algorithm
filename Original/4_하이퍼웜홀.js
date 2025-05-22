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

class MySet {
    constructor() {
        this.map = new Map();
    }

    union(x, y) {
        if (!this.map.has(x)) this.map.set(x, x);
        if (!this.map.has(y)) this.map.set(y, y);

        const rootA = this.find(x);
        const rootB = this.find(y);

        this.map.set(rootB, rootA);
    }

    find(x) {
        return (function _find(parents, x) {
            if (parents.get(x) === x) return x;

            parents.set(x, _find(parents, parents.get(x)));
            return parents.get(x);
        })(this.map, x);
    }

    organize() {
        for(const k of this.map.keys())
            this.map.set(k, this.find(k));
    }

    getGroups() {
        this.organize();

        const m = new Map();

        for(const v of this.map.values()){
            if(!m.has(v)) m.set(v, 0);

            m.set(v, m.get(v) + 1);
        }
        return Array.from(m.values());
    }
}

/**
 * @param {Array<string>} inputLines
 */
function solution(inputLines) {
    const [, N] = inputLines[0].split(' ').map(v => +v);
    const [, ...links] = inputLines.map((v) => v.split(" ").map((vv) => +vv));

    const mySet = new MySet();

    links.forEach(([a, b]) => {
        mySet.union(a, b);
    });

    console.log(mySet.getGroups().filter(v => v <= N).reduce((a, c) => a + c, 0));
}

// solution([
//     '',
//     '1 2',
//     '1 3',
//     '1 4',
//     '5 6',
//     '5 7',
//     '1 5',
// ]);

solution([
    "10 3", // 웜홀 개수, N
    "21 88",
    "23 75",
    "97 35",
    "2 8",
    "67 9",
    "64 75",
    "65 71",
    "70 98",
    "9 71",
    "60 35",
]);
