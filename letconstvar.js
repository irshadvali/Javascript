
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


hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;


hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction(){ 
  console.log(" Hello world! ");
}



// Hoisting takes place in the local scope as well
function doSomething(){
	x = 33;
	console.log(x);
	var x;
  }
  doSomething(); // Outputs 33 since the local variable “x” is hoisted inside the local scope


var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;
/* 
// **Note - To avoid hoisting, 
you can run javascript in strict mode by using “use strict” on top of the code:


"use strict";
x = 23; // Gives an error since 'x' is not declared
var x; 


*/