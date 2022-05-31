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




var twoSum =(nums, target) =>{
  for (var i = 0; i < nums.length; i++) {
       for (var j = i + 1; j < nums.length; j++) {
           if (nums[j] == target - nums[i]) {
               return  [i,j]
           }
       }
   } 
};

console.log("=============")
console.log(twoSum([1,3,4,5],7))




const maxSpeed = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};

const sortable = Object.fromEntries(
    Object.entries(maxSpeed).sort(([,a],[,b]) => a-b)
);

console.log(sortable);


const maxSpeed2 = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};

const sortable2 = Object.entries(maxSpeed).sort(([,a],[,b])=>a-b);
const finalRe = Object.fromEntries(sortable2)
console.log(sortable2);
console.log(finalRe);



const arr21 = [7, 1, 8, [[[5, 4]]]];

console.log(arr21.flat(Infinity).sort());