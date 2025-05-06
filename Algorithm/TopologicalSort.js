function TopologicalSort(n, node) {
    let graph = Array.from(Array(n + 1), () => []);
    let indegrees = Array(n + 1).fill(0);

    for (let [a, b] of node) {
        graph[a].push(b);
        indegrees[b]++;
    }

    let answer = [];
    let queue = [];

    // indegrees가 0인 값 = 시작점 -> queue에 삽입
    for (let i = 1; i < n + 1; i++) {
        if (indegrees[i] === 0) queue.push(i);
    }

    while (queue.length) {
        let check = queue.shift();
        answer.push(check);

        for (let next of graph[check]) {
            indegrees[next]--;
            //indegrees가 0이되면 큐에 삽입
            if (indegrees[next] === 0) queue.push(next);
        }
    }

    return answer;
}

console.log(TopologicalSort(6, [[1, 4], [4, 3], [5, 4], [2, 5], [2, 3], [6, 2]]));
