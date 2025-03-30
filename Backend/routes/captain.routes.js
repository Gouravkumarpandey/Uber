const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controller');
const { check } = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    check('fullname.firstname').isLength({ min: 3 }).withMessage('Firstname must be at least 3 characters long'),
    check('fullname.lastname').isLength({ min: 3 }).withMessage('Lastname must be at least 3 characters long'),
    check('email').isEmail().withMessage('Email must be valid'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    check('vehicle.color').isLength({ min: 3 }).withMessage('Vehicle color must be at least 3 characters long'),
    check('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be car, motorcycle, or auto')
], captainController.registerCaptain);

router.post('/login', [
    check('email').isEmail().withMessage('Email must be valid'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], captainController.loginCaptain);

router.get('/profile', authMiddleware.authUser, captainController.getCaptainProfile);
router.get('/logout', authMiddleware.authUser, captainController.logoutCaptain);

module.exports = router;