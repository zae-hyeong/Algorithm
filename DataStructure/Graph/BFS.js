// 그래프를 인접 리스트 형태로 정의 (예시)
// {
//   A: ['B', 'C'],
//   B: ['A', 'D', 'E'],
//   C: ['A', 'F'],
//   D: ['B'],
//   E: ['B', 'F'],
//   F: ['C', 'E'],
// }
const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"],
};

/**
 * BFS 탐색 함수
 * @param {string} start - 시작 노드
 * @returns {string[]} 방문 순서 배열
 */
function bfs(start) {
    const visited = new Set(); // 방문한 노드를 기록할 집합
    const queue = [start]; // 탐색 대기열
    const order = []; // 방문 순서를 저장할 배열

    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift(); // 큐에서 꺼내기
        order.push(node);
        console.log(node);

        // 이웃 노드들 중 아직 방문하지 않은 노드를 큐에 추가
        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return order;
}

// 사용 예시
console.log("--- BFS Visiting Order ---");
const visitOrder = bfs("A");
console.log("Order:", visitOrder);
