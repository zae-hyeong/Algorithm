function solution(name) {
  const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  let input = Array.from({ length: name.length }, () => "A");

  let controlCount = 0;
  let cursorIdx = 0;

  function getMinAlphabetChange(char) {
    const charIdx = alphabet.indexOf(char);
    return Math.min(charIdx, 26 - charIdx);
  }

  function changeInput(cursorIdx) {
    input[cursorIdx] = name[cursorIdx];
  }

  function getMinCursorMovement(cursorIdx) {
    let leftMove = 0;
    let rightMove = 0;

    let i = cursorIdx;
    while (name[i] === input[i]) {
      i = i - 1 < 0 ? name.length - 1 : i - 1;
      leftMove++;
    }

    i = cursorIdx;
    while (name[i] === input[i]) {
      i = i + 1 >= name.length ? 0 : i + 1;
      rightMove++;
    }

    return leftMove < rightMove ? -leftMove : rightMove;
  }

  function moveCursor(cusorIdx, move) {
    if (move > 0) {
      // right move
      return cusorIdx + move >= input.length
        ? cursorIdx - input.length + move
        : cusorIdx + move;
    } else {
      // left move
      return cusorIdx + move < 0
        ? input.length + move + cursorIdx
        : cusorIdx + move;
    }
  }

  while (name !== input.join("")) {
    controlCount += getMinAlphabetChange(name[cursorIdx]);
    changeInput(cursorIdx);

    if (name !== input.join("")) {
      const move = getMinCursorMovement(cursorIdx);
      controlCount += Math.abs(move);
      cursorIdx = moveCursor(cursorIdx, move);
    }
  }

  return controlCount;
}

console.log(solution("BB")); // 3
console.log(solution("JEROEN")); // 56
console.log(solution("JAN")); //23
