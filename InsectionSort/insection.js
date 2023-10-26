// function insectionSort(array, l, r) {
//   for (let i = l + 1; i <= r; i++) {
//     for (let j = i; j > l; j--) {
//       if (array[j] < array[j - 1]) {
//         let temp = array[j - 1];
//         array[j - 1] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   return array;
// }

// console.time();
// vetor = generateRange(100000);
// console.log(vetor);
// insectionSort(vetor, 0, 99999);
// console.log(vetor);
// console.timeEnd();

function insectionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let numberToAdd = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > numberToAdd) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = numberToAdd;
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
insectionSort(vetor);
console.log(vetor);
console.timeEnd();
