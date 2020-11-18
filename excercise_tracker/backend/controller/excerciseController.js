const Excercise = require('../models/excercise.model')

exports.getExcercise = async (req, res) => {
    try {
        const excercise = await Excercise.find();
        if (!excercise) {
            return res.status(400).send({ 'Error': 'cant find the excercise' })
        }
        res.send({ excercise })
    } catch (e) {
        res.status(500).send(e)
    }
}

exports.addExcercise = async (req, res) => {
    const excercise = new Excercise(req.body)
    try {
        await excercise.save()
        res.status(201).send({ excercise })
    } catch (e) {
        res.status(500).send(e)
    }
}