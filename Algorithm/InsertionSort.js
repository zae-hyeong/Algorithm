function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i-1; j >= 0; j--) {
      if (arr[j] > arr[i] ) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
        i = j;
      } else break;
    }
  }

  return arr;
}

console.log(insertionSort([9, 6, 7, 3, 8, 5]));
console.log(insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 121]));