from collections import deque


def solution(order):

    items = deque()
    for i in range(1, len(order) + 1):
        items.append(i)

    stack = deque()

    topItems = set()
    topItems.add(1)

    def pushToStack(v):
        if len(stack) > 0:
            lastItem = stack[len(stack) - 1]
            topItems.remove(lastItem)

        stack.append(v)
        topItems.add(v)

    def popFromStack():
        item = stack.pop()
        topItems.remove(item)
        if len(stack) > 0:
            topItems.add(stack[len(stack) - 1])
        return item

    def popFromItems():
        item = items.popleft()
        topItems.remove(item)

        if len(items) > 0:
            topItems.add(items[0])

        return item

    count = 0
    for target in order:
        if target not in topItems:
            if target < items[0]:
                return count

            while target > items[0]:
                v = popFromItems()
                pushToStack(v)

            popFromItems()
            count += 1

        else:
            if len(stack) > 0 and target == stack[len(stack) - 1]:
                popFromStack()
                count += 1
            elif target == items[0]:
                popFromItems()
                count += 1

        # print(items, stack, topItems)

    return count


print(solution([4, 3, 1, 2, 5]))
