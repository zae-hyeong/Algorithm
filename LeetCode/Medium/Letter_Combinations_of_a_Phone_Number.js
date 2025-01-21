/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
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

  function _helper(remainDigits) {
    if (remainDigits.length === 0) return [];
    if (remainDigits.length === 1)
      return phoneLetterHash[remainDigits].split("");
    const result = [];

    phoneLetterHash[remainDigits[0]].split("").forEach((fixed) => {
      const returnVal = _helper(remainDigits.slice(1));
      result.push(...returnVal.map((v) => fixed + v));
    });
    return result;
  }

  return  _helper(digits);
};

console.log(letterCombinations("23"));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));
