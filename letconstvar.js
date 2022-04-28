
//console.log(a) //  Cannot access 'a' before initialization
console.log(b) //  undefined
let a= 5;
var b=6;
console.log(a) // 5
console.log(b)  // 6

// var code (global)
console.log(s); // undefined
var s = 'Mukul Latiyan';
//function scoped
function fun(){
	console.log(name);
	var name = 'Mukul Latiyan';
}
fun(); // undefined
