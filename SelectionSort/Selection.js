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
v = [10, 2, 23, 1, 34, 18];
selectionSort(v, 0, 5);
console.log(v);
