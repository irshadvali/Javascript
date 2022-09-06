function anagram (x, y){
    // x="mary";
    // y= "army"
    var lenOne=x.length;
    var lenTwo=y.length;
    
    if(lenOne===lenTwo){
         var str1=x.split('').sort().join('');
         var str2=y.split('').sort().join('');
        
        if(str1===str2){
            console.log("true");
        }
        else{
           console.log("false"); 
        }
          
          
    }
    else{
        console.log("false");  
    }
 
    
}


anagram("mary","army");