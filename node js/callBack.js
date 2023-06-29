function sum(a,b,cb) {
let result=a+b
cb(result)
}
let display=(res)=>{console.log(res);}

//setTime//
sum(10,30,display)
setTimeout(()=>{
    console.log("hey This is Shrudeesh");
},3000)

// //setIntervel//
setInterval(()=>{
    console.log("what is up guys");
},3000)