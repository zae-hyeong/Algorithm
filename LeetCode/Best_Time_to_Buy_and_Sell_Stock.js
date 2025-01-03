/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxCapitalGain = 0;

  prices.forEach((price) => {
    minPrice = Math.min(minPrice, price);
    maxCapitalGain = Math.max(price - minPrice, maxCapitalGain);
  });

  return maxCapitalGain;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
