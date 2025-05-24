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
