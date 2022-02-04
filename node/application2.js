/*module.exports = "Dineshkumar";

module.exports = {
    name:"dinesh",
    age:22,
    college:"KSRcollege"
}

module.exports = function(a,b){
    console.log(a+b);
}


function square(x){
    return x*x;
}
function cube(x){
    return x*x;
}
module.exports ={square,cube};  

export function validateInfo(accountNo){ //export
    if(accountNo === "12345"){
        return "The validation in succcessfully";
    } else {
        return "The validation is failure";
    }
}
export function processPayment(processPay){
    if(processPay === "success"){
        return "The process the payment."
    } else{
        return "failed the payment please check the Pin Number"
    }
}
export function calculating(amount){
    if(amount === "amount") {
        return "The Calculate the amount."
    } else{
        return "The amount is failed please enter correct amount";
    }

}
*/
import events from 'events';
const myEmitter = new events.EventEmitter();    //event emitters
    function c1(){
        console.log('an event occurred');
    }
    function c2(){
        console.log('yet another event occurred!');
    }    
myEmitter.on('eventOne',c1); //addEventListner method
myEmitter.on('eventOne',c2);
console.log(myEmitter.listenerCount('eventOne'));//listenerCount method
console.log(myEmitter.rawListeners('eventOne'));//rawListeners method
myEmitter.once('eventOne',() =>console.log('eventOnce event fired'));
// myEmitter.once('eventOne',() => console.log('registering the event'));
// myEmitter.on('status',(code,msg) => console.log('Got '+code+' and '+msg));
// console.log(myEmitter.rawListeners('eventOne'));
// console.log(myEmitter.listenerCount('eventOne'));
myEmitter.emit('eventOne');
// myEmitter.emit('status',200,'ok');
// myEmitter.off('eventOne',c1);  //removeevent Listner
// myEmitter.emit('eventOne');
// console.log(myEmitter.rawListeners('eventOne'));
// console.log(myEmitter.listenerCount('eventOne'));