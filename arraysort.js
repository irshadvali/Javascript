var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];
var Arr2 = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
          var x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }

console.log(Arr);
console.log(Arr2.sort());




/*-----------------------------*/
const original = [1, 7, 3, 5];
const sorted = original.slice().sort((a, b) => a - b)

console.log(sorted)