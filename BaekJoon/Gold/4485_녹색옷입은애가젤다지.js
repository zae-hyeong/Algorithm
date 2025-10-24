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

class MinHeap {
	constructor() {
		this.arr = [];
	}

	push(data) {
		// data = [y축, x축, 누적 distance]
	}

	pop() {
        
    }

	swap(a, b) {
		[this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
	}

    bubbleUp() {

    }

    bubbleDown() {

    }
}

/**
 * @param {Array<string>} inputLines
 */
function solution(inputLines) {
	for (let i = 0; i < inputLines.length; i++) {
		const N = parseInt(inputLines[i]);

		const map = Array.from({ length: N });
		const v = Array.from({ length: N }, () =>
			Array.from({ length: N }, () => false)
		);

		for (i = i + 1, idx = 0; i < start + N; i++, idx++) {
			map[idx] = inputLines[i].split(" ").map((v) => +v);
		}


	}
}

solution(
	["3"],
	["5 5 4"],
	["3 9 1"],
	["3 2 7"],
	["5"],
	["3 7 2 0 1"],
	["2 8 0 9 1"],
	["1 2 1 8 1"],
	["9 8 9 2 0"],
	["3 6 5 1 5"],
	["7"],
	["9 0 5 1 1 5 3"],
	["4 1 2 1 6 5 3"],
	["0 7 6 1 6 8 5"],
	["1 1 7 8 3 2 3"],
	["9 4 0 7 6 4 1"],
	["5 8 3 2 4 8 3"],
	["7 4 8 4 8 3 4"],
	["0"]
);
