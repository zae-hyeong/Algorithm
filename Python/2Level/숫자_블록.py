def solution(begin, end):
    answer = []

    for i in range(begin, end + 1) :
        k = 0 if i == 1 else 1

        for j in range(2, int(i**0.5) + 1):
            if i % j == 0 and i // j <= 10000000:
                k = i // j   # 제일 먼저 만나는 몫이 최댓값
                break
        
        answer.append(k)

    return answer

print(solution(1, 10))