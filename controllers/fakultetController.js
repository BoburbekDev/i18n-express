const Fakultet = require('../models/Fakultet')
module.exports.createFakultet = async(req, res) => {
    try {
        const fakultet = new Fakultet(req.body)
        await fakultet.save()
        res.status(201).json(fakultet)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports.getFakultets = async(req, res) => {
    try {
        const fakultets = await Fakultet.find()
        res.status(200).json(fakultets)
    } catch(error) {
        res.status(500).json(error)
    }
}

module.exports.updateFakultet = async(req, res) => {
    try {
        const updatedFakultet = await Fakultet.findByIdAndUpdate(req.body.id, {
            $set: req.body
        }, {
            new: true
        })
        res.status(200).json(updatedFakultet) 
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports.deleteFakultet = async (req, res) => {
    try {
        await Fakultet.findByIdAndDelete(req.body.id)
        res.status(200).json("Fakultet has been deleted ...")
    } catch (error) {
        res.status(500).json(error)
    }
}