var readlineSync = require("readline-sync");
let x= readlineSync.question(" enter number  :  ");
x=parseInt(x);
switch(x){
    case 1:console.log("sunday");
        break;
         case 2:console.log("Monday");
    break;
  case 3: console.log("Tuesday"); 
    break;
  case 4:console.log("wednesday");
    break;
  case 5:console.log("thursday");
    break;
  case 6:console.log("Friday");
    break;
  case  7:console.log("Saturday");
    break;
    default :console.log("Invalid Entry");
}



