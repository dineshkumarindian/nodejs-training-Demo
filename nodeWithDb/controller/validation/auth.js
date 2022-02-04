const { check, validationResult } = require("express-validator");

const signup = [
    check('firstName','firstname should be 1 to 20 characters').isLength({min:1,max:20}),
    check('lastName','lastName should be 1 to 20 characters').isLength({min:1,max:20}),
    check('dob',"The dob length is 4 to 10",).isLength({min:4,max:10}),
    check('email',"The put correct email").isEmail(),
    check('password',"The put correct password and length 6 to 15").isAlphanumeric().isLength(),(req,res,next) =>{
        const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(422).json({errors:errors.array()})
            }
        else next();
    }

];

const user = [
    check('firstName','firstName should be 1 to 20 characters').isLength({min:1,max:20}),
    check('lastName','lastName should be 1 to 20 characters').isLength({min:1,max:20}),
    check('age','The dob is 1 to 20 characters').isNumeric().isLength({min:2}),
    check('role','The role is 5 to 20 characters').isLength({min:5,max:20}),
    check('place','The place is 5 to 20 characters').isLength({min:5,max:20}),
    check('salary','The salary is ').isLength({min:5,max:20}),(req,res,next) =>{
        const err = validationResult(req);
        if(!err.isEmpty()){
            return res.status(422).json({err:err.array()})
        }
        else next();
    }
]

module.exports ={signup,user};