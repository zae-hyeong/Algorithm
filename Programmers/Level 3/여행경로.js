function solution(tickets) {
    const graph = new Map();
    const used = {};

    for (const [departure, arrival] of tickets) {
        if (!graph.has(departure)) {
            graph.set(departure, []);
        } 
        if(!graph.has(arrival)){
            graph.set(arrival, []);
        } 
        if (!used[`${[departure, arrival]}`]) {
            used[`${[departure, arrival]}`] = 0;
        }
        graph.get(departure).push(arrival);
        used[`${[departure, arrival]}`]++;
    }
    console.log(used);

    for (const k of graph.keys()) {
        graph.get(k).sort();
    }

    let cur = "ICN";

    const answer = [];
    const stack = [cur];
    (function _helper(cur, used) {
        console.log(cur, stack);
        if (stack.length === tickets.length + 1) {
            answer.push([...stack]);
            return;
        }

        for (const neigbor of graph.get(cur)) {
            if (used[`${[cur, neigbor]}`] === 0) continue;

            stack.push(neigbor);
            used[`${[cur, neigbor]}`]--;
            _helper(neigbor, used);
            stack.pop();
            used[`${[cur, neigbor]}`]++;
        }
    })(cur, used);

    return answer[0];
}

console.log(
    solution([
        ["ICN", "A"],
        ["A", "B"],
        ["A", "C"],
        ["C", "D"],
        ["D", "A"],
    ])
);
