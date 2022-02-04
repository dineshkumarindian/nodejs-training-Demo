const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const control = require('../controller/userControl');
const validate = require('../controller/validation/auth')

router.post('/', validate.user, control.userSaveController);
router.get('/user', control.userGetController);
router.put('/user/:id', control.userUpdateController);
router.delete('/user/:id', control.userDeleteController);
router.get('/user/:id', control.userGetIdController);
module.exports = router; 