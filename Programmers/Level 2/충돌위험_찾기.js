function move(currentPos, destPos) {
    let [y, x] = currentPos;

    if (currentPos[0] !== destPos[0]) {
        y = currentPos[0] > destPos[0] ? currentPos[0] - 1 : currentPos[0] + 1;
    } else {
        x = currentPos[1] > destPos[1] ? currentPos[1] - 1 : currentPos[1] + 1;
    }

    return [y, x];
}

function solution(points, routes) {
    const map = new Map();

    routes.forEach(([start, end]) => {
        let currentPos = points[start - 1];
        const destPos = points[end - 1];

        let sec = 1;
        while (
            currentPos[0] !== destPos[0] ||
            (currentPos[1] !== destPos[1])
        ) {
            const postStr = `${[currentPos[0], currentPos[1], sec]}`;
            if (!map.has(postStr)) map.set(postStr, 0);

            map.set(postStr, map.get(postStr) + 1);

            currentPos = move(currentPos, destPos);
            sec += 1;
        }

        const postStr = `${[currentPos[0], currentPos[1], sec]}`;
        if (!map.has(postStr)) map.set(postStr, 0);
        map.set(postStr, map.get(postStr) + 1);
    });

    console.log(map);

    let answer = 0;
    for (const [key, val] of map.entries()) {
        if (val > 1) answer++;
    }

    return answer;
}

console.log(
    solution(
        [
            [3, 2],
            [6, 4],
            [4, 7],
            [1, 4],
        ],
        [
            [4, 2],
            [1, 3],
            [4, 2],
            [4, 3],
        ]
    )
);
