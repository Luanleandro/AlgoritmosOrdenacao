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

// vetor = [5, 2, 20, 16, 6];
// console.log(insectionSort(vetor, 0, 4));

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

vetor = [5, 2, 7, 20, 16, 6, 50, 0];
console.log(insectionSort(vetor));
