const modelSchema = require('../model/userModel');

const userService = async (body) => {
    const createDetail = {
        firstName: body.firstName,
        lastName: body.lastName,
        age: body.age,
        role: body.role,
        place: body.place,
        salary: body.salary
    }
    const dataService = await new modelSchema(createDetail).save();
    return dataService;
}
const userGetService = async () => {
    const getService = await modelSchema.find({});
    return getService;
}
const userUpdateService = async (id, body) => {
    const updateService = await modelSchema.findOneAndUpdate(id, body);
    return updateService;
}
const userDeleteService = async (id) => {
    const deleteService = await modelSchema.findOneAndDelete(id);
    return deleteService;
}
const userGetIdService = async (id) => {
    const getId = await modelSchema.findById({ _id: id });
    return getId;
}
module.exports = { userService, userGetService, userUpdateService, userDeleteService, userGetIdService };  