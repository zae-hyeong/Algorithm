function solution(phone_book) {
  const sortedPhoneBook = phone_book.sort();

  let result = true;

  phone_book.reduce((prevVal, currVal) => {
    if (currVal.indexOf(prevVal) === 0) result = false;
    return currVal;
  });

  return result;
}

console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123","456","789"]));
console.log(solution(["12","123","1235","567","88"]));
console.log(solution(["0", "10"]));