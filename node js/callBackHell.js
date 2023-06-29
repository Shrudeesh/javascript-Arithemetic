const { log } = require("console")

function add (a,b){
return new Promise((res,rej) => {
    let result= a+b
    res(result)
})
}
function multi (a,b){
    return new Promise((res,rej) => {
        result=a*b
        res(result)
    })
}
add(20,30).then((result)=>{
    console.log(result);
    return multi(result,result)
}).then((rea)=>{
    console.log(rea);
})