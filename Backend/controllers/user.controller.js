const userModel = require('../models/user.model');
const userService = require ('../services/user.service');
const { validationResult } = require('express-validator');



module.exports.registerUser = async (req, resizeBy, next) =>{

 const errors = validationResult(req);
 if(!errors.isEmpty()){
    return res.status(400).json({error: error.array() });
 }

 console.log(req.body);

 const { fullname, email, password} = req.body;

 const hashedPassword = await userModel.hashedPassword(password);

 const user = await userService.createUser({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password:hashedPassword
 });

const token = user.generateAuthToken();

res.status(201).json({ token, user});

} 

module.exports.loginUser = async (req, res, next) =>{
      const errors = validationResult(req);
      if(!errors.isEmpty()){
            return res.status(400).json({error: error.array()});
      }
       const {email, password} = req.body;

       const user = await userServices.findUserByEmail(email);
       if(!user){
         return res.status(400).json ({error: 'Invalid email or password'});
       }

        const isValid = await user.isValidPassword(password);
        if(!isValid){
         return res.status(400).json({error: 'Invalid email or password'});
        }

        const token = user.generateAuthToken();

        res.status(200).json({token, user})
}

