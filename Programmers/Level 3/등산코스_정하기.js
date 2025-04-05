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
    const graph = makeGraph(paths);

    const answer = [];
    const summitsSet = new Set(summits);

    for (const gate of gates) {
        const queue = [];

        queue.push([gate, [], new Set([gate])]); // [point, pathWeights, visited]

        while (queue.length > 0) {
            const [point, pathWeights, visited] = queue.shift();

            if (summitsSet.has(point)) {
                answer.push([point, Math.max(...pathWeights)]);
                continue;
            }

            for (const { next: connectedPoint, weight } of graph.get(point)) {
                if (!visited.has(connectedPoint)) {
                    queue.push([
                        connectedPoint,
                        [...pathWeights, weight],
                        new Set([...visited.values(), connectedPoint]),
                    ]);
                }
            }
        }
    }

    return answer.sort(
        ([summit1, intensity1], [summit2, intensity2]) =>
            intensity1 - intensity2 || summit1 - summit2
    )[0];
}

// console.log(
//     solution(
//         6,
//         [
//             [1, 2, 3],
//             [2, 3, 5],
//             [2, 4, 2],
//             [2, 5, 4],
//             [3, 4, 4],
//             [4, 5, 3],
//             [4, 6, 1],
//             [5, 6, 1],
//         ],
//         [1, 3],
//         [5]
//     )
// ); // [5, 3]
// console.log(solution(7, [[1, 4, 4], [1, 6, 1], [1, 7, 3], [2, 5, 2], [3, 7, 4], [5, 6, 6]], [1], [2, 3, 4])); // [3,4]
console.log(
    solution(
        7,
        [
            [1, 2, 5],
            [1, 4, 1],
            [2, 3, 1],
            [2, 6, 7],
            [4, 5, 1],
            [5, 6, 1],
            [6, 7, 1],
        ],
        [3, 7],
        [1, 5]
    )
); //[5,1]
// console.log(solution(5, [[1, 3, 10], [1, 4, 20], [2, 3, 4], [2, 4, 6], [3, 5, 20], [4, 5, 6]], [1,2], [5])); // [5, 6]
