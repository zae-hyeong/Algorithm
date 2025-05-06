function solution(graph, source) {
    const numVertices = graph.length;

    const distance = Array(numVertices).fill(Infinity);
    distance[source] = 0;

    // ➌ 직전 경로 배열
    const predecessor = Array(numVertices).fill(null);

    // ➍ 간선 수 만큼 반복하여 최단 경로 갱신
    for (let temp = 0; temp < numVertices - 1; temp++) {
        for (let u = 0; u < numVertices; u++) {
            for (const [v, weight] of graph[u]) {
                // ➎ 현재 노드 u를 거쳐서 노드 v로 가는 경로의 거리 < 기존에 저장된 노드 v까지의 거리
                if (distance[u] + weight < distance[v]) {

                    distance[v] = distance[u] + weight; // ➏ 최단 거리를 갱신해줍니다.
                    predecessor[v] = u; // ➐ 직전 경로를 업데이트합니다.
                }
            }
        }
    }

    // ➑ 음의 가중치 순회 체크
    for (let u = 0; u < numVertices; u++) {
        for (const [v, weight] of graph[u]) {
            if (distance[u] + weight < distance[v]) {
                // ❿ 음의 가중치 순회가 발견되었으므로 [-1]을 반환합니다.
                return [-1];
            }
        }
    }

    return [distance, predecessor];
}

console.log(
    solution(
        [
            [
                [1, 4],
                [2, 3],
                [4, -6],
            ],
            [[3, 5]],
            [[1, 2]],
            [
                [0, 7],
                [2, 4],
            ],
            [[2, 2]],
        ],
        0
    )
); // [[0, -2, -4, 3, -6], [null, 2, 4, 1, 0]]
console.log(
    solution(
        [
            [
                [1, 5],
                [2, -1],
            ],
            [[2, 2]],
            [[3, -2]],
            [
                [0, 2],
                [1, 6],
            ],
        ],
        0
    )
); // [-1]
