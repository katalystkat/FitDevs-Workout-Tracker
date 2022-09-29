const express = require('express');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const workoutController = require('../controllers/workoutController');
const router = express.Router();


router.get('/', 
    (req, res) => res.status(200).json({})
);

router.post('/newUser', 
    userController.createUser,
    (req, res) => res.status(200).json(res.locals.data)
);

router.post('/loginUser', 
    userController.checkUser, cookieController.setCookie
);
    // (req, res) => res.status(200).json(res.locals.userName)

router.post('/logWorkout', 
    // cookieController.checkCookie, 
    workoutController.logWorkout
);

router.get('/getWorkouts',
    workoutController.getWorkouts
);

module.exports = router;