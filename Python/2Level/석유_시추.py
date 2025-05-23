from collections import deque


def solution(land):
    M = len(land)
    N = len(land[0])

    visited = [[False] * N for _ in range(M)]

    hash = {}
    for i in range(N):
        hash[i] = 0

    def _isValidMove(y, x):
        return (
            y >= 0
            and y < M
            and x >= 0
            and x < N
            and not visited[y][x]
            and land[y][x] != 0
        )

    def _BFS(startY, startX):
        queue = deque()
        mySet = set()

        moves = [[0, 1], [1, 0], [0, -1], [-1, 0]]

        extent = 1
        queue.append([startY, startX])
        visited[startY][startX] = True
        mySet.add(startX)

        while len(queue) > 0: 
            [y, x] = queue.popleft()

            for [dy, dx] in moves:
                ny, nx = y + dy, x + dx

                if _isValidMove(ny, nx) :
                    queue.append([ny, nx])
                    visited[ny][nx] = True
                    mySet.add(nx)
                    extent +=1

        for x in list(mySet) :
            hash[x] += extent

    for i in range(M):
        for j in range(N):
            if visited[i][j]:
                continue

            if land[i][j] == 0:
                visited[i][j] = True
            else:
                _BFS(i, j)

    return max(hash.values())


# print(
#     solution(
#         [
#             [0, 0, 0, 1, 1, 1, 0, 0],
#             [0, 0, 0, 0, 1, 1, 0, 0],
#             [1, 1, 0, 0, 0, 1, 1, 0],
#             [1, 1, 1, 0, 0, 0, 0, 0],
#             [1, 1, 1, 0, 0, 0, 1, 1],
#         ]
#     )
# )  # 9

# print(solution([[1, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]])) # 16
