let arr=["Mumbai", "Delhi", "Kanpur", "Bangalore", "Mumbai", "Kanpur", "Delhi","Bangalore", "Kanpur", "Delhi" ]

let uniqCount= arr.reduce((prev,cur)=>{
    prev[cur]=(prev[cur] || 0) + 1;
    return prev;
},{})
console.log(uniqCount);//{ Mumbai: 2, Delhi: 3, Kanpur: 3, Bangalore: 2 }

count ={}

arr.forEach(function(i){
 count[i]=(count[i]||0)+1
})
console.log(count);// { Mumbai: 2, Delhi: 3, Kanpur: 3, Bangalore: 2 }


let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);

function toUniqueArray(a){
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        if (newArr.indexOf(a[i]) === -1) {
            newArr.push(a[i]);
        }
    }
  return newArr;
}
var colors = ["red","red","green","green","green"];
var colorsUnique=toUniqueArray(colors); // ["red","green"]
console.log(colorsUnique)


function removeDup(arr) {
    let result = []
    arr.forEach((item, index) => { if (arr.indexOf(item) == index) result.push(item) });
    return result;
  }
  console.log(removeDup(colors))

  function removeDup2(arr) {
    let result = []
    arr.map((item, index) => { 
        if (arr.indexOf(item) == index){ result.push(item)}
     });
    return result;
  }
  console.log(removeDup2(colors))