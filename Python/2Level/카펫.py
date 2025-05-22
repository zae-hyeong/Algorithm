import math


def solution(brown, yellow):
    totalCells = brown + yellow

    until = int(math.floor(math.sqrt(yellow))) + 1

    for x in range(1, until):
        if yellow % x != 0:
            continue

        y = int(yellow / x)

        if totalCells == (x + 2) * (y + 2):
            return [y + 2, x + 2]


# print(solution(10, 2))
# print(solution(8, 1))
print(solution(24, 24))
