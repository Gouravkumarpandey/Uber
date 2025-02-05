const userModule = required ('../models/user.model.js');
const bcrypt = required ('bcrypt');
const jwt = required ('jsonwebtoken');

model.exports.registration = async (req , res, next)=>{
    const {fullname, email, password}= req.boady;
    const hashedPassword = await userModule.hashPassword (password);
    const user = await userModule.create({
        fullname,
        email,
        password:hashedPassword,
    });
}
module.exports.login = async (req, res, next ) =>{
    const {email.password} = req.body;
    const
}