const router = require('express').Router();
const User = require('../models/user.model')

const userController = require('../controller/userController')

router.get('/', userController.getUser)

router.post('/add', userController.addUser)

module.exports = router