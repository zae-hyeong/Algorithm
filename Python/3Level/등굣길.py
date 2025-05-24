from collections import deque


def solution(m, n, puddles):
    answer = 0

    puddleHash = set(list(map(lambda puddle: f"{puddle[1] - 1},{puddle[0] - 1}", puddles)))

    def _isValidMove(y, x):
        return y < n and x < m and f"{y},{x}" not in puddleHash

    queue = deque()
    queue.append([0, 0])

    while len(queue) > 0:
        [y, x] = queue.popleft()
        print(y, x)

        if y == n - 1 and x == m - 1 :
            answer += 1
            continue
        
        for dy, dx in [[0, 1], [1, 0]]:
            ny, nx = y + dy, x + dx
            if _isValidMove(ny, nx):
                queue.append([ny, nx])

    return answer % 1_000_000_007


print(solution(4, 3, [[2, 2], [2, 3]]))
