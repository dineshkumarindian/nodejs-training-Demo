const express = require('express');
const router = express.Router();
const schema = require('../model/registerModel');
const control = require('../controller/regLoginControl')
const validate = require('../controller/validation/auth');
const authenticate = require('../middleware/jwtauth')


router.post('/register',validate.signup,control.saveController);
router.get('/login/:email/:password', control.getLoginController);
router.post("/welcome",authenticate.verifyToken,(req,res)=>{
     res.status(200).send("Welcome");
 })


module.exports = router;