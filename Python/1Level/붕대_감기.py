# bandage =  [시전 시간, 초당 회복량, 추가 회복량]
# attacks = [[공격 시간, 피해량]]
def solution(bandage, maxHealth, attacks):

    i = 0
    health = maxHealth
    succesTime = 0
    for [sec, attack] in attacks:
        while i <= sec:

            if i == sec:
                health -= attack

                if health <= 0:
                    return -1
                
                succesTime = 1
                i += 1
                break


            if health < maxHealth:
                health = min(health + bandage[1], maxHealth)
            if succesTime >= bandage[0]:
                health = min(health + bandage[2], maxHealth)
                succesTime = 0

            succesTime += 1
            i += 1

            print(i, health)

    return health


print(solution([5, 1, 5], 30, [[2, 10], [9, 15], [10, 5], [11, 5]]))
