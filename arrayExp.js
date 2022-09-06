// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
console.log("Welcome to Programiz!");
function myCompare(X,Y)
{
    // assign X to XY since XY starts with X first
    // assign Y to YX since YX starts with Y first
    let XY=X,YX=Y,revX=0,revY=0;
     
    //reverse X and assign to revX
    while(X)
    {
        revX=revX*10+X%10;
        X = Math.floor(X/10);
    }
     
    //reverse Y and assign to revY
    while(Y)
    {
        revY=revY*10+Y%10;
        Y = Math.floor(Y/10);
    }
     
    // first append Y at the end of X
    while(revY)
    {
        XY=XY*10+revY%10;
        revY = Math.floor(revY/10);
    }
 
    // then append X at the end of Y
    while(revX)
    {
        YX=YX*10+revX%10;
        revX=Math.floor(revX/10);
    }
 
    // Now see which of the two
    // formed numbers is greater
    return YX-XY;
}
 
// The main function that prints
// the arrangement with the
// largest value. The function
// accepts a vector of strings
function printLargest(arr)
{
     
    // Sort the numbers using
    // library sort function. The
    // function uses our comparison
    // function myCompare() to
    // compare two strings. See
    // http://www.cplusplus.com/reference/
    // algorithm/sort/
    // for details
    arr.sort(myCompare);
    console.log(arr)
    for (let i = 0; i < arr.length; i++)
        document.write(arr[i]);
}
 
printLargest([54,546,548,60])