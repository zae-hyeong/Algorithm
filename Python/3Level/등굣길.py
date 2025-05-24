from collections import deque


def solution(m, n, puddles):

    puddleHash = set(
        list(map(lambda puddle: f"{puddle[1] - 1},{puddle[0] - 1}", puddles))
    )

    visited = [([0] * m) for _ in range(n)]

    def _isValidMove(y, x):
        return (
            y >= 0
            and y < n
            and x >= 0
            and x < m
            and f"{y},{x}" not in puddleHash
            and visited[y][x] == 0
        )

    queue = deque()
    queue.append([n - 1, m - 1])
    visited[n - 1][m - 1] = 1

    while len(queue) > 0:
        [y, x] = queue.popleft()

        for dy, dx in [[-1, 0], [0, -1]]:
            ny, nx = y + dy, x + dx

            if _isValidMove(ny, nx):
                queue.append([ny, nx])
                if ny < n - 1:
                    visited[ny][nx] = (
                        visited[ny][nx] + visited[ny + 1][nx]
                    ) % 1_000_000_007
                if nx < m - 1:
                    visited[ny][nx] = (
                        visited[ny][nx] + visited[ny][nx + 1]
                    ) % 1_000_000_007

    return visited[0][0]


print(solution(4, 3, [[2, 2], [2, 3]]))
