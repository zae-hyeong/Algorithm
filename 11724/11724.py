a, b = input().split()
numNode = int(a)
numEdge = int(b)

nodeList = []

i=0
for i in range(0, numEdge) :
    print(i)
    a, b = input().split()
    tempNum1 = int(a)
    tempNum2 = int(b)

    tempList = []

    if a > b : 
        tempList.append(b)
        tempList.append(a)
    else : 
        tempList.append(a)
        tempList.append(b)

    nodeList.append(tempList)

print(nodeList)

for i in range(len(nodeList) - 1, 0, -1):
    for j in range(i):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]