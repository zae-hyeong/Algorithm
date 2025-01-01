/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/* 느린 방법(NlogN) */
var isAnagram = function(s, t) {
    return Array.from(s).sort().join('') === Array.from(t).sort().join('');
};

/* 조금 더 빠른 방법(3N) */
var isAnagram = function (s, t) {
  const hash = {};

  Array.from(s).forEach((v) => {
      if (!hash[v]) hash[v] = 0;
      hash[v] += 1;
  })

  Array.from(t).forEach((v) => {
      hash[v] -= 1;
  });

  for (const [, v] of Object.entries(hash)) {
      if (v !== 0) return false;
  }

  return true;
};