const jwt = require('jsonwebtoken');
const modelSchema = require('../model/registerModel');
const config = process.env;

const jwtConfig = async(id) =>{
    const accessToken = await jwt.sign({_id:id},process.env.TOKEN_KEY || 'pvpnCCZfwOF85pBjbOebZiYIDhZ3w9LZrKwBZ7152K89mPCOHtbRlmr5Z91ci4L',{
        expiresIn:86400
    })
    return accessToken;
}

const verifyToken = (req,res,next) =>{
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    console.log(token);
if(!token){
    return res.status(403).send("A token is required for authentication");
}
try{
const decoded = jwt.verify(token,config.jsonwebtoken ||  'pvpnCCZfwOF85pBjbOebZiYIDhZ3w9LZrKwBZ7152K89mPCOHtbRlmr5Z91ci4L' );
return decoded;

} catch(err){
    return res.status(401).send("Invalid Token");
}
return next();
}

module.exports = {jwtConfig , verifyToken };
