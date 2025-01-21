/**
 * @param {string} digits
 * @return {string[]}
 */

const phoneLetterHash = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

var letterCombinations = function (digits) {
  if (!digits.length) return []; // 빈 문자열 처리
  
  const result = [];

  (function _helper(idx, comb) {
    if (idx === digits.length) {
      result.push(comb);
      return;
    }

    for (const v of Array.from(phoneLetterHash[digits[idx]])) {
      _helper(idx + 1, comb + v);
    }
  })(0, "");

  return result;
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));
