var containsNearbyDuplicate = function (nums, k) {
  const indexMap = new Map();

  for (let [i, v] of nums.entries()) {
    if (indexMap.has(v) && i - indexMap.get(v) <= k) return true;
    indexMap.set(v, i);
  }

  return false;
};
