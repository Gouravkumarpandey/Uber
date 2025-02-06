const userModule = require('../models/user.model.js');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const BlacklistToken = require('../models/blacklistToken.model.js');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res,status(401).json({ error: 'Unauthorizes'});
    }

    const isBlacklisted = await userModule.findOne({token:token});
    if(isBlacklisted){
      return res.status(401).json({ message: 'Unauthorized'});
    }
     
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModule.finallyByID(decoded._id);

        req.user = user;

        return next();


    } catch (err){
        return res.status(401).json({ message: 'Unauthorized'});
        
    } 
}