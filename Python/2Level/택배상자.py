def solution(order):

    stack = []
    idx = 0
    N = len(order)

    for i in range(1, N + 1):
        stack.append(i)

        while stack[-1] == order[idx]:
            idx += 1
            stack.pop()
            if len(stack) == 0:
                break

        i += 1

    return idx


print(solution([4, 3, 1, 2, 5]))
