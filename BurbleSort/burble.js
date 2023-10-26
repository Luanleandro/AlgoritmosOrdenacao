function burbleSort(array) {
  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

function generateRange(n) {
  let range = [];
  for (let i = 0; i <= n; i++) {
    range[i] = parseInt(Math.random() * 100000);
  }
  return range;
}

console.time();
vetor = generateRange(100000);
console.log(vetor);
burbleSort(vetor);
console.log(vetor);
console.timeEnd();
