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
// let d2=JSON.stringify(obj['a']['b']['c']['d'])
// console.log(JSON.stringify(obj['a']['b']['c']['d']))
//return d2
path=path.split('.')
var len=path.length;
  for (var i=0;i<len; i++){
        obj = obj[path[i]];
        console.log(obj)
    };
    return obj;

}


console.log(fp(obj,'a.b.c.d')); //12

const lens = (obj, path) => path.split(".").reduce((o, key) => o && o[key] ? o[key] : null, obj); 
console.log(lens(obj, 'a.b.c'))