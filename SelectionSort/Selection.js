function selectionSort(array, l, r) {
  if (l == r) {
    return array;
  }
  menor = l;
  for (let i = l + 1; i <= r; i++) {
    if (array[i] < array[menor]) {
      menor = i;
    }
  }
  let aux = array[menor];
  array[menor] = array[l];
  array[l] = aux;

  selectionSort(array, l + 1, r);
}

function generateRange(n) {
  let range = [];
  for (let i = 0; i <= n; i++) {
    range[i] = parseInt(Math.random() * 7000);
  }
  return range;
}

console.time();
v = generateRange(7000);
console.log(v);
selectionSort(v, 0, 6999);
console.log(v);
console.timeEnd();
