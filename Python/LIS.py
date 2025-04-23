nums = list(map(lambda v : int(v), input().split()))

LIS = [1] * len(nums)

for i in range(1, len(nums)) :
    for j in range(0, i) :
        if nums[j] < nums[i] :
            LIS[i] = max([LIS[j] + 1, LIS[i]])
            
print(LIS)