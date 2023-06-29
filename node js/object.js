const { log } = require("console");
const hasOwnProperty = require("has")

let dev={
Age:23,
Dob:2000,
Father:"krishnan",
mother:"ratha"
}
// Object.keys(dev)
// Object.values(dev)
// Object.entries(dev)
// Object.hasOwn(dev,"Age")
console.log(dev.hasOwnProperty("Father"));
for (const key in dev) {
//  console.log(key);
console.log(key,":",dev[key]);

}Object.entries(dev).map((Element)=>{
    console.log(Element[1]);
})