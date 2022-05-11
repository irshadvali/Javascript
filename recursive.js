
const sum = function (a){
    return function (b){
        if(b){
            return sum(a+b)
        }
        return a
    }
}

const sume= a => b => b ? sume(a+b): a
console.log(sum(1)(2)(3)(4)()); //10
console.log(sume(1)(2)(3)(4)(5)()); //10


/*----------------------------------*/


let arr=["Mumbai", "Delhi", "Kanpur", "Bangalore", "Mumbai", "Kanpur", "Delhi","Bangalore", "Kanpur", "Delhi" ]

let uniqCount= arr.reduce((prev,cur)=>{
    prev[cur]=(prev[cur] || 0) + 1;
    return prev;
},{})
console.log(uniqCount);

count ={}

arr.forEach(function(i){
 count[i]=(count[i]||0)+1
})
console.log(count);