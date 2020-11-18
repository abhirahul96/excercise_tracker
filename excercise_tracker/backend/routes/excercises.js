const router = require('express').Router();
const Excercise = require('../models/excercise.model')
const excerciseController = require('../controller/excerciseController')

router.get('excercises/', excerciseController.getExcercise)

router.post('excercises/add', excerciseController.addExcercise)

module.exports = router