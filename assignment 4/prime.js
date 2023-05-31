var readlineSync=require("readline-sync");
let x= readlineSync.question("enter a number: ");
x=parseInt(x);
if(x===1||x===0){
    console.log("either prime or composite");
}
for (i=2;i<x/2;i++){
    if(x%i===0){
        console.log("This is not a prime number");
        break;
    }
    else{
        console.log("This is a prime number");
        break;
    }
}