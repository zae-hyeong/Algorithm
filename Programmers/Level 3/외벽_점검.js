function makePermutation(dist) {
    const permutation = [];

    (function _helper(dist, perm) {
        if (dist.length === 0) {
            permutation.push(perm);
            return;
        }

        dist.forEach((fixed, i, arr) => {
            const copyDist = [...arr];
            copyDist.splice(i, 1);
            _helper(copyDist, [...perm, fixed]);
        });
    })(dist, []);

    return permutation;
}

function solution(n, weak, dists) {
    const length = weak.length;

    for (let i = 0; i < length; i++) weak.push(weak[i] + n);

    let answer = dists.length + 1;

    for (let i = 0; i < length; i++) {
        for (const friends of makePermutation(dists)) {
            let cnt = 1;

            let position = weak[i] + friends[cnt - 1];

            for (let j = i; j < i + length; j++) {
                if (position < weak[j]) {
                    cnt += 1;

                    if (cnt > dists.length) break;

                    position = weak[j] + friends[cnt - 1];
                }
            }
            answer = Math.min(answer, cnt);
        }
    }

    return answer <= dists.length ? answer : -1;
}

console.log(solution(12, [1, 5, 6, 10], [1, 2, 3, 4]));
console.log(solution(12, [1, 3, 4, 9, 10], [3, 5, 7]));
