const router = require('express').Router();
const Excercise = require('../models/excercise.model')
const excerciseController = require('../controller/excerciseController')

router.get('/', excerciseController.getExcercise)

router.post('/add', excerciseController.addExcercise)

router.get('/:id', excerciseController.getExcerId)

router.delete('/:id', excerciseController.deleteExcer)

router.patch('/:id', excerciseController.updateExcer)

module.exports = router