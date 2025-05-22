def solution(n):
    if n <= 2:
        return n

    a = 1
    b = 2

    for i in range(1, n - 1):
        a, b = b, (a + b) % 1234567

    return b


print(solution(4))
print(solution(3))
print(solution(2))
print(solution(5))
print(solution(200))
