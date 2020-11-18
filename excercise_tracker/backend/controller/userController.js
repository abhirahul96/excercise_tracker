const User = require('../models/user.model')

exports.getUser = async (req, res) => {
    try {
        const user = await User.find();
        if (!user) {
            return res.status(400).send({ 'Error': 'cant find the user' })
        }
        res.send({ user })
    } catch (e) {
        res.status(500).send(e)
    }
}

exports.addUser = async (req, res) => {
    const user = new User({ username: req.body.username })
    try {
        await user.save()
        res.status(201).send({ user })
    } catch (e) {
        res.status(500).send(e)
    }
}