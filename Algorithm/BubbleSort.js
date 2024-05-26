function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
  }

  return arr;
}

console.log(bubbleSort([9, 6, 7, 3, 8, 5]));
console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 121]));