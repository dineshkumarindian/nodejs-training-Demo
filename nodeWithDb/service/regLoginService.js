
const schema = require('../model/registerModel');
const jwt = require('jsonwebtoken');

const saveRegisterService = async (body) => {
    const createRegister = {
        firstName: body.firstName,
        lastName: body.lastName,
        dob: body.dob,
        email: body.email,
        password: body.password
    }
    const saveData = await new schema(createRegister).save(); 
   return saveData;
}

const getLoginService = async (email, password) => {
    console.log('get email..' + email);
    console.log('get password..' + password);
    const getData = await schema.find({ email: email }, { password: password });
    console.log(getData);
    return getData;
}

module.exports = { saveRegisterService, getLoginService };
