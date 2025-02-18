const captainModel = require('../models/captain.model');

module.exports.createCaption = async ({
    firstname, lastname, email, password,
    color, plate, capacity, vehicleType, lat, lng
}) => {
    if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vehicleType || lat === undefined || lng === undefined) {
        throw new Error('All fields are required');
    }

    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType,
            location: {
                lat,
                lng
            }
        }
    });

    return captain;
};