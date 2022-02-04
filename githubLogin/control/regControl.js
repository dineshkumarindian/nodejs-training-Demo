const service = require('../service/regService');
const model = require('../model/regModel');

const saveRegControl = async(req,res) =>
{
    try{
    const  body = req.body;
    const regData = await service.regService(body);
    console.log(regData);
    res.send(regData).status(200);
    } catch(err) {
        res.send(err);
    }
}
const regGetController = async(req,res) =>{
    try{
        const email = req.params.email;
        const getEmail = model.findOne({email:email});
        if(!getEmail) {
           return res.status(404).send("email not found"+email);
        } 
        else{
            const getData = await service.getService();
            console.log(getData);
             return res.send(getData).status(200);
        }
    } catch(err){
        return res.send(err).status(404);
    }
}

module.exports ={saveRegControl,regGetController};