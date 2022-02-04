const service = require('../service/regLoginService');
const { check, validationResult } = require('express-validator');
const token = require('../middleware/jwtauth');
const modelSchema = require('../model/registerModel');

const saveController = async (req, res) => {
    try {
        const body = req.body;
        const oldUser = await modelSchema.findOne({ email: body.email });
        if (oldUser) {
            return res.status(409).send('email already exist');
        } else {
            const saveData = await service.saveRegisterService(body);
            const jwtConfig = await token.jwtConfig(saveData._id);
            const responseData = {
                saveData,
                configToken: jwtConfig
            }
            console.log(responseData);
            return res.send(responseData).status(200);
        }
    } catch (error) {
        console.log(error);
        return res.send(error).status(404);
    }
}
const getLoginController = async (req, res) => {
    try {
        const email = req.params.email;
        console.log(email);
        const password = req.params.password;
        console.log(password);
        // console.log("the login data is..." + getLogin);
        const user = await modelSchema.findOne({ email: email }, { password: password });
        console.log(user);
        if (user) {
            const getLogin = await service.getLoginService(email, password);
            console.log(getLogin);
            return res.send(getLogin);
        } else {
            console.log('error...');
            return res.send('login failed put correct email and password.');
        }
        // return res.send(response).status(200);
    } catch (error) {
        return res.send(error).status(404);
    }
}
module.exports = { saveController, getLoginController };