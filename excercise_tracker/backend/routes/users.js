const router = require('express').Router();
const User = require('../models/user.model')

const userController = require('../controller/userController')

router.get('users/', userController.getUser)

router.post('users/add', userController.addUser)

module.exports = router