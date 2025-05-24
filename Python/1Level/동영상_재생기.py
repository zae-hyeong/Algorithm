def solution(video_len, pos, op_start, op_end, commands):
    videoEnd = list(map(lambda x: int(x), video_len.split(":")))
    curPos = list(map(lambda x: int(x), pos.split(":")))
    opStart = list(map(lambda x: int(x), op_start.split(":")))
    opEnd = list(map(lambda x: int(x), op_end.split(":")))

    def _timeCalc(min, sec, dt):
        if dt > 0:
            time = [0, 0]

            if sec + dt >= 60:
                time = [min + 1, (sec + dt) % 60]
            else:
                time = [min, sec + dt]

            if time[0] >= videoEnd[0] and time[1] >= videoEnd[1]:
                time = videoEnd[:]

            return time

        else:
            time = [0, 0]

            if sec + dt < 0:
                if min == 0:
                    time = [0, 0]
                else:
                    time = [min - 1, 60 + sec + dt]
            else:
                time = [min, sec + dt]

            return time

    def isInOpening(min, sec):
        if min == opStart[0] :
            return sec >= opStart[1]
        elif min == opEnd[0]:
            return sec <= opEnd[1]
        elif min > opStart[0] and min < opEnd[0]:
            return True
        else :
            return False
        
    print(isInOpening(curPos[0], curPos[1]))

    if isInOpening(curPos[0], curPos[1]):
        curPos = opEnd[:]
        print(curPos)

    print(curPos)

    for command in commands:
        if command == "next":
            curPos = _timeCalc(curPos[0], curPos[1], 10)

        elif command == "prev":
            curPos = _timeCalc(curPos[0], curPos[1], -10)

        if isInOpening(curPos[0], curPos[1]):
            curPos = opEnd[:]

    if curPos[0] < 10:
        curPos[0] = "0" + str(curPos[0])
    if curPos[1] < 10:
        curPos[1] = "0" + str(curPos[1])
    return f"{curPos[0]}:{curPos[1]}"


# print(solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"]))  # 13:00
print(solution("07:22", "04:05", "00:15", "04:07", ["next"]))  # "04:17"
