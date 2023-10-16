const userObject= {
    "name": 'irshad',
    "id": 2
}

function info (obj){
    return (key)=>{
        return obj[key];
    }
}

let mydata= info(userObject)
console.log(mydata('id'))
