const limits =  parseInt(readlineSync.question(`Enter the array limit :`));
const array = [];

console.log('Enter the values of array:');
for(i=0 ;i<=limits; i++){
  const value = parseInt(readlineSync.question(`Value ${i+1}: `));
  array.push(value)
}


let evenCount = 0;
for(i=0 ;i< array.length; i++){
 if(array[i] % 2 === 0){
  evenCount++;
 }
}

console.log(`Number of Even number in the given array is:`,evenCount);