const obj = {

    a: {

        b: {

            c: {
                
                d:9,
                e: 6
            },

            j: false

        }

    }

};

function fp(obj,path){
let d2=JSON.stringify(obj['a']['b']['c']['d'])
console.log(JSON.stringify(obj['a']['b']['c']['d']))

  
  return d2

}

console.log(fp(obj,'abc')); //12