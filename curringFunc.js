let userObject={
    name: 'irshad',
    age: 28,
};

function userInfo(obj){
    return function(key){
        return obj[key];
    }
    
}


let res = userInfo(userObject);
console.log(res('age'))
console.log(userInfo(userObject)('age'));