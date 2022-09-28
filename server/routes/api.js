const express = require('express');
const loginController = require('../controllers/loginController');
const newUserController = require('../controllers/newUserController');
const router = express.Router();


router.get('/', 
    (req, res) => res.status(200).json({})
);

router.post('/newUser', 
    newUserController.createUser,
    (req, res) => res.status(200).json(res.locals.data)
);

module.exports = router;