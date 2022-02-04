import {validateInfo,processPayment,calculating} from './application2.js';
// const q = require('./application2');
console.log("The Validatation Info.......",validateInfo("12345"));

console.log("The processPayment........",processPayment("success"));

console.log("The calculating detail.....", calculating("amount"));


console.log(q.square(5));
console.log(q.cube(6));
console.log(cube(6));

const company = require("./application2");

console.log(company);

console.log(company.name);
console.log(company.age);
console.log(company.college);
company(4,5);

const f = require('./application2');
console.log(f.square(5));
console.log(f.cube(6));
