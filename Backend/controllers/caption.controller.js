const captainModel = require('../models/caption.model');
const captainService = rwquire('../services/captain.service')
const { validateEmail } = require('../utils/validateEmail');

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, email, password, vehicle}= req.body;

    const isCapatainreadyExist = await captainModel.findOne({ email});

    if (isCapatainreadyExist) {
        return res.status(400).json({ message: 'Captain already exists'});
    }

    const hashedPassword = await captainService.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
});
        const token = captain.generateAuthToken( );

        res.status(201).json({ token, captain});

}