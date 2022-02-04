const fs=require('fs');

/*console.log("this is first statment");
fs.readFile('index.txt',()=>{
setTimeout(() => {
    console.log("This is the second statement");
},1000)
setImmediate(() =>{
    console.log("the imediate the work statement");
})
console.log('this is third statement');

})
let bar;
function someAsyncApiCall(callback){
    process.nextTick(callback);
}
someAsyncApiCall(()=>{
    console.log('bar',bar);
});
bar=1;
*/
const bar = () =>{
    console.log('bar');
    setTimeout(foo,1000);
    baz()
}
const baz = () =>{
    console.log('baz');
}

const foo = () =>{
    console.log('foo')
    // bar()
   
}
bar()