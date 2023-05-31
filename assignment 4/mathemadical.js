var readlineSync=require("readline-sync");
console.log(`1. addition
2. substraction
3. mutiplication
4. division`);
let operation= parseInt(readlineSync.question("select the operation: "));
let x=parseInt(readlineSync.question("enter the first no: "));
let y=parseInt(readlineSync.question("enter the second no: "));
switch(parseInt){
    case 1: console.log("result:",x+y);
    break;
    case 2: console.log("result:",x-y);
    break;
    case 3: console.log("result:",x*y);
    break;
    case 4: console.log("result:",x/y);
    break;
    default:console.log("invalid entry");
    break;
}