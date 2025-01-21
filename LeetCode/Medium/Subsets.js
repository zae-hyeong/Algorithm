/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  const subset = [];
  (function _helper(i) {
    if (i === nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    _helper(i + 1); // 선택한 경우

    subset.pop();
    _helper(i + 1); // 선택안한 경우
  })(0);

  return result;
};

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
