function two(){
    var a;
   
    console.log(a);// undefined
  }
  function one(){
    var a=2;
    console.log(a); // 2
    //console.log("fun one",a);
    two();
  }
  var a=1; 
  console.log(a);  //1 
  one();



/*----------------------------*/
  console.log("1");
setTimeout(function(){
   console.log("2");
}, 5);
setTimeout(function(){
   console.log("3");
}, 0);
setTimeout(function(){
   console.log("4");
}, 2000);
console.log("5");

// output : 1,5,3,2,4
/*----------------------------*/