function sum(a,b,cd){
let result=a+b
cd(result)
}

let result=(res)=>{console.log(res);}
sum(10,20,result)