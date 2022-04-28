
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
