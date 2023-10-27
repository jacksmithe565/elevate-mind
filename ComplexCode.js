/* 
   Filename: ComplexCode.js
   Description: This code demonstrates a complex implementation of a sorting algorithm using recursion and multiple sorting techniques.
*/

// Helper function to swap array elements
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Implementation of Bubble Sort Algorithm
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

// Implementation of Selection Sort Algorithm
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    swap(arr, i, minIndex);
  }

  return arr;
}

// Implementation of Quick Sort Algorithm
function quickSort(arr, low, high) {
  if (low < high) {
    const partitionIndex = partition(arr, low, high);

    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }

  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
}

// Implementation of Merge Sort Algorithm
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

// Main program
function complexSort(arr) {
  console.log('Original Array:', arr);
  
  const sortedArray1 = bubbleSort(arr.slice());
  console.log('Bubble Sort:', sortedArray1);

  const sortedArray2 = selectionSort(arr.slice());
  console.log('Selection Sort:', sortedArray2);

  const sortedArray3 = quickSort(arr.slice(), 0, arr.length - 1);
  console.log('Quick Sort:', sortedArray3);

  const sortedArray4 = mergeSort(arr.slice());
  console.log('Merge Sort:', sortedArray4);
}

// Test case
const array = [9, 4, 6, 2, 5, 1, 8, 3, 7];
complexSort(array);