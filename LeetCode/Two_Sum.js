var twoSum = function (nums, target) {
  const indexMap = new Map();

  nums.forEach((v, i) => {
    if (!indexMap.has(v)) indexMap.set(v, []);
    indexMap.get(v).push(i);
  });

  for (let i = 0; i < nums.length; i++) {
    if (indexMap.has(target - nums[i])) {
      if (2 * nums[i] === target) {
        if (indexMap.get(nums[i]).length > 1)
          return [indexMap.get(nums[i])[0], indexMap.get(nums[i])[1]];
        else
          continue
      } 
      return [i, indexMap.get(target - nums[i])[0]];
    }
  }
  return [-1, -1];
};
