// 인접 리스트 그래프
const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"],
};

// 1) 재귀(recursive) DFS
function dfsRecursive(node, visited = new Set()) {
    // 방문 처리
    visited.add(node);
    console.log(node);

    // 연결된 이웃 노드 순회
    for (const neighbor of graph[node] || []) {
        if (!visited.has(neighbor)) {
            dfsRecursive(neighbor, visited);
        }
    }
}

// 사용 예시
console.log("--- Recursive DFS ---");
dfsRecursive("A");

// 2) 반복(iterative) DFS using stack
function dfsIterative(start) {
    const visited = new Set();
    const stack = [start];

    while (stack.length > 0) {
        const node = stack.pop();

        if (!visited.has(node)) {
            // 방문 처리
            visited.add(node);
            console.log(node);

            // 스택에 아직 방문하지 않은 이웃 노드를 추가
            // (스택이 LIFO이므로, 역순으로 push하면 원래 순서대로 탐색)
            const neighbors = graph[node] || [];
            for (let i = neighbors.length - 1; i >= 0; i--) {
                const neighbor = neighbors[i];
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// 사용 예시
console.log("--- Iterative DFS ---");
dfsIterative("A");
