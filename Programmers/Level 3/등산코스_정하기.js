class MinHeap {
    constructor() {
        this.arr = [];
    }

    size() {
        return this.arr.length;
    }

    push(data) {
        // data = [point, intensity];
        this.arr.push(data);
        this.bubbleUp();
    }

    pop() {
        this.swap(0, this.arr.length - 1);
        const returnVal = this.arr.pop();
        this.bubbleDown();

        return returnVal;
    }

    swap(idx1, idx2) {
        [this.arr[idx1], this.arr[idx2]] = [this.arr[idx2], this.arr[idx1]];
    }

    bubbleUp() {
        let currentIdx = this.arr.length - 1;

        while (currentIdx > 0) {
            const parentIdx = Math.floor((currentIdx - 1) / 2);

            if (this.arr[parentIdx][1] <= this.arr[currentIdx][1]) break;

            this.swap(currentIdx, parentIdx);
            currentIdx = parentIdx;
        }
    }

    bubbleDown() {
        let currentIdx = 0;

        while (true) {
            let smallerChildIdx = currentIdx;
            let leftChildIdx = currentIdx * 2 + 1;
            let rightChildIdx = currentIdx * 2 + 2;

            if (
                this.arr[leftChildIdx] &&
                this.arr[smallerChildIdx][1] > this.arr[leftChildIdx][1]
            ) {
                smallerChildIdx = leftChildIdx;
            }

            if (
                this.arr[rightChildIdx] &&
                this.arr[smallerChildIdx][1] > this.arr[rightChildIdx][1]
            ) {
                smallerChildIdx = rightChildIdx;
            }

            if (smallerChildIdx === currentIdx) break;

            this.swap(currentIdx, smallerChildIdx);
            currentIdx = smallerChildIdx;
        }
    }
}

const makeGraph = (paths) => {
    const map = new Map();

    for (const [n1, n2, weight] of paths) {
        if (!map.has(n1)) map.set(n1, []);
        if (!map.has(n2)) map.set(n2, []);

        map.get(n1).push({ next: n2, weight });
        map.get(n2).push({ next: n1, weight });
    }

    return map;
};

function solution(n, paths, gates, summits) {
    const intensities = Array.from({ length: n + 1 }, () => Infinity);
    const minHeap = new MinHeap();

    for (const gate of gates) {
        intensities[gate] = 0;
        minHeap.push([gate, 0]);
    }

    const graph = makeGraph(paths);

    const isSummit = new Set(summits);

    while (minHeap.size() > 0) {
        const [curNode, curIntensity] = minHeap.pop();

        if (isSummit.has(curNode) || curIntensity > intensities[curNode])
            continue;

        graph.get(curNode).forEach(({ next: nextNode, weight }) => {
            const newIntensity = Math.max(curIntensity, weight);

            if (newIntensity < intensities[nextNode]) {
                intensities[nextNode] = newIntensity;
                minHeap.push([nextNode, newIntensity]);
            }
        });
    }

    let answer = [0, Infinity];
    summits.sort((a, b) => a - b);
    for (const summit of summits) {
        if (intensities[summit] < answer[1])
            answer = [summit, intensities[summit]];
    }

    return answer;
}

console.log(
    solution(
        6,
        [
            [1, 2, 3],
            [2, 3, 5],
            [2, 4, 2],
            [2, 5, 4],
            [3, 4, 4],
            [4, 5, 3],
            [4, 6, 1],
            [5, 6, 1],
        ],
        [1, 3],
        [5]
    )
); //[5, 3]

// console.log(
//     solution(
//         7,
//         [
//             [1, 2, 5],
//             [1, 4, 1],
//             [2, 3, 1],
//             [2, 6, 7],
//             [4, 5, 1],
//             [5, 6, 1],
//             [6, 7, 1],
//         ],
//         [3, 7],
//         [1, 5]
//     )
// ); // [3, 4]
