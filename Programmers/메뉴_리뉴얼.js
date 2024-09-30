function combine(arr, n) {
  if (n === 1) return arr.map((v) => [v]);

  const result = [];

  arr.forEach((fixed, index, arr) => {
    result.push(
      ...combine(arr.slice(index + 1), n - 1).map((v) => [fixed, ...v])
    );
  });

  return result;
}

function solution(orders, course) {
  var answer = [];

  for (const c of course) {
    const orderCombination = {};

    for (const order of orders) {
      const orderCombinationPerOrder = combine(order.split("").sort(), c).map(
        (v) => v.join("")
      );
      orderCombinationPerOrder.forEach((v) => {
        orderCombination[v] = orderCombination[v] ? orderCombination[v] + 1 : 1;
      });
    }

    const sortedOrderCombination = Object.keys(orderCombination)
      .sort((a, b) => orderCombination[b] - orderCombination[a])
      .filter(
        (v, i, arr) =>
          orderCombination[v] > 1 &&
          orderCombination[v] === orderCombination[arr[0]]
      );

    answer = [...answer, ...sortedOrderCombination];
  }

  return answer.sort();
}

function solution2(orders, course) {
  var answer = [];

  for (const c of course) {
    const orderCombination = {};

    for (const order of orders) {
      combine(order.split("").sort(), c)
        .map((v) => v.join(""))
        .forEach((v) => {
          orderCombination[v] = (orderCombination[v] || 0) + 1;
        });
    }

    const sortedOrderCombination = Object.keys(orderCombination)
      .sort((a, b) => orderCombination[b] - orderCombination[a])
      .filter(
        (v, i, arr) =>
          orderCombination[v] > 1 &&
          orderCombination[v] === orderCombination[arr[0]]
      );

    answer = [...answer, ...sortedOrderCombination];
  }

  return answer.sort();
}

// console.log(
//   solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
// );
// console.log(
//   solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
// );
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
