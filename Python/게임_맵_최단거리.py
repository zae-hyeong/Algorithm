def solution(maps):
    N = len(maps)
    M = len(maps[0])

    visited = []

    for i in range(0, N):
        visited += [[-1] * M]

    def isValid(y, x):
        return (
            y >= 0
            and y < N
            and x >= 0
            and x < M
            and visited[y][x] == -1
            and maps[y][x] == 1
        )

    queue = []
    queue.append([0, 0, 2])
    visited[0][0] = 1
    # [y, x, dist]

    moves = [[1, 0], [0, 1], [-1, 0], [0, -1]]

    while len(queue) > 0:
        [y, x, dist] = queue[0]
        queue = queue[1:]

        for [dy, dx] in moves:
            [ny, nx] = [y + dy, x + dx]

            if isValid(ny, nx):
                queue.append([ny, nx, dist + 1])
                visited[ny][nx] = dist
                
    return visited[N - 1][M - 1]

solution(
    [
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 1],
        [0, 0, 0, 0, 1],
    ]
)
