from itertools import permutations


def solution(k, dungeons):
    maxVal = 0

    for perm in permutations(dungeons):
        currentCost = k
        val = 0

        for [required, cost] in perm:
            if currentCost >= required:
                currentCost -= cost
                val += 1

        maxVal = max(val, maxVal)

    return maxVal


print(solution(80, [[80, 20], [50, 40], [30, 10]]))
