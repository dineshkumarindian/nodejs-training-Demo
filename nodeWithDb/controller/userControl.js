
const viewService = require('../service/userservice');
const jwtToken  = require('../middleware/jwtauth');


const userSaveController = async (req, res) => {
    try {
        const saveData = await viewService.userService(req.body);
        const resJwttoken = await jwtToken.jwtConfig(saveData._id);
        const response = {
            saveData,
            Token:resJwttoken
        }
       return res.send(response).status(200);
        // console.log(response);
    } catch (err) {
        return res.send(err).status(404);
    }
}
const userGetController = async (req, res) => {
    try {
        const getData = await viewService.userGetService();
        console.log(getData);
        return res.send(getData).status(200);
    } catch (err) {
        return res.send(err).status(404);
    }
}
const userUpdateController = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const body = {};
        body.firstName = req.body.firstName;
        body.lastName = req.body.lastName;
        body.age = req.body.age;
        body.role = req.body.role;
        body.place = req.body.place;
        body.salary = req.body.salary;
        console.log(body);
        const updateData = await viewService.userUpdateService(id, body);
        console.log(updateData);
        return  res.send(updateData).status(200);
    } catch (error) {
        return res.send(error).status(404);
    }
}
const userDeleteController = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const deleteData = await viewService.userDeleteService(id);
        return res.send(deleteData).status(200);
    } catch (error) {
        return res.send(error).status(404);
    }
}
const userGetIdController = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const getId = await viewService.userGetIdService(id);
        console.log(getId);
        return res.send(getId).status(200);

    } catch (error) {
        return res.send(error).status(404);
    }
}

module.exports = { userSaveController, userGetController, userUpdateController, userDeleteController, userGetIdController };