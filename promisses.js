console.log("satarted");
var x=0
new Promise((resolve, reject) => {
    //waiting promisses code
    setTimeout(()=>{
        x="welcom to code"
        let err=true
        if(err){
            reject()
        }
        resolve()
    },3000)
}).then(()=>{
  
     console.log(x);
    
})
.catch(()=>{
    console.log("error happen");
})

 console.log("code ended");
