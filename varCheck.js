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