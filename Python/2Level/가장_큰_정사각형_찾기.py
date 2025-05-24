def solution(board):
    N = len(board)
    M = len(board[0])

    maps = [([0] * M) for n in range(N)]

    for m in range(M):
        maps[0][m] = board[0][m]

    for n in range(N):
        maps[n][0] = board[n][0]

    maxSize = 0

    for n in range(1, N):
        for m in range(1, M):
            if board[n][m] == 0:
                maps[n][m] = 0
                continue

            if not all([maps[n - 1][m], maps[n - 1][m - 1], maps[n][m - 1]]):
                maps[n][m] = 1
                maxSize = max([maxSize, 1])
                continue

            maps[n][m] = min([maps[n - 1][m], maps[n - 1][m - 1], maps[n][m - 1]]) + 1
            maxSize = max([maxSize, maps[n][m]])

    return maxSize * maxSize


print(solution([[1,0],[0,0]]))
def solution(board):
    N = len(board)
    M = len(board[0])

    for i in range(1, N):
        for j in range(1, M):
            if board[i][j] == 1:
                board[i][j] = min([board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]]) + 1
                # maxSize = max(maxSize, board[i][j]) # 이 방법은 안됨..

    maxSize = 0
    for i in range(N):
        temp = max(board[i])
        maxSize = max(maxSize, temp)
    

    return maxSize * maxSize
