class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        hash = {}

        for [i, num] in enumerate(nums) :
            if num not in hash :
                hash[num] = []
            hash[num].append(i)

        for num in  nums :
            if target - num not in hash :
                continue

            if num == target - num :
                if len(hash[num]) > 1 :
                    return [hash[num][0], hash[num][1]]
            else :
                return [hash[num][0], hash[target - num][0]]

        return [0, 0]
    
    def twoSum2(self, nums: list[int], target: int) -> list[int]:
        hashmap = dict()

        for i,v in enumerate(nums):
            if v in hashmap:
                return [hashmap[v],i]
            else:
                hashmap[target-v] = i
        
        return [0,0]

s = Solution()
print(s.twoSum2([3,2,4], 6))