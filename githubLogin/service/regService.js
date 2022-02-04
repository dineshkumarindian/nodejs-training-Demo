const model = require('../model/regModel');

const regService = async(body) =>{
    const createDetail = {
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email,
        password:body.password
    }
    const dataService = await new model(createDetail).save();
    return dataService;
}

const getService = async() =>{
    const getInfo = await model.find({});
    return getInfo;
}

module.exports ={regService,getService};