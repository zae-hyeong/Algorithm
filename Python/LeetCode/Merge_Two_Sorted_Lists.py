from collections import deque


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    # def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
    def mergeTwoLists(self, list1, list2):
        answer = []

        l1 = deque()
        l2 = deque()

        for i in list1:
            l1.append(i)

        for i in list2:
            l2.append(i)

        while len(l1) != 0 and len(l2) != 0:
            if l1[0] >= l2[0]:
                answer.append(l2.popleft())
            else:
                answer.append(l1.popleft())

        return answer
s  = Solution()
print(s.mergeTwoLists([1,2,4], [1,3,4]))