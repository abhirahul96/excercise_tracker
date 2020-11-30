const Excercise = require('../models/excercise.model')

exports.getExcercise = async (req, res) => {
    try {
        const excercise = await Excercise.find();
        if (!excercise) {
            return res.status(400).send({ 'Error': 'cant find the excercise' })
        }
        res.send(excercise)
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

exports.getExcerId = async (req, res) => {
    try {
        const excercise = await Excercise.findById(req.params.id)
        // console.log(excercise)
        if (!excercise) {
            return res.status(400).send({ 'error': "excercise not found" })
        }
        res.status(200).send(excercise)
    }
    catch (e) {
        res.status(500).send(e)
    }
}

exports.deleteExcer = async (req, res) => {
    try {
        const excercise = await Excercise.findByIdAndDelete(req.params.id)
        if (!excercise) {
            return res.status(400).send({ 'error': "excercise not found" })
        }
        res.status(200).send({ 'deletedExcercise': excercise })
    }
    catch (e) {
        res.status(500).send(e)
    }
}

exports.updateExcer = async (req, res) => {
    try {
        const excercise = await Excercise.findById(req.params.id)
        const updates = Object.keys(req.body)
        if (!excercise) {
            return res.status(400).send({ 'error': "excercise not found" })
        }
        updates.forEach((update) => excercise[update] = req.body[update])
        await excercise.save()
        res.status(200).send({ 'updatedExcercise': excercise })
    }
    catch (e) {
        res.status(500).send(e)
    }
}