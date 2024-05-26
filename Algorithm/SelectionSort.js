function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestNumberIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[smallestNumberIndex] > arr[j]) smallestNumberIndex = j;
    }
    [arr[i], arr[smallestNumberIndex]] = [arr[smallestNumberIndex], arr[i]];
  }

  return arr;
}

console.log(selectionSort([9, 6, 7, 3, 8, 5]));
console.log(selectionSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 121]));