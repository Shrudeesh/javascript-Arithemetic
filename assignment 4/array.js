var readlineSync=require("readline-sync");
let x= readlineSync.question("enter the size of an array: ");
x=parseInt(x);
let array=[];

let count=0;
for(let i=0;i<=(x-1);i++){
    array[i] = readlineSync.question(`enter the ${i} element: `);
    array[i]=parseInt(array[i]);
if(array[i]%2===0){
    count++;
}
}
console.log("the given array: ",array);
console.log("number of even numbers in the array: ",count);