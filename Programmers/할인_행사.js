function isObjectSame(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let i = 0; i < obj1Keys.length; i++) {
    if (obj1[obj1Keys[i]] !== obj2[obj1Keys[i]]) {
      return false;
    }
  }

  return true;
}

function solution(want, number, discount) {
  let answer = 0;

  const wandtedItems = {};
  const discountItems = {};

  for (let i = 0; i < want.length; i++) {
    wandtedItems[want[i]] = number[i];
  }

  const totalNumOfWantedList = number.reduce((acc, cur) => acc + cur, 0);

  let front = 0;
  let rear = totalNumOfWantedList - 1;

  for (let i = front; i <= rear; i++) {
    if (discountItems[discount[i]] === undefined) {
      discountItems[discount[i]] = 1;
    } else {
      discountItems[discount[i]] += 1;
    }
  }

  while (rear < discount.length) {
    if (isObjectSame(wandtedItems, discountItems)) {
      answer += 1;
    }

    discountItems[discount[front]] -= 1;
    if (discountItems[discount[front]] === 0) {
      delete discountItems[discount[front]];
    }

    front += 1;

    discountItems[discount[rear + 1]] =
      discountItems[discount[rear + 1]] + 1 || 1;
    rear += 1;
  }

  return answer;
}

function solution2(want, number, discount) {
  let answer = 0;

  const wandtedItems = {};

  for (let i = 0; i < want.length; i++) {
    wandtedItems[want[i]] = number[i];
  }

  const totalNumOfWantedList = number.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i <= discount.length - totalNumOfWantedList; i++) {
    const discountItems = {};

    for (let j = i; j < i + totalNumOfWantedList; j++) {
      discountItems[discount[j]] = (discountItems[discount[j]] || 0) + 1;
    }

    if (isObjectSame(wandtedItems, discountItems)) {
      answer += 1;
    }
  }

  return answer;
}

console.log(
  solution2(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
console.log(
  solution2(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
);
