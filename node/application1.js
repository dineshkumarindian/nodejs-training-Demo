const bluebird = require('bluebird');
const axios = require('axios');
const { resolve } = require('bluebird');

 function greeting(name){
    console.log(name);
  }
  function processUserInput(callback){
    var name="dinesh";
    callback(name);
    
  }
  processUserInput(greeting); //callback
  
  setTimeout(function() {console.log("callback dinesh=====")}, 5000);
  function add(a,b,callback){
    let c=a+b;
  console.log('the sum is'+a+" "+b+"is:");
  callback(c);
  }
  function disp(c){
    console.log('the sum of amount is submitted '+c);
  }
  add(5,6,disp);
  
  const callback = (sum) =>{console.log("the sum is..."+sum)};
  function getSum(num1,num2,callback){
    callback(num1+num2);
  }
  getSum(4,5,callback);

  //avoid callback hell

  // Makes a burger
// makeBurger contains four steps:
//   1. Get beef
//   2. Cook the beef
//   3. Get buns for the burger
//   4. Put the cooked beef between the buns
//   5. Serve the burger (from the callback)
// We use callbacks here because each step is asynchronous.
//   We have to wait for the helper to complete the one step
//   before we can start the next step

const makeBurger = nextStep => {                          // writing commands
    getBeef(function(beef) {
      cookBeef(beef, function(cookedBeef) {
        getBuns(function(buns) {
          putBeefBetweenBuns(buns, beef, function(burger) {
            nextStep(burger);
          });
        });
      });
    });
  };
  const getBeef = nextStep => {
    const fridge = leftFright;
    const beef = getBeefFromFridge(fridge); //split the callback into different function
    nextStep(beef);
  };
  
  var promise = new Promise(function(resolve,reject){ //promise
    const x = "dinesh";
    const y = "dinesh";
    if( x === y ){
      resolve();
    }
    else {
      reject();
    }
    
  });
  promise.then(function(){
    console.log("success,you are the dinesh");
  },function(){
    console.log("failure some error occured");
  })
  const getData = async () =>{  //async
  let data = "hello world";
  return data;
}

getData().then(data => console.log(data));

const getdetail = async() =>{
  let data =await "i am dinesh"; //await
  
  return data;
  }
  console.log("dinesh");
  getdetail().then(data => console.log(data));
  console.log("kumar");
  
  function resolveFunction(){
    return new Promise(resolve =>{
       resolve('resolved');
    });
  }
  
  async function asyncCall(){
    console.log('calling');
    const result = await resolveFunction(); 
    console.log(result);
    console.log('interprocess');
}
asyncCall();

var bluePromise = new bluebird(   //bluebird promise
    function (resolve,reject){
        reject('something wend wrong');
    });

bluePromise.then(function(data) {
    console.log('response:'+data);
})
.catch(function(err){
    console.error("Error "+err);    
})

let  promiseReadFile = bluebird.promisify(require('fs').readfile);
promiseReadFile('m2.js').then((fileText) =>{
  console.log(fileText);
}).catch( (err) =>{
  console.log("error reading file",err);
})

const success = function(){  //conver to callback to Promise
  console.log("successfully");
}
const error = function(){
  console.log("very sad");
}

const caller = (function(status){
  return new Promise((resolve,reject)=> {
    if(status === "happy"){
      resolve();
    }
    else{
      reject();
    }
  })
})

caller("happy").then(success).catch(error);
caller("sad").then(success).catch(error);

const data_url ="https://jsonplaceholder.typicode.com/todos/1"; //convert promise to async/await

const fetchData = async() =>{
console.log("fetching...");
const result = await axios.get(data_url);
console.log(result.data.id);
// await new Promise(resolve =>setTimeout(resolve,2000));
console.log("fetch complete");

return result.data.title;
}

fetchData();
// .then(title =>{
// //   console.log(title);
// // })


